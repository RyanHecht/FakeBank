var express = require('express');
var accountRoutes = require('./routes/accounts');
var userRoutes = require('./routes/users');
var transactionRoutes = require('./routes/transactions');
var db = require('./db/db');
var app = express();

var port = 8080;

app.get('/', function(req, res, next) {
  res.send("Welcome to FakeBank Inc.");
});

app.use("/users", userRoutes);
app.use("/accounts", accountRoutes);
app.use("/transactions", transactionRoutes);


app.listen(port, function() {
  console.log("Server running on port " + port);
  db.sync();
});
