import React from 'react';
import { image36, number1, number2, number3, image34, number4, number5, number6 } from '../../images';

const FourthSection = () => {
  return (
    <section className="why-choose">
      <div className="container text-center">
        <div className="gradient-btn">About Us</div>
        <h2>Why Choose</h2>
        <h2 className="gradient-text">AMZ Book Publishing company?</h2>
        <p>Publishing book on Amazon does not have to be a headache. With us, it's smooth sailing! Here's why:</p>
      </div>

      <div className="container">
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
                  <p>Collaborate with our team of ghostwriters featured on the Bestseller List, and editors from Big Five publishing houses, ensuring unparalleled skill and care at every stage.</p>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="number-container">
                  <img src={number2} alt="Number 2" />
                  <h3>Professional Book Publishers</h3>
                  <p>Having worked as acquisitions editors and editorial directors for large publishing companies, our Senior and Executive Editors have helped shape many companies. Rest assured, with their expertise, your book will be in the hands of true publishing industry leaders.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="number-container">
                  <img src={number3} alt="Number 3" />
                  <h3>Assistance at Every Step in Publishing a Book on Amazon</h3>
                  <p>Whether you require expert-level ghostwriting, assistance in self-publishing, or stunning illustrations, we have a team of seasoned professionals prepared to help you every step of the way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
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
                  <h3>Commitment to Your Dreams</h3>
                  <p>No matter the stage of your book project, we are here to ensure the entire process is seamless. We aim to transform your concepts into reality through digital and physical books.</p>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="number-container">
                  <img src={number5} alt="Number 5" />
                  <h3>Personalized Approach</h3>
                  <p>Just like every book has its own story, every writer has unique needs. That is why we have customized services just for you. Whether you need a captivating title or stunning visuals, we have your back!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="number-container">
                  <img src={number6} alt="Number 6" />
                  <h3>Proven and Methodical Process</h3>
                  <p>From our end, it has been a pleasure assisting many writers as they climb the success ladders, and we would be keen to do the same for you too. Together, let us bring your ideas to life in a remarkable way!</p>
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
