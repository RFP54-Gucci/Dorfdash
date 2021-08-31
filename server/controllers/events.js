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
  getUserEvents: (req, res) => {
    models.events.userEventsList(req.params.email)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  },
  getAll: (req, res) => {
    models.events.getAllEvents(req, (err, events) => {
      if (err) {
        res.send(err);
      } else {
        res.send(events);
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