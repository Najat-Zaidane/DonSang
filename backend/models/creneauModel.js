const Sequelize = require('sequelize')
const sequelize = require('../config/dbConfig');
const Center = require('./centerModel');

const Creneau = sequelize.define("creneau",{
    startTime : {
        type : Sequelize.STRING,
        allowNull : false, 
    },
    endTime : {
        type : Sequelize.STRING,
        allowNull : false, 
    },
})

//define the association between Creneau and Center via the method : belongsToMany ( bi-derctionnal)
//centerCrenau is the association table
Creneau.belongsToMany(Center, { through: 'centcrens', foreignKey: 'creneauId' })

module.exports = Creneau;