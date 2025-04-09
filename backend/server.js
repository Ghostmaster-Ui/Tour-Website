const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ✅ Deployment-ready CORS
app.use(cors({
  origin: ["http://127.0.0.1:5500", "https://www.advitsingh-project.com"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// ✅ Routes
const openaiRoute = require("./openaiRoute");
app.use("/", openaiRoute);

const authRoutes = require('./auth');
app.use('/api', authRoutes);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection failed:", err));

// ✅ Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Server is live on port ${PORT}`);
});
