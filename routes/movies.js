const router = require('express').Router();
const bookController = require('../controllers/movieController');

router.get('/', (req, res, next) => {
  res.send('Movies Routes');
});

module.exports = router;
