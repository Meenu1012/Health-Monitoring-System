const registerUser = () => {
  console.log("API URL:", process.env.REACT_APP_API_URL);

  fetch(`${process.env.REACT_APP_API_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data.message);

      setUser({
        name: "",
        email: "",
        password: "",
      });
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Registration failed");
    });
};