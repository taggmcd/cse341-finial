const router = require('express').Router();
const passport = require('passport');

// router.get('/', (req, res, next) => {
//   res.send('Hello World');
// });


router.use('/api/books', require('./books.js'));
router.use('/api/movies', require('./movies.js'));
router.use('/api/series', require('./series.js'));
router.use('/api/users', require('./users.js'));
router.use('/auth', require('./auth.js'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
  });
});
module.exports = router;
