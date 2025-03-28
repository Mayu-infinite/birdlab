import React from 'react';
import '../styles/publications.css';

const publications = [
  {
    title: "Advanced Deep Learning Techniques for Image Recognition",
    authors: ["M. Singh", "P. Sharma", "R. Kumar"],
    journal: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: 2023,
    link: "#"
  },
  {
    title: "Ethical Considerations in AI Development",
    authors: ["P. Sharma", "M. Singh"],
    journal: "Journal of Artificial Intelligence Ethics",
    year: 2022,
    link: "#"
  },
  {
    title: "Natural Language Processing for Sentiment Analysis",
    authors: ["R. Kumar", "P. Sharma"],
    journal: "ACM Computing Surveys",
    year: 2023,
    link: "#"
  }
];

function Publications() {
  return (
    <div className="publications-page">
      <h1>Research Publications</h1>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div key={index} className="publication-card">
            <h2>{pub.title}</h2>
            <p className="authors">
              {pub.authors.join(", ")}
            </p>
            <p className="journal">
              {pub.journal}, {pub.year}
            </p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
              View Publication
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;