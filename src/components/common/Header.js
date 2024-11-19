import React, { useState } from 'react';
import ebooklogo from '../../images/Logo-AMZ-02.png';
import { Link } from 'react-router-dom';
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
        <Link to="/">
  <img src={ebooklogo} alt="Brand Logo" className="navbar-brand" />
</Link>
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
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link active" aria-current="page">
                  About Us
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/ghost-writing" className="nav-link">
                  Ghostwriting
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/designing" className="nav-link">
                  Designing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/book-editing" className="nav-link">
                  Book Editing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/other-services" className="nav-link">
                  Other Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
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
