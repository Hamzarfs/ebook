import React from 'react';
import {  FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import ebooklogo from '../../images/footerlogo.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const LpFooter = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5 mb-4">
            <a href="/">
              <img src={ebooklogo} alt="AMZ Book Publishing" className="img-fluid mb-3"/>
            </a>
            <p className="text-light">
            AMZ Book Publishing was founded on February 22, 2023, with the mission of providing quality editing and publishing services for the authors worldwide.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="highlight-orange-text">Featured Services</h5>
            <ul className="list-unstyled">
            <p className="mb-1 text-light">
                <FaFacebookF /> 
                <a href="tel:+17327979165" className="text-light text-decoration-none"> Facebook </a>
              </p>
              <p className="text-light">
                <FaInstagram /> 
                <a href="https://www.google.com/maps/search/?api=1&query=41+Winthrop+Rd,+Edison,+NJ+08817" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"> Instagram</a>
              </p>
              <p className="mb-1 text-light">
                <FaLinkedinIn /> 
                <a href="mailto:info@amzbookpublishing.net" className="text-light text-decoration-none"> LinkedIn</a>
              </p>
            
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="highlight-orange-text">Follow Us</h5>
            {/* Contact Us Section */}
            <div className="contact-details">
             
              <p className="mb-1 text-light">
                <FaPhoneAlt /> 
                <a href="tel:+17327979165" className="text-light text-decoration-none"> (732) 797-9165</a>
              </p>
              <p className="mb-1 text-light">
                <FaEnvelope /> 
                <a href="mailto:info@amzbookpublishing.net" className="text-light text-decoration-none"> info@amzbookpublishing.net</a>
              </p>
              <p className="text-light">
                <FaMapMarkerAlt /> 
                <a href="https://www.google.com/maps/search/?api=1&query=41+Winthrop+Rd,+Edison,+NJ+08817" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"> 41 Winthrop Rd, Edison, NJ 08817</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3 bg-secondary">
        <p>&copy; 2024 AMZ Book Publishing. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default LpFooter;
