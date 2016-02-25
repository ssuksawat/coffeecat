'use strict';

const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');

module.exports = function (app, config) {
  app.use(morgan(config.logLevel));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(session({secret: config.secret}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(config.rootPath + '/public'));
  app.use('/dist', express.static(config.rootPath + '/dist'));
};
