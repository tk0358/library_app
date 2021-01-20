const Material = require('../models/materialModel');

exports.getAllMaterials = async (req, res, next) => {
  const materials = await Material.find();

  res.status(200).json({
    status: 'success',
    results: materials.length,
    data: {
      data: materials,
    },
  });
};

exports.createMaterial = async (req, res, next) => {
  const material = await Material.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: material,
    },
  });
};
