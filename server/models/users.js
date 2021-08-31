const db = require('../../db/index.js');

module.exports = {

  getAll: async (callback) => {
    const queryStr = "SELECT * FROM users";

    const users = await db.query(queryStr).catch((err) => callback(err));
    callback(null, users);
},
  create: async (req, callback) => {
    const { name, email } = req.body;
    const queryStr = `INSERT INTO users (name, email) VALUES ('${name}', '${email}') RETURNING user_id, name, email`;

    const userInfo = await db.query(queryStr).catch((err) => callback(err));
    callback(null, userInfo);
  }
};
