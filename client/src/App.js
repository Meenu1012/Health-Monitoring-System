import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddPatient from "./pages/AddPatient";
import HealthForm from "./pages/HealthForm";
import Reports from "./pages/Reports";
import HealthChart from "./pages/HealthChart";

function App() {
  return (
    <BrowserRouter>

      <div style={{ fontFamily: "Arial", textAlign: "center" }}>

        <header
          style={{
            padding: "20px",
            backgroundColor: "#e3f2fd",
          }}
        >

          <h1>🏥 Health Monitoring System</h1>


          <nav>

            <Link style={linkStyle} to="/">Home</Link>

            <Link style={linkStyle} to="/login">Login</Link>

            <Link style={linkStyle} to="/register">Register</Link>

            <Link style={linkStyle} to="/dashboard">Dashboard</Link>

            <Link style={linkStyle} to="/addpatient">Add Patient</Link>

            <Link style={linkStyle} to="/healthform">Health Form</Link>

            <Link style={linkStyle} to="/reports">Reports</Link>

            <Link style={linkStyle} to="/healthchart">Health Chart</Link>

          </nav>

        </header>


        <hr />


        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/addpatient" element={<AddPatient />} />

          <Route path="/healthform" element={<HealthForm />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/healthchart" element={<HealthChart />} />

        </Routes>


      </div>

    </BrowserRouter>
  );
}


const linkStyle = {
  margin: "10px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
};


export default App;