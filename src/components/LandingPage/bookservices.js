import React, { useState } from 'react';
import '../../awards.css';
import PopupForm1 from '../common/PopupForm';

const Bookservices = ({
  
  heading, // Props for the heading
  description, // Props for the paragraph
  steps // Array of steps with image, alt text, title, and description
}) => {
   const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
    
      const openModal = () => {
        setIsModalOpen(true); // Open the modal
      };
    
      const closeModal = () => {
        setIsModalOpen(false); // Close the modal
      };
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
    {/*************************** Buttons *******************/}
    <div className='container pt-3' style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className='row' style={{ margin: '0' }}>
    <div className='col-md-12' style={{ padding: '0', display: 'flex', justifyContent: 'center' }}>
      <div className="lpbanner-buttons mt-0" style={{ textAlign: 'center', padding: '0', margin: '0', display: 'flex', justifyContent: 'center' }}>
        <a 
       onClick={openModal}
          className="first-button" 
          href="#pricing-section" 
          style={{ 
            display: 'inline-block', 
            marginRight: '10px',  // Gap between the buttons
            padding: '10px 20px', // Adjust padding as needed
            backgroundColor: '#FC9700',  // Button color (FC9700)
            color: 'white',  // Text color
            textDecoration: 'none',  // Remove underline
            borderRadius: '30px', // Border radius of 30px
            boxShadow: '0px 4px 6px rgba(252, 151, 0, 0.5)', // Drop shadow with FC9700 color
          }}
        >
          Get Started
        </a>
        <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
     
        <a 
          className="first-button" 
          href="https://wa.me/8482369397" 
          style={{ 
            display: 'inline-block', 
            marginLeft: '10px',  // Gap between the buttons
            padding: '10px 20px', 
            backgroundColor: '#FC9700',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '30px', // Border radius of 30px
            boxShadow: '0px 4px 6px rgba(252, 151, 0, 0.5)', // Drop shadow with FC9700 color
          }}
        >
          Let’s Talk
        </a>
      </div>
    </div>
  </div>
</div>
         {/*************************** Buttons *******************/}
</section>



  );
};

export default Bookservices;
