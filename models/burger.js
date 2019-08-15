//Model Burger.js

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},

	// The variables cols and vals are arrays.
	// create: function(cols, vals, cb) {
	//   orm.create("burgers", cols, vals, function(res) {
	//     cb(res);
	//   });
	// },

	update: function(thisid, cb) {
		orm.update(thisid, function(res) {
			// var testlog = [thisid, cb]
			// console.log(testlog)
			cb(res);
		});
	},

	// update: function(objColVals, condition, cb) {
	// 	orm.update("burgers", function(res) {
	// 		var testlog = [objColVals, condition, cb]
	// 		console.log(testlog)
	// 		cb(res);
	// 	});
	// },


};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
