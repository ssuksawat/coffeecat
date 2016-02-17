'use strict';

const Feeling = require('mongoose').model('Feeling');

module.exports = {
  create,
  delete: deleteItem,
  query,
  update
};

function create(req, res) {
  const data = req.body;
  return Feeling.create(data)
    .then(newIngr => res.send(newIngr))
    .catch(err => res.status(400).send({reason: err.toString()}));
}

function deleteItem(req, res) {
  return Feeling.findByIdAndRemove(req.params.id).exec()
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).send({reason: err.toString()}));
}

function query(req, res) {
  return Feeling.find({}).exec()
    .then(ingredients => res.send(ingredients))
    .catch(err => res.status(500).send({reason: err.toString()}));
}

function update(req, res) {
  return Feeling.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec()
    .then(feeling => res.send(feeling))
    .catch(err => res.status(400).send({reason: err.toString()}));
}
