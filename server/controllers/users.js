const models = require('../models');

module.exports = {

  get: /* models.users.getAll */ (req, res) => {
    models.users.getAll((err, records) => {
      if (err) {
        res.send(err);
      } else {
        res.send(records);
      }
    })

  },

  post: /* models.users.create */ (req, res) => {
    models.users.create(req, (err, userInfo) => {
      if (err) {
        res.send(err);
      } else {
        res.send(userInfo);
      }
    })
  }

};
