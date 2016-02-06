'use strict';

const coffee = require('./coffee.controller');
const coffeeRouter = require('express').Router();

coffeeRouter.route('/')
  .get(coffee.getDrinks)
  .post(coffee.createDrink);

coffeeRouter.route('/:id')
  .get(coffee.getDrinkById)
  .put(coffee.updateDrink)
  .delete(coffee.deleteDrink);

module.exports = coffeeRouter;
