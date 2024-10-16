import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import Flag from 'react-world-flags'; // To render the country flags
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS


const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          
          {/* Featured Services Section */}
          <div className="col-md-3 mb-4">
            <h5>Featured Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Ebook Services</a></li>
              <li><a href="#" className="text-light">Ghostwriting</a></li>
              <li><a href="#" className="text-light">Book Editing</a></li>
              <li><a href="#" className="text-light">Designing</a></li>
        
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-3 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Resources</a></li>
              <li><a href="#" className="text-light">Testimonials</a></li>
              <li><a href="#" className="text-light">News & Events</a></li>
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Portfolio</a></li>
              <li><a href="#" className="text-light">FAQ's</a></li>
             
            </ul>
          </div>

          {/* Locations Section */}
          <div className="col-md-3 mb-4">
            <h5>Locations</h5>
            <ul className="list-unstyled">
              <li><Flag code="USA" alt="USA" width="20" /> NC, USA</li>
              <li><Flag code="GBR" alt="UK" width="20" /> England, UK</li>
              <li><Flag code="ARE" alt="UAE" width="20" /> Dubai, UAE</li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="col-md-3 mb-4">
  <h5>Follow Us</h5>
  <div className="d-flex gap-3 mb-3">
    <a href="#" className="text-light"><FaTwitter size={25} /></a>
    <a href="#" className="text-light"><FaFacebookF size={25} /></a>
    <a href="#" className="text-light"><FaLinkedinIn size={25} /></a>
    <a href="#" className="text-light"><FaInstagram size={25} /></a>
    <a href="#" className="text-light"><FaYoutube size={25} /></a>
  </div>

  {/* Contact Details */}
  <div>
    <p className="mb-1"><FaPhoneAlt /> +123-456-7890</p>
    <p className="mb-1"><FaEnvelope /> contact@amzbookpublishing.net</p>
    <p><FaMapMarkerAlt /> 1234 Main St, City, Country</p>
  </div>
</div>

        </div>
      </div>

      <div className="footer-bottom text-center py-3 bg-secondary">
        <p>&copy; 2024 AMZ Ebook . All rights reserved. | <a href="#" className="text-light">Terms of Use</a> | <a href="#" className="text-light">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
