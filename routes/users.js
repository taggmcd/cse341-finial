const router = require('express').Router();
const userController = require('../controllers/userController');
const userValidate = require('../middleware/userValidator');

// Get All Users
router.get('/', userController.index);

// Get One User
router.get('/:id', userController.show);

// Store One User
router.post('/', userValidate.userValidationRules(), userValidate.validate, userController.store);

// Delete User By Id
router.delete("/:id", userController.destroy);

module.exports = router;
