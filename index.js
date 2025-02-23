// # main index file 
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require("./routes/auth");
const admissionRoutes = require("./routes/admission");
const orderRoutes = require("./routes/create-order");
const cors = require('cors');

const app = express();
dotenv.config();

// Middleware for parsing request bodies
app.use(express.json()); // Use Express's built-in JSON parser

// ✅ Enable CORS for frontend
app.use(cors({
    origin: 'http://localhost:3000',  // Allow frontend URL
    credentials: true,  // Allow cookies/auth headers
    methods: 'GET,POST,PUT,DELETE'  // Allowed methods
}));

// Use auth routes from auth.js
app.use('/auth', authRoutes);
app.use('/admission', admissionRoutes);
app.use('/order', orderRoutes);

// Start the server
const PORT = process.env.PORT || 3000; // Use a default port if the environment variable is not set
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});