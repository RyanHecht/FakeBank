var express = require('express');
var router = express.Router();

let Account = db.model('account');
// will get all accounts
router.get('/', function(req, res) {
	Account.findAll()
	.then(function(accounts){
		res.send(accounts);
	})
});

router.get('/:id', function(req, res) {
	Account.findById(req.params.id)
	.then(function(account){
		res.send(account);
	})
});

router.post('/:userId/:accountType/:startingBalance', function(req, res) {
  res.send("will make new account");
});

module.exports = router;
