'use strict';

const Feeling = require('mongoose').model('Feeling');

const feelings = [
  'adventurous',
  'bored',
  'bliss',
  'cold',
  'energetic',
  'exausted',
  'happy',
  'hot',
  'sad'
];

module.exports = function FeelingSeed() {
  Feeling.find({}).exec()
    .then(collection => {
      if (collection.length > 0) { return; }
      feelings.forEach(emo => Feeling.create({name: emo}));
      console.log('Feelings seeded');
    });
};
