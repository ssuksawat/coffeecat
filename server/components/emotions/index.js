'use strict';

const emotion = require('./emotion.controller');
const emotionRouter = require('express').Router();

emotionRouter.route('/')
  .get(emotion.query)
  .post(emotion.create);

emotionRouter.route('/:id')
  .put(emotion.update)
  .delete(emotion.delete);

module.exports = emotionRouter;
