const http = require('http')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const { errors } = require('celebrate')

const app = express()

const config = require('./config')
const api = require('./api')

app.use(cors())
app.use(helmet())
app.use(bodyParser.json({ limit: '140mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '140mb' }))
app.use(errors())
// Set user api
app.use('/api', api)

const server = http.createServer(app)


mongoose.connect(config.mongoUrl, (err, res) => {
  if (err) {
    return console.log('error in conection mongo', err)
  }
  server.listen(config.port, () => {
    console.log(`server running on port ${config.port}`)
  })

})


module.exports = server
