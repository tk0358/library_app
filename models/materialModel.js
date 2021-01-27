const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A material must have a title'],
    unique: true,
    trim: true,
  },
  author: {
    type: String,
    trim: true,
  },
  publisher: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    enum: {
      values: ['book', 'comic', 'cd', 'dvd'],
      message: 'Material type is either bookm, comic, cd or dvd',
    },
  },
  libraries: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Library',
    },
  ],
  status: {
    type: String,
    enum: {
      values: ['want_to', 'be_borrowing', 'has_returned'],
      message: "Status must be 'want_to', 'be_borrowing' or 'has_returned'",
    },
    default: 'want_to',
  },
});

materialSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'libraries',
    select: 'name',
  });

  next();
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;
