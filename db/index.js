const pgp = require('pg-promise')();
require('dotenv');

const pgConfig = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDB,
  user: process.env.PGUSER,
  password: process.env.PGPASS
}

const db = pgp(pgConfig);

try {
  db.connect();
} catch (err) {
  console.log("Could not connect to Database");
}

module.exports = db;
