const Material = require('../models/materialModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllMaterials = catchAsync(async (req, res, next) => {
  const materials = await Material.find();

  res.status(200).json({
    status: 'success',
    results: materials.length,
    data: {
      data: materials,
    },
  });
});

exports.createMaterial = catchAsync(async (req, res, next) => {
  const material = await Material.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: material,
    },
  });
});

exports.getMaterial = catchAsync(async (req, res, next) => {
  const material = await Material.findById(req.params.id);

  if (!material) {
    return next(new AppError('No material found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: material,
    },
  });
});

exports.updateMaterial = catchAsync(async (req, res, next) => {
  const material = await Material.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!material) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: material,
    },
  });
});

exports.deleteMaterial = catchAsync(async (req, res, next) => {
  const material = await Material.findByIdAndDelete(req.params.id);

  if (!material) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
