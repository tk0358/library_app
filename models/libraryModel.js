const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A library must have a name'],
      unique: true,
    },
    how_long_book: {
      type: Number,
      required: [true, 'A library must have how many days we can borrow books'],
    },
    how_long_comic: {
      type: Number,
      required: [
        true,
        'A library must have how many days we can borrow comics',
      ],
    },
    how_long_cd: {
      type: Number,
      required: [true, 'A library must have how many days we can borrow CDs'],
    },
    how_long_dvd: {
      type: Number,
      required: [true, 'A library must have how many days we can borrow DVDs'],
    },
    can_extend_at_web: {
      type: Boolean,
      required: [
        true,
        'A library must have whether or not we can extend a loan period',
      ],
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

librarySchema.virtual('materials', {
  ref: 'Material',
  foreignField: 'libraries',
  localField: '_id',
});

const Library = mongoose.model('Library', librarySchema);
module.exports = Library;
