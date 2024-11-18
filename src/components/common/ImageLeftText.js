import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageLeftBanner = ({ heading, subHeading, description, imageSrc, objectfit, imageHeight, imageWidth, borderRadius ,  }) => {
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
                        <h2 className="design-process-heading font-weight-bold">
                            {heading} 
                            <span className="orangegradient-h2">{subHeading}</span>
                        </h2>
                        <p className="design-process-description">
                            {description}
                        </p>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default ImageLeftBanner;
