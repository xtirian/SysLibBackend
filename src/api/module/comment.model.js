const mongoose = require('../../config/mongo');
const {Schema} = mongoose;

const User = require('./user.model');


const commentSchema = new Schema({
  user: User,
  comment: String
}, {
  timestamps:true //saves the moment of the registry
});

module.exports = mongoose.model('comment', commentSchema);

