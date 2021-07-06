var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.send([{ "title": 'Product 1'} , {"title": 'Product 2' }]);
});

router.get('/', function(req, res, next) {
  res.send({ "title": 'Express' });
});

module.exports = router;
