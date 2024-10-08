import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageRightBanner = ({ heading, subHeading, description, imageSrc, imageHeight, imageWidth, objectfit, borderRadius }) => {
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
