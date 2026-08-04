import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.log(err));


    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setHealthData(data))
      .catch((err) => console.log(err));

  }, []);


  const logout = () => {
    alert("Logged out successfully");
    navigate("/login");
  };


  const latestHealth =
    healthData.length > 0
      ? healthData[healthData.length - 1]
      : null;


  return (

    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>🏥 Health Monitoring Dashboard</h1>

      <h2>Welcome to Health Monitoring System</h2>


      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px"
      }}>


        <div style={{
          border: "1px solid black",
          padding: "20px",
          width: "180px"
        }}>
          <h3>Patients</h3>
          <h2>{patients.length}</h2>
        </div>


        <div style={{
          border: "1px solid black",
          padding: "20px",
          width: "180px"
        }}>
          <h3>Heart Rate</h3>
          <h2>
            {latestHealth ? latestHealth.heartRate : "N/A"}
          </h2>
        </div>


        <div style={{
          border: "1px solid black",
          padding: "20px",
          width: "180px"
        }}>
          <h3>Blood Sugar</h3>
          <h2>
            {latestHealth ? latestHealth.bloodSugar : "N/A"}
          </h2>
        </div>


        <div style={{
          border: "1px solid black",
          padding: "20px",
          width: "180px"
        }}>
          <h3>Temperature</h3>
          <h2>
            {latestHealth ? latestHealth.temperature : "N/A"}
          </h2>
        </div>


      </div>



      <h3 style={{ marginTop: "40px" }}>
        Quick Actions
      </h3>


      <Link to="/addpatient">
        <button>Add Patient</button>
      </Link>

      <br /><br />


      <Link to="/healthform">
        <button>Health Form</button>
      </Link>

      <br /><br />


      <Link to="/reports">
        <button>View Reports</button>
      </Link>

      <br /><br />


      <Link to="/healthchart">
        <button>View Health Chart</button>
      </Link>

      <br /><br />


      <button onClick={logout}>
        Logout
      </button>


    </div>

  );
}

export default Dashboard;