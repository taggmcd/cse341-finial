const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
  res.send(
    req.session.user !== undefined
      ? `Logged in as ${req.session.user.username}<script>setTimeout(function() { window.close(); }, 3000);</script>`
      : 'Logged Out<script>setTimeout(function() { window.close(); }, 3000);</script>'
  );
});

router.use('/api/books', require('./books.js'));
router.use('/api/movies', require('./movies.js'));
router.use('/api/series', require('./series.js'));
router.use('/api/users', require('./users.js'));
router.use('/auth', require('./auth.js'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});
module.exports = router;
