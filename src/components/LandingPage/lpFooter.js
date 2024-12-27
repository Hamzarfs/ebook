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
          <div className="col-md-6 mb-4">
           
              <img src={ebooklogo} alt="AMZ Book Publishing" className="img-fluid mb-3"/>
          
            <p className="text-light">
            AMZ Book Publishing is a full-service book publishing company based in the United States, dedicated to helping authors bring their stories to life. Offering a comprehensive range of services, including ghostwriting, e-book writing services, book editing, book cover design, formatting, and marketing, AMZ Book Publishing supports authors throughout the entire digital book publishing process.            </p>
          </div>
          <div className="col-md-3 mb-3">
            <h5 className="highlight-orange-text">Get Social</h5>
            <ul className="list-unstyled">
            <p className=" text-light">
                <FaFacebookF /> 
                <a href="https://www.facebook.com/AmzBookPublishingUS" target="_blank" className="text-light text-decoration-none"> Facebook </a>
              </p>
              <p className="text-light">
                <FaInstagram /> 
                <a href="https://www.instagram.com/amz_book_publishing/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"> Instagram</a>
              </p>
     
            
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="highlight-orange-text">Contact Us</h5>
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
<div></div>
<div className='footer-bottom text-center py-3 bg-secondary'>
      <div className="row">
        <div className='col-6'>
        <p>&copy; 2025 AMZ Book Publishing. All Rights Reserved.</p>
        </div>
        <div className='col-6'>
        <p>
  <a href="/privacy-policy" target="_blank">Privacy Policy</a> | 
  <a href="/terms-condition" target="_blank"> Terms & Conditions</a>
</p>

        </div>
      </div>
      </div>
    </footer>
  );
}

export default LpFooter;
