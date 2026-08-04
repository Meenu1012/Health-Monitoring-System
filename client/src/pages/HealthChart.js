import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function HealthChart() {

  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setHealthData(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>Health Monitoring Chart</h1>

      <LineChart
        width={700}
        height={400}
        data={healthData}
      >

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="_id" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Line
          type="monotone"
          dataKey="heartRate"
          stroke="#8884d8"
          name="Heart Rate"
        />

        <Line
          type="monotone"
          dataKey="bloodSugar"
          stroke="#82ca9d"
          name="Blood Sugar"
        />

      </LineChart>

    </div>
  );
}

export default HealthChart;