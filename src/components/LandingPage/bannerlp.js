import React, { useState } from "react";
import bgimg from '../../images/lpbg.webp';
import formbg from '../../images/formbg.png';
import trustpilot from '../../images/truspiloticon.svg';
import clutch from '../../images/clutchicon.png';
import barkicon from '../../images/barkicon.png';
import fiftyoff from '../../images/fiftyoff.png';
import '../../LandingPage.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isAlphabetic, fieldLengthValidator } from '../../utils/validationHelpers'

const Lpbanner = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        title: 'Claim Your Discount'
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmailAndPhone = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phoneRegex = /^\+?\d{10,15}$/,
            nameRegex = /^[a-zA-Z ]{1,50}$/;

        let errorMessage = '';

        // Check Name
        if (!nameRegex.test(formData.name)) {
            errorMessage += "Please enter your name.<br />";
        }

        // Check Email
        if (!emailRegex.test(formData.email)) {
            errorMessage += "Please enter a valid email address.<br />";
        }

        // Check Phone
        if (!phoneRegex.test(formData.phone)) {
            errorMessage += "Please enter a valid phone number.<br />";
        }

        if (errorMessage) {
            Swal.fire('Error', errorMessage, 'error');
        }

        return nameRegex.test(formData.name) && emailRegex.test(formData.email) && phoneRegex.test(formData.phone);
    };

    const validateFormFields = () => {
        let isValid = true, html = '';

        // Name validation
        if (!isAlphabetic(formData.name) || !fieldLengthValidator(formData.name, 50)) {
            html += "Name should not exceed 50 characters and must be alphabetic.<br />";
            isValid = false;
        }

        // Message validation
        if (!fieldLengthValidator(formData.message, 2000)) {
            html += "Message should not exceed 2000 characters.<br />";
            isValid = false;
        }

        if (html) {
            Swal.fire('Error', html, 'error');
        }

        return isValid;
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // Validate Email, Phone, and Name
        if (!validateEmailAndPhone()) return;

        // Validate Name & Message
        if (!validateFormFields()) return;

        setLoading(true);

        const hubspotData = new URLSearchParams({
            'email': formData.email,
            'firstname': formData.name,
            'phone': formData.phone,
            'message': formData.message,
            'brand': 'AMZ Book Publishing',
            'hs_context': JSON.stringify({
                pageUri: window.location.href,
                pageName: document.title
            })
        }).toString();

        try {
            const response = await fetch("https://amzbookpublishing.net/PHPMailer/popup-email.php", {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            });

            const result = await response.json();

            if (result.success) {
                await fetch('https://forms.hubspot.com/uploads/form/v2/47721008/ba6fc021-d762-4fc9-9775-ecdd9e619374', {
                    method: 'POST',
                    body: hubspotData,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                navigate('/thank-you');
            } else {
                Swal.fire('Error', result.message, 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Something went wrong!', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="lpbanner" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-7 lp-left-column">
                        <p className="lpbanner-text">#1 Self-Publishing Company</p>
                        <div className="lpbanner-heading-container" style={{ display: 'flex', alignItems: 'center' }}>
                            <h1 className="lpbanner-heading">Publish Your Book Professionally with Our Book Publishing Services</h1>
                        </div>

                        <div className="lp-banner-margin">
                            <p className="lpbanner-text">Our professional book publishing services provide the guidance and support you need every step of the way. We work closely with you to understand your vision and craft a publication strategy that maximizes your book's impact.</p>
                            <div className="lpbanner-buttons mt-4">
                                <a className="first-button" href="tel:+17327979165">Let’s Talk About Project</a>
                            </div>
                            <div className="lpbanner-badges d-flex gap-3 align-items-center mt-5 justify-content-center justify-content-lg-start">
                                <a href="https://clutch.co/profile/amz-book-publishing" target="_blank">
                                    <img src={clutch} alt="Clutch" className="img-fluid" />
                                </a>
                                <a href="https://www.trustpilot.com/review/amzbookpublishing.net" target="_blank">
                                    <img src={trustpilot} alt="Trustpilot" className="trusticon img-fluid" />
                                </a>
                                <a href="https://www.bark.com/en/us/company/amz-book-publishing/4XdEkg/" target="_blank">
                                    <img src={barkicon} alt="Bark" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-5 lp-right-column">
                        <div className="lpbanner-form">
                            <img src={fiftyoff} alt="Best Seller" className="fiftyoff" />
                            <h3 className="lpbanner-form-title">Claim Your Discount</h3>
                            <p>Enjoy exclusive savings with this limited-time offer!</p>
                            <form method="POST" onSubmit={handleSubmit} id="bannerForm" noValidate>
                                <input
                                    type="text"
                                    placeholder="Enter your name*"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="lpbanner-input"
                                    required
                                    pattern="^[a-zA-Z][a-zA-Z ]{0,55}$"
                                    maxLength="55"
                                    title="Please enter a valid name"
                                />
                                {formData.name && !/^[a-zA-Z][a-zA-Z ]{0,60}$/.test(formData.name) && (
                                    <div className="error-message">Not allowed more than 50 characters and it must be in alphabet</div>
                                )}

                                <input
                                    type="tel"
                                    placeholder="Enter your phone number*"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="lpbanner-input"
                                    required
                                    pattern="^\+?\d{10,15}$"
                                    title="Phone number should be between 10 and 15 digits, with an optional '+' at the start."
                                />
                                {formData.phone && !/^\+?\d{10,15}$/.test(formData.phone) && (
                                    <div className="error-message">Please enter a valid phone number (between 10 and 15 digits, optional '+').</div>
                                )}

                                <input
                                    type="email"
                                    placeholder="Enter your email*"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="lpbanner-input"
                                    required
                                    title="Please enter a valid email address."
                                />
                                {formData.email && !/\S+@\S+\.\S+/.test(formData.email) && (
                                    <div className="error-message">Please enter a valid email address.</div>
                                )}

                                <textarea
                                    placeholder="Message*"
                                    name="message"
                                    className="lpbanner-input lpbanner-textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    maxLength="2002"
                                    title="Not allowed more than 2000 characters in message text field"
                                ></textarea>
                                {formData.message && formData.message.length > 2000 && (
                                    <div className="error-message">Not allowed more than 2000 characters in message text field</div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-dark lpbanner-submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Lpbanner;
