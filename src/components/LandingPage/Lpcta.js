import React, { useState } from 'react';
import "../../Lpcta.css";
import lpctaimg from '../../images/lpctaimg.png'
import PopupForm1 from '../common/PopupForm';


const Lpcta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
    
      const openModal = () => {
        setIsModalOpen(true); // Open the modal
      };
    
      const closeModal = () => {
        setIsModalOpen(false); // Close the modal
      };
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
            <h2 className="lpcta-heading">Let’s Tell Your Story to the World</h2>
            <p className="lpcta-text">
            Ready to share your fascinating story with your potential audience? Contact AMZ Book Publishing and get a free quote
            </p>
            <div className="lpcta-buttons">
              <button onClick={openModal} className="btn btn-white">Get Started</button>
              <button className="btn btn-transparent">Let's Talk</button>
              <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lpcta;
