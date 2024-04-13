//in this folder model, we're gonna define any ressource that we have
//in this file we're gonna define the schema wich gonna be the fields for this particular ressource ( center)
const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig');

const Center = sequelize.define("center", {
      nom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adresse: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

module.exports = Center;
  



  


