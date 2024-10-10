import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false); // State to track form submission

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            name,
            email,
            subject,
            message
        };

        try {
            const response = await fetch('http://study.loc/PHPMailer/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json(); // Parse JSON response from the server
                console.log(data);
    
                // Check if the status is 'success'
                if (data.status === 'success') {
                    console.log('Form submitted successfully');
                    setSubmitted(true); // Set submitted state to true to show success message
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                } else {
                    console.error('Error:', data.message); // Handle any errors from the server
                }
                 
            } else {
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        // Reset form fields
      
    };

    return (
        <section className="ebook-contact-form container">
            <div className="row">
                <div className="col-md-5 left-column">
                    <button className="btn btn-custom">Contact Us</button>
                    <h2>
                        Feel Free To <br />
                        Ask Anything <span className="highlight-text"> <br />Contact Us</span>
                    </h2>
                </div>

                <div className="col-md-7">
                    {submitted ? (
                        <h3>Thank you! Your message has been sent.</h3>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="E-mail address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Your message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-submit">Submit Now</button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
