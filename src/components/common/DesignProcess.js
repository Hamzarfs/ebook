import React from 'react';
import designprocess1 from '../../images/design-process-1.png';
import designprocess2 from '../../images/design-process-2.png';
import designprocess3 from '../../images/design-process-3.png';
import designprocess4 from '../../images/design-process-4.png';

const DesignProcess = () => {
  return (
    <section id="design-process-section" className="container text-center my-5">
      {/* First Row: Heading and Description */}
      <div className="row">
        <div className="col-12">
          <h2 className="design-process-heading font-weight-bold">
            Designing Process <span className="orangegradient-h2">We Apply</span>
          </h2>
          <p className="design-process-description">
            We follow a proper book cover designing process to ensure the best final product for our clients.
          </p>
        </div>
      </div>

      {/* Second Row: Icon Boxes */}
      <div className="row mt-4">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="design-process-icon-box">
            <img src={designprocess1} alt="Project Discussion" className="img-fluid mb-3 design-process-icon" />
            <h5 className="design-process-icon-title font-weight-bold">Project Discussion</h5>
            <p className="design-process-icon-text">
              First thing we do is discuss the client's expectations regarding the design.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="design-process-icon-box">
            <img src={designprocess2} alt="Design Research" className="img-fluid mb-3 design-process-icon" />
            <h5 className="design-process-icon-title font-weight-bold">Design Research</h5>
            <p className="design-process-icon-text">
              Our designers do thorough research to ensure the most fitting product.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="design-process-icon-box">
            <img src={designprocess3} alt="First Sample Layout" className="img-fluid mb-3 design-process-icon" />
            <h5 className="design-process-icon-title font-weight-bold">First Sample Layout</h5>
            <p className="design-process-icon-text">
              Our experts prepare the first draft and send it to the client for approval.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="design-process-icon-box">
            <img src={designprocess4} alt="Final Design Delivery" className="img-fluid mb-3 design-process-icon" />
            <h5 className="design-process-icon-title font-weight-bold">Final Design Delivery</h5>
            <p className="design-process-icon-text">
              Once approved, we deliver the final files to the client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
