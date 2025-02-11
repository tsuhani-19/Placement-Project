// routes/eventRoutes.js
const express = require('express');
const Event = require('../models/Event'); // Import Event model
const router = express.Router();

// Create Event
router.post('/events', async (req, res) => {
  try {
    const { programName, eventName, eventDate, description, location } = req.body;
    const newEvent = new Event({ programName, eventName, eventDate, description, location });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating event' });
  }
});

// Get All Events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching events' });
  }
});

// Update Event
router.put('/events/:id', async (req, res) => {
  try {
    const eventId = req.params.id;
    const { programName, eventName, eventDate, description, location } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { programName, eventName, eventDate, description, location },
      { new: true }
    );
    res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating event' });
  }
});

// Delete Event
router.delete('/events/:id', async (req, res) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting event' });
  }
});

module.exports = router;
