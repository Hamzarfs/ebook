import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ebooklogo from '../../images/footerlogo.webp';
import Flag from 'react-world-flags'; // To render the country flags
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS


const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-5">
        <div className="row">


        <div className="col-md-5 mb-4">
  <a href="#">
    <img src={ebooklogo} alt="AMZ Book Publishing" className="img-fluid mb-3" />
  </a>
  <p className="text-light">
    AMZ Book Publishing is a full-service book publishing company based in the United States, dedicated to helping authors bring their stories to life. Offering a comprehensive range of services, including ghostwriting, book editing, cover design, formatting, and marketing, AMZ Book Publishing supports authors throughout the entire publishing process.
  </p>
</div>

          
          {/* Featured Services Section */}
          <div className="col-md-2 mb-4">
           <h5  class="highlight-orange-text">Featured Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Ebook Services</a></li>
              <li><a href="#" className="text-light">Ghostwriting</a></li>
              <li><a href="#" className="text-light">Book Editing</a></li>
              <li><a href="#" className="text-light">Designing</a></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-2 mb-4">
            <h5 class="highlight-orange-text">Useful Links</h5>
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
          {/* <div className="col-md-3 mb-4">
            <h5>Locations</h5>
            <ul className="list-unstyled">
              <li><Flag code="USA" alt="USA" width="20" /> NC, USA</li>
              <li><Flag code="GBR" alt="UK" width="20" /> England, UK</li>
              <li><Flag code="ARE" alt="UAE" width="20" /> Dubai, UAE</li>
            </ul>
          </div> */}

          {/* Social Media Links Section */}
          <div className="col-md-3 mb-4">
  <h5 className="highlight-orange-text">Follow Us</h5>
  <div className="d-flex gap-3 mb-3">
    <a href="#" className="text-light"><FaFacebookF size={25} /></a>
    <a href="#" className="text-light"><FaLinkedinIn size={25} /></a>
    <a href="#" className="text-light"><FaInstagram size={25} /></a>
    <a href="#" className="text-light"><FaYoutube size={25} /></a>
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
      <a href="mailto:contact@amzbookpublishing.net" className="text-light text-decoration-none"> contact@amzbookpublishing.net</a>
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
        <p>&copy; 2024 AMZ Ebook . All rights reserved. | <a href="#" className="text-light">Terms of Use</a> | <a href="#" className="text-light">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
