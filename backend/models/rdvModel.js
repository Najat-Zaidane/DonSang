const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig'); // Assuming your config file path
const User = require('./userModel')
const Center = require('./centerModel')
const Creneau = require('./creneauModel')

const Rdv = sequelize.define("rdv", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  centerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Center,
      key: 'id',
    },
  },
  creneauId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Creneau,
      key: 'id',
    },
 },
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

// Associations
Rdv.belongsTo(Creneau, { foreignKey: 'creneauId' });


module.exports = Rdv;
