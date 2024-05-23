const router = require('express').Router();
const userController = require('../controllers/userController');

// Get All Users
router.get('/', userController.index);

// Get One User
router.get('/:id', userController.show);

// Delete User By Id
router.delete("/:id", userController.destroy);

module.exports = router;
