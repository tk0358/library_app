const mongoose = require('mongoose');
const Material = require('./materialModel');
const Library = require('./libraryModel');
const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Tokyo');

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
    type: String,
    default: moment().format(),
  },
  returnDate: String,
});

borrowingSchema.pre('save', async function (next) {
  const type = (await Material.findById(this.material)).type;
  const days = (await Library.findById(this.library))[`how_long_${type}`];
  const returnDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  this.returnDate = moment(returnDate).format();
  next();
});

const Borrowing = mongoose.model('Borrowing', borrowingSchema);
module.exports = Borrowing;
