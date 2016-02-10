'use strict';

const express = require('express');

const app = express();
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

require('./config/mongoose')(config);
require('./config/express')(app, config);
require('./config/passport')();
require('./config/routes')(app, config);

if (env === 'development') { require('./seeds')(); }

app.listen(config.port, function () {
  console.log('Listening on PORT: ' + config.port);
});

module.exports = app;
