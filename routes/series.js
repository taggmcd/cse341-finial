const router = require('express').Router();
const seriesController = require('../controllers/seriesController');

// Get All Series
router.get('/', seriesController.index);

// Get One Serie
router.get('/:id', seriesController.show);

module.exports = router;
