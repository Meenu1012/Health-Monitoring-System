import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);

        if (data.message === "Login successful") {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={user.password}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={loginUser}>
        Login
      </button>
    </div>
  );
}

export default Login;