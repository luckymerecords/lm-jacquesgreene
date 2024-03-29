const fs = require('fs');
const path = require('path');
const json5 = require('json5');
const rev = require('git-rev-sync');
const axios = require('axios');
const redis = require('redis');
const Q = require('q');

const client = redis.createClient();
client.on('error', (err) => {
	console.log(`Error: ${err}`);
});

exports.json = json5;

exports.getDirContents = function getDirContents(directory) {
	const returnFiles = new Promise((resolve, reject) => {
		const fullpath = path.join(__dirname, directory);
		console.log(fullpath);
		fs.readdir(fullpath, (err, files) => {
			if (err) { reject(err); }
			resolve(files);
		});
	});
	return returnFiles;
};

exports.getRevision = function getRevision() {
	// FIX!!
	// Don’t use synchronous functions
	// Synchronous functions and methods tie up the executing process until they return. A single call
	// to a synchronous function might return in a few microseconds or milliseconds, however in
	// high-traffic websites, these calls add up and reduce the performance of the app. Avoid their
	// use in production.
	//
	// Although Node and many modules provide synchronous and asynchronous versions of their functions,
	// always use the asynchronous version in production. The only time when a synchronous function can
	// be justified is upon initial startup.
	//
	const revision = {};
	revision.short = rev.short();
	revision.long = rev.long();
	revision.branch = rev.branch();
	return revision;
};


exports.getSite = function getApiData(req, siteSlug = 'jacquesgreene') {
	const deferred = Q.defer();
	client.get('sitedata', (err, cached) => {
		if (cached && req.query.cache !== 'false') {
			deferred.resolve(JSON.parse(cached));
		} else {
			const host = (req.query.production === 'true') ? '205.186.136.28' : 'localhost';
			axios.get(`http://${host}:3001/api/sites/${siteSlug}`).then((response) => {
				const site = response.data.doc;
				client.setex('sitedata', 60, JSON.stringify(site));
				deferred.resolve(site);
			});
		}
	});
	return deferred.promise;
};

exports.getBandsInTown = function getBandsInTown() {
	const deferred = Q.defer();
	client.get('bandsintown', (err, cached) => {
		if (cached) {
			deferred.resolve(JSON.parse(cached));
		} else {
			axios.get('http://api.bandsintown.com/artists/JacquesGreene/events.json?api_version=2.0&app_id=luckyme').then((response) => {
				const dates = response.data;
				client.setex('bandsintown', 60, JSON.stringify(dates));
				deferred.resolve(dates);
			});
		}
	});
	return deferred.promise;
};
