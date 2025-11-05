const express = require("express");
const connectDB = require('./config/db');
const Project = require('./routes/project_route');
const cors = require('cors'); // Import cors
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS for all domains
app.use(cors({ origin: '*' }));

// Middleware
app.use(express.json());

app.use('/api', Project);

app.get('/', (req, res) => {
    res.status(200).json({ message: "server is working Done." });
});

const PORT = process.env.PORT || 4012;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


