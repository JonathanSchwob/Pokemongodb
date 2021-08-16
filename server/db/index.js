const mongoose = require('mongoose');


// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

//logs to show error or success on db connect 
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('connected to mongodb');
});

exports.db = db;
