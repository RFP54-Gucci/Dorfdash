const db = require('../../db/index.js');

module.exports = {
  getAll: /* function to query database */ () => {
    db.find();
  },
  create: /* function to query database */ () => {
    db.insertOne();
  },
};
