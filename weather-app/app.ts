import { BasicForecast } from './interfaces';
import { geocode } from './utils/geocode';
import { forecast } from './utils/forecast';

geocode('Claremont Cape Town', (error, data) => {
    console.log('Error for geocode:', error);
    forecast(data, (error, data) => {
        console.log('Error for forecast:',error);
        console.log(data);
    });
});