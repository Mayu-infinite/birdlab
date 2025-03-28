import React from 'react';
import '../styles/collaborations.css';

const collaborations = [
  {
    institution: "Stanford University",
    department: "Computer Science Department",
    focus: "Machine Learning Research",
    year: 2022
  },
  {
    institution: "MIT",
    department: "Media Lab",
    focus: "AI Ethics and Human-AI Interaction",
    year: 2023
  },
  {
    institution: "Google AI",
    department: "Research Division",
    focus: "Advanced Neural Network Architectures",
    year: 2023
  }
];

function Collaborations() {
  return (
    <div className="collaborations-page">
      <h1>Research Collaborations</h1>
      <div className="collaborations-grid">
        {collaborations.map((collab, index) => (
          <div key={index} className="collaboration-card">
            <h2>{collab.institution}</h2>
            <p><strong>Department:</strong> {collab.department}</p>
            <p><strong>Research Focus:</strong> {collab.focus}</p>
            <p><strong>Collaboration Year:</strong> {collab.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collaborations;