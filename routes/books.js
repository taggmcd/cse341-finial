const router = require('express').Router();
const bookController = require('../controllers/bookController');

// Get All Books
router.get('/', bookController.index);

// Get One Book
router.get('/:id', bookController.show);

module.exports = router;
