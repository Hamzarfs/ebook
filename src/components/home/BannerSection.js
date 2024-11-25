import React from 'react';
import mokeups from '../../images/mokeups.png'; // Adjust the path as needed
import homebg from '../../images/bannerbghome.webp'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const BannerSection = () => {
  return (
    <section 
      className="ebook-banner-section" 
      style={{
        position: 'relative',  // To position the overlay and background image properly
        padding: '100px 0',    // Adjust padding as needed
        overflow: 'hidden',    // Ensures the overlay and image do not overflow
      }}
    >
      {/* Overlay */}
      <div 
        className="overlay" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 30%)',
          zIndex: 1,
         
        }}
      ></div>

      {/* Background Image */}
      <div 
        className="background-image" 
        style={{
          loading: "lazy",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${homebg}) `,  // Adjust this path to your image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
         
        }}
      ></div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1><span className="orange-text">AMZ</span> Book Publishing <br />Best <span className="orange-text">Amazon</span><br /> Book Publishing <span className="orange-text">Services</span></h1>
        <p>Turn your dream of becoming an author into reality. Let’s<br />
        bring your story to life and share it with the world.</p>
        <Link to="/other-services" className="first-button">Discover More</Link>
      </div>

      {/* Mockups Image */}
      <img src={mokeups} alt="Sample" style={{ position: 'relative', zIndex: 2 }} /> {/* Ensure this image is above the overlay */}
    </section>
  );
};

export default BannerSection;
