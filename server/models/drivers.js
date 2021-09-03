const db = require('../../db/index.js');

module.exports = {
  postDriver: ({ driverEmail, eventName, phone, location, vehicleInfo }) => {
    const query = `INSERT INTO drivers (driver_email, event_name, phone, location, vehicle_info) VALUES ('${driverEmail}', '${eventName}', '${phone}', '${location}', '${vehicleInfo}')`;
    return db.query(query);
  },
  getDriver: (req) => {
    const { eventName, driverEmail } = req.params;
    const query = `SELECT * FROM drivers WHERE drivers.event_name='${eventName}' AND drivers.driver_email='${driverEmail}'`;
    return db.query(query);
  },
}