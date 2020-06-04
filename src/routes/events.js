const express = require("express");
const router = express.Router();
const eventsController = require('../controllers/events');


// Create a new Event
router.post("/", eventsController.create);

// Retrieve all Event
router.get("/", eventsController.findAll);

// Retrieve a single Event with id
router.get("/:id", eventsController.findOne);

// Update a Event with id
router.put("/:id", eventsController.updateOne);

// Delete a Event with id
router.delete("/:id", eventsController.deleteOne);

module.exports = router;
