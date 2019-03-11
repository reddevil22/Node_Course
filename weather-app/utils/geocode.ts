import { LatitudeAndLongitude } from "../interfaces";
import request = require("request");

export function geocode(address: string, callback: (msg: string, data?: LatitudeAndLongitude | undefined) => void) {
    const url: string = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicmVkZGV2aWwyMiIsImEiOiJjanQydXpscjYxaXdoNDRwaGVlODRyZ2V3In0.8DhjLs_N4GsZxB0i-tDPTg`;
    
    request({ url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service', undefined);
        }
        else if(response.body.features < 1) {
            callback(`Unable to find ${address}. Try another search`, undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
            });
        }
    
    })
}