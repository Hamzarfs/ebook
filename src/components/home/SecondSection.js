import React from 'react';
import ghostWritingImage from '../../images/Ghost Writing.png';
import designingImage from '../../images/Designing.png';
import bookEditingImage from '../../images/book edit.png';

const SecondSection = () => {
  return (
<section class="ebook-second-section">
        <div class="container">
            <button class="heading-button">S e r v i c e s</button>
            <h2>Explore What We <br />Have To <span class="orange-text"> Offer</span></h2>
            <p>From concept to publication as ebook or paperback, we have your back every step of the way,turning<br /> 
            your ideas into reality. Our expert team will help you reach the right readers through targeted<br />
            campaigns and promotions, so we can share your book with the world, together!</p>
        </div>
        <div className="second-section-container">
        <div className="row text-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="image-box">
              <img src={ghostWritingImage} alt="Ghost Writing" className="img-fluid" />
              <h3 className="second-section-heading">Ghost Writing</h3>
              <p className="section-p">Need an expert to bring your story to life? Whatever the genre, we help create a masterpiece. 
                Our talented writers craft engaging plots, dynamic characters, and jaw-dropping twists that keep readers hooked to their 
                Kindles and paperbacks from start to finish!</p>
              <a href="#" className="second-button">Learn More</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="image-box">
              <img src={designingImage} alt="Designing" className="img-fluid" />
              <h3 className="second-section-heading">Designing</h3>
              <p className="section-p">Our talented illustrators create captivating book covers across all genres, combining professional 
              expertise with a passion for their craft. By collaborating closely with clients, we ensure each design aligns perfectly with 
              their vision.</p>
              <a href="#" className="second-button">Learn More</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="image-box">
              <img src={bookEditingImage} alt="Book Editing" className="img-fluid" />
              <h3 className="second-section-heading">Book Editing</h3>
              <p className="section-p">Experience top-notch editing services that give your manuscript the attention it truly deserves. 
                Our skilled editors focus on perfecting every detail of your book, offering expert insights to help you reach literary excellence.</p>
              <a href="#" className="second-button">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
