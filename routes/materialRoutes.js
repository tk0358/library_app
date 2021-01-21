const express = require('express');
const router = express.Router();

const materialController = require('../controllers/materialController');

router
  .route('/')
  .get(materialController.getAllMaterials)
  .post(materialController.createMaterial);

router
  .route('/:id')
  .get(materialController.getMaterial)
  .patch(materialController.updateMaterial)
  .delete(materialController.deleteMaterial);

module.exports = router;
