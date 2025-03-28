import React from 'react';
import '../styles/research.css';

const researchAreas = [
  {
    title: "Machine Learning",
    description: "Advanced algorithms and deep learning techniques to solve complex computational problems.",
    keywords: ["Neural Networks", "Deep Learning", "Predictive Modeling"]
  },
  {
    title: "Computer Vision",
    description: "Developing intelligent systems for image and video analysis, object recognition, and visual understanding.",
    keywords: ["Image Processing", "Object Detection", "Facial Recognition"]
  },
  {
    title: "Natural Language Processing",
    description: "Exploring computational techniques for understanding, interpreting, and generating human language.",
    keywords: ["Text Analysis", "Language Models", "Sentiment Analysis"]
  },
  {
    title: "AI Ethics",
    description: "Investigating ethical considerations and responsible development of artificial intelligence technologies.",
    keywords: ["Bias Detection", "Fairness", "Transparency"]
  }
];

function Research() {
  return (
    <div className="research-page">
      <h1>Research Areas</h1>
      <div className="research-grid">
        {researchAreas.map((area, index) => (
          <div key={index} className="research-card">
            <h2>{area.title}</h2>
            <p>{area.description}</p>
            <div className="keywords">
              <strong>Keywords:</strong>
              {area.keywords.map((keyword, idx) => (
                <span key={idx} className="keyword-tag">{keyword}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Research;