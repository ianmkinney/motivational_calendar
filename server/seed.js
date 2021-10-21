// //requiring depencies that will allow us to promise chain and find our JSON files
// const path = require('path')
// const fs = require ('fs')

// //importing our data base and models
// const {db} = require ('./db') //update 
// const { Motivation} = require ('./models/index') //update
// const {User} = require ('./models/index') //update

// //seed function 
// const seed = async () => {

//     //clearing out the database 
//     await db.sync({force : true})

//     //holding the name of our path to the Motivation and User json file
//     const user_seedPath = path.join(__dirname, 'user.json')//update file name!!!
//     const motivation_seedPath = path.join(__dirname, 'motivations.json')

//     //reading the file and converting it into a JS object
//     const userBuffer = await fs.readFile(user_seedPath)
//     const motivationBuffer = await fs.readFile(motivation_seedPath)

//     const {user_data} = JSON.parse(String(userBuffer))//update data name!! 
//     const {data} = JSON.parse(String(motivationBuffer))

//     //resolving the promises 
//     const userPromises = user_data.map( user => {
//         User.create(user)
//     })

//     const motivationPromises = data.map( motivation => { //update the name of the variable for motivation!!!!
//         Motivation.create(motivation)
//     })

//     await Promise.all(userPromises)
//     await Promise.all(motivationPromises)

//     console.log('User and Motivation data succesfully populated!')
// }

// module.exports = seed; 