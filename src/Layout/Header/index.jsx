import React from "react";
import logo from "./icons/logo.png";
import { NavLink, Link } from "react-router-dom";

import style from "./style.module.scss";
export const Header = () => {
  return (
    <header className={style.mainHeader}>
      <div className="container">
        <div className={style.headerLayout}>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={style.navigation}>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName={style.isActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorites" activeClassName={style.isActive}>
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
