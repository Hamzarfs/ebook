import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ComBtn from '../common/CommonBtn';
import BreadCrumb from '../common/BreadCrumb';
import PopupForm1 from '../common/PopupForm';


const ImageLeftBanner = ({ heading, subHeading, description, imageSrc, objectfit, imageHeight, imageWidth, borderRadius ,  }) => {
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
                    {/* Right Column: Image */}
                    <div className="col-md-6 text-center paddingright">
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
                    {/* Left Column: Text */}
                    <div className="col-md-6 pl-8">
                        <h2 className="design-process-heading font-weight-bold " >
                        {/* <h2 className= {`design-process-heading font-weight-bold ${props.className || ''}`} > */}
                            {heading} 
                            <span className="orangegradient-h2">{subHeading}</span>
                        </h2>
                        <p className="design-process-description">
                            {description}

                            <div className="combtn">
<ComBtn/>
<BreadCrumb
        buttonText="Get a Quote"
        onClick={openModal} // Call openModal on button click
      />
      <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />


</div>
                        </p>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default ImageLeftBanner;
