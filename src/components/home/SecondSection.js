import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SecondSection = ({
  buttonLabel,
  heading1,
  heading2,
  paragraph,
  services,
  subHeading,
  learnmore,
  buttonPadding
}) => {
  return (
    <section className="ebook-second-section">
      <div className="container">
        <button className="heading-button">{buttonLabel}</button>
        <h2>{heading1}
        <span className="orangegradient-h2">{subHeading}</span>
        {heading2}
        </h2>

        <p>{paragraph}</p>
      </div>
      <div className="second-section-container">
        <div className="row text-center">
          {services.map((service, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="image-box">
                <img src={service.image} alt={service.title} className="img-fluid"/>
                <h3 className="design-process-heading font-weight-bold">{service.title}
                 </h3>
                <p className="section-p">{service.description}</p>
                <a 
                  href={service.link} 
                  className="second-button"
                  style={{ padding: service.buttonPadding }} // Apply button padding dynamically
                >
                  {service.learnmore}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
