import React from "react";
import logo from "./icons/logo.png";
import "./style.scss";
export const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-layout">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Organizations</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
