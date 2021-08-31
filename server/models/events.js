const db = require('../../db/index.js');

module.exports = {
  getEvent: async (req, callback) => {
    const { eventName } = req.params;
    const queryStr = `SELECT * FROM events WHERE event_name='${eventName}'`;

    try {
      const event = await db.query(queryStr);
      callback(null, event);
    } catch (err) {
      callback(err);
    }
  },
  getAllEvents: async (req, callback) => {
    const queryStr = `SELECT * FROM events`;

    try {
      const events = await db.query(queryStr);
      callback(null, events);
    } catch (err) {
      callback(err);
    }
  },
  postEvent: async (req, callback) => {
    const { event_name, host, date, time, description, location } = req.body;
    const queryStr = `INSERT INTO events (event_name, host, date, time, description, location) VALUES ('${event_name}', '${host}', '${date}', '${time}', '${description}', '${location}')`;

    try {
      await db.query(queryStr);
      callback(null);
    } catch (err) {
      callback(err);
    }
  },
}
