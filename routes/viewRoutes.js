const express = require('express');
const router = express.Router();
const viewsController = require('../controllers/viewsController');

router.route('/').get(viewsController.getMaterialIndexPerType);

module.exports = router;
