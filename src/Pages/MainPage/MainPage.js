import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="graphic-container">
      <h1 className="headline">
        Power <span className="gov-ai">Government AI</span>{" "}
        <span className="enterprise-ai">
          Enterprise AI <br />
        </span>{" "}
        With Your Data
      </h1>
      <p className="description">
        Make the best models with the best data. Scale Data Engine powers nearly
        every major foundation
        <br /> model, and with Scale GenAI Platform, leverages your enterprise
        data to unlock the value of AI.
      </p>
      <div className="button-container">
        <button className="button demo-button">Book a Demo →</button>
        <button className="button ai-button">Build AI →</button>
      </div>
      <p className="subtext">
        Scale works with Generative AI Companies, U.S. Government Agencies &
        Enterprises
      </p>
      <div className="logos-container">
        <ul className="partner-list">
          <li>U.S. Army</li>
          <li>U.S. Air Force</li>
          <li>Defense Innovation Unit</li>
          <li>CDAO</li>
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
