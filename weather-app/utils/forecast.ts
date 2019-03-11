import { BasicForecast, LatitudeAndLongitude } from "../interfaces";
import request = require("request");

export function forecast({latitude, longitude, location}: LatitudeAndLongitude, callback: (msg: string, data?: BasicForecast | undefined) => void) {
    const url = `https://api.darksky.net/forecast/4889494866792e31eaa15baa54da68e5/${latitude},${longitude}?units=si`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        }
        else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const { currently } = body;
            const { temperature, precipProbability } = currently;
            callback(undefined, {
                temperature: temperature,
                precipitation: precipProbability * 100,
                location: location,
            })
        }
    })
}