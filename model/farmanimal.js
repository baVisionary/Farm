var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: String,
  type: { type: String, required: true },
  location: [ 'House', 'Barn', 'Outside' ],
  legs: { type: Number, min: 0, max: 8, required: true },
  eats: [ 'Omnivore', 'Herbivore', 'Carnivore']
});

var Animal = mongoose.model('Animal', schema);

module.exports = Animal;
