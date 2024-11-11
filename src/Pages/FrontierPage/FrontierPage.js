import React from "react";
import "./FrontierPage.css";

const FrontierPage = () => {
  const cards = [
    {
      title: "SEAL Leaderboards: Expert-Driven Private Evaluations",
      category: "Leaderboards",
      icon: "🔗",
    },
    {
      title: "LLMs Easily Jailbroken as Browser Agents",
      category: "Research",
      icon: "🔗",
    },
    {
      title: "Multi-Turn Human Jailbreaks on LLM Defenses",
      category: "Research",
      icon: "🔗",
    },
    {
      title: "Measuring and Reducing Malicious Use With Unlearnung",
      category: "Research",
      icon: "🔗",
    },
    {
      title: "Examination of LLM Performance on Grade School Arithmetic",
      category: "Research",
      icon: "🔗",
    },
    {
      title: "Goal-Conditioned Representations for Reward Models",
      category: "Research",
      icon: "🔗",
    },
  ];

  return (
    <div className="slide-card-container">
      <h1 className="section-title">Frontier AI Research</h1>
      <p className="section-description">
        SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative
        to improve model capabilities through challenging private evaluations
        and novel research.
      </p>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <div className="card-category">{card.category}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-icon">{card.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontierPage;
