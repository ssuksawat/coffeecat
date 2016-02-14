'use strict';

const feeling = require('./feeling.controller');
const feelingRouter = require('express').Router();

feelingRouter.route('/')
  .get(feeling.query)
  .post(feeling.create);

feelingRouter.route('/:id')
  .put(feeling.update)
  .delete(feeling.delete);

module.exports = feelingRouter;
