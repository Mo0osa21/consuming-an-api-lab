require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const weatherRouter = require('./controllers/weather')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', weatherRouter)

app.get('/', (req, res) => {
  res.redirect('/weather')
})

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
