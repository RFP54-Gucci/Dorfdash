const models = require('../models');

module.exports = {
  post: (req, res) => {
    models.drivers.postDriver(req.body)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  },
}