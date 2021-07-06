var express = require('express');
var router = express.Router();
var { authentication } = require('../middleware/authentication');

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send([{
    "id": 1,
    "firstName": "Alok",
    "lastName": "Kumar",
  }, {
    "id": 2,
    "firstName": "Meet",
    "lastName": "Mishra",
  }]);
});

router.put('/:userId', authentication, function(req, res, next) {
    console.log(req.params, req.body);
    var userId = req.params.userId;
    try {
      // Update data in database
      // API: www.user.com/createUser
      res.send({ ...req.body, id: userId });
    } catch(e) {
      res.send({ error: e });
    }
});

router.post('/', authentication, function(req, res, next) {
  console.log(req.body);
  var userId = Math.random(); // Save data in database and get userId
  var updatedUserDetail = {
    ...req.body,
    id: userId,
  };
  res.send(updatedUserDetail);
});

module.exports = router;
