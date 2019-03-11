import { BasicForecast } from './interfaces';
import { geocode } from './utils/geocode';
import { forecast } from './utils/forecast';
import { isNullOrUndefined } from 'util';

geocode(process.argv[2], (error, data) => {
    if(process.argv[2] === undefined) {
        console.log('No location entered');
    }
    else {
        if(!isNullOrUndefined(error)) {
            console.log('Error for geocode:', error);
        }
        forecast(data, (error, data) => {
            if(!isNullOrUndefined(error)) {
                console.log('Error for forecast:', error);
            }
            console.log(data);
        });
    }
});