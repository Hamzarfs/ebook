import React from 'react';
import '../../lpimagebanner.css';

const Lpimagebanner = ({ heading, subHeading, description, imageSrc, imageHeight, imageWidth, objectfit, borderRadius, reverseOrder, updatePopupTitle, headinglightblue, heading2 }) => {
    return (
        <section className="image-right-banner">
            <div className="container ">
                <div className="row align-items-center py-4">
                    {/* Left Column: Text or Image based on reverseOrder */}
                    <div className={`col-12 col-md-6 mb-md-0 ${reverseOrder ? 'order-md-2' : ''}`}>
                        <h2 className="sub-heading">{subHeading}</h2>
                        <h2 className="book-cards-header">{heading}<span className="lightblue-h2">{headinglightblue}</span>{heading2}</h2>
                        <p className="design-process-description">{description}</p>
                        <div>
                            <button className="first-button" data-bs-toggle="modal" data-bs-target="#popupForm" >Get Started</button>
                        </div>
                    </div>

                    {/* Right Column: Image or Text based on reverseOrder */}
                    <div className={`col-12 col-md-6 text-center align-content-center ${reverseOrder ? 'order-md-1' : ''}`} >
                        <img
                            src={imageSrc}
                            alt="Ghostwriting"
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
