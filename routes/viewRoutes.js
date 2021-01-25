const express = require('express');
const router = express.Router();
const viewsController = require('../controllers/viewsController');

router.route('/').get(viewsController.getMaterialIndexPerType);

router
  .route('/materials-per-library')
  .get(viewsController.getMaterialIndexPerLibrary);

router.route('/getAddMaterialPage').get(viewsController.getAddMaterialPage);

module.exports = router;
