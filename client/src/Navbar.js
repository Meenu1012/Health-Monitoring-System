import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0d6efd",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <Link to="/" style={{ color: "white", margin: "10px" }}>
        Home
      </Link>

      <Link to="/login" style={{ color: "white", margin: "10px" }}>
        Login
      </Link>

      <Link to="/register" style={{ color: "white", margin: "10px" }}>
        Register
      </Link>

      <Link to="/dashboard" style={{ color: "white", margin: "10px" }}>
        Dashboard
      </Link>

      <Link to="/addpatient" style={{ color: "white", margin: "10px" }}>
        Add Patient
      </Link>

      <Link to="/healthform" style={{ color: "white", margin: "10px" }}>
        Health Form
      </Link>

      <Link to="/reports" style={{ color: "white", margin: "10px" }}>
        Reports
      </Link>
    </nav>
  );
}

export default Navbar;