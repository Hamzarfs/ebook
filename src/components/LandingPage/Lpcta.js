import React, { useState } from 'react';
import "../../Lpcta.css";
import lpctaimg from '../../images/lpctaimg.png'
import PopupForm1 from '../common/PopupForm';


const Lpcta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal


  const [modalTitle, setModalTitle] = useState('');
    const [modalValue, setModalValue] = useState('');

    const [modalInput, setModalInput] = useState(''); // This is for form input
  
    // Function to open the modal and set the title and value
    const openModal = (title, value) => {
      setModalTitle(title);   // Store the name (title) in state
      setModalValue(value);   // Store the value in state
      setIsModalOpen(true);    // Open the modal
    };
  
    // Function to close the modal


    
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
              <button 
               name="Start Up Package" 
               value="$999" 
               onClick={() => openModal("Start Up Package", "$999")} 
              
 className="btn btn-white">Get Started</button>
              <a  href="https://wa.me/8482369397" className="btn btn-transparent">Let's Talk</a>
              <PopupForm1 
  isOpen={isModalOpen} 
  closeModal={closeModal} 
  modalTitle={modalTitle} 
  modalValue={modalValue} 
/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lpcta;
