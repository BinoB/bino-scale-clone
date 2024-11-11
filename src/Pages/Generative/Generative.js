import React from "react";
import "./Generative.css";

function Generative() {
  const aiProviders = ["OpenAI", "Adept", "Meta", "Cohere", "Anthropic"];

  return (
    <div className="app">
      <section className="ai-providers">
        <h2>GENERATIVE AI PROVIDERS WE PARTNER WITH:</h2>
        <div className="provider-logos">
          {aiProviders.map((provider) => (
            <div key={provider} className="provider-card">
              {provider}
            </div>
          ))}
        </div>
      </section>

      <section className="scale-engine">
        <button className="build-ai-btn">BUILD AI</button>
        <h1>Scale Data Engine</h1>
        <p>
          For AI teams, Scale Data Engine improves your models by improving your
          data.
        </p>
      </section>
    </div>
  );
}

export default Generative;
