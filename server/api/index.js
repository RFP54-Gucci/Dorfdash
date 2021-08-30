const api = require('express').Router();

// Connect controller methods to their corresponding routes
api.get('/directions', (req, res) => {
  // do something with api
  res.send('test');
});

module.exports = api;
