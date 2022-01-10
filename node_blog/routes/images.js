var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/images', function(req, res, next) {
  res.send('respond with a images');
});

module.exports = router;
