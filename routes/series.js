const router = require('express').Router();
const seriesController = require('../controllers/seriesController');
const seriesValidate = require('../middleware/seriesValidator');

// Get All Series
router.get('/', seriesController.index);

// Get One Series
router.get('/:id', seriesController.show);

// Store One Series
router.post('/', seriesValidate.seriesValidationRules(), seriesValidate.validate, seriesController.store);

// Update One Series
router.put('/:id', seriesValidate.seriesValidationRules(), seriesValidate.validate, seriesController.update);

// Delete Series By Id
router.delete("/:id", seriesController.destroy);

module.exports = router;
