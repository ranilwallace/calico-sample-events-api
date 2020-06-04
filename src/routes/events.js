const express = require("express");
const router = express.Router();
const eventsController = require('../controllers/events');


// Create a new Tutorial
router.post("/", eventsController.create);

// Retrieve all Tutorials
router.get("/", eventsController.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", eventsController.findOne);

// Update a Tutorial with id
router.put("/:id", eventsController.updateOne);

// Delete a Tutorial with id
router.delete("/:id", eventsController.deleteOne);

module.exports = router;
