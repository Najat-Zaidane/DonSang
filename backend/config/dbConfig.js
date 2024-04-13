
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  pool: {
          max: 5, // nombre maximum de connexions dans le pool
          min: 0, // nombre minimum de connexions dans le pool
          acquire: 30000, // temps maximum, en millisecondes, que le pool essaie d'obtenir une connexion avant de générer une erreur
          idle: 10000 // temps maximum, en millisecondes, qu'une connexion peut être inactive dans le pool avant d'être libérée
        }
});

//testing the db connexion
sequelize.sync({ force: false })
.then(() => {
    console.log('Database synchronized');
})
.catch((error) => {
    console.error('Failed to synchronize database:', error);
});


module.exports = sequelize;
  