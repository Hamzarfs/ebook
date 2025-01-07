import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt, FaTimes } from 'react-icons/fa'; // Font Awesome icons
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { isAlphanumeric, fieldLengthValidator } from '../../utils/validationHelpers'

Modal.setAppElement("#root");

const PopupForm1 = ({ isOpen, closeModal, modalTitle, modalValue }) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        title: (modalTitle || modalValue) ? `${modalTitle} - ${modalValue}` : 'Get a Quote'
        // newsletter: false,
    });

    useEffect(() => {
        setFormData({ ...formData, title: (modalTitle || modalValue) ? `${modalTitle} - ${modalValue}` : 'Get a Quote' })
    }, [modalTitle, modalValue])

    const validateEmailAndPhone = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phoneRegex = /^\+?\d{10,15}$/
            // phoneRegex = /^(\+44\s?|0)\d{3}\s?\d{3}\s?\d{3,8}$/
        let html = ''
        if (!emailRegex.test(formData.email))
            html = "Invalid email address<br/>"
        if (!phoneRegex.test(formData.phone))
            html += "Invalid phone number.  Phone number must be between 10 & 15 digits."
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


    // const validateEmailAndPhone = () => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    //         phoneRegex = /^\+1\d{10}$/

    //     if (!emailRegex.test(formData.email))
    //         Swal.fire('Error', 'Invalid email address', 'error')

    //     if (!phoneRegex.test(formData.phone))
    //         Swal.fire('Error', 'Invalid Phone number. Example: +19876543210', 'error')

    //     return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    // }




    const handleSubmit = async e => {
        e.preventDefault();
    
        // Email & phone validation
        if (!validateEmailAndPhone()) return;
    
        // Name & message fields validations
        if (!validateFormFields()) return;
    
        setLoading(true);
    
        try {
            // Submit form data to your PHP endpoint
            const response = await fetch("https://amzbookpublishing.net/PHPMailer/popup-email.php", {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            });
    
            const { success, message } = await response.json();
    
            if (success) {
                // Prepare HubSpot data as URL-encoded string
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
    
                // Submit data to HubSpot
                await fetch('https://forms.hubspot.com/uploads/form/v2/47721008/ba6fc021-d762-4fc9-9775-ecdd9e619374', {
                    method: 'POST',
                    body: hubspotData,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
    
                // Navigate to thank-you page on success
                navigate('/thank-you');
            } else {
                Swal.fire('Error', message, 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Something went wrong!', 'error');
        } finally {
            setLoading(false);
        }
    };
    

    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Popup Form"
            className="popupform1-modal"
            overlayClassName="popupform1-overlay"
        >
            <button className="close-button" onClick={closeModal}>
                <FaTimes />
            </button> {/* <h2>Get a <span style={{ color: '#F76C39' }}>Quote</span></h2> */}
            <form className="popupform1" onSubmit={handleSubmit}>
                <input name="title" value={formData.title} type="hidden" />
                <h4>
                    {modalTitle || modalValue
                        ? `${modalTitle} - ${modalValue}`
                        : 'Get a Quote'}
                </h4>

                <div>
                    <label>Name <span className="text-danger fw-bold">*</span></label>
                    <div className="input-icon">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            name="name"
                            placeholder="e.g. John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <label>Email <span className="text-danger fw-bold">*</span></label>
                    <div className="input-icon">
                        <FaEnvelope className="icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="e.g. john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <label>Phone Number <span className="text-danger fw-bold">*</span></label>
                    <div className="input-icon">
                        <FaPhone className="icon" />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="e.g. 1234567890"
                            value={formData.phonenumber}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                        />
                    </div>
                </div>
                <div>
                    <label>Message <span className="text-danger fw-bold">*</span></label>
                    <div className="input-icon">
                        <FaCommentAlt className="icon" />
                        <textarea
                            placeholder="Your message here"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            style={{ resize: 'none' }}
                        />
                    </div>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                            <span role="status">Submitting...</span>
                        </>
                    ) : 'Submit Now'}
                </button>
            </form>
        </Modal>
    );
};

export default PopupForm1;
