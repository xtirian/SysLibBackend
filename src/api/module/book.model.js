const mongoose = require("../../config/mongo");
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: String,
    pages: Number,
    ISBN: String,
    publishing: String,
    //_id will be generated automaticly as a Primary Key
  },
  {
    timestamps: true, //saves the moment of the registry
  }
);

module.exports = mongoose.model("book", bookSchema);
