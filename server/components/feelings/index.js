'use strict';

const feeling = require('./feeling.controller');
const feelingRouter = require('express').Router();
const auth = require('../auth/auth.controller');

feelingRouter.route('/')
  .get(feeling.query)
  .post(auth.requiresRole('ADMIN'), feeling.create);

feelingRouter.route('/:id')
  .put(auth.requiresRole('ADMIN'), feeling.update)
  .delete(auth.requiresRole('ADMIN'), feeling.delete);

module.exports = feelingRouter;
