import React from "react";
import "./ScalePage.css";

function ScalePage() {
  return (
    <div className="ai-section">
      <div className="ai-description">
        <div className="description-block">
          <h2>Fine-Tuning and RLHF</h2>
          <p>
            Adapt best-in-class foundation models to your business and your
            specific data to build sustainable, successful AI programs and data
            from your enterprise.
          </p>
        </div>
        <hr />
        <div className="description-block">
          <h2>Foundation Models</h2>
          <p>
            Scale partners or integrates with all of the leading AI models, from
            open-source to closed-source, including OpenAI, Google, Meta,
            Cohere, and more.
          </p>
        </div>
        <hr />
        <div className="description-block">
          <h2>Enterprise Data</h2>
          <p>
            Scale's Data Engine enables you to integrate your enterprise data
            into the fold of these models, providing the base for long-term
            strategic differentiation.
          </p>
        </div>
      </div>
      <div className="ai-graphic">
        <div className="base-platform">
          <div className="foundation-label">RLHF</div>
          <div className="models">
            <div className="model-group">
              <div className="model">Claude 3.5</div>
              <div className="pillar marketing">Marketing</div>
            </div>
            <div className="model-group">
              <div className="model">Llama 3.1</div>
              <div className="pillar finance">Financial Services</div>
            </div>
            <div className="model-group">
              <div className="model">GPT-4.0</div>
              <div className="pillar insurance">Insurance</div>
            </div>
            <div className="model-group">
              <div className="model">Cohere Rerank</div>
              <div className="pillar retail">Retail</div>
            </div>
            <div className="model-group">
              <div className="model">Gemini 1.5 Pro</div>
              <div className="pillar ecommerce">E-Commerce</div>
            </div>
            <div className="model-group">
              <div className="model">Mistral Large 2</div>
              <div className="pillar legal">Legal</div>
            </div>
          </div>
          <div className="platform-label">Scale Data Engine</div>
        </div>
      </div>
    </div>
  );
}

export default ScalePage;
