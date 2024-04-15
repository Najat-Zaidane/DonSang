const Sequelize = require('sequelize')
const sequelize = require('../config/dbConfig');
const { isIn } = require('validator');
const Rdv = require('./rdvModel');

const User = sequelize.define("user" , {
    nom : {
        type : Sequelize.STRING,
        allowNull : false
    },
    prenom : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique: true,
        //email validation
        validate:{
            isEmail:true
        }
    },
    tele: {
        type : Sequelize.STRING, 
        allowNull : false
    },
    pwd : {
        type: Sequelize.STRING, //cryptage du pwd
        allowNull : false
    },
    role : {
        type: Sequelize.STRING,
        allowNull : false,
        defaultValue : 'Donator',
        validate : {
            isIn : ['Donator', 'Admin']
        },
    },
    isActive : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : true
    },

})

//Define the assocations : a one-to-many relation
// a user can have 
User.hasMany(Rdv, {foreignKey : 'userId'}) // the userId is a field in Rdv table and it will assocaite rdvs with their users

module.exports =  User;