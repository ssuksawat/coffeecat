'use strict';

const passport = require('passport');

module.exports = {
  login,
  logout,
  requiresAuth,
  requiresRole
};

function login(req, res, next) {
  req.body.username = req.body.username.toLowerCase();
  passport.authenticate('local', (err, user) => {
    if (err) { return next(err); }
    if (!user) { return res.status(401).send({success: false}); }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.send({
        success: true,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          roles: user.roles,
          username: user.username
        }
      });
    });
  })(req, res, next);
}

function logout(req, res) {
  req.logout();
  res.end();
}

function requiresAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}

function requiresRole(role) {
  return function(req, res, next) {
    if (req.isAuthenticated || req.user.roles.indexOf(role) === -1) {
      res.sendStatus(403);
    } else {
      next();
    }
  };
}
