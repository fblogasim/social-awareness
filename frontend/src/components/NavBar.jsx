import { useContext } from "react";
import { Context } from "../App.js";

export default function NavBar() {
  const [navItem, setNavItem] = useContext(Context);

  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Social Awareness
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={() => setNavItem("Home")}>
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={() => setNavItem("Campaigns")}>
                <a className="nav-link" href="#">
                  Campaigns
                </a>
              </li>
              <li className="nav-item" onClick={() => setNavItem("Login")}>
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support Local
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
