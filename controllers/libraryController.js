const Library = require('../models/libraryModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');

exports.getAllMaterialsFromLibrary = catchAsync(async (req, res, next) => {
  const library = await Library.findById(req.params.libraryId).populate(
    'materials'
  );
  const materials = library.materials;

  res.status(200).json({
    status: 'success',
    results: materials.length,
    data: {
      data: materials,
    },
  });
});

exports.getAllLibraries = factory.getAll(Library);
exports.createLibrary = factory.createOne(Library);
exports.getLibrary = factory.getOne(Library, {
  path: 'materials',
  select: 'title author',
});
exports.updateLibrary = factory.updateOne(Library);
exports.deleteLibrary = factory.deleteOne(Library);
