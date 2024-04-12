//the db config
const dbConfig = require('../config/database.js')

const {sequelize, DataTypes} = require('sequelize')

//creating the sequelize instance
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases: false,
    }
)