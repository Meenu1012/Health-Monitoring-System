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

// Test Route
app.get("/", (req, res) => {
  res.send("Health Monitoring System Backend Running");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});