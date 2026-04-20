import React from 'react';
import locationIcon from '../assets/svg/location.svg';
import mailIcon from '../assets/svg/mail.svg';
import phoneIcon from '../assets/svg/phone.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* LEFT CONTACT */}
        <div className="footer-left">
          <h6>Contact Us</h6>

          <div className="footer-item">
            <span className="icon">
              <img src={locationIcon} alt="location icon" />
            </span>
            <p>
              Wisconsin Ave, Suite 700 <br />
              Chevy Chase, Maryland 20815
            </p>
          </div>

          <div className="footer-item">
            <span className="icon">
              <img src={mailIcon} alt="mail icon" />
            </span>
            <p>support@figma.com</p>
          </div>

          <div className="footer-item">
            <span className="icon">
              <img src={phoneIcon} alt="phone icon" />
            </span>
            <p>+1 800 854-36-80</p>
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="footer-right">
          <div className="footer-col">
            <h6>Services</h6>
            <ul>
              <li>Heading 01</li>
              <li>Heading 02</li>
              <li>Heading 03</li>
              <li>Heading 04</li>
              <li>Heading 05</li>
            </ul>
          </div>

          <div className="footer-col">
            <h6>Frame work</h6>
            <ul>
              <li>Heading 01</li>
              <li>Heading 02</li>
              <li>Heading 03</li>
              <li>Heading 04</li>
              <li>Heading 05</li>
            </ul>
          </div>

          <div className="footer-col">
            <h6>Company</h6>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </footer>
  );
};

export default Footer;
