const Sequelize = require('sequelize')
const sequelize = require('../config/dbConfig')

const CentCren = sequelize.define("CenterCreneau",{
    centerId : {
        type : Sequelize.INTEGER, 
        allowNull : false, 
        foreignKey : true,
        references:{
            model:"Center",
            key:"id"
    }
} ,
    creneauId : {
        type : Sequelize.INTEGER,
        allowNull: false,
        foreignKey : true,
        references:{
            model:"Creneau",
            key:"id"
        }
    },
})

module.exports = CentCren