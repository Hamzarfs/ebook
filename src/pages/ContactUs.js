// src/pages/About.js
import React, { useState } from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import CtaButton from '../components/common/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import contactusbg from '../images/contactusbg.webp'; // Import the image
import FAQSection from '../components/Designing/DesignFaq';





import PopupForm1 from '../components/common/PopupForm';

import ContactUsform from '../components/contactuspg';
import { Helmet } from 'react-helmet-async';

// ******************************** Start SecondSection ******************************



// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [

    {
        question: "Can I provide feedback or ask questions during the editing process?",
        answer: "Absolutely! We value our clients' feedback immensely. Our collaborative approach encourages open communication, allowing you to discuss changes with your editor at any stage of the process."
    },
    {
        question: "What file formats do you accept for editing?",
        answer: "We mainly prefer working on Google Docs and MS Word, as they allow easy tracking of changes. If you are comfortable with any other format, feel free to share, and our editors can accommodate you accordingly."
    },
    {
        question: "Do I retain the rights to my book if I publish it with you?",
        answer: "Yes, through our services, you retain all rights to your book. This means you will be in control of where and how it is sold, while you will receive full royalties without having to share ownership with us."
    },
    {
        question: "What types of authors do you work with?",
        answer: "We work with authors of all levels, from first-time writers to seasoned professionals, across various genres, including fiction, non-fiction, and poetry."
    },
    {
        question: "How do you ensure quality in your services?",
        answer: "We maintain high standards through meticulous editing processes, quality design, and strategic marketing plans."
    }
];


// ******************************** End FAQ Section ******************************

const ContactUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

    const openModal = () => {
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            <Helmet>
                <title>Contact Us - AMZ Book Publishing</title>
                <meta name="description" content="Contact AMZ Book Publishing for professional book publishing services. From editing to distribution, we help authors bring their stories to life. Reach out today!" />
            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            <Header />

            <BreadCrumb
                title="Contact Us"
                desc={
                    <>
                        Where Your Writing Dreams Come True
                    </>
                }
                buttonText="Get a Quote"
                onClick={openModal} // Call openModal on button click
                backgroundImage={contactusbg} // Pass the image URL as a prop
            />

            <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />


            <ContactUsform />
            <CtaButton />

            <div>
                <FAQSection faqData={faqData} />
            </div>


            <Footer />
        </div>
    );
};
export default ContactUs;


