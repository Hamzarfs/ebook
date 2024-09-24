import React from 'react';
import { image36, number1, number2, number3, image34, number4, number5, number6 } from '../../images';

const FourthSection = () => {
  return (
    <section className="why-choose">
      <div className="container text-center py-5">
        <div className="gradient-btn">About Kimono Photography</div>
        <h2>Why Choose</h2>
        <h3 className="gradient-text">RFS Publishing Design</h3>
        <p>Amazon publisher services to the next level. Start living your authorship dreams with the best.</p>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <div className="picture-1">
              <img src={image36} width="500px" className="img-fluid" alt="Reading Book Image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row mb-4">
              <div className="col">
                <div className="number-container">
                  <img src={number1} alt="Number 1" />
                  <h3>Bestselling Writers and Editors</h3>
                  <p>Our team of New York Times-bestselling ghostwriters...</p>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="number-container">
                  <img src={number2} alt="Number 2" />
                  <h3>Trust Former Publishing Executives</h3>
                  <p>Our Senior and Executive Editors...</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="number-container">
                  <img src={number3} alt="Number 3" />
                  <h3>Publishing Navigation</h3>
                  <p>Our Senior and Executive Editors...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2 mb-4">
            <div className="picture-2">
              <img src={image34} width="500px" className="img-fluid" alt="Writing Image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row mb-4">
              <div className="col">
                <div className="number-container">
                  <img src={number4} alt="Number 4" />
                  <h3>Low Time Commitment</h3>
                  <p>Our team of New York Times-bestselling ghostwriters...</p>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="number-container">
                  <img src={number5} alt="Number 5" />
                  <h3>Personalized Approach</h3>
                  <p>Our Senior and Executive Editors...</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="number-container">
                  <img src={number6} alt="Number 6" />
                  <h3>Proven Process</h3>
                  <p>Our Senior and Executive Editors...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
