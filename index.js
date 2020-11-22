const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const eventsRouter = require('./src/routes/events');

const app = express();
const mongoose = require("mongoose");

mongoose
	.connect('', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to the database!");
	})
	.catch((err) => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	});

// var corsOptions = {
// 	origin: "http://localhost:8081",
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to the sample event api." });
});

app.use('/events', eventsRouter);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
