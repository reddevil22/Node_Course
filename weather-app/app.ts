import * as request from 'request';

const url = 'https://api.darksky.net/forecast/4889494866792e31eaa15baa54da68e5/37.8267,-122.4233';

request({url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log('data.currently', data.currently);
})