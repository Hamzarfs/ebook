import React from 'react';
import frame10 from '../../images/Frame 10.png'; // Adjust the path as necessary
import frame11 from '../../images/Frame 11.png'; // Adjust the path as necessary
import frame12 from '../../images/Frame 12.png'; // Adjust the path as necessary

const ImageTextBanner = () => {
    return (
        <section className="image-text-banner">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className="design-process-heading font-weight-bold">
                            A Whole New Chapter In<br />
                            <span className="orangegradient-h2">Book Design</span>
                        </h2>
                        <p className="design-process-description">
                            You've got the next bestseller. We've got a complete book design solution: custom covers,<br />
                            interior design, illustration, tools and more.
                        </p>
                    </div>
                </div>

                {/* Row 1 */}
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Cover-To-Cover Creativity</h2>
                        <p>A great book design starts with the perfect cover. Our global design community has created thousands of them. We’ve designed stunning artwork for everything from kids’ books to cookbooks—including New York Times bestselling authors Tim Ferris and Rick Warren.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={frame10} alt="Book Cover Design" className="img-fluid" />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-md-6">
                        <h2>Make Every Page Perfect With Creative Book Design</h2>
                        <p>We’d never forget about the inside of your book. We’ve curated a team of our expert book designers to bring you custom typesetting and interiors—whether you’ve got a novel, a self-help book, or something extra special.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={frame11} alt="Book Design" className="img-fluid" />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Your Destination For Custom Book Illustration</h2>
                        <p>Our book design artists love turning your words into gorgeous art. From storybook sketches to clever cartoons, imagine the beautiful imagery that will pull your readers further into your book.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={frame12} alt="Book Illustration" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageTextBanner;
