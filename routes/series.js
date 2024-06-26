const router = require('express').Router();
const seriesController = require('../controllers/seriesController');
const seriesValidate = require('../middleware/seriesValidator');
const { isAuthenticated } = require('../middleware/authenticate');

// Get All Series
router.get('/', seriesController.index);

// Get One Series
router.get('/:id', seriesController.show);

// Store One Series
router.post(
  '/',
  isAuthenticated,
  seriesValidate.seriesValidationRules(),
  seriesValidate.validate,
  seriesController.store
);

// Update One Series
router.put(
  '/:id',
  isAuthenticated,
  seriesValidate.seriesValidationRules(),
  seriesValidate.validate,
  seriesController.update
);

// Delete Series By Id
router.delete('/:id', isAuthenticated, seriesController.destroy);

module.exports = router;
