const express = require('express');

const CoffeeRouter = function () {
  const router = express.Router();
  const coffeeCtrl = require('../controllers/coffee.controller')();

  router.route('/')
    .get(coffeeCtrl.get);

  return router;
};

module.exports = CoffeeRouter;
