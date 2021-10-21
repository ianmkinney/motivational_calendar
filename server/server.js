// imports
const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

const seed = require('./seed')
const { db } = require('./db')
const { Music, User } = require('./models/index')

// use seed to populate database
seed()

// Use js libraries for server
app.use(express.json())
app.use(cors())

// set up app to listen on set port
app.listen( PORT, () => {
    console.log(`Your server is now listening to port ${PORT}`)
})