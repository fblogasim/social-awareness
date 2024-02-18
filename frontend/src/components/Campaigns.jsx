//this component renders a static carousel of featured campaigns

import { useState } from "react";
import AllCampaigns from "./AllCampaigns.jsx";

export default function Campaigns() {
  const [show, setShow] = useState(false);

  //this function toggles the setShow variable
  //this shows/ hides campaigns
  function toggleState() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <>
      <div className="jumbo-container">
        <div class="mt-4 p-5 text-dark rounded">
          <h2>
            "Unite for Change: Empowering Hearts, Transforming Lives, Building a
            Better Tomorrow Together."
          </h2>
        </div>
      </div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src={require("../images/Campaign1.png")}
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="overlay">
              <h5>Campaign 1 </h5>
              <p>This is the overlay for slide 1.</p>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src={require("../images/Campaign2.png")}
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="overlay">
              <h5>Campaign 2</h5>
              <p>This is the overlay for slide 2.</p>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src={require("../images/Campaign3.png")}
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="overlay">
              <h5>Campaign 3</h5>
              <p>This is the overlay for slide 3.</p>
            </div>
          </div>
        </div>
        {/* View More Button */}
        <a
          className="btn btn-primary view-more"
          href="#"
          role="button"
          onClick={() => toggleState()}
        >
          {show ? "Hide" : "View More"}
        </a>
        {/* Previous and Next buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>{show ? <AllCampaigns /> : null}</div>
    </>
  );
}
