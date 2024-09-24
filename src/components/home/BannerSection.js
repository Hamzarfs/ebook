import React from 'react';
import mokeups from '../../images/mokeups.png'; // Adjust the path as needed

const BannerSection = () => {
  return (
    <section className="ebook-banner-section">
      <div className="container">
        <h1>We Capture Your Best <br /><span className="orange-text">Memories</span> Here</h1>
        <p>Kimono Photography Agency runs wide and deep. Across many<br />
          markets, geographies typologies, our team members</p>
        <button className="first-button">Discover More</button>
      </div>
      <img src={mokeups} alt="Sample" /> {/* Make sure to have correct image path */}
    </section>
  );
};

export default BannerSection;
