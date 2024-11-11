require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const contactsRoute = require('./routes/contactsRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => 
        console.log('Connected to MongoDB'))
    .catch(error => console.error('Failed to connect to MongoDB:', error))

app.use(express.json());

// API route for contacts data
app.use('/api/contacts', contactsRoute);



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});