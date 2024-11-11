import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">scale</div>
      <ul className="navbar-links">
        <li>
          <a href="#" className="navbar-link">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="navbar-link">
            Leaderboards
          </a>
        </li>
        <li>
          <a href="#" className="navbar-link">
            Enterprise
          </a>
        </li>
        <li>
          <a href="#" className="navbar-link">
            Government
          </a>
        </li>
        <li>
          <a href="#" className="navbar-link">
            Customers
          </a>
        </li>
        <li>
          <a href="#" className="navbar-link">
            Resources
          </a>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="demo-button">Book a Demo →</button>
        <a href="#" className="login-link">
          Log In
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
