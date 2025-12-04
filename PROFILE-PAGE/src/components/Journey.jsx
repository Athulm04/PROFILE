import React from "react";

const Journey = () => {
  return (
    <section className="journey-section">
      <div className="journey-header">
        <h2>
          My <span className="highlight">Journey</span>
        </h2>
        <p className="journey-tagline">
          A path shaped by learning, hands‑on projects, and real‑world experience.
        </p>
      </div>

      <div className="journey-grid">
        <div className="journey-column">
          <div className="journey-column-title">
            <span className="journey-pill">Education</span>
          </div>

          <div className="journey-timeline">
            <span className="journey-line" />
            <JourneyCard
              title="Master Degree - KTU University"
              year="2024 - 2026"
              text="Studied advanced concepts in computer science and web technologies."
            />
            <JourneyCard
              title="Bachelor Degree - CalicutUniversity"
              year="2021- 2024"
              text="Focused on software engineering fundamentals and UI development."
            />
            <JourneyCard
              title="High School"
              year="2019 - 2021"
              text="Completed science stream with emphasis on mathematics and coding."
            />
          </div>
        </div>

        <div className="journey-column">
          <div className="journey-column-title">
            <span className="journey-pill journey-pill-alt">Projects</span>
          </div>

          <div className="journey-timeline">
            <span className="journey-line journey-line-alt" />
            <JourneyCard
              title="Disaster Management System"
              year="2025 - Present"
              text="give a alert. to the people about the disaster through a web application."
            />
            <JourneyCard
              title="AgroConnect-Farmer and consumer Marketplace App"
              year="2024 - 2025"
              text="Connecting farmers and consumers through a seamless marketplace platform."
            />
            <JourneyCard
              title="DreamHome And Rental System"
              year="2019 - 2022"
              text="Developed a comprehensive property management system for rentals and sales."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const JourneyCard = ({ title, year, text }) => (
  <div className="journey-card">
    <div className="journey-dot" />
    <div className="journey-card-inner">
      <div className="journey-card-header">
        <h4>{title}</h4>
        <span className="card-year">{year}</span>
      </div>
      <p>{text}</p>
    </div>
  </div>
);

export default Journey;
