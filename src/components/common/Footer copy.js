import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          {/* Left Column (Booking, Products, etc.) */}
          <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">Booking</a></li>
              <li className="mb-2"><a href="#">Products</a></li>
              <li className="mb-2"><a href="#">Recent Post</a></li>
              <li className="mb-2"><a href="#">Latest News</a></li>
              <li className="mb-2"><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Center Column (Signup for Newsletter) */}
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            {/* <div className="signup-container">
              <h5 style={{ color: 'black', textAlign: 'center' }}>
                SIGN UP FOR ALL THE LATEST <br /> NEWS AND OFFERS
              </h5>
              <form action="">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    aria-label="Email Address"
                    style={{ padding: '5px' }}
                  />
                  <button className="btn btn-warning" type="submit" style={{ marginLeft: '-14px' }}>
                    Subscribe <i className="bi bi-arrow-up-right small-icon"></i>
                  </button>
                </div>
              </form>
            </div> */}
          </div>

          {/* Right Column (About Us, Our Team, etc.) */}
          <div className="col-lg-4 text-center text-lg-end mb-4 mb-lg-0">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Our Team</a></li>
              <li className="mb-2"><a href="#">Packages</a></li>
              <li className="mb-2"><a href="#">Gallery</a></li>
              <li className="mb-2"><a href="#">Services</a></li>
            </ul>
          </div>
        </div>
        

        {/* Footer Bottom (Copyright & Social Media Links) */}
      </div>
      <div className="footer-bottom text-center py-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0" style={{ marginLeft: '10px' }}>RFS All Rights Reserved</p>
          <div className="social-icons">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Page">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Footer;
