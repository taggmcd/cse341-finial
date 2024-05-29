const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Auth Routes');
});

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/api-docs',
    session: false,
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  }
);

module.exports = router;
