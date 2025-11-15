// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/db");

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());


app.use(
  cors({
    origin: ["https://poornata-society.vercel.app", "http://localhost:5173"], 
    methods: ["GET", "POST"],
    credentials: true,
  })
);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
