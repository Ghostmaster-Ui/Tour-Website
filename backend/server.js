const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ✅ Proper CORS setup
app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// ✅ Connect routes
const openaiRoute = require("./openaiRoute");
app.use("/", openaiRoute);

const authRoutes = require('./auth');
app.use('/api', authRoutes);

// ✅ Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection failed:", err));

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
