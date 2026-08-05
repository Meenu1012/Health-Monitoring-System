import React, { useState } from "react";

function AddPatient() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
    phone: "",
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://health-monitoring-system-0vmd.onrender.com/api/patients/add",  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patient),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("Error adding patient");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Add Patient</h1>

      <input
        type="text"
        name="name"
        placeholder="Patient Name"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="gender"
        placeholder="Gender"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="disease"
        placeholder="Disease"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>Add Patient</button>
    </div>
  );
}

export default AddPatient;