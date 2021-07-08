var express = require('express');
var router = express.Router();
var { authorization } = require('../middleware/authentication'); 

/* GET home page. */
router.get('/list', authorization(['ADMIN']), function(req, res, next) {
  res.send([{ "title": 'Product 1'} , {"title": 'Product 2' }]);
});

router.get('/', authorization(['ADMIN', 'ANALYST']), function(req, res, next) {
  res.send({ "title": 'Express' });
});

module.exports = router;
