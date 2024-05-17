const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Hello World');
});

router.use('/api/books', require('./books.js'));
router.use('/api/movies', require('./movies.js'));
router.use('/api/series', require('./series.js'));
router.use('/api/users', require('./users.js'));
router.use('/auth', require('./auth.js'));

module.exports = router;
