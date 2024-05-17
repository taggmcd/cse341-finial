const router = require('express').Router();
const bookController = require('../controllers/seriesController');

router.get('/', (req, res, next) => {
  res.send('Series Routes');
});

module.exports = router;
