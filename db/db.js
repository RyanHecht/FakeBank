var Sequelize = require('sequelize');

module.exports = new Sequelize('postgres://localhost:5432/fakebank', {
  logging: false,
  native: true
})
