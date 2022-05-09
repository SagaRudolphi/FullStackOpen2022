const config = require ('./utils/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl)

app.use(express.static('build'))
app.use(express.json())
app.use(cors)

module.exports = app