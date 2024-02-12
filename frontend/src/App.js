import React from "react";
import "./styles.css";
import styled from "styled-components";
import AccountBox from "./components/accountBox/index";
import NavBar from "./components/NavBar.jsx";
import { useState, useContext, createContext } from "react";
import Campaigns from "./components/Campaigns";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PostAdvertisement from "./components/PostAdvertisement";
import PostCampaign from "./components/PostCampaign";
import Advertisements from "./components/Advertisements";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Context = createContext("Home");

export default function App() {
  const [navItem, setNavItem] = useState("Home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <>
      <Context.Provider
        value={[
          navItem,
          setNavItem,
          isAuthenticated,
          setIsAuthenticated,
          userName,
          setUserName,
        ]}
      >
        <NavBar />

        <div class="row">
          <div class="col-lg-8">
            <div class="content-main">
              {" "}
              {navItem == "Campaigns" ? (
                <Campaigns />
              ) : navItem === "Login" ? (
                <AppContainer>
                  <AccountBox />
                </AppContainer>
              ) : navItem === "Home" ? (
                <Campaigns />
              ) : navItem === "PostAdvertisement" ? (
                <PostAdvertisement />
              ) : navItem === "PostCampaign" ? (
                <PostCampaign />
              ) : navItem === "Advertisements" ? (
                <Advertisements />
              ) : null}
            </div>
          </div>
          <div class="col-lg-4 sidebar">
            <SideBar />
          </div>
        </div>
        <br />

        <Footer />
      </Context.Provider>
    </>
  );
}
