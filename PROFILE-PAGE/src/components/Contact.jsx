import React from "react";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>
        Contact <span className="highlight">Me!</span>
      </h2>
      <p className="contact-tagline">
        Have a project or idea in mind? Drop a message and let&apos;s build something great together.
      </p>

      <div className="contact-shell">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea rows="6" placeholder="Your Message" />
          <button type="submit" className="btn-gradient-primary contact-submit">
            Submit
          </button>
        </form>

        <div className="contact-side">
          <h3>Let&apos;s collaborate</h3>
          <p>
            Available for internships, freelance work, and exciting full‑time roles in frontend and React
            development.
          </p>
          <ul className="contact-info">
            <li><span>Email:</span> youremail@example.com</li>
            <li><span>Phone:</span> +91-00000-00000</li>
            <li><span>Location:</span> Your City, Country</li>
          </ul>

          {/* Social "icons" without extra library */}
          <div className="contact-socials">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              WA
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
