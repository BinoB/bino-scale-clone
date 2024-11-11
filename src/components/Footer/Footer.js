import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>PRODUCTS</h3>
          <p>Scale Data Engine</p>
          <p>Scale GenAI Platform</p>
          <p>Scale Donovan</p>
          <h3 className="new">GOVERNMENT</h3>
          <p>Defense</p>
          <p>Federal</p>
          <p>Public Sector</p>
        </div>

        <div className="footer-section">
          <h3>COMPANY</h3>
          <p>About</p>
          <p>Careers</p>
          <p>Security</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div className="footer-section">
          <h3>RESOURCES</h3>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>Customers</p>
          <p>Events</p>
          <p>Open Datasets</p>
          <p>Documentation</p>
          <p>Guides</p>
          <p>Community</p>
          <p>AI Readiness Report 2024</p>
          <p>Research</p>
        </div>
        <div className="footer-section">
          <h3>GUIDES</h3>
          <p>Data Labeling</p>
          <p>ML Model Training</p>
          <p>Diffusion Models</p>
          <p>Guide to AI for eCommerce</p>
          <p>Computer Vision Applications</p>
          <p>Large Language Models</p>
        </div>
        <div className="footer-section social">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <span className="icon">X</span>
            <span className="icon">F</span>
            <span className="icon">L</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Scale AI, Inc. All rights reserved.</p>
        <p>Terms of Use & Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
