const router = require('express').Router();
const bookController = require('../controllers/userController');

router.get('/', (req, res, next) => {
  res.send('Users Routes');
});

module.exports = router;
