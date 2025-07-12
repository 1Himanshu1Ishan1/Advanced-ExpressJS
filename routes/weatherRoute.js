const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:city', async (req, res, next) => {
  try {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY;

    console.log('LOADED API KEY:', apiKey); // Debugging line

    if (!apiKey) throw new Error('Missing OpenWeatherMap API key');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    res.json({
      success: true,
      data: response.data
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
