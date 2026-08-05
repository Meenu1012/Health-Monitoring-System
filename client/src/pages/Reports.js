import React, { useEffect, useState } from "react";

function Reports() {
  const [patients, setPatients] = useState([]);
  const [healthData, setHealthData] = useState([]);
  const [editPatient, setEditPatient] = useState(null);

  useEffect(() => {
    loadPatients();
    loadHealthData();
  }, []);

  const loadPatients = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/patients`)
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.log(err));
  };

  const loadHealthData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/health`)
      .then((res) => res.json())
      .then((data) => setHealthData(data))
      .catch((err) => console.log(err));
  };

  const updatePatient = () => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/patients/update/${editPatient._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editPatient),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setEditPatient(null);
        loadPatients();
      })
      .catch((err) => console.log(err));
  };

  const deletePatient = (id) => {
    if (!window.confirm("Are you sure you want to delete this patient?")) {
      return;
    }

    fetch(`${process.env.REACT_APP_API_URL}/api/patients/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        loadPatients();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Health Reports</h1>

      {editPatient && (
        <div>
          <h3>Edit Patient</h3>

          <input
            type="text"
            value={editPatient.name}
            onChange={(e) =>
              setEditPatient({
                ...editPatient,
                name: e.target.value,
              })
            }
          />

          <br /><br />

          <input
            type="number"
            value={editPatient.age}
            onChange={(e) =>
              setEditPatient({
                ...editPatient,
                age: e.target.value,
              })
            }
          />

          <br /><br />

          <input
            type="text"
            value={editPatient.disease}
            onChange={(e) =>
              setEditPatient({
                ...editPatient,
                disease: e.target.value,
              })
            }
          />

          <br /><br />

          <button onClick={updatePatient}>
            Update
          </button>

          <br /><br />
        </div>
      )}

      <h2>Patient Details</h2>

      <table
        border="1"
        align="center"
        cellPadding="10"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Disease</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.disease}</td>
              <td>{patient.phone}</td>

              <td>
                <button onClick={() => setEditPatient(patient)}>
                  Edit
                </button>

                {" "}

                <button onClick={() => deletePatient(patient._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px" }}>
        Health Data Records
      </h2>

      <table
        border="1"
        align="center"
        cellPadding="10"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Height</th>
            <th>Weight</th>
            <th>Blood Pressure</th>
            <th>Heart Rate</th>
            <th>Blood Sugar</th>
            <th>Temperature</th>
          </tr>
        </thead>

        <tbody>
          {healthData.map((health) => (
            <tr key={health._id}>
              <td>{health.height} cm</td>
              <td>{health.weight} kg</td>
              <td>{health.bloodPressure}</td>
              <td>{health.heartRate}</td>
              <td>{health.bloodSugar}</td>
              <td>{health.temperature}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Reports;