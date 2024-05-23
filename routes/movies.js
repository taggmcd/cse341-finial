const router = require('express').Router();
const movieController = require('../controllers/movieController');

// Get All Movies
router.get('/', movieController.index);

// Get One Movie
router.get('/:id', movieController.show);

module.exports = router;
