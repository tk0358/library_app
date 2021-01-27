const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');

router
  .route('/')
  .get(borrowingController.getAllBorrowings)
  .post(borrowingController.createBorrowing);

router
  .route('/:id')
  .get(borrowingController.getOneBorrowing)
  .patch(borrowingController.updateBorrowing)
  .delete(borrowingController.deleteBorrowing);

module.exports = router;
