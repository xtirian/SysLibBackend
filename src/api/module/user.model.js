const mongoose = require('../../config/mongo');
const {Schema} = mongoose;


const userSchema = new Schema({
  name: String,
  email: String,
  password: String
}, {
  timestamps:true //saves the moment of the registry
});

module.exports = mongoose.model('user', userSchema);

