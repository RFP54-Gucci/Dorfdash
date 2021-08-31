const pgp = require('pg-promise')();
const config = require('./config.js');

const pgConfig = {
  host: config.host,
  port: config.port,
  database: config.database,
  user: config.user,
  password: config.password
}

const db = pgp(pgConfig);

try {
  db.connect();
  console.log("Connected to Database");
} catch (err) {
  console.log("Could not connect to Database");
}

module.exports = db;
