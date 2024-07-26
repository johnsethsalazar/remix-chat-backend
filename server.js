console.log('Hit server working')

const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')

// Create app object and call express function
const app = express()

// Create http server
const server = http.createServer(app)

// Check if API is running. To do this, display a basic http page in the browser
app.get('/', (req, res) => {
  res.send(`<html><body><h1>Shopify API</h1></body></html>`)
})

// Call server object and listen to port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000')
})