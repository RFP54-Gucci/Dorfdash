const models = require('../models');

module.exports = {
  post: (req, res) => {
    models.drivers.postDriver(req.body)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  },
  get: (req, res) => {
    models.drivers.getDriver(req)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  },
}