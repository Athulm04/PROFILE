import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h2>
          About <span className="highlight">Me</span>
        </h2>
        <p className="about-tagline">
          Crafting immersive, modern web experiences with clean code and bold visuals.
        </p>
      </div>

      <div className="about-shell">
        <div className="about-card">
          {/* Left: main profile image */}
          <div className="about-photo-wrap">
            <div className="about-photo-glow">
              {/* put your real image path here */}
              <img src="/images/athul.png" alt="Athul profile" className="about-photo" />
            </div>
            <div className="about-orb orb-1" />
            <div className="about-orb orb-2" />
          </div>

          {/* Right: text + optional small image */}
          <div className="about-text">
            <h3 className="about-title">Profile Summary</h3>
            <p>
              A dedicated and detail-oriented MCA student with a strong foundation in Computer Science,
              built through a BSc degree. Possesses a keen interest in software development, programming,
              and emerging technologies. Demonstrates a solid understanding of core computer science
              concepts and a commitment to continuous learning, with the goal of building innovative
              solutions and growing as a tech professional.
            </p>

            {/* small inline avatar if you want another image */}
            {/* <div className="about-inline-avatar">
              <img src="/images/jacob.jpg" alt="Jacob avatar" />
            </div> */}

            <button className="btn btn-gradient-primary">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
