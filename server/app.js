'use strict';

const express = require('express');

const app = express();
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

require('./config/express')(app, config);
require('./config/mongoose')(config);
require('./config/passport')();
require('./config/routes')(app);

app.listen(port, function () {
  console.log('Listening on PORT: ' + port);
});

module.exports = app;
