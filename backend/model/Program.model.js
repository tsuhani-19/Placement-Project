// models/Program.js
const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  programName: { type: String, required: true },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
