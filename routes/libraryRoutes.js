const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');

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
