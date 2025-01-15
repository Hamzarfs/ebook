import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactusbg from '../images/contactpgbg.png';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContactUsform = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmailAndPhone = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{10,15}$/;

        const emailValid = emailRegex.test(formData.email);
        const phoneValid = phoneRegex.test(formData.phone);

        return emailValid && phoneValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmailAndPhone()) {
            Swal.fire('Validation Error', 'Please provide valid email and phone number.', 'error');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://amzbookpublishing.net/PHPMailer/contact-us-email.php", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            setLoading(false);

            if (result.success) {
                navigate('/thank-you');
            } else {
                Swal.fire('Error', result.message, 'error');
            }
        } catch (error) {
            setLoading(false);
            Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
        }
    };

    return (
        <section className="contactuspg-section mb-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h2 className="contactuspg-heading-row">Want a Guide? Contact Us Today</h2>
                        <p className="contactuspg-subtext">
                            A place where talent and ambition can soar. Unleash your creativity and let your talents take center stage. <br />
                            When you work with us, you step into a world where your passion meets our purpose.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-5 contactuspg-info mb-2">
                        <div
                            className="contactuspg-info-box"
                            style={{
                                backgroundImage: `url(${contactusbg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '10px',
                                color: '#fff',
                                paddingBottom: '50px',
                            }}
                        >
                            <h3>Contact Information</h3>
                            <p>Say something to start a live chat</p>
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="contactuspg-link">
                                <FaMapMarkerAlt /> 41 Winthrop Rd, Edison, NJ 08817
                            </a>
                            <a href="tel:+17327979165" className="contactuspg-link">
                                <FaPhoneAlt /> +1 (732) 797-9165
                            </a>
                            <a href="mailto:info@amzbookpublishing.net" className="contactuspg-link">
                                <FaEnvelope /> info@amzbookpublishing.net
                            </a>
                            <div className="contactuspg-social-icons d-flex">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="contactuspg-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contactuspg-icon">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="contactuspg-icon">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 contactuspg-form bg-light mb-4">
                        <form onSubmit={handleSubmit} className="contactuspg-form">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className={`form-control contactuspg-input ${formData.firstName && !/^(?! )[a-zA-Z ]{1,50}$/.test(formData.firstName) ? 'is-invalid' : ''}`}
                                        onChange={handleChange}
                                        value={formData.firstName}
                                        name="firstName"
                                        placeholder="First Name"
                                        required
                                        maxLength={52}
                                    />
                                    <div className="invalid-feedback">Not allowed more than 50 characters and it must be in alphabet.</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className={`form-control contactuspg-input ${formData.lastName && !/^(?! )[a-zA-Z ]{1,50}$/.test(formData.lastName) ? 'is-invalid' : ''}`}
                                        onChange={handleChange}
                                        value={formData.lastName}
                                        name="lastName"
                                        placeholder="Last Name"
                                        maxLength={52}
                                        required
                                    />
                                    <div className="invalid-feedback">Not allowed more than 50 characters and it must be in alphabet..</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="email"
                                        className={`form-control ${formData.email && !/\S+@\S+\.\S+/.test(formData.email) ? 'is-invalid' : ''}`}
                                        onChange={handleChange}
                                        value={formData.email}
                                        name="email"
                                        placeholder="Email"
                                        required
                                        pattern="[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}"
                                        title="Please enter valid email example@gmail.com"
                                    />
                                     {formData.email && !/\S+@\S+\.\S+/.test(formData.email) && (
        <div className="invalid-feedback">Please enter valid email example@gmail.com</div>
      )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="tel"
                                        className={`form-control ${formData.phone && !/^[\d\+\-]{10,15}$/.test(formData.phone) ? 'is-invalid' : ''}`}
                                        onChange={handleChange}
                                        value={formData.phone}
                                        name="phone"
                                        placeholder="Phone Number"
                                         maxLength="15"
                                        required
         pattern="^[\d\+\-]{10,15}$"
        title="Please enter a valid phone number (between 10 and 15 digits, optional '+')."
                                    />
          {formData.phone && !/^[\d\+\-]{10,15}$/.test(formData.phone) && (
        <div className="invalid-feedback">Please enter a valid phone number (between 10 and 15 digits, optional '+')..</div>
      )}
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${formData.subject && formData.subject.length > 200? 'is-invalid' : ''}`}
                                    onChange={handleChange}
                                    value={formData.subject}
                                    maxLength="202"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    
                                />
                                  {formData.subject && formData.subject.length > 200 && (
        <div className="invalid-feedback">Subject should not exceed 200 characters</div>
      )}
                            </div>
                            <div className="mb-3">
                                <textarea
                             className={`form-control ${formData.message && formData.message.length > 2000 ? 'is-invalid' : ''}`}
                                    rows="5"
                                    onChange={handleChange}
                                    value={formData.message}
                                    name="message"
                                    placeholder="Message"
                                    required
                                       maxLength="2002"
        title="Message should not exceed 2000 characters"
                                ></textarea>
                                  {formData.message && formData.message.length > 2000 && (
        <div className="invalid-feedback">Message should not exceed 2000 characters</div>
      )}

                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Sending...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsform;
