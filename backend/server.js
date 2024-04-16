//this file is the entry point to our server

const express =  require('express')
const cors = require('cors')
//const colors =  require ( 'colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.port  || 5000

const app = express()

 //cors 
var corsOptions = {
     origin : 'http://localhost:5000'
 }


//adding  middleware for handling data parsing in the tester postman
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


//if we hit the /api/centers it's gonna look into the centerRoutes file
//add here all the ressources routes
app.use('/api/centers',require('./routes/centerRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/rdvs',require('./routes/rdvRoutes'))
app.use('/api/creneaus',require('./routes/creneauRoutes'))

app.use(errorHandler)

//server with the port number 
app.listen(port, () => console.log(`Server started on port ${port}`) )


