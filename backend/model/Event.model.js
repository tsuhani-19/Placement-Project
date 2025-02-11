// models/Event.j
const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
  programName: { type: String, required: true },
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  description: { type: String },
  location: { type: String },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
