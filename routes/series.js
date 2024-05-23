const router = require('express').Router();
const seriesController = require('../controllers/seriesController');

// Get All Series
router.get('/', seriesController.index);

// Get One Series
router.get('/:id', seriesController.show);

// Delete Series By Id
router.delete("/:id", seriesController.destroy);

module.exports = router;
