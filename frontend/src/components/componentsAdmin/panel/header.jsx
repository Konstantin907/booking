import React from "react";
import "./panel.scss";
import { Navigate, useNavigate } from "react-router-dom";

function Header() {
  //temporal variables :
  const name = "Abraham Velazquez";

  const navigate = useNavigate();

  return (
    <div className="headerSection">
      <div className="leftSiteHeader">
        <div className="welcomeUser">
          <p className="welcomePhrase">Welcome, {name}</p>
        </div>
        <div className="searchBar">
          <form action="/search" method="get" className="searchForm">
            <input
              type="text"
              name="q"
              placeholder="Search..."
              className="searchInput"
            />
            <span className="searchIcon">&#128269;</span>
          </form>
        </div>
      </div>
      <div className="rigthSiteHeader">
        <div className="icons">
          <img
            src={process.env.PUBLIC_URL + "/images/notifications.png"}
            alt="notifications charging..."
          />
          <img
            src={process.env.PUBLIC_URL + "/images/settings.png"}
            alt="settings charging..."
          />
        </div>
        <div className="userLogged">
          <img
            src={process.env.PUBLIC_URL + "/images/client.png"}
            alt="client charging..."
          />
          <p className="adminAccess" onClick={() => navigate("/")}>
            Home<span>&#10132;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
