import React from "react";
import "./Customer.css";

const Customer = () => {
  return (
    <div className="testimonial-page">
      <div className="header">
        <p className="customers">CUSTOMERS</p>
        <h1>
          We have changed the game
          <br />
          of AI Evaluations - hear
          <br />
          it from Industry Leaders.
        </h1>
        <p className="subheader">
          Scale’s SEAL Leaderboards are bringing trust to AI; learn from
          <br />
          experts why expert-driven private evaluations are so important.
        </p>
      </div>
      <div className="testimonial">
        <p>
          “We’re going to need a lot more investment in high-quality evals
          <br />
          and benchmarks to help us understand
          <br />
          the actual comparativeutility of the various models.
          <br />
          This new set of private evals and leaderboards from Scale are great to
          see”
        </p>
        <p className="author">Nat Friedman</p>
        <p className="author-title">
          Entrepreneur and Investor, and Former CEO of GitHub
        </p>
      </div>
    </div>
  );
};

export default Customer;
