var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema({
	title: { type: String, required: true }, // String is shorthand for {type: String}
	description: String,
	attendees: String,
	startDate: { type: Date, required: true },
	endDate: { type: Date },
	allDay: { type: Boolean, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
