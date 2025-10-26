// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

// ✅ Allow only your deployed frontend domain
app.use(
  cors({
    origin: ["https://poornata-society.vercel.app"], // your frontend domain
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://sanketagrawal6969:VuXaZhWIlZLPeW9B@subscriptioncluster1.79bbl8b.mongodb.net/anmolBhaiyaDB?retryWrites=true&w=majority&appName=subscriptionCluster1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Create Schema and Model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

// ✅ Route to add a user
app.post("/add", async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "Username and email are required" });
    }

    const newUser = new User({ username, email });
    await newUser.save();

    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ Route to get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Server is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
