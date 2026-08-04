const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// Add Patient
router.post("/add", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();

    res.status(201).json({
      message: "Patient added successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding patient",
      error: error.message,
    });
  }
});

// Get All Patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching patients",
      error: error.message,
    });
  }
});

// Update Patient
router.put("/update/:id", async (req, res) => {
  console.log("Update request received");
  console.log("Patient ID:", req.params.id);
  console.log("Updated Data:", req.body);

  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    patient.name = req.body.name;
    patient.age = req.body.age;
    patient.disease = req.body.disease;

    await patient.save();

    res.json({
      message: "Patient updated successfully",
      patient,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating patient",
      error: error.message,
    });
  }
});

// Delete Patient
router.delete("/delete/:id", async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    res.json({
      message: "Patient deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting patient",
      error: error.message,
    });
  }
});

module.exports = router;