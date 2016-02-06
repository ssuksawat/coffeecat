'use strict';

const mongoose = require('moogoose');

module.exports = function (config) {
  mongoose.connect(config.db);

  const db = mongoose.connection;
  db.on('error', () => console.error('connection error...'));
  db.once('open', () => console.log('database connection opened'));
};
