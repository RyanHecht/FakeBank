var express = require('express');
var router = express.Router();

let User = db.model('user');
//Will get all users
router.get('/', function(req, res) {
	User.findAll()
	.then(function(users){
		res.send(users);
	})
});

router.get('/:id', function(req, res) {
	User.findById(req.params.id)
	.then(function(user){
		res.send(user);
	})
});

router.post('/:firstName/:lastName/:email', function(req, res) {
  res.send("this will make a new user with given info");
})


module.exports = router;
