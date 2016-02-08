'use strict';

const Emotion = require('mongoose').model('Emotion');

module.exports = {
  create,
  delete: deleteItem,
  query,
  update
};

function create(req, res) {
  const data = req.body;
  return Emotion.create(data)
    .then(newIngr => res.send(newIngr))
    .catch(err => res.status(400).send({reason: err.toString()}));
}

function deleteItem(req, res) {
  return Emotion.findByIdAndRemove(req.params.id).exec()
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).send({reason: err.toString()}));
}

function query(req, res) {
  return Emotion.find({}).exec()
    .then(ingredients => res.send(ingredients))
    .catch(err => res.status(500).send({reason: err.toString()}));
}

function update(req, res) {
  return Emotion.findByIdAndUpdate(req.params.id).exec()
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).send({reason: err.toString()}));
}
