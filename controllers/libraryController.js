const Library = require('../models/libraryModel');
const factory = require('./handlerFactory');

exports.getAllLibraries = factory.getAll(Library);
exports.createLibrary = factory.createOne(Library);
exports.getLibrary = factory.getOne(Library, {
  path: 'materials',
  select: 'title author',
});
exports.updateLibrary = factory.updateOne(Library);
exports.deleteLibrary = factory.deleteOne(Library);
