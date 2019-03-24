"use strict";
exports.__esModule = true;
var request = require("request");
function geocode(address, callback) {
    var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoicmVkZGV2aWwyMiIsImEiOiJjanQydXpscjYxaXdoNDRwaGVlODRyZ2V3In0.8DhjLs_N4GsZxB0i-tDPTg";
    request({ url: url, json: true }, function (error, _a) {
        var body = _a.body;
        if (error) {
            callback('Unable to connect to weather service', undefined);
        }
        else if (body.features < 1) {
            callback("Unable to find " + address + ". Try another search", undefined);
        }
        else {
            // const {features} = response.body;
            var _b = body.features[0], center = _b.center, place_name = _b.place_name;
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name
            });
        }
    });
}
exports.geocode = geocode;
