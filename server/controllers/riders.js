const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.riders.getAllRidersForDriver(req, (err, event) => {
      if (err) {
        res.send(err);
      } else {
        res.send(event);
      }
    })
  },
  getDriverInfo: (req, res) => {
    models.riders.getDriverInfo(req)
      .then((data) => res.send(data[0]))
      .catch(err => res.send(err));
  },
  getAll: (req, res) => {
    models.riders.getAllRidersForEvent(req, (err, events) => {
      if (err) {
        res.send(err);
      } else {
        res.send(events);
      }
    })
  },
  post: (req, res) => {
    models.riders.postRider(req, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send();
      }
    })
  },
  put: (req, res) => {
    models.riders.putRider(req, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send();
      }
    })
  },
}
