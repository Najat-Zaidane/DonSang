const Sequelize = require('sequelize')
const sequelize = require('../config/dbConfig')

const CentCren = sequelize.define("centCren",{
    centerId : {
        type : Sequelize.INTEGER, 
        allowNull : false, 
        foreignKey : true,
        references:{
            model:"Center",
            key:"id"
    }
} ,
    crenId : {
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