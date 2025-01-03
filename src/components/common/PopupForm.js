import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt, FaTimes } from 'react-icons/fa'; // Font Awesome icons
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
            phoneRegex = /^(\+44\s?|0)\d{3}\s?\d{3}\s?\d{3,5}$/
        let html = ''
        if (!emailRegex.test(formData.email))
            html = "Invalid email address<br/>"
        if (!phoneRegex.test(formData.phone))
            html += "Invalid phone number. Example: 0207 123 456"
        if (html.length > 0)
            Swal.fire('Error', html, 'error')
        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
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
        e.preventDefault()

        // Email & phone validation
        if (!validateEmailAndPhone())
            return

        setLoading(true)

        await fetch(/*'http://localhost:9090/popup-email.php'*/"https://amzbookpublishing.net/PHPMailer/popup-email.php", {
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
                    <label>Name</label>
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
                    <label>Email</label>
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
                    <label>Phone Number</label>
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
                    <label>Message</label>
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
