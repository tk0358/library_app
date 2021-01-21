const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A library must have a name'],
    unique: true,
  },
  how_long_book: {
    type: Number,
    required: [true, 'A library must have how many days we can borrow books'],
  },
  how_long_cd: {
    type: Number,
    required: [true, 'A library must have how many days we can borrow CDs'],
  },
});

const Library = mongoose.model('Library', librarySchema);
module.exports = Library;
