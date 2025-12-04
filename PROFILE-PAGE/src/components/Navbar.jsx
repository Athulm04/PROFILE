import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="logo"></div>

        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "nav-open" : ""}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#journey" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
