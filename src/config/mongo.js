// Using Node.js `require()`
const mongoose = require('mongoose');

await mongoose.connect('mongodb://127.0.0.1/local');

module.exports = mongoose;