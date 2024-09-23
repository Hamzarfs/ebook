import React from 'react';
import iconbox from '../images/Ellipse 2.png';

const ThirdSection = () => {
  return (
    <section className="ebook-third-section">
      <div className="container">
        <h2>
          Explore Kimono <br />Photography<span className="orange-text"> Services</span>
        </h2>
        <p>
          Kimono Photography Agency runs wide and deep. Across many
          <br />
          markets, geographies, typologies, our team members
        </p>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Box 1 */}
          <div className="col-sm-12 col-md-6 mb-4">
            <div className="icon-box-1">
              <div className="row">
                {/* Image Column */}
                <div className="col-3">
                <img src={iconbox} alt="iconbox" />
                </div>
                {/* Text Column */}
                <div className="col-9">
                  <div className="text-content-1">
                    <h3>50+</h3>
                    <h4>Years</h4>
                    <h2>
                      Published
                      <br /> Worldwide
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-sm-12 col-md-6 mb-4">
            <div className="icon-box-2">
              <div className="row">
                {/* Image Column */}
                <div className="col-3">
                  <img src="path/to/your/image2.png" alt="Icon 2" />
                </div>
                {/* Text Column */}
                <div className="col-9">
                  <div className="text-content-2">
                    <h3>60+</h3>
                    <h4>Countries</h4>
                    <h2>
                      Operating
                      <br /> Globally
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-sm-12 col-md-6 mb-4">
            <div className="icon-box-3">
              <div className="row">
                {/* Image Column */}
                <div className="col-3">
                  <img src="path/to/your/image3.png" alt="Icon 3" />
                </div>
                {/* Text Column */}
                <div className="col-9">
                  <div className="text-content-3">
                    <h3>1000+</h3>
                    <h4>Clients</h4>
                    <h2>
                      Satisfied
                      <br /> Customers
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="col-sm-12 col-md-6 mb-4">
            <div className="icon-box-4">
              <div className="row">
                {/* Image Column */}
                <div className="col-3">
                  <img src="path/to/your/image4.png" alt="Icon 4" />
                </div>
                {/* Text Column */}
                <div className="col-9">
                  <div className="text-content-4">
                    <h3>200+</h3>
                    <h4>Projects</h4>
                    <h2>
                      Completed
                      <br /> Successfully
                    </h2>
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
