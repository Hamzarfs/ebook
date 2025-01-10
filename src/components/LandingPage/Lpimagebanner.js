import React, { useState } from 'react';
import '../../lpimagebanner.css';
import PopupForm1 from '../common/PopupForm';

const Lpimagebanner = ({ heading, subHeading, description, imageSrc, imageHeight, imageWidth, objectfit, borderRadius,
     reverseOrder, updatePopupTitle, headinglightblue, heading2 }) => {
           const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
          
            const openModal = () => {
              setIsModalOpen(true); // Open the modal
            };
          
            const closeModal = () => {
              setIsModalOpen(false); // Close the modal
            };
    return (
        <section className="image-right-banner">
            <div className="container ">
                <div className="row align-items-center py-4">
                    {/* Left Column: Text or Image based on reverseOrder */}
                    <div className={`col-12 col-md-6 mb-md-0 ${reverseOrder ? 'order-md-2' : ''}`}>
                        <h2 className="sub-heading">{subHeading}</h2>
                        <h2 className="design-process-heading font-weight-bold">{heading}<span className="lightblue-h2">{headinglightblue}</span>{heading2}</h2>
                        <p className="design-process-description">{description}</p>
                        <div>
                            <button onClick={openModal} className="first-button" >Get Started</button>
                            <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
                        </div>
                    </div>
                    {/* Right Column: Image or Text based on reverseOrder */}
                    <div className={`col-12 col-md-6 text-center align-content-center ${reverseOrder ? 'order-md-1' : ''}`} >
                        <img
                            src={imageSrc}
                            alt="professional ghostwriting services"
                            className="img-fluid img-animate"
                            style={{
                                objectFit: objectfit,
                                height: imageHeight,
                                width: imageWidth,
                                borderRadius: borderRadius,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lpimagebanner;
