import React from 'react';
import { image36, number1, number2, number3, image34, number4, number5, number6 } from '../../images';

const FourthSection = () => {
  return (
    <section className="why-choose">
      <div className="container text-center py-5">
        <div className="gradient-btn">A b o u t - U s</div>
        <h2>Why Choose</h2>
        <h3 className="gradient-text">AMZ Book Publishing?</h3>
        <p>Publishing a book on Amazon does not have to be a headache. With us, it is smooth sailing! Here is why.</p>
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
                  <h3>Bestselling Writers<br/> and Editors</h3>
                  <p>Work with our team of New York Times-bestselling ghostwriters and Big-5 acquisitions editors, bringing you unmatched talent and professionalism at every step.</p>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="number-container">
                  <img src={number2} alt="Number 2" />
                  <h3>Professional <br/> Book Publishers</h3>
                  <p>Our Senior and Executive Editors are the masterminds behind numerous #1 New York Times bestsellers, having served as acquisitions editors and editorial directors at 
                  Big-5 publishing houses. With their expertise, your book is in the hands of true industry leaders.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="number-container">
                  <img src={number3} alt="Number 3" />
                  <h3>Assistance <br/> At Every Step</h3>
                  <p>We have a team of seasoned pros ready to support you at every turn, whether you are looking for expert ghostwriting, self-publishing guidance, or eye-catching illustrations.</p>
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
                  <h3>Commitment <br/>To Your Dreams</h3>
                  <p>Wherever you are in your book journey, we will be right there with you, making the process smooth and stress-free. 
                  We strive to bring your ideas to life through books, both ebooks and paperbacks.</p>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="number-container">
                  <img src={number5} alt="Number 5" />
                  <h3>Personalized<br/> Approach</h3>
                  <p>Just like every book has its own story, every writer has unique needs. That is why we customize our services just for you. 
                  Whether you need a captivating title or stunning visuals, we have your back!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="number-container">
                  <img src={number6} alt="Number 6" />
                  <h3>Proven And <br/>Methodical Process  </h3>
                  <p>We have had the privilege of guiding countless writers on their journey to success, and we would love to do the same for you. 
                  Let’s turn your vision into something extraordinary together!</p>
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
