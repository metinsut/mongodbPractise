const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type:String,
    default:"Bu bir başlık"
  },
  puplished: {
    type:Boolean,
    required:true
  },
  comment: [{ message: String }],
  meta: {
    votes: Number,
    favs: Number
  }
});

module.exports = mongoose.model("book", bookSchema);
