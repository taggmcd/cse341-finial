const router = require('express').Router();
const movieController = require('../controllers/movieController');
const moviesValidate = require('../middleware/moviesValidator');

// Get All Movies
router.get('/', movieController.index);

// Get One Movie
router.get('/:id', movieController.show);

// Store One Movie
router.post('/', moviesValidate.movieValidationRules(),moviesValidate.validate, movieController.store);

// Update One Movie
router.put('/:id', moviesValidate.movieValidationRules(),moviesValidate.validate, movieController.update);

// Delete Movie By Id
router.delete("/:id", movieController.destroy);

module.exports = router;
