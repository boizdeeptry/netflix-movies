import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../../assets/images/navbar/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-left__logo">
              <Link to="/">
                <div className="footer__logo">
                  <img
                    src={logo}
                    alt="This is Logo !"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <span className="footer__logo-text">Watchflix</span>
                </div>
              </Link>
            </div>
            <p className="footer-left__desc">
              Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <div className="footer-left__subscribe">
              <span className="footer-left__subscribe-heading">
                Join Newsletters
              </span>
              <input
                type="text"
                className="footer-left__subscribe-input"
                placeholder="Insert your mail here"
              />
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right__top">
              <ul className="footer-right__list">
              <span className="footer-right__heading">Product</span>
                <li className="footer-right__item">
                  <Link to="/">Movies</Link>
                  <Link to="/">TV Show</Link>
                  <Link to="/">Videos</Link>
                </li>
              </ul>
              <ul className="footer-right__list">
              <span className="footer-right__heading">Media Group</span>
                <li className="footer-right__item">
                  <Link to="/">Nice Studio</Link>
                  <Link to="/">Nice News</Link>
                  <Link to="/">Nice TV</Link>
                </li>
              </ul>
              <ul className="footer-right__list">
              <span className="footer-right__heading">Sitemap</span>
                <li className="footer-right__item">
                  <Link to="/">About</Link>
                  <Link to="/">Careers</Link>
                  <Link to="/">Press</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
