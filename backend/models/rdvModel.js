const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig'); 
const User = require('./userModel')
const Center = require('./centerModel')
const Creneau = require('./creneauModel')

const Rdv = sequelize.define("rdv", {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  status: { // Appointment status
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue : 'non validé',
    values: ['validé', 'non validé', 'annulé'], 
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
