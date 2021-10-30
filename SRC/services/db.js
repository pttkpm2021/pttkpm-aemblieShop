const Sequelize = require('sequelize');

const database = process.env.DB;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const db = new Sequelize( database,username,password, {
  host: host,
  dialect:'postgres'
});
module.exports = db;