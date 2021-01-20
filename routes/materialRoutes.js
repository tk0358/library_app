const express = require('express');
const router = express.Router();

const materialController = require('../controllers/materialController');

router
  .route('/')
  .get(materialController.getAllMaterials)
  .post(materialController.createMaterial);

module.exports = router;
