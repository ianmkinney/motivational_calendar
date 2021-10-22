// imports
const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

const seed = require('./seed')
const { db } = require('./db')
const { Motivation, User } = require('./models/index')

// use seed to populate database
seed()

// Use js libraries for server
app.use(express.json())
app.use(cors())

/** Route for returning one random motivation */
app.get('/getMotivation', async (req,res) => {
    let pk = Math.floor(Math.random() * 33) + 1
    let motivation = await Motivation.findByPk(pk)
    res.json(motivation)
})

/** Route for return motivation by passed pk param */
app.get('/getMotivation/:id', async (req,res) => {
    let pk = req.params.id
    let motivation = await Motivation.findByPk(pk)
    return res.json(motivation)
})

/** Route for returning all motivations */
app.get('/allMotivations', async (req,res) => {
    let allMotivations = await Motivation.findAll()
    res.json(allMotivations)
})

/** Route for returning one user from passed pk param */
app.get('/user/:id', async (req,res) => {
    let pk = req.params.id
    let user = await User.findByPk(pk)
    return res.json(user)
})

/** Route to return all users in the database */
app.get('/allUsers', async (req,res) => {
    let users = await User.findAll()
    return res.json(users)
})

// set up app to listen on set port
app.listen( PORT, () => {
    console.log(`Your server is now listening to port ${PORT}`)
})