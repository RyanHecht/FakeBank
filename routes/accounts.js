var express = require('express');
var router = express.Router();

// will get all accounts
router.get('/', function(req, res) {
  res.send("Accounts!");
});

router.get('/:id', function(req, res) {
  res.send("will get account be id");
});

router.post('/:userId/:accountType/:startingBalance', function(req, res) {
  res.send("will make new account");
});

module.exports = router;
