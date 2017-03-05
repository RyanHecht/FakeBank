var express = require('express');
var router = express.Router();

// will get all transactions
router.get('/', function(req, res) {
  res.send("Transactions!!");
});

router.get('/:id', function(req, res) {
  res.send("will get transaction by id");
});

router.post('/:sender/:receiver/:amount/:desc', function(req, res) {
  res.send("will issue new transaction");
});

module.exports = router;
