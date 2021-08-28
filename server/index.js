
const express = require('express');
// eslint-disable-next-line no-unused-vars
const db = require('./db.js');
const morgan = require('morgan');
const path = require('path');

// Router & API
const router = require('./routes.js');
const api = require('./api/index.js')

const app = express();

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(express.json());

// Set up our routes
app.use('/data', router);
app.use('/api', api)

// Serve the client files
app.use(express.static(path.join(__dirname + '../public')));

// Run the server
app.listen(app.get('port'));
console.log('Listening on', app.get('port'));