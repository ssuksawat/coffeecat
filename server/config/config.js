'use strict';

const path = require('path');
const rootPath = path.join(__dirname, '../..');

module.exports = {
  development: {
    rootPath: rootPath,
    db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/coffeecat',
    port: process.env.PORT || 3000,
    logLevel: process.env.LOG_LEVEL || 'dev',
    secret: process.env.APP_SECRET || 'cool cats love coffee'
  },
  production: {
    rootPath: rootPath,
    db: process.env.MONGOLAB_URI || process.env.MONGO_URI,
    port: process.env.PORT || 80,
    logLevel: process.env.LOG_LEVEL || 'tiny',
    secret: process.env.APP_SECRET || 'cool cats love coffee'
  }
};
