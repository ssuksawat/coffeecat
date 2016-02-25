'use strict';

const session = require('express-session');
const RedisStore = require('connect-redis')(session);

module.exports = function Session(config) {
  let sess;

  if (process.env.NODE_ENV === 'production') {
    sess = session({
      secret: config.secret,
      store: new RedisStore({ url: config.redis }),
      resave: true,
      saveUninitialized: true
    });
  } else {
    sess = session({secret: config.secret});
  }

  return sess;
};
