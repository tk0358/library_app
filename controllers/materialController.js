const Material = require('../models/materialModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllMaterials = factory.getAll(Material);
exports.createMaterial = factory.createOne(Material);
exports.getMaterial = factory.getOne(Material);
exports.updateMaterial = factory.updateOne(Material);
exports.deleteMaterial = factory.deleteOne(Material);
