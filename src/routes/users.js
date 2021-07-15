var express = require('express');
var router = express.Router();
var { authentication } = require('../middleware/authentication');
const mongoose = require("mongoose");
var User = require('../models/user');


/* GET users listing. */
router.get('/list', function(req, res, next) {
  User
    .find()
    .then(users => res.send(users))
    .catch(err => res.send({ type: "Error", message: err}));
});

router.put('/:userId', authentication, function(req, res, next) {
  var userId = req.params.userId;
  User.findByIdAndUpdate(userId, req.body, {new: true})
    .then(user => res.send(user))
    .catch(err => res.send({ type: "Error", message: err}));
});

router.post('/', function(req, res, next) {
  const savedUser = new User(req.body);
  savedUser
    .save()
    .then(user => res.send(user))
    .catch(err => res.send({ type: "Error", message: err}));
});

module.exports = router;
