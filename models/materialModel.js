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
      values: ['book', 'comic', 'CD', 'DVD'],
      message: 'Material type is either bookm, comic, CD or DVD',
    },
  },
  libraries: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Library',
    },
  ],
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
