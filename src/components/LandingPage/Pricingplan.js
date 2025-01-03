import React, { useState } from 'react';
import "../../lpPricingSection.css"; // Create a separate CSS file for this component
import bestseller from '../../images/bestsellerbadge.png'
import PopupForm1 from '../common/PopupForm';

const LPPricingSection = () => {
    // Define the state for modal visibility and modal content
    const [modalTitle, setModalTitle] = useState('');
    const [modalValue, setModalValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [modalInput, setModalInput] = useState(''); // This is for form input

    // Function to open the modal and set the title and value
    const openModal = (title, value) => {
        setModalTitle(title);   // Store the name (title) in state
        setModalValue(value);   // Store the value in state
        setIsModalOpen(true);    // Open the modal
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);  // Close the modal
    };

    // Handle form submission (you can define your own logic here)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic goes here
        alert(`Form submitted for ${modalTitle} with value ${modalValue}`);
    };


    return (
        <section className="lp-pricing-section">
            <div className="container lp-sec-heading">
                <h2 className="choose-service-heading font-weight-bold">
                    Book Publishing Bundles
                </h2>
                <p className="choose-service-description">Limited Time Offer - Save 50% On Book Publishing Services</p>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {/* Start Up Package */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="pricing-card">
                            <div className="pricing-header basic-package">
                                <h2>Start Up Package</h2>
                                <div className="price">
                                    <span className="original-price">$2000</span>
                                    <span className="discounted-price">$999 USD</span>
                                </div>
                            </div>
                            <div className="pricing-body">
                                <div className="feature-list">
                                    <h5>Preparing Your Manuscript</h5>
                                    <ul>
                                        <li>✔ Developmental Editing</li>
                                        <li>✔ Line by Line Editing</li>
                                        <li>✔ Proofreading</li>
                                        <li>✔ Typesetting</li>
                                        <li>✔ Layout Adjustment</li>
                                        <li>✔ Formatting (50+ Platforms)</li>
                                        <li>✔ 3 Revisions Per Draft</li>
                                    </ul>

                                    <h5>Designing Your Cover</h5>
                                    <ul>
                                        <li>✔ Graphic OR Illustrated Design</li>
                                        <li>✔ Cover Layout</li>
                                        <li>✔ Cover Formatting</li>
                                        <li>✔ Front, Back & Spine</li>
                                    </ul>

                                    <h5>Book Publishing</h5>
                                    <ul>
                                        <li>✔ Account Creation</li>
                                        <li>✔ Account Verification</li>
                                        <li>✔ Available on Amazon & Kindle</li>
                                        <li>✔ eBook Format</li>
                                        <li>✔ Paperback Format</li>
                                    </ul>

                                    <h5>Guarantees</h5>
                                    <ul>
                                        <li>✔ No Royalties Share</li>
                                        <li>✔ 100% Ownership Rights</li>
                                        <li>✔ 100% Satisfaction</li>
                                    </ul>
                                </div>


                            </div>
                            <div className="pricing-footer">
                                <button
                                    name="Start Up Package"
                                    value="$999"
                                    onClick={() => openModal("Start Up Package", "$999")}
                                    className="start-project-btn"
                                >
                                    START PROJECT
                                </button>
                                <PopupForm1
                                    isOpen={isModalOpen}
                                    closeModal={closeModal}
                                    modalTitle={modalTitle}
                                    modalValue={modalValue}
                                />

                                <div className="footer-info">
                                    <span className="left-footer">
                                        Share your idea!
                                        <br />
                                        <a href="tel:+17327979165">(732) 797-9165</a>

                                    </span>
                                    <div className="divider"></div>
                                    <span className="right-footer">
                                        Want to discuss?
                                        <br />
                                        <a href="https://wa.me/8482369397" target="_blank">Live Chat Now</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Start-Up Package */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="pricing-card">
                            <div className="pricing-header startup-package">
                                <h2>Standard Package </h2>
                                <div className="price">
                                    <span className="original-price">$3,000</span>
                                    <span className="discounted-price">$1499 USD</span>
                                </div>
                            </div>
                            <div className="pricing-body">
                                <div className="feature-list">
                                    <h5>Preparing Your Manuscript</h5>
                                    <ul>
                                        <li>✔ Developmental Editing</li>
                                        <li>✔ Line by Line Editing</li>
                                        <li>✔ Proofreading</li>
                                        <li>✔ Typesetting</li>
                                        <li>✔ Layout Adjustment</li>
                                        <li>✔ Formatting (50+ Platforms)</li>
                                        <li>✔ 5 Revisions Per Draft</li>
                                    </ul>

                                    <h5>Designing Your Cover</h5>
                                    <ul>
                                        <li>✔ Graphic OR Illustrated Design</li>
                                        <li>✔ Cover Layout</li>
                                        <li>✔ Cover Formatting</li>
                                        <li>✔ Front, Back & Spine</li>
                                        <li>✔ ISBN + Barcode (2X)</li>
                                    </ul>

                                    <h5>Book Publishing</h5>
                                    <ul>
                                        <li>✔ Account Creation</li>
                                        <li>✔ Account Verification</li>
                                        <li>✔ Available on Amazon & Kindle</li>
                                        <li>✔ Available on Barnes and Noble</li>
                                        <li>✔ eBook Format</li>
                                        <li>✔ Paperback Format</li>
                                        <li>✔ Hardcover Format</li>
                                    </ul>

                                    <h5>Guarantees</h5>
                                    <ul>
                                        <li>✔ No Royalties Share</li>
                                        <li>✔ 100% Ownership Rights</li>
                                        <li>✔ 100% Satisfaction</li>
                                    </ul>
                                </div>


                            </div>
                            <div className="pricing-footer">
                                <button
                                    name="Standard Package"
                                    value="$1499"
                                    onClick={() => openModal("Standard Package", "$1499")}
                                    className="start-project-btn"
                                >
                                    START PROJECT
                                </button>

                                <div className="footer-info">
                                    <span className="left-footer">
                                        Share your idea!
                                        <br />
                                        <a href="tel:+17327979165">(732) 797-9165</a>
                                    </span>
                                    <div className="divider"></div>
                                    <span className="right-footer">
                                        Want to discuss?
                                        <br />
                                        <a href="https://wa.me/8482369397" target="_blank">Live Chat Now</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Standard Package */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="pricing-card">
                            <div className="pricing-header standard-package">
                                <h2>Professional Package </h2>
                                <div className="price">
                                    <span className="original-price">$7000</span>
                                    <span className="discounted-price">$3449 USD</span>
                                </div>
                                <img
                                    src={bestseller}
                                    alt="Best Seller"
                                    className="best-seller-badge"
                                />
                            </div>
                            <div className="pricing-body">
                                <div className="feature-list">
                                    <h5>Preparing Your Manuscript</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Developmental Editing</li>
                                        <li><span className="check-icon">✔</span> Line by Line Editing</li>
                                        <li><span className="check-icon">✔</span> Proofreading</li>
                                        <li><span className="check-icon">✔</span> Typesetting</li>
                                        <li><span className="check-icon">✔</span> Layout Adjustment</li>
                                        <li><span className="check-icon">✔</span> Formatting (50+ Platforms)</li>
                                        <li><span className="check-icon">✔</span> 5 Revisions Per Draft</li>
                                    </ul>

                                    <h5>Designing Your Cover</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Graphic OR Illustrated Design</li>
                                        <li><span className="check-icon">✔</span> Cover Layout</li>
                                        <li><span className="check-icon">✔</span> Cover Formatting</li>
                                        <li><span className="check-icon">✔</span> Front, Back & Spine</li>
                                        <li><span className="check-icon">✔</span> ISBN + Barcode (2X)</li>
                                    </ul>

                                    <h5>Book Publishing</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Account Creation</li>
                                        <li><span className="check-icon">✔</span> Account Verification</li>
                                        <li><span className="check-icon">✔</span> Available on Amazon & Kindle</li>
                                        <li><span className="check-icon">✔</span> Available on Barnes and Noble</li>
                                        <li><span className="check-icon">✔</span> Available on Google Books</li>
                                        <li><span className="check-icon">✔</span> eBook Format</li>
                                        <li><span className="check-icon">✔</span> Paperback Format</li>
                                        <li><span className="check-icon">✔</span> Hardcover Format</li>
                                    </ul>

                                    <h5>Online Presence</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> 3 - 5 Page Authors Website</li>
                                        <li><span className="check-icon">✔</span> 1 - Year Domain & Hosting</li>
                                        <li><span className="check-icon">✔</span> 30 - 60 Seconds Book Trailer</li>
                                    </ul>

                                    <h5>Guarantees</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> No Royalties Share</li>
                                        <li><span className="check-icon">✔</span> 100% Ownership Rights</li>
                                        <li><span className="check-icon">✔</span> 100% Satisfaction</li>
                                    </ul>
                                </div>


                            </div>
                            <div className="pricing-footer">
                                {/* <button className="start-project-btn">START PROJECT</button> */}
                                <button
                                    name="Professional Package "
                                    value="$3449 "
                                    onClick={() => openModal("Professional Package ", "$3449 ")}
                                    className="start-project-btn"
                                >
                                    START PROJECT
                                </button>
                                <div className="footer-info">
                                    <span className="left-footer">
                                        Share your idea!
                                        <br />
                                        <a href="tel:+17327979165">(732) 797-9165</a>
                                    </span>
                                    <div className="divider"></div>
                                    <span className="right-footer">
                                        Want to discuss?
                                        <br />
                                        <a href="https://wa.me/8482369397" target="_blank">Live Chat Now</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {/* Start Up Package */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="pricing-card">
                            <div className="pricing-header basic-package">
                                <h2>All-Inclusive </h2>
                                <div className="price">
                                    <span className="original-price">$15000</span>
                                    <span className="discounted-price">$7499 USD</span>
                                </div>
                            </div>
                            <div className="pricing-body">

                                <div className="feature-list">
                                    <h5>Preparing Your Manuscript</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Developmental Editing</li>
                                        <li><span className="check-icon">✔</span> Line by Line Editing</li>
                                        <li><span className="check-icon">✔</span> Proofreading</li>
                                        <li><span className="check-icon">✔</span> Typesetting</li>
                                        <li><span className="check-icon">✔</span> Layout Adjustment</li>
                                        <li><span className="check-icon">✔</span> Formatting (50+ Platforms)</li>
                                        <li><span className="check-icon">✔</span> 5 Revisions Per Draft</li>
                                    </ul>

                                    <h5>Designing Your Cover</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Graphic OR Illustrated Design</li>
                                        <li><span className="check-icon">✔</span> Cover Layout</li>
                                        <li><span className="check-icon">✔</span> Cover Formatting</li>
                                        <li><span className="check-icon">✔</span> Front, Back & Spine</li>
                                        <li><span className="check-icon">✔</span> ISBN + Barcode (2X)</li>
                                    </ul>

                                    <h5>Book Publishing</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Account Creation</li>
                                        <li><span className="check-icon">✔</span> Account Verification</li>
                                        <li><span className="check-icon">✔</span> Available on Amazon & Kindle</li>
                                        <li><span className="check-icon">✔</span> Available on Barnes and Noble</li>
                                        <li><span className="check-icon">✔</span> Available on Google Books</li>
                                        <li><span className="check-icon">✔</span> Available on Smashwords</li>
                                        <li><span className="check-icon">✔</span> eBook Format</li>
                                        <li><span className="check-icon">✔</span> Paperback Format</li>
                                        <li><span className="check-icon">✔</span> Hardcover Format</li>
                                    </ul>

                                    <h5>12 Months Brand Marketing</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Logo Design (Complimentary)</li>
                                        <li><span className="check-icon">✔</span> 3 - 5 Page Author's Website</li>
                                        <li><span className="check-icon">✔</span> 1 - Year Domain & Hosting</li>
                                        <li><span className="check-icon">✔</span> 30 - 60 Seconds Book Trailer</li>
                                        <li><span className="check-icon">✔</span> Organic Google Marketing</li>
                                        <li><span className="check-icon">✔</span> Social Media Marketing (Facebook, Instagram & LinkedIn)</li>
                                    </ul>

                                    <h5>Guarantees</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> No Royalties Share</li>
                                        <li><span className="check-icon">✔</span> 100% Ownership Rights</li>
                                        <li><span className="check-icon">✔</span> 100% Satisfaction</li>
                                    </ul>
                                </div>




                            </div>
                            <div className="pricing-footer">
                                {/* <!-- EASY PAYMENT PLAN with tooltip --> */}
                                <div className="easy-payment-plan">
                                    <h4>EASY PAYMENT PLAN <span className="tooltip-icon">?</span></h4>
                                    <div className="tooltip-content">
                                        <ul>
                                            <li>50% PAYMENT UPFRONT.</li>
                                            <li>REMAINING 50% CAN BE PAID IN 2–3 MONTHS INSTALLMENTS OR</li>
                                            <li>AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <button className="start-project-btn">START PROJECT</button> */}
                                <button
                                    name="All-Inclusive  "
                                    value="$7499  "
                                    onClick={() => openModal("All-Inclusive  ", "$7499  ")}
                                    className="start-project-btn"
                                >
                                    START PROJECT
                                </button>
                                <div className="footer-info">
                                    <span className="left-footer">
                                        Share your idea!
                                        <br />
                                        <a href="tel:+17327979165">(732) 797-9165</a>
                                    </span>
                                    <div className="divider"></div>
                                    <span className="right-footer">
                                        Want to discuss?
                                        <br />
                                        <a href="https://wa.me/8482369397" target="_blank">Live Chat Now</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Start-Up Package */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="pricing-card">
                            <div className="pricing-header startup-package">
                                <h2>Ultimate Package </h2>
                                <img
                                    src={bestseller}
                                    alt="Best Seller"
                                    className="best-seller-badge"
                                />
                                <div className="price">
                                    <span className="original-price">$25000</span>
                                    <span className="discounted-price">$12499 USD</span>
                                </div>
                            </div>
                            <div className="pricing-body">

                                <div className="feature-list">
                                    <h5>Preparing Your Manuscript</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Developmental Editing</li>
                                        <li><span className="check-icon">✔</span> Line by Line Editing</li>
                                        <li><span className="check-icon">✔</span> Proofreading</li>
                                        <li><span className="check-icon">✔</span> Typesetting</li>
                                        <li><span className="check-icon">✔</span> Layout Adjustment</li>
                                        <li><span className="check-icon">✔</span> Formatting (50+ Platforms)</li>
                                        <li><span className="check-icon">✔</span> 5 Revisions Per Draft</li>
                                    </ul>

                                    <h5>Designing Your Cover</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Graphic OR Illustrated Design</li>
                                        <li><span className="check-icon">✔</span> Cover Layout</li>
                                        <li><span className="check-icon">✔</span> Cover Formatting</li>
                                        <li><span className="check-icon">✔</span> Front, Back & Spine</li>
                                        <li><span className="check-icon">✔</span> ISBN + Barcode (2X)</li>
                                    </ul>

                                    <h5>Book Publishing</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Account Creation</li>
                                        <li><span className="check-icon">✔</span> Account Verification</li>
                                        <li><span className="check-icon">✔</span> Available on Amazon & Kindle</li>
                                        <li><span className="check-icon">✔</span> Available on Barnes and Noble</li>
                                        <li><span className="check-icon">✔</span> Available on Google Books</li>
                                        <li><span className="check-icon">✔</span> Available on Smashwords</li>
                                        <li><span className="check-icon">✔</span> Available on Draft2Digital</li>
                                        <li><span className="check-icon">✔</span> Available on ACX</li>
                                        <li><span className="check-icon">✔</span> eBook Format</li>
                                        <li><span className="check-icon">✔</span> Paperback Format</li>
                                        <li><span className="check-icon">✔</span> Hardcover Format</li>
                                        <li><span className="check-icon">✔</span> Audiobook Format</li>
                                    </ul>

                                    <h5>24 Months Brand Marketing</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Logo Design (Complimentary)</li>
                                        <li><span className="check-icon">✔</span> 3 - 5 Page Author's Website</li>
                                        <li><span className="check-icon">✔</span> 2 - Year Domain & Hosting</li>
                                        <li><span className="check-icon">✔</span> 60 - 90 Seconds Video Trailer</li>
                                        <li><span className="check-icon">✔</span> Organic Google Marketing</li>
                                        <li><span className="check-icon">✔</span> Blogs & Article Postings</li>
                                        <li><span className="check-icon">✔</span> Press Releases (150+ Platforms)</li>
                                        <li><span className="check-icon">✔</span> Social Media Marketing (Facebook, Instagram, Twitter, Pinterest, Youtube & LinkedIn)</li>
                                    </ul>

                                    <h5>Guarantees</h5>
                                    <ul>
                                        <li><span className="check-icon">✔ </span> No Royalties Share</li>
                                        <li><span className="check-icon">✔</span> 100% Ownership Rights</li>
                                        <li><span className="check-icon">✔</span> 100% Satisfaction</li>
                                    </ul>
                                </div>



                            </div>
                            <div className="pricing-footer">
                                {/* <!-- EASY PAYMENT PLAN with tooltip --> */}
                                <div className="easy-payment-plan">
                                    <h4>EASY PAYMENT PLAN <span className="tooltip-icon">?</span></h4>
                                    <div className="tooltip-content">
                                        <ul>
                                            <li>50% PAYMENT UPFRONT.</li>
                                            <li>REMAINING 50% CAN BE PAID IN 2–3 MONTHS INSTALLMENTS OR</li>
                                            <li>AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <button className="start-project-btn">START PROJECT</button> */}
                                <button
                                    name="Ultimate Package   "
                                    value="$12499"
                                    onClick={() => openModal("Ultimate Package   ", "$12499")}
                                    className="start-project-btn"
                                >
                                    START PROJECT
                                </button>
                                <div className="footer-info">
                                    <span className="left-footer">
                                        Share your idea!
                                        <br />
                                        <a href="tel:+17327979165">(732) 797-9165</a>
                                    </span>
                                    <div className="divider"></div>
                                    <span className="right-footer">
                                        Want to discuss?
                                        <br />
                                        <a href="https://wa.me/8482369397" target="_blank">Live Chat Now</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Standard Package */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="pricing-card">
                            <div className="pricing-header standard-package">
                                <h2>Custom Package</h2>
                                <div className="price">
                                    <span className="for enterprise">For Enterprise</span>
                                </div>

                            </div>
                            <div className="pricing-body">

                                <div className="feature-list">
                                    <h5>Preparing Your Manuscript</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Developmental Editing</li>
                                        <li><span className="check-icon">✔</span> Line by Line Editing</li>
                                        <li><span className="check-icon">✔</span> Proofreading</li>
                                        <li><span className="check-icon">✔</span> Typesetting</li>
                                        <li><span className="check-icon">✔</span> Layout Adjustment</li>
                                        <li><span className="check-icon">✔</span> Formatting (50+ Platforms)</li>
                                        <li><span className="check-icon">✔</span> 5 Revisions Per Draft</li>
                                    </ul>

                                    <h5>Designing Your Cover</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Graphic OR Illustrated Design</li>
                                        <li><span className="check-icon">✔</span> Cover Layout</li>
                                        <li><span className="check-icon">✔</span> Cover Formatting</li>
                                        <li><span className="check-icon">✔</span> Front, Back & Spine</li>
                                        <li><span className="check-icon">✔</span> ISBN + Barcode (2X)</li>
                                    </ul>

                                    <h5>Book Publishing</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Account Creation</li>
                                        <li><span className="check-icon">✔</span> Account Verification</li>
                                        <li><span className="check-icon">✔</span> Available on Amazon & Kindle</li>
                                        <li><span className="check-icon">✔</span> Available on Barnes and Noble</li>
                                        <li><span className="check-icon">✔</span> Available on Google Books</li>
                                        <li><span className="check-icon">✔</span> Available on Smashwords</li>
                                        <li><span className="check-icon">✔</span> Available on Draft2Digital</li>
                                        <li><span className="check-icon">✔</span> Available on ACX</li>
                                        <li><span className="check-icon">✔</span> eBook Format</li>
                                        <li><span className="check-icon">✔</span> Paperback Format</li>
                                        <li><span className="check-icon">✔</span> Hardcover Format</li>
                                        <li><span className="check-icon">✔</span> Audiobook Format</li>
                                    </ul>

                                    <h5>24 Months Brand Marketing</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> Logo Design (Complimentary)</li>
                                        <li><span className="check-icon">✔</span> 3 - 5 Page Author's Website</li>
                                        <li><span className="check-icon">✔</span> 2 - Year Domain & Hosting</li>
                                        <li><span className="check-icon">✔</span> 60 - 90 Seconds Video Trailer</li>
                                        <li><span className="check-icon">✔</span> Organic Google Marketing</li>
                                        <li><span className="check-icon">✔</span> Blogs & Article Postings</li>
                                        <li><span className="check-icon">✔</span> Press Releases (150+ Platforms)</li>
                                        <li><span className="check-icon">✔</span> Social Media Marketing (Facebook, Instagram, Twitter, Pinterest, Youtube & LinkedIn)</li>
                                    </ul>

                                    <h5>Guarantees</h5>
                                    <ul>
                                        <li><span className="check-icon">✔</span> No Royalties Share</li>
                                        <li><span className="check-icon">✔</span> 100% Ownership Rights</li>
                                        <li><span className="check-icon">✔</span> 100% Satisfaction</li>
                                    </ul>
                                </div>


                            </div>

                            <div className="pricing-footer">

                                {/* <!-- EASY PAYMENT PLAN with tooltip --> */}
                                <div className="easy-payment-plan">
                                    <h4>EASY PAYMENT PLAN <span className="tooltip-icon">?</span></h4>
                                    <div className="tooltip-content">
                                        <ul>
                                            <li>50% PAYMENT UPFRONT.</li>
                                            <li>REMAINING 50% CAN BE PAID IN 2–3 MONTHS INSTALLMENTS OR</li>
                                            <li>AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <button className="start-project-btn">START PROJECT</button> */}
                                <button
                                    name="Ultimate Package   "
                                    value="$12499"
                                    onClick={() => openModal("Custom Package", " ")}
                                    className="start-project-btn"
                                >
                                    START PROJECT
                                </button>
                                <div className="footer-info">
                                    <span className="left-footer">
                                        Share your idea!
                                        <br />
                                        <a href="tel:+17327979165">(732) 797-9165</a>
                                    </span>
                                    <div className="divider"></div>
                                    <span className="right-footer">
                                        Want to discuss?
                                        <br />
                                        <a href="https://wa.me/8482369397" target="_blank">Live Chat Now</a>
                                    </span>
                                </div></div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LPPricingSection;
