var express = require('express');
var router = express.Router();

//Will get all users
router.get('/', function(req, res) {
  res.send("Users!!");
});

router.get('/:id', function(req, res) {
  res.send("this will get a user by id");
});

router.post('/:firstName/:lastName/:email', function(req, res) {
  res.send("this will make a new user with given info");
})


module.exports = router;
