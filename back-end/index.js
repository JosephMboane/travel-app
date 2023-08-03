const express = require('express');
const app = express();
const PORT = 3000;

// JSON parser middleware
app.use(express.json());

// API endpoint for country information
app.get('/country', (req, res) => {
    // const countryName = req.body.countryName;

    // // Replace this with your logic to get country information
    // // For demonstration purposes, we'll use a dummy response
    // const countryInfo = {
    //     name: countryName,
    //     population: 'Dummy population data',
    //     capital: 'Dummy capital data',
    //     // Add more information as needed
    // };

    // res.json(countryInfo);
    // console.log(countryInfo);

    const axios = require('axios');


    //temperatura api
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.332807&lon=33.105769&appid=41677c1cc1422d4750faf03753b0dbaa';

    //Cambios api
    // const apiUrl = 'http://api.exchangeratesapi.io/v1/symbols?access_key=f6d4203e52a9865d77adb1f5bbb4e29c';
    // const countryName = 'Germany'; // Replace with the desired country name

    //cidades api
    // const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.332807&lon=33.105769&appid=41677c1cc1422d4750faf03753b0dbaa';

    axios.get(apiUrl)
        .then(response => {
            console.log('Country Information:', response.data);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });

});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
