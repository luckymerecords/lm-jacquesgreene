// TODO::: Use site meta as fallback or when overwritten

// const h = require('./helpers');
const axios = require('axios');

const siteSlug = 'jacquesgreene';
const apiKey = 'Qye38eD6MD2BU844Ryw32fi8';

exports.resolveSoundcloud = (req, res) => {
	const host = (req.query.production === 'true') ? '205.186.136.28' : 'localhost';
	const url = req.params.url || req.query.url;
	axios.get(`//${host}:3001/api/resources/resolveSoundcloud/${url}`, {
		params: {
			key: apiKey,
		},
	}).then(response => res.json(response));
};

exports.SongkickEmbed = (req, res) => {
	return res.render('songkick')
};

exports.Index = (req, res) => {
	function getApiData() {
		const host = (req.query.production === 'true') ? '205.186.136.28' : 'localhost';
		return axios.get(`http://${host}:3001/api/sites/${siteSlug}`);
	}

	function getBandsInTown() {
		return axios.get('http://api.bandsintown.com/artists/JacquesGreene/events.json?api_version=2.0&app_id=luckyme');
	}

	axios.all([getApiData(), getBandsInTown()]).then(axios.spread((siteResponse, BITResponse) => {
		const site = siteResponse.data.doc;
		if (!site) res.json({ error: `No site with the slug '${siteSlug}' was found` });
		if (site.pages.length < 1) res.json({ error: 'There are no pages associated with the site' });

		// let homepage = (req.query.homepage) ? site.pages.find((s) => s.slug === req.query.homepage) : site.pages.find((s) => s.slug === site.homepage);
		let homepage = site.pages.find((s) => s.slug === 'afterglow');
		if (!homepage) homepage = site.pages[0];

		const template = homepage.template || 'afterglow';
		let content = (homepage.content);
		content.live.livedates = BITResponse.data;
		content = parseContent(homepage.content);

		if (req.query.content === 'true') {
			return res.json(content);
		}

		return res.render(template,
			{
				meta: site.content.meta,
				content,
			});
	})).catch((error) => {
		console.log(error);
		res.json(error);
	});

	// axios.get(`http://localhost:3001/api/sites/${siteSlug}`).then((response) => {
	// 	const site = response.data.doc;
	// 	if (!site) res.json({ error: `No site with the slug '${siteSlug}' was found` });
	// 	if (site.pages.length < 1) res.json({ error: 'There are no pages associated with the site' });

	// 	// let homepage = (req.query.homepage) ? site.pages.find((s) => s.slug === req.query.homepage) : site.pages.find((s) => s.slug === site.homepage);
	// 	let homepage = site.pages.find((s) => s.slug === 'afterglow');
	// 	if (!homepage) homepage = site.pages[0];

	// 	const template = homepage.template || 'afterglow';
	// 	// const content = (homepage.content);
	// 	const content = parseContent(homepage.content);

	// 	if (req.query.content === 'true') {
	// 		return res.json(content);
	// 	}

	// 	res.render(template,
	// 		{
	// 			meta: site.content.meta,
	// 			content,
	// 		});
	// }).catch((error) => {
	// 	console.log(error);
	// 	res.json(error);
	// });
};

function parseContent(input) {
	const content = input;

	const livedates = [];
	const now = new Date();

	const monthnames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	function padLeft(str) {
		if (str.toString().length < 2) return `0${str}`;
		return str;
	}

	// -- For BIT supplied livedates

	for (const livedate of content.live.livedates) {
		const date = new Date(Date.parse(livedate.datetime));
		if (date < now) continue;
		livedate.date = `${monthnames[date.getMonth()]} ${padLeft(date.getDate())}`;
		if (livedate.venue.country === 'United States' || livedate.venue.country === 'Canada') {
			livedate.location = `${livedate.venue.city}, ${livedate.venue.region}`;
		} else {
			livedate.location = `${livedate.venue.city}, ${livedate.venue.country}`;
		}
		livedates.push(livedate);
	}

	// -- For manually supplied livedates
	//
	// for (const livedate of content.live.livedates) {
	// 	const date = new Date(Date.parse(livedate.date));
	// 	if (date < now) continue;
	// 	livedate.date = `${monthnames[date.getMonth()]} ${padLeft(date.getDate())}`;
	// 	livedates.push(livedate);
	// }

	// replace the original with the updated content
	content.live.livedates = livedates;

	content.purchase.copy = content.purchase.copy.replace(/\n/g, '<br />');

	return content;
}
