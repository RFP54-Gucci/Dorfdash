const db = require('../../db/index.js');

module.exports = {
  getAllRidersForDriver: async (req, callback) => {
    const { eventName, driverEmail } = req.params;
    const queryStr = `SELECT rider_email as email, name, location, phone
                      FROM riders INNER JOIN users ON (riders.rider_email=users.email)
                      WHERE event_name='${eventName}' AND driver_email='${driverEmail}'`;

    try {
      const event = await db.query(queryStr);
      callback(null, event);
    } catch (err) {
      callback(err);
    }
  },
  getAllRidersForEvent: async (req, callback) => {
    const { eventName } = req.params;
    const queryStr = `SELECT name AS rider_name, rider_email, driver_email
                      FROM riders INNER JOIN users ON (riders.rider_email=users.email)
                      WHERE event_name='${eventName}'`;

    try {
      const riders = await db.query(queryStr);
      callback(null, riders);
    } catch (err) {
      callback(err);
    }
  },
  postRider: async (req, callback) => {
    const { riderEmail, eventName, location, phone} = req.body;
    const queryStr = `INSERT INTO riders (rider_email, event_name, location, phone)
                      VALUES ('${riderEmail}', '${eventName}', '${location}', '${phone}')`;

    try {
      await db.query(queryStr);
      callback(null);
    } catch (err) {
      callback(err);
    }
  },
  putRider: async (req, callback) => {
    const { riderEmail, eventName, driverEmail } = req.body;
    const queryStr = `UPDATE riders
                      SET driver_email='${driverEmail}'
                      WHERE rider_email='${riderEmail}' AND event_name='${eventName}'`;
    console.log(queryStr);
    try {
      await db.query(queryStr);
      callback(null);
    } catch (err) {
      callback(err);
    }
  },
}

