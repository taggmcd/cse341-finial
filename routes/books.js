const router = require('express').Router();
const bookController = require('../controllers/bookController');

router.get('/', (req, res, next) => {
  res.send('Book Routes');
});

module.exports = router;
