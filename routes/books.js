const router = require('express').Router();
const bookController = require('../controllers/bookController');
const bookValidate = require('../middleware/booksValidator');
const { isAuthenticated } = require('../middleware/authenticate');

// Get All Books
router.get('/', bookController.index);

// Get One Book
router.get('/:id', bookController.show);

// Store One Book
router.post(
  '/',
  isAuthenticated,
  bookValidate.bookValidationRules(),
  bookValidate.validate,
  bookController.store
);

// Update One Book
router.put(
  '/:id',
  isAuthenticated,
  bookValidate.bookValidationRules(),
  bookValidate.validate,
  bookController.update
);

// Delete Book By Id
router.delete('/:id', isAuthenticated, bookController.destroy);

module.exports = router;
