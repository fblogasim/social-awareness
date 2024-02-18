//this  component renders all approved campaigns and provides details
import React from "react";
import { useState, useContext, createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function AllCampaigns() {
  //this variable stores campaign entries sent by the server
  const [entries, setEntries] = useState([]);
  //this variable keeps track of the campaign selected by the user
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  //fetch campaigns when the component is mounted
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:8080/campaigns");
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <>
      <div>
        <h2>All Campaigns</h2>
        <ul>
          <div className="row">
            {entries.map((entry) => (
              <div className="col-sm-4">
                <div className="card post" key={entry._id}>
                  <strong>{entry.title}</strong>{" "}
                  {/* the splice function is used to get the correct relative path for the image */}
                  <img src={entry.imageUrl.slice(18)} alt={entry.title} />
                  <a
                    class="btn-primary"
                    onClick={() => setSelectedCampaign(entry)}
                  >
                    Learn More{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
          {console.log(selectedCampaign)}
        </ul>
      </div>
      <div className="details">
        {selectedCampaign !== null ? (
          <div className="card">
            <h3>{selectedCampaign.title}</h3>
            <p>{selectedCampaign.description}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}
