import React from 'react';
import icon1 from '../../images/Group 77.png';
import icon2 from '../../images/Group 78.png';
import icon3 from '../../images/Group 79.png';
import icon4 from '../../images/Group 80.png';

const ThirdSection = () => {
  return (
 <section className="ebook-third-section">
      <div className="container book-third-section">
      <h2>Professional Creatives <br/>At Your<span class="orange-text"> Services</span></h2>
        <p>AMZ Book Publishings will take care of all the tricky stuff, so you can focus on what matters:<br />
        bringing your story to life. Reach out to us today and unlock the writer within, <br />ready to share your story with the world.</p>
      </div>
      <div className="third-section-container">
        <div className="row">
          {/* Box 1 */}
          <div className="col-sm-12 col-md-6 mb-4">
            <div className="icon-box">
              <div className="row">
                <div className="col-3">
                  <img src={icon1} alt="Icon 1" />
                </div>
                <div className="col-9">
                  <div className="text-content">
                    <h3>04+</h3>
                    <h4>Years</h4>
                    <h2>Over 04 <br />years of experience</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Box 2 */}
          <div className="col-sm-12 col-md-6 mb-4">
            <div className="icon-box">
              <div className="row">
                <div className="col-3">
                  <img src={icon2} alt="Icon 2" />
                </div>
                <div className="col-9">
                  <div className="text-content">
                    <h3>06+</h3>
                    <h4>Countries</h4>
                    <h2>Top-tier <br />editorial team</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Box 3 */}
          <div className="col-sm-12 col-md-6 mb-4">
            <div className="icon-box">
              <div className="row">
                <div className="col-3">
                  <img src={icon3} alt="Icon 3" />
                </div>
                <div className="col-9">
                  <div className="text-content">
                    <h3>160+</h3>
                    <h4>Clients</h4>
                    <h2>Personalized<br />services</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Box 4 */}
          <div className="col-sm-12 col-md-6 mb-4">
            <div className="icon-box">
              <div className="row">
                <div className="col-3">
                  <img src={icon4} alt="Icon 4" />
                </div>
                <div className="col-9">
                  <div className="text-content">
                    <h3>200+</h3>
                    <h4>Projects</h4>
                    <h2>Eye-catching<br /> book cover designs</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 </section>
  );
};

export default ThirdSection;
