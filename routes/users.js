const router = require('express').Router();
const userController = require('../controllers/userController');
const userValidate = require('../middleware/userValidator');
const { isAuthenticated } = require('../middleware/authenticate');

// Get All Users
router.get('/', userController.index);

// Get One User
router.get('/:id', userController.show);

// Store One User
router.post(
  '/',
  userValidate.userValidationRules(),
  userValidate.validate,
  userController.store
);

// Update One User
router.put(
  '/:id',
  isAuthenticated,
  userValidate.userValidationRules(),
  userValidate.validate,
  userController.update
);

// Delete User By Id
router.delete('/:id', isAuthenticated, userController.destroy);

module.exports = router;
