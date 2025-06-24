import React, { useState, useEffect } from "react"; // Add useEffect
import { Table, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getMasterData = async () => {
    try {
      const response = await fetch(
        "https://ai-height-estimate.onrender.com/master-data"
      );
      const data = await response.json();
      console.log("Master Data:", data);
    } catch (error) {
      console.error("Error fetching master data:", error);
    }
  };
  getMasterData();

  // Empty dependency array: run once

  // fetch("https://dummyjson.com/test")
  //   .then((res) => res.json())
  //   .then(console.log);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>AWID</th>
          <th>Age</th>
          <th>Health Status</th>
          <th>Category</th>
          <th>BMI</th>
          <th>Height (cm)</th>
          <th>Weight (kg)</th>
          <th>Area</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.awid}>
            <td>{item.awid}</td>
            <td>{item.age}</td>
            <td>{item.health_status}</td>
            <td>{item.category_type}</td>
            <td>{item.bmi}</td>
            <td>{item.height}</td>
            <td>{item.weight}</td>
            <td>{item.area}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Dashboard;
