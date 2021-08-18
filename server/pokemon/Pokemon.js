const mongoose = require('mongoose');
// Complete the pokemonSchema below.

//grab Schema constructor function from mongoose
const Schema = mongoose.Schema;

//design the schema
const pokemonSchema = new Schema (
  {
    id: Number,
    name: Object,
    type: Array,
    base: Object,
  }
);
 
// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
const Pokemon = mongoose.model('Pokemon', pokemonSchema);
 

exports.Pokemon = Pokemon;
