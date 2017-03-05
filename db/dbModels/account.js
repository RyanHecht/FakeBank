var Sequelize = require('sequelize');

var db = require('../db');

module.exports = db.define('account', {
  accountId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  accountType: {
    type: Sequelize.ENUM('checking', 'savings'),
    allowNull: false,
  },

  balance: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0
  }
})
