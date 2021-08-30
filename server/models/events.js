const db = require('../../db/index.js');

module.exports = {
  getEvent: async (req, callback) => {
    const { eventname } = req.headers;
    console.log(eventname);

    const queryStr = `SELECT * FROM events WHERE event_name='${eventname}'`;

    try {
      const event = await db.query(queryStr);
      callback(null, event);
    } catch (err) {
      callback(err);
    }
  },
  postEvent: async (req, callback) => {
    const { event_name, host, date, time, description, location } = req.body;
    const queryStr = `INSERT INTO events (event_name, host, date, time, description, location) VALUES ('${event_name}', '${host}', '${date}', '${time}', '${description}', '${location}')`;

    console.log(queryStr);

    try {
      await db.query(queryStr);
      callback(null);
    } catch (err) {
      callback(err);
    }

  },
}
