import React from 'react';
import TeamMember from '../components/TeamMember';
import teamMembers from '../data/teamMembers';
import '../styles/pages.css';

function People() {
  // Categorize team members
  const faculty = teamMembers.filter(member => member.type === 'faculty');
  const phd = teamMembers.filter(member => member.type === 'phd');
  const masters = teamMembers.filter(member => member.type === 'masters');
  const undergrad = teamMembers.filter(member => member.type === 'undergrad');

  return (
    <div className="people-page">
      <h1>Birdlab Team</h1>
      
      <section className="faculty">
        <h2>Faculty</h2>
        <div className="team-grid">
          {faculty.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="phd-students">
        <h2>PhD Students</h2>
        <div className="team-grid">
          {phd.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="masters-students">
        <h2>Masters Students</h2>
        <div className="team-grid">
          {masters.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="undergrad-students">
        <h2>Undergraduate Students</h2>
        <div className="team-grid">
          {undergrad.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default People;