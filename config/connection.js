// Set up MySQL connection.
var mysql = require("mysql2");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "newuser",
//   password: "r00tr00t",
//   database: "burgers_db"
// });

var connection;

//Jaws DB Info:

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'newuser',
		password: 'r00tr00t',
		database: 'burgers_db'
	});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
