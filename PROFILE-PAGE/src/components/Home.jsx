import React from "react";
import atImg from "../assets/images/at.jpg";

const Home = () => {
  return (
    <div className="home hero-gradient">
      <div className="home-inner">
        <div className="home-text fade-in-up">
          <p className="greeting">Hi, I'm</p>
          <h1 className="name-glow">Athul M</h1>
          <h2 className="role-gradient">
            <span className="highlight">MCA STUDENT</span>
          </h2>
          <p className="home-desc">
            A detail-oriented MCA student with a solid CS background, passionate about
            software development, emerging technologies, and continuous learning to build innovative solutions.
          </p>
          <div className="home-buttons">
            <button className="btn btn-gradient-primary">Hire Me</button>
            <button className="btn btn-outline-glass">Let&apos;s Talk</button>
          </div>
        </div>

        <div className="home-image float-up">
          <div className="profile-glass">
            <img src={atImg} alt="Athul M profile" className="profile-img" />
            <div className="profile-ring profile-ring-1" />
            <div className="profile-ring profile-ring-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
