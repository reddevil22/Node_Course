"use strict";
exports.__esModule = true;
var path = require('path');
var express = require("express");
var hbs = require("hbs");
var app = express();
// Define paths for Express config
var publicDirectoryPath = path.join(__dirname, '../public');
var views = path.join(__dirname, '../templates/views');
var partialsPath = path.join(__dirname, '../templates/partials');
// Set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', views);
hbs.registerPartials(partialsPath);
// Set up static directory to serve
app.use(express.static(publicDirectoryPath));
app.get('', function (req, res) {
    res.render('index', {
        name: 'Joel',
        title: 'Baus'
    });
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/help', function (req, res) {
    res.render('help', {
        title: 'Help',
        message: 'Welcome to the help page'
    });
});
app.get('/weather', function (req, res) {
    res.send('Weather');
});
app.listen(3000, function () {
    console.log('Server is up and running');
});
