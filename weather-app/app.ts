interface BasicForecast {
    temperature: number;
    precipitation: number;
    latitude?: string;
    longitude?: string;
}

import * as request from 'request';

const url = 'https://api.darksky.net/forecast/4889494866792e31eaa15baa54da68e5/-33.918861,18.423300?units=si&lang=fr';
let data: BasicForecast;

request({url, json: true}, (error, response) => {
    data = {
        temperature: response.body.currently.temperature,
        precipitation: response.body.currently.precipProbability,
        latitude: '-33.918861',
        longitude: '18.423300',
    };
    console.log(response.body.daily.summary);
    console.log(`It is currently ${data.temperature} degrees out at lat ${data.latitude} and long ${data.longitude}. There is a ${data.precipitation}% chance of rain.`);
})
