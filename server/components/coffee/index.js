'use strict';

const coffee = require('./coffee.controller');
const coffeeRouter = require('express').Router();
const auth = require('../auth/auth.controller');

coffeeRouter.route('/')
  .get(coffee.getDrinks)
  .post(auth.requiresRole('ADMIN'), coffee.createDrink);

coffeeRouter.route('/:id')
  .get(coffee.getDrinkById)
  .put(auth.requiresRole('ADMIN'), coffee.updateDrink)
  .delete(auth.requiresRole('ADMIN'), coffee.deleteDrink);

module.exports = coffeeRouter;
