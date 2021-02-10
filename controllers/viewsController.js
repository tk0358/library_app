const catchAsync = require('../utils/catchAsync');
const Material = require('../models/materialModel');
const Library = require('../models/libraryModel');
const Borrowing = require('../models/borrowingModel');

exports.getMaterialIndexPerType = catchAsync(async (req, res) => {
  const query = Material.find({ status: 'want_to' });
  const books = await query.find({ type: 'book' });
  const comics = await query.find({ type: 'comic' });
  const cds = await query.find({ type: 'cd' });
  const dvds = await query.find({ type: 'dvd' });

  res.status(200).render('materialIndexPerType', {
    title: '借りたい資料一覧',
    books,
    comics,
    cds,
    dvds,
  });
});

exports.getMaterialIndexPerLibrary = catchAsync(async (req, res) => {
  const materialObj = {};
  const libraries = await Library.find();
  const materials = await Material.find({ status: 'want_to' });
  const libraryAry = [];
  libraries.forEach(library => {
    // console.log(library);
    libraryAry.push({ name: library.name, id: library.id });
    materialObj[library.name] = [];
    materials.forEach(material => {
      material.libraries.forEach(matLibrary => {
        if (matLibrary.name == library.name)
          materialObj[library.name].push(material);
      });
    });
  });

  console.log(libraryAry);
  console.log(materialObj);

  res.status(200).render('materialINdexPerLibrary', {
    title: '図書館ごとの借りたい資料',
    libraryAry,
    materialObj,
  });
});

exports.getAddMaterialPage = catchAsync(async (req, res) => {
  const libraries = await Library.find();
  // console.log(libraries);
  res.status(200).render('addMaterial', {
    title: '借りたい資料の追加',
    libraries,
  });
});

exports.getBorrowingMaterials = catchAsync(async (req, res) => {
  const borrowings = await Borrowing.find().sort('library');
  console.log(borrowings);

  res.status(200).render('borrowingMaterials', {
    title: '借りている資料一覧',
    borrowings,
  });
});
