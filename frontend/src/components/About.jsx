import React from 'react';

function About() {
  return (
    <>
      <div className="about">
        <h2 className="about-title">Meet Our Team</h2>
        <div className="about-body">
          <div className="team-card">
            <img className="team-photo" src="/images/2cbd21e7-7fdc-4115-ab08-16cee68912a4.jfif" alt="Team Member 1" />
            <h3 className="team-name">John Doe</h3>
            <p className="team-role">CEO</p>
            <p className="team-bio">
              John is a visionary leader with a passion for innovation and a knack for solving problems.
            </p>
          </div>
          <div className="team-card">
            <img className="team-photo" src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3 className="team-name">Jane Smith</h3>
            <p className="team-role">CTO</p>
            <p className="team-bio">
              Jane is an expert in technology, leading our engineering team to build cutting-edge solutions.
            </p>
          </div>
          <div className="team-card">
            <img className="team-photo" src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3 className="team-name">Michael Lee</h3>
            <p className="team-role">Marketing Head</p>
            <p className="team-bio">
              Michael creates and implements marketing strategies that drive brand awareness and growth.
            </p>
          </div>
          <div className="team-card">
            <img className="team-photo" src="https://via.placeholder.com/150" alt="Team Member 4" />
            <h3 className="team-name">Emily Davis</h3>
            <p className="team-role">Product Manager</p>
            <p className="team-bio">
              Emily is passionate about product development, ensuring user-centered designs and smooth executions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
