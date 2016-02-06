'use strict';

const ingredient = require('./ingredient.controller');
const ingredientRouter = require('express').Router();

ingredientRouter.route('/')
  .get(ingredient.getIngredients)
  .post(ingredient.createIngredient);

ingredientRouter.route('/:id')
  .put(ingredient.updateIngredient)
  .delete(ingredient.deleteIngredient);

module.exports = ingredientRouter;
