//this file is the entry point to our server

const express =  require('express')
const dotenv = require('dotenv').config()
const port = process.env.port  || 5000

const app = express()

//if we hit the /api/centres it's gonna look into the centreRoutes file
app.use('/api/centres',require('./routes/centreRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`) )
