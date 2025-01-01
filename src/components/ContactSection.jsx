import React from 'react';
    import '../styles/ContactSection.css';
    import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

    const ContactSection = () => {
      return (
        <section className="contact-section">
          <div className="container contact-content">
            <div className="contact-left">
              <h2>Get in Touch</h2>
              <p>
                We'd love to hear from you! Contact us to discuss your project
                needs and how we can help.
              </p>
              <button className="contact-button">Contact Us</button>
            </div>
            <div className="contact-right">
              <div className="contact-details">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@codeonex.com">info@codeonex.com</a>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <br />
                  +1-123-456-7890
                  <br />
                  +1-987-654-3210
                  <br />
                  +44-123-456-7890
                </p>
              </div>
              <div className="social-icons">
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
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default ContactSection;
