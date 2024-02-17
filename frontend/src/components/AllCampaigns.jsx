import React from "react";
import { useState, useContext, createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function AllCampaigns() {
  const [entries, setEntries] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const [Campaign, setCampaign] = useState(null);
  const [rendered, setRendered] = useState(false);

  //fetch images when the component is mounted
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
                <div className="card" key={entry._id}>
                  <strong>{entry.title}</strong>{" "}
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
