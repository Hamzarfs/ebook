import React from 'react';
import '../../awards.css';

const Bookservices = ({
  heading, // Props for the heading
  description, // Props for the paragraph
  steps // Array of steps with image, alt text, title, and description
}) => {
  return (
<section id="choose-service-section" className="container text-center py-4 mt-3">
  {/* First Row: Heading and Description */}
  <div className="row">
    <div className="col-12 text-center">
      <h2 className="choose-service-heading font-weight-bold">
        {heading.title} <span className="lightblue-h2">{heading.highlight}</span>{heading.title2}
      </h2>
      <p className="choose-service-description">{description}</p>
    </div>
  </div>

  {/* First Row: 3 Icon Boxes */}
  <div className="row mt-4">
    {steps.slice(0, 3).map((step, index) => (
      <div className="col-lg-4 col-md-4" key={index}>
        <div className="choose-service-icon-box">
          <img src={step.image} alt={step.alt} className="img-fluid mb-3 choose-service-icon" />
          {/* <h5 className="choose-service-icon-title font-weight-bold">{step.title}</h5>
          <p className="choose-service-icon-text">{step.description}</p> */}
        </div>
      </div>
    ))}
  </div>

  {/* Second Row: 6 Icon Boxes */}
  <div className="row mt-4">
    {steps.slice(3, 9).map((step, index) => (
      <div className="col-lg-4 col-md-4" key={index}>
        <div className="choose-service-icon-box">
          <img src={step.image} alt={step.alt} className="img-fluid mb-3 choose-service-icon" />
          {/* <h5 className="choose-service-icon-title font-weight-bold">{step.title}</h5>
          <p className="choose-service-icon-text">{step.description}</p> */}
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Bookservices;
