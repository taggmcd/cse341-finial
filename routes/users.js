const router = require('express').Router();
const userController = require('../controllers/userController');

// Get All Users
router.get('/', userController.index);

// Get One User
router.get('/:id', userController.show);

module.exports = router;
