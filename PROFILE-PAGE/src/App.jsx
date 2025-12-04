import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="journey">
        <Journey />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
