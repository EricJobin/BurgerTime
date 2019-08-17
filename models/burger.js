//Model Burger.js

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},

	create: function(newBurgerNameModel, cb) {
		orm.create(newBurgerNameModel, function(res) {
			cb(res);
		});
	},

	update: function(thisid, cb) {
		orm.update(thisid, function(res) {
			cb(res);
		});
	},

};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
