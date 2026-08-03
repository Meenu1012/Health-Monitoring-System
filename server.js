const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const patientRoutes = require("./routes/patientRoutes");
const userRoutes = require("./routes/userRoutes");
const healthRoutes = require("./routes/healthRoutes");

// Use Routes
app.use("/api/patients", patientRoutes);
app.use("/api/users", userRoutes);
app.use("/api/health", healthRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/healthmonitor")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test Route
app.get("/", (req, res) => {
  res.send("Health Monitoring System Backend Running");
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});