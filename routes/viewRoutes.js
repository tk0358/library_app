const express = require('express');
const router = express.Router();
const viewsController = require('../controllers/viewsController');

router.route('/').get(viewsController.getMaterialIndexPerType);

router
  .route('/materials-per-library')
  .get(viewsController.getMaterialIndexPerLibrary);

module.exports = router;
