import React from 'react';
import mokeups from '../../images/mokeups.png'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const BannerSection = () => {
  return (
    <section className="ebook-banner-section">
      <div className="container">
        <h1><span className="orange-text">AMZ</span> Book Publishing <br />Best <span className="orange-text">Amazon</span><br /> Book Publishing <span className="orange-text">Services</span></h1>
        <p>Turn your dream of becoming an author into reality. Let’s<br />
        bring your story to life and share it with the world.</p>
        <Link to="/other-services" className="first-button">Discover More</Link>
      </div>
      <img src={mokeups} alt="Sample" /> {/* Make sure to have correct image path */}
    </section>
  );
};

export default BannerSection;
