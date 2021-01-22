const catchAsync = require('../utils/catchAsync');
const Material = require('../models/materialModel');

exports.getMaterialIndex = catchAsync(async (req, res) => {
  const materials = await Material.find();
  let maxLibrary = 0;
  materials.forEach(
    material =>
      (maxLibrary =
        material.libraries.length > maxLibrary
          ? material.libraries.length
          : maxLibrary)
  );
  res.status(200).render('materialIndex', {
    title: '借りたい資料一覧',
    maxLibrary,
    materials,
  });
});
