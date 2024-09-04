const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://dionatens2025:diona_01@kidswear.biltx3q.mongodb.net/kidswear?retryWrites=true&w=majority&appName=kidswear', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS
app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


