const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.events.getEvent(req, (err, event) => {
      if (err) {
        res.send(err);
      } else {
        res.send(event);
      }
    })
  },
  post: (req, res) => {
    models.events.postEvent(req, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send();
      }
    })
  },
}