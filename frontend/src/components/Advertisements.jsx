import React from "react";
import { useState } from "react";

function Advertisements() {
  const [selectedAd, setSelectedAd] = useState(null);
  function showDetails() {}
  // Sample data for the Advertisements object
  const AdvertisementsData = {
    ad1: {
      title: "Advertisement 1",
      description: "This is the first ad. description",
    },
    ad2: {
      title: "Advertisement 2",
      description: "This is the second ad. description",
    },
    ad3: {
      title: "Advertisement 3",
      description: "This is the third ad. description",
    },
    ad4: {
      title: "Advertisement 4",
      description: "This is the fourth ad. description",
    },
  };

  return (
    <>
      <div>
        <h2>Advertisements</h2>
        <ul>
          <div className="row">
            {Object.keys(AdvertisementsData).map((key) => (
              <div className="col-sm-4">
                <div className="card" key={key}>
                  <strong>{AdvertisementsData[key].title}</strong>{" "}
                  <img src={require("../images/Placeholder.png")} />
                  <a class="btn-primary" onClick={() => setSelectedAd(key)}>
                    Learn More{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
      <div className="details">
        {selectedAd && (
          <div>
            <h3>{AdvertisementsData[selectedAd].title}</h3>
            <p>{AdvertisementsData[selectedAd].description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Advertisements;
