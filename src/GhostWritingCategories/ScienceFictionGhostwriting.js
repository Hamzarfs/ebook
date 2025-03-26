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
import FictionImage1 from '../images/ScienceFiction1.png';
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

// ******************************** Start SecondSection ******************************

const services = [
    {
        title: "Initial Consultation & Project Setup",
        image: ghostWritingImage,
        description: "We collect the relevant information regarding your project to achieve your goals, timelines, and ideas. Then, we create a customized quote with a schedule so everything is completed promptly.",
        // link: "https://www.facebook.com/",
        // buttonPadding :"10px 25px",
        // learnmore:"Click Here",
    },
    {
        title: "Science Fiction Writing & Revisions",
        image: designingImage,
        description: "After the project is confirmed, we assign a sci-fi ghostwriter to the project to start writing your story. We give you parts of the drafts and chapters for your feedback and incorporate the revisions based on your input so the tale tells your story.",

    },
    {
        title: "Final Approval & Publishing",
        image: bookEditingImage,
        description: "For the rest of the steps, the client is to approve the final manuscript, after which we edit the book cover, interior, and other items required for publishing. Our team sets prerequisites for the book's launch by proofreading it and formulating marketing strategies.",

    }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
    title: (
        <>
            Types of Science Fiction
            <br />
        </>
    ),
    highlight: " We Specialize In"
};
const desc = "Our science fiction ghostwriting services online cover a variety of sub-genres. Every story is meticulously crafted to ensure the highest quality and engagement. Here are some of the types of sci-fi we specialize in:";
const steps = [
    {
        image: designprocess1,
        alt: "Space Opera",
        title: "Space Opera",
        description: "We create grand, sweeping tales of space exploration, intergalactic battles, and complex alien civilizations."
    },
    {
        image: designprocess2,
        alt: "Time Travel",
        title: "Time Travel",
        description: "Our team expertly piles complicated time-travel plots that explore paradoxes, alternate timelines, and the consequences of changing history."
    },
    {
        image: designprocess3,
        alt: "Dystopian & Post-Apocalyptic",
        title: "Dystopian & Post-Apocalyptic",
        description: "We craft gripping dystopian futures and post-apocalyptic narratives that immerse readers in a world on the brink of collapse."
    },
    {
        image: designprocess4,
        alt: "Alien Encounters",
        title: "Alien Encounters",
        description: "From first contact to full-scale invasions, our writers excel at creating thrilling stories of alien life and interplanetary conflict."
    }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
    {
        question: "What is science fiction ghostwriting?",
        answer: "Science fiction ghostwriting is to create a sci-fi novel or short story while ensuring your voice and ideas shine through story-telling."
    },
    {
        question: "How do I hire a science fiction ghostwriter?",
        answer: "Contact us through our website, and a project manager will reach out to discuss your ideas and provide a customized quote for your project."
    },
    {
        question: "Can I collaborate with the ghostwriter throughout the process?",
        answer: "Absolutely! We encourage collaboration. You can review chapters, give feedback, and request revisions."
    },
    {
        question: "What type of science fiction do you specialize in?",
        answer: "We specialize in space opera, time travel, dystopian fiction, alien encounters, cyberpunk, hard sci-fi, and alternate realities."
    },
    {
        question: "How much involvement do I need in the writing process?",
        answer: "Your level of involvement is entirely up to you. Whether you want to be hands-on with each chapter or leave most of the work to us, we adapt to your preferences."
    }
];



// ******************************** End FAQ Section ******************************

const FictionGhostwriting = () => {
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
                <title>Science Fiction Ghostwriting Services | AMZ Book Publishing</title>
                <meta name="description" content="Our Science Fiction Ghostwriting Services help you craft compelling sci-fi books that spark curiosity, excitement, and captivate readers." />
                <link rel="canonical" href="https://amzbookpublishing.net/science-fiction-ghostwriting-services " />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Science Fiction Ghostwriting Services | AMZ Book Publishing" />
                <meta property="og:description" content="Need a science fiction ghostwriter? We offer Science Fiction Writing Services Online at an affordable price. Meet well-experienced book and ebook writers." />
                <meta property="og:url" content="https://amzbookpublishing.net/science-fiction-ghostwriting-services" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-20T07:34:29+00:00" />

            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            <Header />
            <BreadCrumb
             className="responsive-height"
                title="Professional Sci-Fi Ghostwriting Services"
                desc={
                    <>
                        We offer custom-made ghostwriting services in the world of science fiction. From space travel and time-warping adventures to alien encounters, our experts are ready to assist you with your concepts. We will accurately craft the most remarkable literary works from your scattered ideas.
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


            <div style={{ padding: '40px 0px 100px 0px' }}>
                <ImageRightBanner
                    heading="Science Fiction Ghostwriting "
                    subHeading="Services That Impact"

                    description={
                        <>
                            Our science fiction ghostwriters utilize creativity in captivating stories that are one of a kind. From creating an apocalyptic setting to embarking on intergalactic journeys or traveling through time, our skilled writers precisely and passionately incorporate your ideas.
                            Wording and phrasing of thoughts are as crucial as preserving your voice when striving for something remarkable. For that reason, your thoughts are paramount, and so, while you focus on the strategies, we handle the writing. With our affordable science fiction ghostwriting services, we will transform your ideas into unforgettable, well-defined, vibrant masterpieces.



                        </>
                    }
                    imageSrc={FictionImage1}
                    objectfit="contain"
                    imageHeight="400px"  // Set height here
                    imageWidth="100%"     // Set width here
                    borderRadius="30px"
                />
            </div>

            {/*****************  SERVICE Section *****************/}
            <div>
                <SecondSection
                    buttonLabel="S e r v i c e s"
                    heading1={<>
                        Our Science </>}
                    subHeading={<>
                         Fiction <br />
                         Writing </>}
                    heading2="Process"
                    paragraph="Bringing your sci-fi vision to life is easy with our three-step process:"
                    services={services}
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

            <div style={{ padding: '0px 0px 50px 0px' }}>
                <ImageLeftBanner
                    heading="Why Hire Our Ghostwriter For A Science Fiction Book?"
                    subHeading=""
                    description={
                        <>
                        Here's why clients trust us with their science fiction projects:
                            <ul>
                                <li>
                                    <b>Experienced Experts:</b>Our ghostwriters have extensive experience in science fiction, ensuring your story is crafted with precision, originality, and genre-specific detail.
                                </li>
                                <li>
                                    <strong>Competitive Pricing:</strong> We offer affordable rates for premium science fiction ghostwriting services. Our goal is to deliver high-quality results that meet your needs and budget.
                                </li>
                                <li>
                                    <strong>Collaborative Approach:</strong> We work closely with you to ensure your story stays true to your vision. Your input is crucial, and we ensure you're involved throughout the process.
                                </li>
                                <li>
                                    <strong>Unlimited Revisions:</strong> We don't stop until the manuscript is perfect. We offer unlimited revisions to ensure the final product is exactly what you want.
                                </li>
                                <li>
                                    <strong>Deadline-Oriented:</strong> We understand the importance of deadlines and work diligently to ensure your project is completed on time without compromising quality.
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
            <ContactForm />

            <Footer />
        </div>

    );
};
export default FictionGhostwriting;


