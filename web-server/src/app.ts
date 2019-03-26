const path = require('path');
import * as express from 'express';
import * as hbs from 'hbs';
import { forecast } from './utils/forecast';
import { geocode } from './utils/geocode';

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const views = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', views);
hbs.registerPartials(partialsPath)

// Set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req: express.Request, res: express.Response) => {
    res.render('index', {
        name: 'Joel',
        title: 'Home',
        footer: 'Created by Joel'
    });
});

app.get('/about', (req: express.Request, res: express.Response) => {
    res.render('about', {
        name: 'Joel',
        title: 'About Me',
        footer: 'Created by Joel'
    });
});

app.get('/help', (req: express.Request, res: express.Response) => {
    res.render('help', {
        title: 'Help',
        message: 'Welcome to the help page',
        name: 'Joel',
        footer: 'Created by Joel'
    });
});

app.get('/weather', (req: express.Request, res: express.Response) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, data) => {
        if(error) {
            return res.send({
                error,
            })
        }
        forecast(data, (error, data) => {
            if(error) {
                return res.send({
                    error,
                })
            }
            res.send({
                address: req.query.address,
                forecast: {...data},
            });
        })
    });
});

app.get('/products', (req: express.Request, res: express.Response) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: [],
    });
});

app.get('/help/*', (req: express.Request, res: express.Response) => {
    res.render('404page', {
        errorMessage: 'Page not found',
        footer: 'Created by Joel',
        title: '404',
    });
});

app.get('*', (req: express.Request, res: express.Response) => {
    res.render('404page', {
        errorMessage: 'Page not found',
        footer: 'Created by Joel',
        title: '404',
    });
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});