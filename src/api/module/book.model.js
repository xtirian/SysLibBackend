const mongoose = require('../../config/mongo');
const {Schema} = mongoose;



const bookSchema = new Schema({
  id: Number,
  title: String,
  pages: Number,
  ISBN: String,
  publishing: String
}, {
  timestamps:true //saves the moment of the registry
});

module.exports = mongoose.model('book', bookSchema);

