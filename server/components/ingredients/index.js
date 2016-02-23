'use strict';

const ingredient = require('./ingredient.controller');
const ingredientRouter = require('express').Router();
const auth = require('../auth/auth.controller');

ingredientRouter.route('/')
  .get(ingredient.getIngredients)
  .post(auth.requiresRole('ADMIN'), ingredient.createIngredient);

ingredientRouter.route('/:id')
  .put(auth.requiresRole('ADMIN'), ingredient.updateIngredient)
  .delete(auth.requiresRole('ADMIN'), ingredient.deleteIngredient);

module.exports = ingredientRouter;
