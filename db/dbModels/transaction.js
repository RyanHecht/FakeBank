var Sequelize = require('sequelize')
var db = require('../db')

module.exports = db.define('transaction', {
	transactionID : {
		type: Sequelize.INTEGER
		primaryKey: true,
		autoIncrement: true
	}
	recID: {
		type: Sequelize.INTEGER,
		allownull: false
	},
	sendID: {
		type: Sequelize.INTEGER,
		allownull: false
	},
	amount: {
		type: Sequelize.INTEGER,
		allownull: false
	},
	text: {
		type: Sequelize.String,
		allownull: false
	}
	date: { 
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW()
	}

})