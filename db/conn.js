const Sequelize = require("sequelize");
const dataBaseUrl = process.env.DATABASE_URL || 'postgres://localhost/assessment';
const conn = new Sequelize(dataBaseUrl);

module.exports = conn;

