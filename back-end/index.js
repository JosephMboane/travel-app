const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const PORT = 3000;
const corsOption = {

    origin: "*",
    methods: ['GET', 'POST']
}
const cors = require('cors');

// JSON parser middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOption))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


// API endpoint for city information
app.post('/country', async (req, res) => {
    const requestCity = req.body.city;
    let city = {}
    //This variable receives body introduced by the front-end puts in the parameters cities in the api
    const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${requestCity}&appid=41677c1cc1422d4750faf03753b0dbaa`;
    axios.get(apiUrlWeather)

        .then(async response => {
            console.log('Country Information:', response.data);
            const responseCoins = await axios.get(`https://restcountries.com/v2/alpha/${response.data.sys.country}`);
            console.log('moeda', responseCoins.data.currencies[0].code);
            const populationUrl = await axios.get(`https://api.worldbank.org/v2/country/${response.data.sys.country}/indicator/SP.POP.TOTL?format=json`);
            const gpdPer = await axios.get(`https://api.worldbank.org/v2/country/${response.data.sys.country}/indicator/NY.GDP.PCAP.CD?format=json`);
            // console.log('population total', populationUrl.data[1][0].value);
            // console.log('population total', gpdPer.data[1][0].value);
            
            //This object is the response that gives whenever something is introduced into the body
            city = {
                name: response.data.name,
                temp: response.data.main.temp,
                coin: responseCoins.data.currencies[0].code,
                population: populationUrl.data[1][0].value,
                gpd: gpdPer.data[1][0].value
            }
            console.log('city', city)
            res.json(city);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });



});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
