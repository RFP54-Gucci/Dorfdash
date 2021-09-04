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
    const queryStr = `SELECT json_build_object('user_name', name,
                        'rider_events',
                        (SELECT json_agg(json_build_object('event_id', event_id, 'event_name', events.event_name, 'date', date, 'time', time, 'description', description, 'location', events.location,
                            'host_name',
                            (SELECT name from users WHERE events.host_email=users.email) ))
                         FROM events INNER JOIN riders ON (events.event_name=riders.event_name) WHERE riders.rider_email='${email}' ),
                        'driver_events',
                        (SELECT json_agg(json_build_object('event_id', event_id, 'event_name', events.event_name, 'date', date, 'time', time, 'description', description, 'location', events.location,
                            'host_name',
                            (SELECT name from users WHERE events.host_email=users.email) ))
                         FROM events INNER JOIN drivers ON (events.event_name=drivers.event_name) WHERE drivers.driver_email='${email}' ),
                        'host_events',
                        (SELECT json_agg(json_build_object('event_id', event_id, 'event_name', events.event_name, 'date', date, 'time', time, 'description', description, 'location', events.location,
                            'host_name',
                            (SELECT name from users WHERE events.host_email=users.email) ))
                         FROM events WHERE events.host_email='${email}' ) )
                      FROM users
                      WHERE users.email='${email}'`;

    return db.query(queryStr);
  },
  removeUserEvent: (email, eventName) => {
    const queryRemoveRider = `DELETE FROM riders WHERE rider_email = '${email}' AND event_name = '${eventName}'`;
    const queryRemoveDriverFromRider = `UPDATE riders SET driver_email = null WHERE driver_email = '${email}' AND event_name = '${eventName}'`;
    const queryRemoveDriver = `DELETE FROM drivers WHERE driver_email = '${email}' AND event_name = '${eventName}'`;
    const queryRemoveHost = `DELETE FROM events WHERE host_email = ${email} AND event_name = ${eventName}`
    return Promise.all([db.query(queryRemoveRider), db.query(queryRemoveDriverFromRider), db.query(queryRemoveDriver), db.query(queryRemoveHost)]);
  }
}
