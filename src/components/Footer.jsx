import React from 'react';
    import '../styles/Footer.css';
    import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
    import { Link } from 'react-router-dom';
    import logo from '../assets/logo.png';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-left">
              <img src={logo} alt="CodeOne-X Logo" className="footer-logo" />
              <p>
                Your trusted partner for IT Staff Augmentation and Dedicated Teams.
              </p>
              <p>
                <a href="mailto:info@codeonex.com">info@codeonex.com</a>
              </p>
              <div className="social-icons">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="footer-center-left">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/it-staff-augmentation">IT Staff Augmentation</Link>
                </li>
                <li>
                  <Link to="/dedicated-teams">Dedicated Teams</Link>
                </li>
                <li>
                  <Link to="/software-development">Software Development</Link>
                </li>
              </ul>
            </div>
            <div className="footer-center-right">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="/business-cases">Business Cases</Link>
                </li>
                <li>
                  <Link to="/news-updates">News and updates</Link>
                </li>
                <li>
                  <Link to="/company-profile">Company profile</Link>
                </li>
              </ul>
            </div>
            <div className="footer-right">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <p>&copy; {currentYear} CodeOne-X. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
