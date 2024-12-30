import React, { useState } from 'react';
import '../../TopHead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/amzlplogo.png'
import PopupForm1 from '../common/PopupForm';
import { FaPhone, FaComment } from 'react-icons/fa';

const LPHeader = () => {
   const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  
    const openModal = () => {
      setIsModalOpen(true); // Open the modal
    };
  
    const closeModal = () => {
      setIsModalOpen(false); // Close the modal
    };
  return (
    <header className="lpheader bg-orange">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand" href="https://amzbookpublishing.net/book-publishing-services">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a onClick={openModal} className="nav-link custom-btn get-started" href="#get-started">Get Started</a>
            </li>
            <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
            <li className="nav-item">
              <a className="nav-link custom-btn live-chat" href="tel:+17327979165"> 
                <FaPhone style={{ marginRight: '8px' }} /> 
                (732) 797-9165 </a>
            </li>
          </ul>
        </div>
      </nav>
      
    </header>
    
  );
}

export default LPHeader;
