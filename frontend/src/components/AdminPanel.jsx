import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function PostApproval() {
  //this variable stores advertisement entries sent by the server
  const [entries, setEntries] = useState([]);
  //this variable keeps track of the advertisement selected by the user
  const [selectedAd, setSelectedAd] = useState(null);

  //fetch pending campaigns when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/pendingCampaigns",
        );
        setEntries(response.data);
        alert(entries);
      } catch (error) {
        console.error("Error fetching pending campaigns:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Campaign Approval</h2>
      {entries.map((entry) => (
        <div key={entry._id} className="card">
          <p>{entry.title}</p>
	  <p className = "text-info">{entry.description}</p>
          <img src={entry.imageUrl.slice(18)} alt={entry.title} />
          <button
           
            className="button success"
          >
            Approve
          </button>
          <button
            className="button danger"
          >
            Decline
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostApproval;
