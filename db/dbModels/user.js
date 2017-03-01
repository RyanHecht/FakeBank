var Sequelize = require('sequelize');

var db = require('../db');

module.exports = db.define('user', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
        len: {
            args: [3, 255],
            msg: "Email must be between 3 and 255 characters."
        },
        isEmail: {
            msg: "Email must be of valid format."
        }
    }
  }


})
