
import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ComBtn from '../common/CommonBtn';
import BreadCrumb from '../common/BreadCrumb';
import PopupForm1 from '../common/PopupForm';
//import BreadCrumb from '../components/common/BreadCrumb';

const ImageRightBanner = ({ heading, subHeading, description, imageSrc, imageHeight, imageWidth, objectfit, borderRadius }) => {
     const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
    
      const openModal = () => {
        setIsModalOpen(true); // Open the modal
      };
    
      const closeModal = () => {
        setIsModalOpen(false); // Close the modal
      };
    return (
        <section className="image-right-banner">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Text */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <h2 className="design-process-heading font-weight-bold">
                            {heading} 
                            <span className="orangegradient-h2">{subHeading}</span>
                        </h2>
                        <p className="design-process-description">
                            {description}
                        </p>
                        <div className="combtn">
<ComBtn/>
<BreadCrumb
        buttonText="Get a Quote"
        onClick={openModal} // Call openModal on button click
      />

<PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
</div>
                        
                    </div>

                    {/* Right Column: Image */}
                    <div className="col-12 col-md-6 text-center">
                        <img
                            src={imageSrc}
                            alt="Ghostwriting"
                            className="img-fluid"
                            style={{
                                objectFit: objectfit,
                                height: imageHeight,  // Use the passed height prop
                                width: imageWidth,      // Use the passed width prop
                                borderRadius: borderRadius
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageRightBanner;
