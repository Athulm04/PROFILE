import React from "react";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>
        My <span className="highlight">Skills</span>
      </h2>
      <p className="skills-tagline">
        Blending clean code, modern tools, and soft skills to build polished digital experiences.
      </p>

      <div className="skills-grid">
        <div className="skills-column">
          <h3>Coding Skills</h3>
          <SkillBar label="HTML" value={95} color="html" />
          <SkillBar label="CSS" value={90} color="css" />
          <SkillBar label="JavaScript" value={85} color="js" />
          <SkillBar label="React" value={85} color="react" />
          <SkillBar label="Python" value={70} color="python" />
        </div>

        <div className="skills-column">
          <h3>Professional Skills</h3>
          <SkillBar label="UI/UX Design" value={80} color="uiux" />
          <SkillBar label="Web Design" value={85} color="web" />
          <SkillBar label="Communication" value={75} color="comm" />
          <SkillBar label="Team Work" value={80} color="team" />
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ label, value, color }) => {
  return (
    <div className={`skill-bar skill-${color}`}>
      <div className="skill-header">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ "--skill-value": `${value}%` }} />
      </div>
    </div>
  );
};

export default Skills;
