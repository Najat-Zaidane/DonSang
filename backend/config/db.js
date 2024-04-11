const mongoose = require ('mongoose')

//all the mongoose methods are asynchronised : they return a promise
const connectDB = async () => {
    try {
        //connect 
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = connectDB