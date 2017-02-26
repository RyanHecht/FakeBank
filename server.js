var express = require('express');

var app = express();

var port = 8080

app.get('/', function(req, res, next) {
  res.send("Welcome to FakeBank Inc.");
});
