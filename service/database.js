const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: 'us-cdbr-iron-east-01.cleardb.net'
  dialect: 'mysql',
  timezone:'+09:00'
});

module.exports = sequelize
