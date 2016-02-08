'use strict';

const mongoose = require('mongoose');

// use native Promise, and not mongoose mpromise
mongoose.Promise = global.Promise;

module.exports = function (config) {
  mongoose.connect(config.db);

  const db = mongoose.connection;
  db.on('error', () => console.error('connection error...'));
  db.once('open', () => console.log('database connection opened'));

  // init models
  require('../models')();
};
