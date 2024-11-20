import React, { useState } from 'react';
import ebooklogo from '../../images/Logo-AMZ-02.png';
import { NavLink } from 'react-router-dom';  // Change Link to NavLink
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For JS functionality (hamburger)
import PopupForm1 from '../common/PopupForm';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" exact className="navbar-brand">
            <img src={ebooklogo} alt="Brand Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                  activeClassName="active-link"  // This will add the class "active-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about-us"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/ghostwriting"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Ghostwriting
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/designing"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Designing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/book-editing"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Book Editing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/other-services"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Other Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact-us"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Right-aligned button */}
            <button onClick={openModal} className="header-btn ms-5" style={{ cursor: 'pointer' }}>
              Get a Quote
            </button>

            <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
