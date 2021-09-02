const pgp = require('pg-promise')();

const pgConfig = {
  host: process.env.REACT_APP_DB_HOST,
  port: process.env.REACT_APP_DB_PORT,
  database: process.env.REACT_APP_DB_NAME,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_SECRET
}

const db = pgp(pgConfig);

try {
  db.connect();
  console.log("Connected to Database");
} catch (err) {
  console.log("Could not connect to Database");
}

module.exports = db;
