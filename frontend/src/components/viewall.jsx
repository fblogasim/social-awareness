import React, { useState, useEffect } from "react";

function Viewall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB when the component mounts
    fetchDataFromMongoDB();
  }, []);

  const fetchDataFromMongoDB = async () => {
    try {
      // Replace the URL with your server's endpoint
      const response = await fetch("http://localhost:8080/viewall/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response as JSON
      const dataFromServer = await response.json();

      // Assuming the dataFromServer is an array of objects from MongoDB
      setData(dataFromServer);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data from MongoDB:", error);
    }
  };

  return (
    <div>
      <h2>Data from MongoDB</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.fullName}</li>
          // Adjust "name" based on the structure of your MongoDB documents
        ))}
      </ul>
    </div>
  );
}

export default Viewall;
