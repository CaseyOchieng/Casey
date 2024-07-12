import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Footer.css";
function Footer() {
  function getCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
  }
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="message-for-users">
            <span>Please contact me in any way you prefer</span>
          </div>
          <div className="social-links">
            <div className="social-links-h">Social</div>
            <div className="social-links-items">
              <a href="https://www.instagram.com/casey_chieng">Instagram</a>
              <a href="https://x.com/ForgeTwoy">Twitter</a>
              <a href="https://github.com/CaseyOchieng">Github</a>
              <a href="https://www.linkedin.com/in/casey-ochieng-303330247/">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="social-links">
            <div className="social-links-h">Contact</div>
            <div className="social-links-items">
              <a href="mailto:caseyochieng46@gmail.com">Gmail</a>{" "}
              <a href="https://www.linkedin.com/in/casey-ochieng-303330247/">
                LinkedIn
              </a>{" "}
              <a href="https://www.instagram.com/casey_chieng">Instagram</a>
              <a href="https://github.com/CaseyOchieng">Github</a>
              {/* <a href="">Telegram</a> */}
              {/* <a href="">+92 302 4606680</a> */}
            </div>
          </div>
          <div className="footer-menu social-links">
            <div className="footer-menu-h social-links-h">Other Menu</div>
            <div className="footer-menu-links social-links-items">
              <Link to="/" className="footer-menu-links-items">
                Home.
              </Link>
              <Link to="/about" className="footer-menu-links-items">
                About.
              </Link>
              <Link to="/projects" className="footer-menu-links-items">
                Projects.
              </Link>
              <Link to="/contact" className="footer-menu-links-items">
                Contact.
              </Link>
            </div>
          </div>
          <div className="footer-btn">
            <a
              href="https://www.linkedin.com/in/casey-ochieng-303330247/"
              className="footer-btn-a"
            >
              Get Started!
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-footer-bottom">
            <p>Kenya</p>
          </div>
          <div className="right-footer-bottom">
            <p>
              {getCurrentYear()}.{" "}
              <a
                href="https://www.linkedin.com/in/casey-ochieng-303330247/"
                style={{ color: "pink" }}
              >
                Casey Ochieng.
              </a>{" "}
              ALL RIGHT RESERVED
            </p>
          </div>
        </div>
      </div>
      <div className="footer-ticker">
        <div className="footer-ticker-item">&nbsp; - Casey Ochieng </div>
        <div className="footer-ticker-item">&nbsp; - Web Designer </div>
        <div className="footer-ticker-item">&nbsp; - Casey Ochieng </div>
        <div className="footer-ticker-item">&nbsp; - Web Developer </div>
        <div className="footer-ticker-item">&nbsp; - Casey Ochieng </div>
        <div className="footer-ticker-item">&nbsp; - Digital Marketer </div>
        <div className="footer-ticker-item">&nbsp; - Casey Ochieng </div>
        <div className="footer-ticker-item">&nbsp; - Web Developer </div>
        <div className="footer-ticker-item">&nbsp; - Casey Ochieng </div>
        <div className="footer-ticker-item">&nbsp; - Web Designer </div>
        <div className="footer-ticker-item">&nbsp; - Casey Ochieng </div>
        <div className="footer-ticker-item">&nbsp; - Web Developer </div>
        <div className="footer-ticker-item">&nbsp; - Casey Ochieng </div>
        <div className="footer-ticker-item">&nbsp; - Digital Marketer </div>
        <div className="footer-ticker-item">&nbsp; - Casey Ochieng </div>
        <div className="footer-ticker-item">&nbsp; - Web Developer </div>
        <div className="footer-ticker-item">&nbsp; - Casey Ochieng </div>
        <div className="footer-ticker-item">&nbsp; - Web Designer </div>
      </div>
    </div>
  );
}

export default Footer;
