import React from 'react';
import {  FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import ebooklogo from '../../images/footerlogo.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5 mb-4">
            <a href="/">
              <img src={ebooklogo} alt="AMZ Book Publishing" className="img-fluid mb-3"/>
            </a>
            <p className="text-light">
              AMZ Book Publishing is a full-service book publishing company based in the United States, dedicated to helping authors bring their stories to life. Offering a comprehensive range of services, including ghostwriting, book editing, cover design, formatting, and marketing, AMZ Book Publishing supports authors throughout the entire publishing process.
            </p>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="highlight-orange-text">Featured Services</h5>
            <ul className="list-unstyled">
              <li><a href="/ghostwriting" className="text-light">GhostWriting</a></li>
              <li><a href="/designing" className="text-light">Designing</a></li>
              <li><a href="/book-editing" className="text-light">Book Editing</a></li>
              <li><a href="/other-services" className="text-light">Other Services</a></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-2 mb-4">
            <h5 className="highlight-orange-text">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about-us" className="text-light">About Us</a></li>
              <li><a href="/contact-us" className="text-light">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-light">Privacy Policy</a></li>
              <li><a href="/terms-condition" className="text-light">Terms & Condition</a></li>
      
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="highlight-orange-text">Follow Us</h5>
            <div className="d-flex gap-3 mb-3">
              <Link to="https://www.facebook.com/profile.php?id=61568722483317" target='blank' className="text-light"><FaFacebookF size={25} /></Link>
              <Link to="https://www.linkedin.com/company/amzbookpublishing/" target='blank'  className="text-light"><FaLinkedinIn size={25} /></Link>
              <Link to="https://www.instagram.com/amz_book_publishing/" target='blank' className="text-light"><FaInstagram size={25} /></Link>
              {/* <Link to="#" className="text-light"><FaYoutube size={25} /></Link> */}
            </div>

            {/* Contact Us Section */}
            <div className="contact-details p-3" style={{ border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '8px' }}>
              <h2 className="text-light">Contact Us</h2>
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
        <p>&copy; 2024 AMZ Ebook . All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
