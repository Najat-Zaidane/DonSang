const Sequelize = require('sequelize')
const sequelize = require('../config/dbConfig')
const User = require('./userModel')
const Center = require('./centerModel')
const Creneau = require('./creneauModel')

const Rdv = sequelize.define("rdv", {
        userId : {
            type : Sequelize.INTEGER,
            allowNull : false,
            references : {
                model : User,
                key : 'id',
            }
        },
        centerId : {
            type : Sequelize.INTEGER,
            allowNull: false ,
            references : {
                model : Center,
                key : 'id'
            }
        },
        creneauId : {
            type : Sequelize.INTEGER,
            allowNull: false ,
            references : {
                model : Creneau,
                key : 'id'
            }
        },
        dateTime : {
            type: Sequelize.DATE, //DATE is a sequelize type that represents both date and time
            allowNull: false ,
        }, 
        status : { // appointement status is : validé , non validé , annulé 
            type : Sequelize.STRING,
            allowNull: false ,

        },
})

//define the relations 

//rdv and user : one-to-one relation
//each rdv is associated with one user
//Rdv.belongsTo(User, { foreignKey : 'userId'}) 

//rdv and creneau : one-to-one relation
//each rdv is associated with one creaneau
Rdv.belongsTo(Creneau, {foreignKey : 'creneauId'})



module.exports = Rdv ;