import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContactForm = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');
    // const [submitted, setSubmitted] = useState(false); // State to track form submission

    // // Handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = {
    //         name,
    //         email,
    //         subject,
    //         message
    //     };

    //     try {
    //         const response = await fetch('http://localhost:9090/index.php', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             const data = await response.json(); // Parse JSON response from the server
    //             console.log(data);

    //             // Check if the status is 'success'
    //             if (data.status === 'success') {
    //                 console.log('Form submitted successfully');
    //                 setSubmitted(true); // Set submitted state to true to show success message
    //                 setName('');
    //                 setEmail('');
    //                 setSubject('');
    //                 setMessage('');
    //             } else {
    //                 console.error('Error:', data.message); // Handle any errors from the server
    //             }

    //         } else {
    //             console.error('Error submitting form');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }

    //     // Reset form fields

    // };

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(formData.email))
            document.querySelector('.home-contactus input[name=email]').classList.add('is-invalid')
        else
            document.querySelector('.home-contactus input[name=email]').classList.remove('is-invalid')

        return emailRegex.test(formData.email)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        // Email & phone validation
        if (!validateEmail())
            return

        setLoading(true)

        await fetch(/*'http://localhost:9090/home-email.php'*/"https://amzbookpublishing.net/PHPMailer/home-email.php", {
            method: 'POST',
            body: JSON.stringify(formData),
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
        <section className="ebook-contact-form container">
            <div className="row">
                <div className="col-md-5 left-column">
                    <button className="heading-button">Contact Us</button>
                    <h5>
                    Open to Your  <br />
                    Queries <span className="highlight-text"> <br /></span>
                    </h5>
                </div>

                <div className="col-md-7">
                    <form onSubmit={handleSubmit} className='home-contactus'>
                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="text"
                                    name='name'
                                    className="form-control"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="email"
                                    name='email'
                                    className="form-control"
                                    placeholder="E-mail address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Invalid email address
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name='subject'
                                className="form-control"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                name='message'
                                rows="5"
                                placeholder="Your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-submit" disabled={loading}>
                            {loading ?
                                (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                        <span role="status">Submitting...</span>
                                    </>
                                ) :
                                'Submit Now'}

                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
