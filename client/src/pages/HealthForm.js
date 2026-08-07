import React, { useState } from "react";

function HealthForm() {
  const [health, setHealth] = useState({
    height: "",
    weight: "",
    bloodPressure: "",
    heartRate: "",
    bloodSugar: "",
    temperature: "",
  });

  const handleChange = (e) => {
    setHealth({
      ...health,
      [e.target.name]: e.target.value,
    });
  };

  const saveHealthData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/health/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(health),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to save health data");
        }
        return res.json();
      })
      .then((data) => {
        alert(data.message);

        setHealth({
          height: "",
          weight: "",
          bloodPressure: "",
          heartRate: "",
          bloodSugar: "",
          temperature: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Error saving health data");
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Health Monitoring</h2>

      <input
        type="number"
        name="height"
        placeholder="Height (cm)"
        value={health.height}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="number"
        name="weight"
        placeholder="Weight (kg)"
        value={health.weight}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="text"
        name="bloodPressure"
        placeholder="Blood Pressure"
        value={health.bloodPressure}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="number"
        name="heartRate"
        placeholder="Heart Rate"
        value={health.heartRate}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="number"
        name="bloodSugar"
        placeholder="Blood Sugar"
        value={health.bloodSugar}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="number"
        name="temperature"
        placeholder="Body Temperature (°C)"
        value={health.temperature}
        onChange={handleChange}
      />
      <br />
      <br />

      <button onClick={saveHealthData}>
        Save Health Data
      </button>
    </div>
  );
}

export default HealthForm;