const Events = require("../models/event");

// Create and Save a new Tutorial
exports.create = async (req, res) => {
	try {
        let e = new Events(req.body);
        let event = await e.save();

		res.status(200).send({
			success: true,
			data: event,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error,
		});
	}
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
	try {
        let events = await Events.find();
		res.status(200).send({
			success: true,
			data: events,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: 'Could not fetch all events.',
		});
	}
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        let event = await Events.findById(id);
		res.status(200).send({
			success: true,
			data: event,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: 'Event does not exist.',
		});
	}
};

// Update a Tutorial by the id in the request
exports.updateOne = async (req, res) => {
    try {
        const id = req.params.id;
        await Events.findByIdAndUpdate(id, req.body, {useFindAndModify: false});
		res.status(200).send({
            success: true,
            message: 'Successfully updated event.'
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: 'Event does not exist.',
		});
	}
};

// Delete a Tutorial with the specified id in the request
exports.deleteOne = async (req, res) => {
    try {
        const id = req.params.id;
        await Events.findByIdAndDelete(id);
		res.status(200).send({
			success: true,
			message: 'Successfully deleted event.',
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: 'Could not delete event.',
		});
	}
};
