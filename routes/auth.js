const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Auth Routes');
});

module.exports = router;
