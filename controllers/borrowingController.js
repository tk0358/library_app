const Borrowing = require('../models/borrowingModel');
const factory = require('./handlerFactory');

exports.getAllBorrowings = factory.getAll(Borrowing);
exports.createBorrowing = factory.createOne(Borrowing);

exports.getOneBorrowing = factory.getOne(Borrowing);
exports.updateBorrowing = factory.updateOne(Borrowing);
exports.deleteBorrowing = factory.deleteOne(Borrowing);
