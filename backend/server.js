require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Make sure this path is correct
const userRoutes = require('./routes/userRoutes'); // Make sure this path is correct

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes); // This mounts the routes under /api/users

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error stack:', err.stack);
  console.error('Error message:', err.message);
  res.status(500).json({ message: 'Server error', details: err.message });
});

const PORT = process.env.PORT || 3000; // Ensure this matches your frontend fetch URL

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

