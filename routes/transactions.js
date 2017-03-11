var express = require('express');
var router = express.Router();

let Transaction = db.model('transaction');
// will get all transactions
router.get('/', function(req, res) {
	Transaction.findAll()
	.then(function(transactions){
		res.send(transactions);
	})
});

// get a transaction by id
router.get('/:id', function(req, res) {
	Transaction.findById(req.params.id)
	.then(function(transaction){
		res.send(transaction);
	})
});

router.post('/:sender/:receiver/:amount/:desc', function(req, res) {
  res.send("will issue new transaction");
});

module.exports = router;
