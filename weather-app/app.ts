import * as request from 'request';
import { BasicForecast, LatitudeAndLongitude } from './interfaces';

const url = 'https://api.darksky.net/forecast/4889494866792e31eaa15baa54da68e5/-33.918861,18.423300?units=si&lang=fr';
let data: BasicForecast;

request({ url, json: true }, (error, response) => {
    data = {
        temperature: response.body.currently.temperature,
        precipitation: response.body.currently.precipProbability,
        coordinates: {
            latitude: '-33.918861',
            longitude: '18.423300',
        },
    }
    console.log(response.body.daily.summary);
    console.log(`It is currently ${data.temperature} degrees out at lat ${data.coordinates.latitude} and long ${data.coordinates.longitude}. There is a ${data.precipitation}% chance of rain.`);
})

const locationURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Claremont%20Cape%20Town.json?access_token=pk.eyJ1IjoicmVkZGV2aWwyMiIsImEiOiJjanQydXpscjYxaXdoNDRwaGVlODRyZ2V3In0.8DhjLs_N4GsZxB0i-tDPTg';
let coordinates: LatitudeAndLongitude;

request({ url: locationURL, json: true }, (error, response) => {
    coordinates = {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
    };

    const NSdirection = parseFloat(coordinates.latitude) > 0 ? 'N' : 'S';
    const EWdirection = parseFloat(coordinates.longitude) > 0 ? 'E' : 'W';

    console.log(`The lat and long for Claremont, Cape Town is ${coordinates.latitude} ${NSdirection}, ${coordinates.longitude} ${EWdirection}`);
});