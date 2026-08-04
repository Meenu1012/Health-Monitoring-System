const express = require("express");
const router = express.Router();
const Health = require("../models/Health");

// Add Health Data
router.post("/add", async (req, res) => {
  try {
    const health = new Health(req.body);
    await health.save();

    res.json({
      message: "Health data saved successfully",
      health,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving health data",
      error: error.message,
    });
  }
});

// Get All Health Data
router.get("/", async (req, res) => {
  try {
    const healthData = await Health.find();
    res.json(healthData);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching health data",
      error: error.message,
    });
  }
});

module.exports = router;