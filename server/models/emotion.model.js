'use strict';

const mongoose = require('mongoose');

const emotionSchema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required!', unique: true },
  description: { type: String }
});

mongoose.model('Emotion', emotionSchema);