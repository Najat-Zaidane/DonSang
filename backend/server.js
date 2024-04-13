//this file is the entry point to our server

const express =  require('express')
const cors = require('cors')
//const colors =  require ( 'colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.port  || 5000

// const dbConfig = require('./config/dbConfig'); 
// const  Sequelize  = require('sequelize');

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     pool: dbConfig.pool
//   });

//   //testing the  database connection
//   sequelize.authenticate()
//   .then(() => console.log('Database connected...'))
//   .catch(err => console.error('Error:', err));

//   (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }

const app = express()

// //cors 
// var corsOptions = {
//     origin : 'http://localhost:5000'
// }


//adding  middleware for handling data parsing in the tester postman
//app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


//if we hit the /api/centres it's gonna look into the centreRoutes file
app.use('/api/centers',require('./routes/centerRoutes'))

app.use(errorHandler)

//server with the port number 
app.listen(port, () => console.log(`Server started on port ${port}`) )


