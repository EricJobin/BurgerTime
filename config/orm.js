// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

  	// This function selects all burgers in the DB for display
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, tableInput, function(err, result) {
			if (err) {console.log(err);}
			cb(result);
		});
	},

	//This function will add a new burger into the DB
	create: function(newBurgerNameORM, cb) {
		var queryString = `INSERT INTO burgers (burger_name) VALUES (?)`
		connection.query(queryString, [newBurgerNameORM], function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// This updates eaten burgers to dvoured true in DB
	update: function(thisid, cb) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, ['burgers', 'devoured', true, 'id', thisid], function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
};

// Export the orm object for the model (burger.js).
module.exports = orm;
