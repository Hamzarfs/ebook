import React, { useState } from 'react';

const ContactForm = () => {
    // State to hold form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., API call)
        console.log('Form submitted:', { name, email, subject, message });
        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <section className="ebook-contact-form container">
            <div className="row">
                {/* Left Column */}
                <div className="col-md-5 left-column">
                    <button className="btn btn-custom">Contact Us</button>
                    <h2>
                        Feel Free To <br />
                        Ask Anything <span className="highlight-text"> <br />Contact Us</span>
                    </h2>
                </div>

                {/* Right Column (Form) */}
                <div className="col-md-7">
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
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
