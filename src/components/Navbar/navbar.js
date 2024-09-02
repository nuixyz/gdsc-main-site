import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="left">
        <div className="logo">
          <img src="/dev-logo.jpeg" alt="Dev Logo" />
        </div>
        <div className="logoText">
          <div className="heading">
            <p>Google Developer Student Club</p>
          </div>
          <div className="subHeading">
            <p>Tezpur University</p>
          </div>
        </div>
      </div>

      <div className="right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="https://gdsc.community.dev">Explore Us</a>
          </li>
          <li onClick={() => alert("coming soon")}>
            <a href="#">Blogs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
