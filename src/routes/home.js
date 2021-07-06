var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Make API call to get user data
  res.render('index', { title: 'Express', username: 'Chirag' });
});

module.exports = router;