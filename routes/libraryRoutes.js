const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');
// const materialRouter = require('./materialRoutes');

router.get(
  '/:libraryId/materials',
  libraryController.getAllMaterialsFromLibrary
);

router
  .route('/')
  .get(libraryController.getAllLibraries)
  .post(libraryController.createLibrary);

router
  .route('/:id')
  .get(libraryController.getLibrary)
  .patch(libraryController.updateLibrary)
  .delete(libraryController.deleteLibrary);

module.exports = router;
