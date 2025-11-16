import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./src/db.js";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.route.js";

dotenv.config();

// Initialize app
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

app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
