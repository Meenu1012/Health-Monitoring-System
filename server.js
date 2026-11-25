const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const patientRoutes = require("./server/routes/patientRoutes");
const userRoutes = require("./server/routes/userRoutes");
const healthRoutes = require("./server/routes/healthRoutes");

// Use Routes
app.use("/api/patients", patientRoutes);
app.use("/api/users", userRoutes);
app.use("/api/health", healthRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Health Monitoring System Backend Running");
});

// Start Server after MongoDB connection
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });