var Sequelize = require('sequelize');
var db = require('db');
var userModel = require('./dbModels/user');
var accountModel = require('./dbModels/account');
var transactionModel = require('./dbModels/transaction');

userModel.hasMany(accountModel, {as: 'Accounts'});
accountModel.hasMany(transactionModel, {as: 'Transactions'});
