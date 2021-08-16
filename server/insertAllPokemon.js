const fs = require('fs');
const modelModule = require('./pokemon/pokemodel.js');
const pokeModel = modelModule.Pokemon;

//reads the json file 
fs.readFile('./data/pokemon.json', (err, data) => {
  if (err) { 
    throw err; 
  } else {
    //parse the buffer result of readFile
    const pokemon = JSON.parse(data);
    //iterates over all 151 pokemon, adding each pokemon to the db each iteration. 
    for (var i = 0; i < pokemon.length; i++) {
      pokeModel.create(pokemon[i]);
    }
  }
});


