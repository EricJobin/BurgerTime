var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// Loads all burgers in DB - Home Page
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});

// Creates a new burger on a post request
router.post("/api/burger", function(req, res) {
	var newBurgerNameCont = req.body.name;
	burger.create(newBurgerNameCont, function(result) {
		// Send back the ID of the new quote
		res.json({ id: result.insertId });
	});
});

// Eats Burger
router.put("/api/burger/:id", function(req, res) {
	var eat = "id = " + req.params.id;
	console.log("eat burger", eat);

	burger.update(req.params.id, function(result) {
		if (result.changedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// Export routes for server.js to use.
module.exports = router;
