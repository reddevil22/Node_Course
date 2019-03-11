import * as https from 'https';

const url = 'https://api.darksky.net/forecast/4889494866792e31eaa15baa54da68e5/0,0?units=si';
const request = https.request(url, (response) => {
    let data: string = '';

    response.on('data', (chunk) => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log('TCL: body', body);
    })
});

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();