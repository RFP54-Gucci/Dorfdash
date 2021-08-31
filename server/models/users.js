const db = require('../../db/index.js');

module.exports = {

  getAll: async (callback) => {
    const queryStr = "SELECT * FROM users";

    const users = await db.query(queryStr).catch((err) => callback(err));
    callback(null, users);
},

  attendeeList: (eventName) => {
    const queryStr = `SELECT rider_email, driver_email FROM riders WHERE event_name = ${eventName}`;
    return db.query(queryStr)
      .then((data) => {
        const attendees = [];
        data.map((event) => {
          if (attendees.indexOf(event.rider_email) === -1) {
            attendees.push(event.rider_email);
          }
          if (event.driver_email && attendees.indexOf(event.driver_email) === -1) {
            attendees.push(event.driver_email);
          }
          return attendees;
        })
      })
      .catch((err) => err);
  },
  create: async (req, callback) => {
    const { name, email } = req.body;
    const queryStr = `INSERT INTO users (name, email) VALUES ('${name}', '${email}') RETURNING user_id, name, email`;

    const userInfo = await db.query(queryStr).catch((err) => callback(err));
    callback(null, userInfo);
  }
};
