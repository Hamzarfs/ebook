import React from 'react';
import ghostWritingImage from '../images/Ghost Writing.png';
import designingImage from '../images/Designing.png';
import bookEditingImage from '../images/book edit.png';

const SecondSection = () => {
  return (
    <section className="ebook-second-section">
      <div className="container">
        <button className="heading-button">Photography</button>
        <h2>Explore Kimono <br />Photography<span className="orange-text"> Services</span></h2>
        <p>Kimono Photography Agency runs wide and deep. Across many<br />
          markets, geographies typologies, our team members</p>
      </div>

      <div className="container py-5">
        <div className="row text-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="image-box">
              <img src={ghostWritingImage} alt="Ghost Writing" className="img-fluid" />
              <h3 className="second-section-heading">Ghost Writing</h3>
              <p className="section-p">Studying online teaches important time management skills, which makes it easier for you to find a good work-study balance.</p>
              <a href="#" className="second-button">Learn More</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="image-box">
              <img src={designingImage} alt="Designing" className="img-fluid" />
              <h3 className="second-section-heading">Designing</h3>
              <p className="section-p">Studying online teaches important time management skills, which makes it easier for you to find a good work-study balance.</p>
              <a href="#" className="second-button">Learn More</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="image-box">
              <img src={bookEditingImage} alt="Book Editing" className="img-fluid" />
              <h3 className="second-section-heading">Book Editing</h3>
              <p className="section-p">Studying online teaches important time management skills, which makes it easier for you to find a good work-study balance.</p>
              <a href="#" className="second-button">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
