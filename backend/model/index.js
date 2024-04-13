//the db config
const dbConfig = require('../config/dbConfig.js')

const {sequelize, DataTypes} = require('sequelize')

//creating the sequelize instance
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases: false, //to overwrite the errors

        pool : {
            max : dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire : dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
        }
    }
)

// testing the db
sequelize.authenticate()
    .then(() => {
        console.log("Database connected")
    
    })
    .catch(err => {
        console.log('Error : '+ err)
    }) 

//intialize the db 

const db={} //empty object where we gonna push  all our models

db.Sequelize = Sequelize //the constructor
db.sequelize = sequelize //the instance

db.centers = require('./centerModel.js')(sequelize, DataTypes)


//db.users= require('./userModel')(sequelize,DataTypes)
//db.creneaux = require('./creneauModel' )(sequelize,DataTypes)
//db.rdv = require('./rdvModel')(sequelize,DataTypes)
//db.cren_cent = require('./crenCentModel')(sequelize,DataTypes)


db.sequelize.sync({force : false})  //to not lose te data
        .then(()=>{
            console.log('yes re-sync done!')
        })

module.exports = db

//our database will have 5 tables ( centers, users....)

