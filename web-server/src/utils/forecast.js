"use strict";
exports.__esModule = true;
var request = require("request");
function forecast(_a, callback) {
    var latitude = _a.latitude, longitude = _a.longitude, location = _a.location;
    var url = "https://api.darksky.net/forecast/4889494866792e31eaa15baa54da68e5/" + latitude + "," + longitude + "?units=si";
    request({ url: url, json: true }, function (error, _a) {
        var body = _a.body;
        if (error) {
            callback('Unable to connect to weather service', undefined);
        }
        else if (body.error) {
            callback('Unable to find location', undefined);
        }
        else {
            var currently = body.currently;
            var temperature = currently.temperature, precipProbability = currently.precipProbability;
            callback(undefined, {
                temperature: temperature,
                precipitation: precipProbability * 100,
                location: location
            });
        }
    });
}
exports.forecast = forecast;
