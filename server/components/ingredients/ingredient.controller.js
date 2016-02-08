'use strict';

const Ingredient = require('mongoose').model('Ingredient');

module.exports = {
  createIngredient,
  deleteIngredient,
  getIngredients,
  updateIngredient
};

function createIngredient(req, res) {
  const data = req.body;
  return Ingredient.create(data)
    .then(newIngr => res.send(newIngr))
    .catch(err => res.status(400).send({reason: err.toString()}));
}

function deleteIngredient(req, res) {
  return Ingredient.findByIdAndRemove(req.params.id).exec()
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).send({reason: err.toString()}));
}

function getIngredients(req, res) {
  return Ingredient.find({}).exec()
    .then(ingredients => res.send(ingredients))
    .catch(err => res.status(500).send({reason: err.toString()}));
}

function updateIngredient(req, res) {
  return Ingredient.findByIdAndUpdate(req.params.id, req.body).exec()
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).send({reason: err.toString()}));
}
