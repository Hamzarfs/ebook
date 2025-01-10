import React, { useState } from 'react';

const FAQSection = ({ faqData }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container faq-ebook-section py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h4>Frequently Asked Questions</h4>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="accordion" id="faqAccordion">
                        {faqData.map((faq, index) => (
                            <div className="accordion-item" key={index}>
                                <p className="accordion-header" id={`heading${index}`}>
                                    <button
                                        className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                        type="button"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={openIndex === index}
                                        aria-controls={`collapse${index}`}
                                    >
                                        {faq.question}
                                    </button>
                                </p>
                                <div
                                    id={`collapse${index}`}
                                    className={`accordion-collapse ${openIndex === index ? 'show' : 'collapse'}`}
                                    aria-labelledby={`heading${index}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
