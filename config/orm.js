// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

  	// * `selectAll()`
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM ??";
		// console.log(tableInput);
		// console.log(queryString);
		connection.query(queryString, tableInput, function(err, result) {
			if (err) {console.log(err);}
			cb(result);
		});
	},


	// create: function(table, cols, vals, cb) {
	// 	var queryString = "INSERT INTO " + table;

	// 	queryString += " (";
	// 	queryString += cols.toString();
	// 	queryString += ") ";
	// 	queryString += "VALUES (";
	// 	queryString += printQuestionMarks(vals.length);
	// 	queryString += ") ";

	// 	console.log(queryString);

	// 	connection.query(queryString, vals, function(err, result) {
	// 	if (err) {
	// 		throw err;
	// 	}

	// 	cb(result);
	// 	});
	// },


  // An example of objColVals would be {name: panther, sleepy: true}
	update: function(thisid, cb) {
		//                'UPDATE products SET stock_quantity = ? WHERE item_id = ?'
		// ?? burgers, ?? devoured = ? true ?? id = ? id
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

		// connection.query(queryString, table, col1, function(err, result) {
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
