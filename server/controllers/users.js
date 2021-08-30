const models = require('../models');

module.exports = {

  get: (req, res) => {
    models.users.getAll();
    res.send('test');
  },

  post: (req, res) => {
    models.users.create();
    res.send('test');
  },

};
