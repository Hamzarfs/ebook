import React, { useState } from "react";
// import webdesignlogo from '../../images/webdesignlogowhite.png';
import bgimg from '../../images/lpbg.webp';
import formbg from '../../images/formbg.png';
// import formbg2 from '../../images/formbglp2.png';
// import bracket from '../../images/bracket.png';
import trustpilot from '../../images/truspiloticon.svg';
import clutch from '../../images/clutchicon.png';
import barkicon from '../../images/barkicon.png';
import fiftyoff from '../../images/fiftyoff.png';
import '../../LandingPage.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isAlphanumeric, fieldLengthValidator } from '../../utils/validationHelpers'


const Lpbanner = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        title: 'Claim Your Discount'
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const validateEmailAndPhone = () => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    //         phoneRegex = /^\+1\d{10}$/
    //     let html = ''

    //     if (!emailRegex.test(formData.email))
    //         html = "Invalid email address<br />"

    //     if (!phoneRegex.test(formData.phone))
    //         html += "Invalid phone number. Example: +19876543210<br />"

    //     if (html.length > 0)
    //         Swal.fire('Error', html, 'error')

    //     return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    // }

    const validateEmailAndPhone = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phoneRegex = /^\+?\d{10,15}$/
        // phoneRegex = /^(\+44\s?|0)\d{3}\s?\d{3}\s?\d{3,8}$/
        let html = ''
        if (!emailRegex.test(formData.email))
            html = "Invalid email address<br />"
        if (!phoneRegex.test(formData.phone))
            html += "Invalid phone number. Phone number must be between 10 & 15 digits."
        if (html.length > 0)
            Swal.fire('Error', html, 'error')
        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    }

    const validateFormFields = () => {
        let isValid = true, html = ''

        // Name validation
        if (/*!isAlphabetic(formData.name) || */!isAlphanumeric(formData.name) || !fieldLengthValidator(formData.name, 50)) {
            html = "Name must be alphabetic or alphanumeric & must not be greater than 50 characters.<br />"
            isValid = false
        }

        // Message validation
        if (!fieldLengthValidator(formData.message, 200)) {
            html = "Message must not be greater than 200 characters.<br />"
            isValid = false
        }

        if (html.length > 0)
            Swal.fire('Error', html, 'error')

        return isValid
    }

    const handleSubmit = async e => {
        e.preventDefault();
    
        // Email & phone validation
        if (!validateEmailAndPhone()) return;
    
        // Name & message fields validations
        if (!validateFormFields()) return;
    
        setLoading(true);
    

        // Submit data to HubSpot
        const hubspotData = {
            fields: [
                { name: 'email', value: formData.email },
                { name: 'firstname', value: formData.name },
                { name: 'phone', value: formData.phone },
                { name: 'message', value: formData.message },
            ],
            context: {
                pageUri: window.location.href,
                pageName: document.title
            }
        };

         
        
       
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
        <section
            className="lpbanner"
            style={{ backgroundImage: `url(${bgimg})` }} // Correctly format the background image
        >
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-7 lp-left-column">
                        {/* <img src={webdesignlogo} alt="Logo" className="lpbanner-logo" /> */}
                        <p className="lpbanner-text">#1 Self-Publishing Company</p>
                        <div className="lpbanner-heading-container" style={{ display: 'flex', alignItems: 'center' }}>
                            <h1 className="lpbanner-heading">
                                Publish Your Book Professionally with Our Book Publishing Services
                            </h1>
                        </div>

                        <div className="lp-banner-margin">
                            <p className="lpbanner-text">Our professional book publishing services provide the guidance and support you need every step of the way. We work closely with you to understand your vision and craft a publication strategy that maximizes your book's impact. </p>
                            <div className="lpbanner-buttons mt-4">
                                <a className="first-button" href="tel:+17327979165" >Let’s Talk About Project </a>
                            </div>
                            <div className="lpbanner-badges d-flex gap-3 align-items-center mt-5 justify-content-center justify-content-lg-start">
                                <a href="https://clutch.co/profile/amz-book-publishing" target="_blank">
                                    <img src={clutch} alt="Clutch" className="img-fluid" />
                                </a>
                                <a href="https://www.trustpilot.com/review/amzbookpublishing.net " target="_blank">
                                    <img src={trustpilot} alt="Trustpilot" className="trusticon img-fluid" />
                                </a>
                                <a href="https://www.bark.com/en/us/company/amz-book-publishing/4XdEkg/ " target="_blank">
                                    <img src={barkicon} alt="Bark" className="img-fluid" />
                                </a>
                            </div>



                            {/* <div className="lpbanner-badges">
                                <a href="https://clutch.co/profile/amz-book-publishing" target="_blank">
                                    <img src={clutch} alt="Clutch" className="img-fluid" />
                                </a>
                                <a href="https://www.trustpilot.com/review/amzbookpublishing.net " target="_blank">
                                    <img src={trustpilot} alt="Trustpilot" className="trusticon img-fluid" />
                                </a>
                                <a href="https://www.bark.com/en/us/company/amz-book-publishing/4XdEkg/ " target="_blank">
                                    <img src={barkicon} alt="Bark" className="img-fluid" />
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-5 lp-right-column"
                        style={{
                            // backgroundImage: `url(${formbg2})`, // Use your background image here
                            backgroundSize: 'cover', // Cover the entire column
                            backgroundPosition: 'center', // Center the image
                            padding: '20px 20px 20px 20px', // Add padding for spacing
                            borderRadius: '5px', // Optional: rounded corners
                            // height: '600px', // Ensure the height covers the content
                        }}
                    >
                        <div className="lpbanner-form"
                        // style={{ backgroundImage: `url(${formbg})` }} 
                        >
                            <img
                                src={fiftyoff}
                                alt="Best Seller"
                                className="fiftyoff"
                            />
                            <h3 className="lpbanner-form-title">Claim Your Discount</h3>
                            <p>Enjoy exclusive savings with this limited-time offer!</p>
                            <form method="POST" onSubmit={handleSubmit} id="bannerForm">
                                <input type="hidden" name="title" value={formData.title} />
                                <input type="text" placeholder="Enter your name*" name="name" value={formData.name} onChange={handleChange} className="lpbanner-input" required />
                                {/* <input type="tel" placeholder="Enter your phone number*" name="phone" value={formData.phone} onChange={handleChange} className="lpbanner-input" required /> */}
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

                                <input type="email" placeholder="Enter your email*" name="email" value={formData.email} onChange={handleChange} className="lpbanner-input" required />
                                <textarea placeholder="Message*" name="message" className="lpbanner-input lpbanner-textarea" value={formData.message} onChange={handleChange} required ></textarea>
                                <button type="submit" className="btn btn-dark lpbanner-submit-btn" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : 'Submit'}
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
