"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var path = require('path');
var express = require("express");
var hbs = require("hbs");
var forecast_1 = require("./utils/forecast");
var geocode_1 = require("./utils/geocode");
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
        title: 'Home',
        footer: 'Created by Joel'
    });
});
app.get('/about', function (req, res) {
    res.render('about', {
        name: 'Joel',
        title: 'About Me',
        footer: 'Created by Joel'
    });
});
app.get('/help', function (req, res) {
    res.render('help', {
        title: 'Help',
        message: 'Welcome to the help page',
        name: 'Joel',
        footer: 'Created by Joel'
    });
});
app.get('/weather', function (req, res) {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        });
    }
    geocode_1.geocode(req.query.address, function (error, data) {
        if (error) {
            return res.send({
                error: error
            });
        }
        forecast_1.forecast(data, function (error, data) {
            if (error) {
                return res.send({
                    error: error
                });
            }
            res.send({
                address: req.query.address,
                forecast: __assign({}, data)
            });
        });
    });
});
app.get('/products', function (req, res) {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        });
    }
    res.send({
        products: []
    });
});
app.get('/help/*', function (req, res) {
    res.render('404page', {
        errorMessage: 'Page not found',
        footer: 'Created by Joel',
        title: '404'
    });
});
app.get('*', function (req, res) {
    res.render('404page', {
        errorMessage: 'Page not found',
        footer: 'Created by Joel',
        title: '404'
    });
});
app.listen(3000, function () {
    console.log('Server is up and running');
});
