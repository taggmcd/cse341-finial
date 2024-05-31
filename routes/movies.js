const router = require('express').Router();
const movieController = require('../controllers/movieController');
const moviesValidate = require('../middleware/moviesValidator');
const { isAuthenticated } = require('../middleware/authenticate');

// Get All Movies
router.get('/', movieController.index);

// Get One Movie
router.get('/:id', movieController.show);

// Store One Movie
router.post(
  '/',
  isAuthenticated,
  moviesValidate.movieValidationRules(),
  moviesValidate.validate,
  movieController.store
);

// Update One Movie
router.put(
  '/:id',
  isAuthenticated,
  moviesValidate.movieValidationRules(),
  moviesValidate.validate,
  movieController.update
);

// Delete Movie By Id
router.delete('/:id', isAuthenticated, movieController.destroy);

module.exports = router;
