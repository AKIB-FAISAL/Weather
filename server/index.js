const express = require('express');
;const cors = require ('cors');
const fetch = require('node-fetch');
require('dotenv').config();


const app = express ();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/api/weather', async(req, res)=>{
    const {city} = req.query;
    console.log("API KEY:", process.env.API_KEY);

    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=7`
        );
        if (!response.ok){
           console.error("Weather API responded with status", response.status);
           return res.status(response.status).json({error: 'Failed to fetch weather data'});
        }


        const data = await response.json();
        res.json(data);
        
    } catch (e) {
      console.error("Weather API error:", e);
      res.status(500).json({error: 'Failed to fetch weather data'});  
    }
})

app.listen(PORT, ()=> {
    console.log('server running on port', PORT);
    
});
