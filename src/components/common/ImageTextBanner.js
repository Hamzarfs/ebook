import React from 'react';


const ImageTextBanner = ({ title, subtitle, description, contentItems, }) => {
    return (
        <section className="image-text-banner">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className="design-process-heading font-weight-bold">
                            {title}<br />
                            <span className="orangegradient-h2">{subtitle}</span>
                        </h2>
                        <p className="design-process-description text-center">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Map over the content items */}
                {contentItems.map((content, index) => (
                    <div className={`row align-items-center ${content.flexDirection === "reverse" ? "flex-row-reverse" : ""}`} key={index}>
                        <div className="col-md-6">
                            <h2>{content.heading}</h2>
                            <p>{content.paragraph}</p>
                        </div>
                        <div className="col-md-6">
                            <img src={content.imgSrc} alt={content.imgAlt} className="img-fluid" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageTextBanner;
