const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema({
  height: {
    type: Number,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },

  bloodPressure: {
    type: String,
    required: true,
  },

  heartRate: {
    type: Number,
    required: true,
  },

  bloodSugar: {
    type: Number,
    required: true,
  },

  temperature: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Health", healthSchema);