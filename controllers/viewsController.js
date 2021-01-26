const catchAsync = require('../utils/catchAsync');
const Material = require('../models/materialModel');
const Library = require('../models/libraryModel');

exports.getMaterialIndexPerType = catchAsync(async (req, res) => {
  const books = await Material.find({ type: 'book' });
  const comics = await Material.find({ type: 'comic' });
  const cds = await Material.find({ type: 'CD' });
  const dvds = await Material.find({ type: 'DVD' });

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
  const materials = await Material.find();
  const libraryAry = [];
  libraries.forEach(library => {
    // console.log(library);
    libraryAry.push(library.name);
    materialObj[library.name] = [];
    materials.forEach(material => {
      material.libraries.forEach(matLibrary => {
        if (matLibrary.name == library.name)
          materialObj[library.name].push(material);
      });
    });
  });

  res.status(200).render('materialINdexPerLibrary', {
    title: '図書館ごとの借りたい資料',
    libraryAry,
    materialObj,
  });
});

exports.getAddMaterialPage = catchAsync(async (req, res) => {
  libraries = await Library.find();
  // console.log(libraries);
  res.status(200).render('addMaterial', {
    title: '借りたい資料の追加',
    libraries,
  });
});
