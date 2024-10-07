import React, { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container faq-ebook-section mt-5 py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="accordion" id="faqAccordion">
                        {faqData.map((faq, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={`heading${index}`}>
                                    <button
                                        className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                        type="button"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={openIndex === index}
                                        aria-controls={`collapse${index}`}
                                    >
                                        {faq.question}
                                    </button>
                                </h2>
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

const faqData = [
    {
        question: "How can I effectively utilize a logo maker to create a unique logo design?",
        answer: "The answer to this question will go here. Replace this text with the actual answer."
    },
    {
        question: "Can I use my logo for trademark and copyrights?",
        answer: "The answer to this question will go here. Replace this text with the actual answer."
    },
    {
        question: "What are the distinctions between using a logo maker and opting for custom logo design services?",
        answer: "The answer to this question will go here. Replace this text with the actual answer."
    },
    {
        question: "Is it possible to personalize my logo design using your logo maker tool?",
        answer: "The answer to this question will go here. Replace this text with the actual answer."
    },
    {
        question: "Do you provide help in customizing my design?",
        answer: "The answer to this question will go here. Replace this text with the actual answer."
    }
];

export default FAQSection;
