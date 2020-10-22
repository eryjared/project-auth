const mongoose = require('mongoose');
const { mongo } = require('../../config');

// >>> Here is where the mongoose
// options are register on the package
// and then, with theses options, is
// initialized.
//
// A) Uncomment this lines:
Object.keys(mongo.options || {}).forEach((key) => {
  mongoose.set(key, mongo.options[key])
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

module.exports = mongoose;
