// src/pages/About.js
import React, { useState } from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import CtaButton from '../components/common/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Ghostwritingbg from '../images/Ghostwritingbg.png'; // Import the image
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';
import SecondSection from '../components/home/SecondSection';
import DesignProcess from '../components/common/DesignProcess';
import ImageRightBanner from '../components/common/ImageRightText';
import ImageLeftBanner from '../components/common/ImageLeftText';
import FictionImage1 from '../images/Ebook1.png';
import fictionwhychoose from '../images/fictionwhychoose.png';
import ghostWritingImage from '../images/Ghost Writing.png';
import designingImage from '../images/Designing.png';
import bookEditingImage from '../images/book edit.png';
import designprocess1 from '../images/design-process-1.png';
import designprocess2 from '../images/design-process-2.png';
import designprocess3 from '../images/design-process-3.png';
import designprocess4 from '../images/design-process-4.png';
import PopupForm1 from '../components/common/PopupForm';
import { Helmet } from 'react-helmet-async';
import Queries from '../components/common/Queries';

// ******************************** Start SecondSection ******************************

const services = [
    {
        title: "Fiction Novels: ",
        image: ghostWritingImage,
        description: "Our accomplished writers craft fictional novels that include romance, fantasy, and even historical fiction. They capture heroic characters and stir plots into words."
    },
    {
        title: "Self-Help & Personal Development: ",
        image: designingImage,
        description: "Our writers produce motivational books designed to help readers in their personal development journeys, areas where self-help and personal development lie."
    },
    {
        title: "Business & Marketing eBooks: ",
        image: bookEditingImage,
        description: "If you happen to be an entrepreneur or business professional, we create eBooks to inform and teach the reader as well as capture the individual’s knowledge and business expertise."
    }
];

// ******************************** End SecondSection ******************************



const heading1 = {
    title: (
        <>
           Start Your 
            <br />
        </>
    ),
    highlight: "eBook Journey Today."
};
const descs = "Ready to hire an eBook ghostwriter and bring your ideas to life? Our team of eBook writers for hire at AMZ Book Publishing is here to help you create an eBook that's as unique and compelling as your vision. Contact us today for a free consultation and take the first step toward sharing your unforgettable story with the world.";



// ******************************** Start Design Process Props ******************************

const heading = {
    title: (
        <>
            Our eBook 

        </>
    ),
    highlight: "Ghostwriting Process"
};
const desc = "Our process ensures your eBook is written precisely, creatively, and professionally.";
const steps = [
    {
        image: designprocess1,
        alt: "Initial Consultation & Project Setup",
        title: "Initial Consultation & Project Setup",
        description: "We discuss your concept through an initial meeting to discover your book vision. The project managers at our company will acquire every vital detail about your ideas, your writing style choices, and the desired deadline."
    },
    {
        image: designprocess2,
        alt: "eBook Writing & Revisions",
        title: "eBook Writing & Revisions",
        description: "The project moves ahead after your approval, and we will proceed to select the best eBook ghostwriter for your book creation. Our team provides multiple drafts for review and redesign if you want. "
    },
    {
        image: designprocess3,
        alt: "Final Approval & Publishing",
        title: "Final Approval & Publishing",
        description: "We final check your book for clarity. After you approve the final draft we publish it for print as well as for eBook distribution."
    },
    {
        image: designprocess4,
        alt: "Launch & Marketing Support",
        title: "Launch & Marketing Support",
        description: "We have advertising plans to ensure that you reach your intended audience when unveiling your eBook. With our help, your book will get the attention it deserves, from promotion to launch."
    }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
    {
        question: "What is eBook ghostwriting?",
        answer: "eBook ghostwriting involves hiring a professional writer to craft an eBook based on your ideas. The ghostwriter will create the manuscript while ensuring your voice and creative direction are reflected in the final product."
    },
    {
        question: "How do I hire an eBook ghostwriter?",
        answer: "To hire an eBook ghostwriter, contact us for an initial consultation. We'll discuss your concept, goals, and timeline and provide a custom quote based on your project."
    },
    {
        question: "Can I make revisions during the writing process?",
        answer: "Yes! We offer unlimited revisions to ensure your eBook aligns perfectly with your vision. You can review drafts and suggest changes at every stage."
    },
    {
        question: "How long does it take to complete an eBook?",
        answer: "The timeline depends on the length and complexity of your eBook. After our initial consultation, we'll provide a personalized estimate for completing your project."
    },
    {
        question: "Do I have the right to access my eBook?",
        answer: "Yes! Once your eBook is completed and you approve the final manuscript, you will own all rights to the work. We ensure all content is original and fully transferred to you."
    }
];





// ******************************** End FAQ Section ******************************

const EbookWriting = () => {
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
                <title>Professional Ebook Ghostwriting Services | AMZ Book Publishing</title>
                <meta name="description" content="Get top-quality Professional Ebook Ghostwriting Services at AMZ Book Publishing—expertly written, polished ebooks ready for publication" />
                <link rel="canonical" href="https://amzbookpublishing.net/professional-ebook-ghostwriting-services " />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Ebook Writing Services by Expert eBook Ghostwriters" />
                <meta property="og:description" content="Need an eBook ghostwriter? We offer professional ebook ghostwriting services at an affordable price. Contact us to hire expert writers remotely for your project." />
                <meta property="og:url" content="https://amzbookpublishing.net/professional-ebook-ghostwriting-services" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-23T07:03:51+00:00" />
            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            <Header />
            <BreadCrumb
                className="responsive-height"
                title="eBook Ghostwriting Services"
                desc={
                    <>
                        All successful eBooks start with a compelling concept. Creating captivating eBooks from ideas can be challenging for many aspiring authors. At AMZ Book Publishing, we assist authors with incredible ideas who need professional help to bring their vision to life through the help of our expert eBook ghostwriters.
                    </>
                }
                buttonText="Get a Quote"
                onClick={openModal} // Call openModal on button click
                backgroundImage={Ghostwritingbg} // Pass the image URL as a prop
            />

            {/* Popup Form */}
            <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />


            {/* -------------------End Banner section---------------------- */}
            {/* <div style={{ padding: '0px 0px 30px 0px' }}>
<ImageTextBanner 
    contentItems={contentItems} 
/>
</div> */}


            <div style={{ padding: '30px 0px 0px 0px' }}>
                <ImageRightBanner
                    heading="Professional eBook"
                    subHeading=" Ghostwriters for Hire"
                    description={
                        <>
                            As professional staff members at AMZ Book Publishing, skilled eBook writers convert ideas directly into captivating eBooks through their years of experience. Our team works directly with you to develop the best outline while creating unique characters or personas before adding surprising twists that match your envisioned eBook perfectly.
                        </>
                    }
                    imageSrc={FictionImage1}
                    objectfit="contain"
                    imageHeight="400px"  // Set height here
                    imageWidth="100%"     // Set width here
                    borderRadius="30px"
                />
            </div>

           
            {/* <div style={{ padding: '0px 0px 30px 0px' }}>
<SecondSection/>
</div> */}
            <DesignProcess
                heading={heading}
                description={
                    <div className="custom-description">
                        {desc}
                    </div>
                }
                steps={steps}
            />
             {/*****************  SERVICE Section *****************/}
             <div>
                <SecondSection
                    buttonLabel="S e r v i c e s"
                    heading1={<>
                        Kinds </>}
                    subHeading={<>
                        of <br />
                        eBook</>}
                    heading2=" Stories"
                    paragraph="At our company, we provide professional eBook writing services for various kinds of eBooks. Our eBook services have three main divisions, which include:"
                    services={services}
                />
            </div>
            <div style={{ padding: '0px 0px 50px 0px' }}>
                <ImageLeftBanner
                    heading="Why You Should Choose Our Professional eBook Ghostwriting Services"
                    subHeading=""
                    description={
                        <>
                            When hiring an eBook ghostwriter from AMZ Book Publishing, you choose high-quality, professionally written eBooks that will engage and captivate your audience.
                            <ul>
                                <li>
                                    <b>Experienced Professionals: </b> Our team of eBook ghostwriters has years of experience creating diverse and impactful eBooks.
                                </li>
                                <li>
                                    <strong>Collaborative Process: </strong> We work closely with you throughout the entire writing process. Your feedback is essential, and we ensure the eBook meets your expectations.
                                </li>
                                <li>
                                    <strong>Unlimited Revisions: </strong> If you're not fully satisfied, we offer unlimited revisions to refine the manuscript until it's perfect.
                                </li>
                                <li>
                                    <strong>Affordable Rates: </strong> Our services are top-tier but affordable, making them accessible for authors at all levels.
                                </li>
                            </ul>
                        </>
                    }

                    imageSrc={fictionwhychoose}
                    imageHeight=""        // Set height here
                    imageWidth=""          // Set width here
                    objectfit="cover"          // Set object-fit here
                    borderRadius="15px"        // Set border radius here
                />
            </div>
            <CtaButton />

            <div>
                <FAQSection faqData={faqData} />
            </div>
            <Queries
                heading={heading1}
                description={
                    <div className="custom-description">
                        {descs}
                    </div>
                }
                steps={steps}
            />
            <ContactForm />

            <Footer />
        </div>
    );
};
export default EbookWriting;


