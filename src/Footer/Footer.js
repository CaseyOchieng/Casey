import React from "react";
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
            <span>
              Please contact me in any way <br /> you like
            </span>
          </div>
          <div className="social-links">
            <div className="social-links-h">Social</div>
            <div className="social-links-items">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
              <a href="">Github</a>
              <a href="">LinkedIn</a>
            </div>
          </div>
          <div className="social-links">
            <div className="social-links-h">Contact</div>
            <div className="social-links-items">
              <a href="">Mail</a>
              <a href="">Whatsapp</a>
              {/* <a href="">Telegram</a> */}
              {/* <a href="">+92 302 4606680</a> */}
            </div>
          </div>
          <div className="footer-menu social-links">
            <div className="footer-menu-h social-links-h">Other Menu</div>
            <div className="footer-menu-links social-links-items">
              <p className="footer-menu-links-items">Home.</p>
              <p className="footer-menu-links-items">About.</p>
              <p className="footer-menu-links-items">Projects.</p>
              <p className="footer-menu-links-items">Contact.</p>
            </div>
          </div>
          <div className="footer-btn">
            <a href="" className="footer-btn-a">
              Get Started!
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-footer-bottom">
            <p>Kenya</p>
          </div>
          <div className="right-footer-bottom">
            <p>{getCurrentYear()}. Casey Ochieng. ALL RIGHT RESERVED</p>
          </div>
        </div>
      </div>
      <div className="footer-ticker">
        <div className="footer-ticker-item">&nbsp; - Web Designer </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
        <div className="footer-ticker-item">&nbsp; - Taimoor shahzada </div>
      </div>
    </div>
  );
}

export default Footer;
