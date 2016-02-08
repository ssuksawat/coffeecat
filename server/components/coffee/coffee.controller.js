'use strict';

const Coffee = require('mongoose').model('Coffee');

module.exports = {
  createDrink,
  deleteDrink,
  getDrinks,
  getDrinkById,
  updateDrink
};

function createDrink(req, res) {
  const data = req.body;
  return Coffee.create(data)
    .then(newDrink => res.send(newDrink))
    .catch((err) => {
      if (err.toString().indexOf('E11000')) {
        err = new Error('This drink already exists');
      }
      res.status(400).send({reason: err.toString()});
    });
}

function deleteDrink(req, res) {
  return Coffee.findByIdAndRemove(req.params.id).exec()
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).send({reason: err.toString()}));
}

function getDrinks(req, res) {
  return Coffee.find({}).exec()
    .then(drinks => res.send(drinks))
    .catch(err => res.send(err));
}

function getDrinkById(req, res) {
  return Coffee.findById(req.params.id).exec()
    .then(drink => res.send(drink));
}

function updateDrink(req, res) {
  return Coffee.findByIdAndUpdate(req.params.id).exec()
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).send({reason: err.toString()}));
}
