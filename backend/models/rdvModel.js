const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig'); // Assuming your config file path
const User = require('./userModel')
const Center = require('./centerModel')
const Creneau = require('./creneauModel')

const Rdv = sequelize.define("rdv", {
  dateTime: {
    type: Sequelize.DATE, // Use DATE for both date and time
    allowNull: false,
  },
  status: { // Appointment status
    type: Sequelize.STRING,
    allowNull: false,
    values: ['validé', 'non validé', 'annulé'], // Restrict status values
  },
});

// Association rdv and creneau : one to many 
Creneau.hasMany(Rdv,{foreignKey : 'creneauId'})
Rdv.belongsTo(Creneau, { foreignKey: 'creneauId' });

//assoc rdv and center 
//one to many
Center.hasMany(Rdv, {foreignKey: 'centerId' })
//one to one 
Rdv.belongsTo(Center, { foreignKey: 'centerId' });




module.exports = Rdv;
