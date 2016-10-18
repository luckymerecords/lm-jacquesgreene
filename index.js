const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

const HomeController = require('./controllers/HomeController');
const UtilitiesController = require('./controllers/UtilitiesController');

app.post('/mcsubscribe', UtilitiesController.MCSubscribe);
app.get('/:param?', HomeController.Index);

exports.app = app;
