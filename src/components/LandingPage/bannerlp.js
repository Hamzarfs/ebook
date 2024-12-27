import React, { useState } from "react";
// import webdesignlogo from '../../images/webdesignlogowhite.png';
import bgimg from '../../images/lpbg.webp';
import formbg from '../../images/formbg.png';
// import formbg2 from '../../images/formbglp2.png';
// import bracket from '../../images/bracket.png';
import trustpilot from '../../images/truspiloticon.png';
import clutch from '../../images/clutchicon.png';
import barkicon from '../../images/barkicon.png';
import fiftyoff from '../../images/fiftyoff.png';
import '../../LandingPage.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Lpbanner = ({ updatePopupTitle }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmailAndPhone = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phoneRegex = /^\+1\d{10}$/
        let html = ''

        if (!emailRegex.test(formData.email))
            html = "Invalid email address<br />"

        if (!phoneRegex.test(formData.phone))
            html += "Invalid phone number. Example: +19876543210"

        if(html.length > 0)
            Swal.fire('Error', html, 'error')

        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        // Email & phone validation
        if(!validateEmailAndPhone())
            return
        setLoading(true)

        await fetch(/*'http://localhost:9090'*//*"https://webdesignmania.co.uk/php/index.php"*/"https://webdesignmania.com/php_mailer/index.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                setLoading(false)
                if (success)
                    navigate('/thank-you')
                else
                    Swal.fire('Error', message, 'error')
            })
    }

    return (
        <section
            className="lpbanner"
            style={{ backgroundImage: `url(${bgimg})` }} // Correctly format the background image
        >
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-md-7 lp-left-column">
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
                            <div className="lpbanner-badges">
                                <a href="https://clutch.co/profile/amz-book-publishing "><img src={clutch} alt="Clutch" /></a>
                                <a href="https://www.trustpilot.com/review/amzbookpublishing.net "> <img src={trustpilot} alt="Trustpilot" /></a>
                                <a href="https://www.bark.com/en/us/company/amz-book-publishing/4XdEkg/ "><img src={barkicon} alt="Bark" /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-5 lp-right-column"
                        style={{
                            // backgroundImage: `url(${formbg2})`, // Use your background image here
                            backgroundSize: 'cover', // Cover the entire column
                            backgroundPosition: 'center', // Center the image
                            padding: '50px', // Add padding for spacing
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
                            <h3 className="lpbanner-form-title">Get a Website Quote</h3>
                            <p>Get response from us within 24 hours</p>
                            <form method="POST" onSubmit={handleSubmit} id="bannerForm">
                                <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} className="lpbanner-input" required />
                                <input type="tel" placeholder="Enter your number" name="phone" value={formData.phone} onChange={handleChange} className="lpbanner-input" required />
                                <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} className="lpbanner-input" required />
                                <textarea placeholder="Message" name="message" className="lpbanner-input lpbanner-textarea" value={formData.message} onChange={handleChange} required ></textarea>
                                <button type="submit" className="btn btn-dark lpbanner-submit-btn" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : 'Send Your Query'}
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
