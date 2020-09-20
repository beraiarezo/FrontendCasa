import React from "react";
import logo from "./icons/logo.png";
import { Link } from "react-router-dom";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/organization">Organizations</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
