const db = require('../../db/index.js');

module.exports = {
  getEvent: async (req, callback) => {
    const { eventName } = req.params;
    const queryStr = `SELECT event_name, host_email, date, time, description, location, name as host_name
                      FROM events INNER JOIN users ON (events.host_email=users.email)
                      WHERE event_name='${eventName}'`;

    try {
      const event = await db.query(queryStr);
      callback(null, event);
    } catch (err) {
      callback(err);
    }
  },
  getAllEvents: async (req, callback) => {
    const queryStr = `SELECT * FROM events INNER JOIN users ON (events.host_email=users.email)`;

    try {
      const events = await db.query(queryStr);
      callback(null, events);
    } catch (err) {
      callback(err);
    }
  },
  postEvent: async (req, callback) => {
    const { event_name, host_email, date, time, description, location } = req.body;
    const queryStr = `INSERT INTO events (event_name, host_email, date, time, description, location) VALUES ('${event_name}', '${host_email}', '${date}', '${time}', '${description}', '${location}')`;

    try {
      await db.query(queryStr);
      callback(null);
    } catch (err) {
      callback(err);
    }
  },

  userEventsList: (email) => {
    const query = `SELECT * FROM riders INNER JOIN events USING (event_name) WHERE riders.rider_email = '${email}' OR riders.driver_email = '${email}'`;
    return db.query(query);
  }
}
