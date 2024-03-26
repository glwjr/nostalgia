require('dotenv').config();
const Sequelize = require('sequelize');

const config = {
  logging: false
};

if (process.env.LOGGING === 'true') {
  delete config.logging
}

if (process.env.DATABASE_URL) {
  config.dialectOptions = {};
}

const db = new Sequelize(process.env.DATABASE_URL, config);

module.exports = db;
