const router = require('express').Router()
const axios = require('axios')

router.get('/weather', (req, res) => {
  res.render('weather.ejs', { weather: null, error: null })
})

router.post('/weather', (req, res) => {
  const zip = req.body.zip
  const apiKey = process.env.API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${zip}&APPID=${apiKey}`

  axios
    .get(url)
    .then((response) => {
      const weatherData = response.data
      const weather = {
        city: weatherData.name,
        temperature: weatherData.main.temp,
        description: weatherData.weather[0].description
      }

      res.render('weather.ejs', { weather, error: null })
    })
    .catch((err) => {
      console.error(err)
      res.render('weather.ejs', {
        weather: null,
        error: 'Unable to fetch weather data. Please try again.'
      })
    })
})

module.exports = router
