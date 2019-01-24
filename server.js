
const express = require('express')
const Config = require('./config')
let bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
require('./app/routes')(app, {})
require('./db/database')

app.listen(Config.Port, () => {
    console.log('API\'s running on : http://localhost:' + Config.Port)
  })

