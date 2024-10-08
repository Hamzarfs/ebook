import React from 'react';

const DesignProcess = ({
  heading, // Props for the heading
  description, // Props for the paragraph
  steps // Array of steps with image, alt text, title, and description
}) => {
  return (
    <section id="design-process-section" className="container text-center my-5">
      {/* First Row: Heading and Description */}
      <div className="row">
        <div className="col-12">
          <h2 className="design-process-heading font-weight-bold">
            {heading.title} <span className="orangegradient-h2">{heading.highlight}</span>
          </h2>
          <p className="design-process-description">{description}</p>
        </div>
      </div>

      {/* Second Row: Icon Boxes */}
      <div className="row mt-4">
        {steps.map((step, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="design-process-icon-box">
              <img src={step.image} alt={step.alt} className="img-fluid mb-3 design-process-icon" />
              <h5 className="design-process-icon-title font-weight-bold">{step.title}</h5>
              <p className="design-process-icon-text">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignProcess;
