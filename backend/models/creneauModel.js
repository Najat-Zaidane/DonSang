const Sequelize = require('sequelize')
const sequelize = require('../config/dbConfig');
const Center = require('./centerModel');

const Creneau = sequelize.define("creneau",{
    startTime : {
        type : Sequelize.TIME,
        allowNull : false, 
    },
    endTime : {
        type : Sequelize.TIME,
        allowNull : false, 
    },
})

//define the association between Creneau and Center via the method : belongsToMany ( bi-derctionnal)
//centerCrenau is the association table
Creneau.belongsToMany(Center, { through: 'CenterCreneau', foreignKey: 'creneauId' })

module.exports = Creneau;