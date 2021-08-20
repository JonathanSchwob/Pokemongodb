const fs = require('fs');
const modelModule = require('./pokemon/Pokemon.js');
const pokeModel = modelModule.Pokemon;
const dbModule = require('./db/index.js');
const db = dbModule.db;

// reads the json file 
fs.readFile('./data/pokemon.json', (err, data) => {
  if (err) { 
    throw err; 
  } else {
    //parse the buffer result of readFile
    const poke = JSON.parse(data);
    //iterates over all 151 pokemon, adding each pokemon to the db each iteration. 
    for (let i = 0; i < poke.length; i++) {
      try {
        pokeModel.create(poke[i]);
      } catch (error) {
        console.error(error);
      }
    }
  }
});


