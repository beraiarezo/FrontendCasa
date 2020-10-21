import React from "react";
import { Link } from "react-router-dom";
import logo from "./icons/logo.png";
import "./style.scss";
export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="main-footer-wrapper">
          <div className="footer-about-sidebar">
            <div>
              <img src={logo} alt="logo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="footer-sitemap-section">
            <h5>Sitemap</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
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
                <a
                  href="https://www.facebook.com/"
                  alt="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="sn-i">
                <a
                  href="https://instagram.com/"
                  alt="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="sn-t">
                <a
                  href="https://twitter.com"
                  alt="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
