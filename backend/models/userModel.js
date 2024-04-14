const Sequelize = require('sequelize')
const sequelize = require('../config/dbConfig');
const { isIn } = require('validator');

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

module.exports =  User;