import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { FaBars, FaTimes } from 'react-icons/fa';
    import '../styles/Header.css';

    const Header = () => {
      const [menuOpen, setMenuOpen] = useState(false);

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      return (
        <header className="header">
          <div className="container header-content">
            <Link to="/" className="logo">
              CodeOne-<span style={{ color: '#00ffab' }}>X</span>
            </Link>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <span className="dropdown-title">Services</span>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/it-staff-augmentation">IT Staff Augmentation</Link>
                    </li>
                    <li>
                      <Link to="/dedicated-teams">Dedicated Teams</Link>
                    </li>
                    <li>
                      <Link to="/development">Development</Link>
                      <ul className="sub-dropdown-content">
                        <li>
                          <Link to="/codeigniter-development">
                            CodeIgniter Development Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/wordpress-development">
                            WordPress Development Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/python-development">
                            Python Development Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/business-cases">Business Cases</Link>
                </li>
                <li className="nav-item">
                  <Link to="/investor-room">Investor Room</Link>
                </li>
                <li className="nav-item">
                  <Link to="/careers">Careers</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
              <Link to="/contact" className="contact-button">
                Contact
              </Link>
            </nav>
            <button className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </header>
      );
    };

    export default Header;
