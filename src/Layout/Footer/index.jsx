import React from "react";
import "./style.scss";
import logo from "./icons/logo.png";
export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="main-footer-wrapper">
          <div className="footer-about-section">
            <div>
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
          </div>
          <div className="footer-sitemap-section">
            <h5>Sitemap</h5>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Organizations</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact-information">
            <h5>Contact us</h5>
            <ul>
              <li>Phone: (+995) 555 654 555</li>
              <li>Email: beraiarezo@gmail.com</li>
            </ul>
          </div>
          <div className="social-network-section">
            <h5>Find us</h5>
            <ul>
              <li className="sn-f">
                <a href="">Facebook</a>
              </li>
              <li className="sn-i">
                <a href="">Instagram</a>
              </li>
              <li className="sn-t">
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
