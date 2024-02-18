import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Advertisements() {
  //this variable stores advertisement entries sent by the server
  const [entries, setEntries] = useState([]);
  //this variable keeps track of the advertisement selected by the user
  const [selectedAd, setSelectedAd] = useState(null);

  //fetch advertisment when the component is mounted
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/advertisements",
        );
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <div>
        <h2>Advertisements</h2>
        <ul>
          <div className="row">
            {entries.map((entry) => (
              <div className="col-sm-4">
                <div className="card post" key={entry._id}>
                  <strong>{entry.title}</strong>{" "}
                  {/* the splice function is used to get the correct relative path for the image */}
                  <img src={entry.imageUrl.slice(18)} alt={entry.title} />
                  <a class="btn-primary" onClick={() => setSelectedAd(entry)}>
                    Learn More{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
          {console.log(selectedAd)}
        </ul>
      </div>

      <div className="details">
        {selectedAd !== null ? (
          <div className="card">
            <h3>{selectedAd.title}</h3>
            <p>{selectedAd.description}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Advertisements;
