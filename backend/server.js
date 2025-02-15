require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes.js');

// Initialize the app
const app = express();
app.use(cors()); // Allow CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use('/api/events', eventRoutes); // Event routes

// Database connection   nmC3ggJA5U9GrBFg
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
