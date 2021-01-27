const mongoose = require('mongoose');
const Material = require('./materialModel');
const Library = require('./libraryModel');

const borrowingSchema = new mongoose.Schema({
  material: {
    type: mongoose.Schema.ObjectId,
    ref: 'Material',
  },
  library: {
    type: mongoose.Schema.ObjectId,
    ref: 'Library',
  },
  checkoutDate: {
    type: Date,
    default: Date.now(),
  },
  returnDate: Date,
});

borrowingSchema.pre('save', async function (next) {
  const type = (await Material.findById(this.material)).type;
  // console.log(type);
  const days = (await Library.findById(this.library))[`how_long_${type}`];
  // console.log(days);
  this.returnDate = new Date(
    Date.parse(this.checkoutDate) + days * 24 * 60 * 60 * 1000
  );
  next();
});

const Borrowing = mongoose.model('Borrowing', borrowingSchema);
module.exports = Borrowing;
