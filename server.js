const express = require('express')
const app = express()
const port = 5000
var db = require('./server/db/index.js');
var modelModule = require('./server/pokemon/Pokemon.js');
var model = modelModule.Pokemon;

app.get('/', (req, res) => {
  res.send('Helo World!')
})

app.get('/api/pokemon', function(req, res) {
  model.find(function(err, doc) {
    if (err) {
      console.log('error on get:', err);
    } else {
      res.send(doc);
    }
  }).sort({'id': 1})
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})