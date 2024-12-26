import React from "react";
import "../../Lpcta.css";
import lpctaimg from '../../images/lpctaimg.png'

const Lpcta = () => {
  return (
    <section className="lpcta-section py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* First Column - Image */}
          <div className="col-md-6 text-center text-md-start">
            <img
              src={lpctaimg}
              alt="Books"
              className="lpcta-image"
            />
          </div>

          {/* Second Column - Content */}
          <div className="col-md-6">
            <h2 className="lpcta-heading">Let's Tell Your Story to the World!</h2>
            <p className="lpcta-text">
              Ready to share your fascinating story with your potential audience?
              Contact amz Publishing and get a free quote.
            </p>
            <div className="lpcta-buttons">
              <button className="btn btn-white">Get Started</button>
              <button className="btn btn-transparent">Let's Talk</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lpcta;
