const db = require('../../db/index.js');

module.exports = {

  getAll: async (callback) => {
    const queryStr = "SELECT * FROM users";

    const users = await db.query(queryStr).catch((err) => callback(err));
    callback(null, users);
},

  attendeeList: (eventName) => {
    let memo = [];
    const queryStr = `SELECT rider_email, driver_email FROM riders WHERE event_name = '${eventName}'`;
    return db.query(queryStr)
      .then((data) => {
        let promiseArr = data.reduce((acc, cur) => {
          const queryRider = `SELECT name FROM users WHERE email = '${cur.rider_email}'`;
          if (cur.driver_email && memo.indexOf(cur.driver_email) === -1) {
            memo.push(cur.driver_email);
            const queryDriver = `SELECT name FROM users WHERE email = '${cur.driver_email}'`;
            return acc.concat([db.query(queryRider).then((data) => data[0].name), db.query(queryDriver).then((data) => data[0].name)]);
          } else {
            return acc.concat([db.query(queryRider).then((data) => data[0].name)]);
          }
        }, []);
        return Promise.all(promiseArr);
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
