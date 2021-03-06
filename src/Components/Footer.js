import React from "react";
import "../Styles/Components/Footer.scss";
import githubIcon from "../Icons/Github.svg";
import twitterIcon from "../Icons/Twitter.svg";
import LinkedinIcon from "../Icons/Linkedin.svg";

function Footer() {
  return (
    <div className="footer__container">
      <footer className="footer">
        <div className="footer__copy">
          <h5 className="footer__copy--text">@ramonruizdev</h5>
        </div>
        <ul className="hero__list">
          <li className="hero__list--item">
            <a
              href="https://www.linkedin.com/in/ramonruizdev/"
              target="__blank"
              className="hero__list--link"
            >
              <img
                className="hero__list--img"
                alt="Social Icon"
                src={LinkedinIcon}
              />
            </a>
          </li>
          <li className="hero__list--item">
            <a
              href="https://github.com/ramonruizdev"
              target="__blank"
              className="hero__list--link"
            >
              <img
                className="hero__list--img"
                alt="Social Icon"
                src={githubIcon}
              />
            </a>
          </li>
          <li className="hero__list--item">
            <a
              href="https://twitter.com/ramonruizdev"
              target="__blank"
              className="hero__list--link"
            >
              <img
                className="hero__list--img"
                alt="Social Icon"
                src={twitterIcon}
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
