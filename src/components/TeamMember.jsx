import React from 'react';
import '../styles/team-member.css';

function TeamMember({ member }) {
  return (
    <div className="team-member-card">
      <div className="member-image">
        <img 
          src={member.photo || '/default-avatar.png'} 
          alt={`${member.name} profile`} 
        />
      </div>
      <div className="member-details">
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-email">{member.email}</p>
        
        {member.researchInterests && (
          <div className="research-interests">
            <strong>Research Interests:</strong>
            <ul>
              {member.researchInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        )}
        
        {member.googleScholar && (
          <a 
            href={member.googleScholar} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="scholar-link"
          >
            Google Scholar
          </a>
        )}
      </div>
    </div>
  );
}

export default TeamMember;