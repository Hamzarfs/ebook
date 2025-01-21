import React from 'react';
import icon1 from '../../images/Group 77.png';
import icon2 from '../../images/Group 78.png';
import icon3 from '../../images/Group 79.png';
import icon4 from '../../images/Group 80.png';

const ThirdSection = () => {
  return (
 <section className="ebook-third-section">
      <div className="container book-third-section">
      <h2>Professional eBook
        <br/>Writing<span class="orange-text"> Services</span></h2>
        <p>AMZ Book Publishings will take care of all the tricky stuff, so you can focus on what matters: bringing your story to life. <br/>Reach out to us today and share your digital e-book to the world!</p>
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
                    <h3><span>04+</span>
                  <p>
                  <span>Years</span>
                  Over 04 <br />years of experience
                  </p> </h3>
             

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
                    <h3><span>06+</span>
                  <p>
                  <span>Countries</span>
                  Top-tier <br />editorial team
                  </p>
                  </h3>

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
                    <h3><span>160+</span>
              <p>
              <span>Clients</span>
              Personalized<br />services
              </p></h3>

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
                    <h3><span>200+</span>
                    <p>
                    <span>Projects</span>
                   Eye-catching<br /> book cover designs

                    </p> </h3>
             
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
