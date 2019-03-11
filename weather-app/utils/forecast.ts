import { BasicForecast, LatitudeAndLongitude } from "../interfaces";
import request = require("request");

export function forecast(location: LatitudeAndLongitude, callback: (msg: string, data?: BasicForecast | undefined) => void) {
    const url = `https://api.darksky.net/forecast/4889494866792e31eaa15baa54da68e5/${location.latitude},${location.longitude}?units=si`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        }
        else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                temperature: response.body.currently.temperature,
                precipitation: response.body.currently.precipProbability * 100,
                location: location.location,
            })
        }
    })
}