require('dotenv').config()
const express = require('express');
const path = require('path');
const morgan = require('morgan');
// eslint-disable-next-line no-unused-vars
const db = require('../db/index.js');
var cors = require('cors')

// Router & API
const router = require('./routes.js');
const api = require('./api/index.js');

const app = express();

// Set what we are listening on.
app.set('port', 3100);
app.use(cors());
// Logging and parsing
app.use(morgan('dev'));
app.use(express.json());

// Set up our routes
app.use('/data', router);
app.use('/api', api);

app.get('/test', (req, res) => {
  res.send('success');
});

// Serve build folder when in production environment
app.use(express.static(path.join(__dirname, '../build')));
// More info here => https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Run the server
app.listen(app.get('port'));
console.log('Listening on', app.get('port'));
