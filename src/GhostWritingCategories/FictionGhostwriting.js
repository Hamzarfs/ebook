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
import SecondSection from '../components/home/SecondCarousel';
import officedeskkeyboarddocuments from '../images/officedeskkeyboarddocuments.jpg';
import DesignProcess from '../components/common/DesignProcess';
import ImageRightBanner from '../components/common/ImageRightText';
import ImageLeftBanner from '../components/common/ImageLeftText';
import FictionMain from '../images/Fictionmain1.png';
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
        title: "Drama",
        image: ghostWritingImage,
        description: "A well-articulated drama touches the reader’s heart, and many people prefer reading drama to fantasy or fiction. What can be better than fulfilling their appetite by writing a good drama that keeps them hooked? Come in partnership with us today, and let us help you publish your drama book. Don’t forget to make use of our exceptional story-writing services.",
        // link: "https://www.facebook.com/",
        // buttonPadding :"10px 25px",
        // learnmore:"Click Here",
    },
    {
        title: "Historical Fiction",
        image: designingImage,
        description: "Developing historical fiction calls for elaborate research and meticulous attention to detail. Our fiction ghostwriting services in NJ and around the country possess the unique skill of intricately blending precise historical facts into astonishing narratives that place the readers in a different world while simultaneously providing an intriguing experience. If you wish to resurrect history, we are your partners.",

    },
    {
        title: "Action Fiction",
        image: bookEditingImage,
        description: "Our action fiction ghostwriting service is ideal for those needing a heart-pounding adventure. From world-ending warfare to white-knuckle pursuits, our authors specialize in writing captivating action novels that sustain readers’ attention. Access the realm of exhilarating fierce action stories, and let us assist you in rendering an indelible impression for your audiences.",

    },
    {
        title: "Fantasy",
        image: officedeskkeyboarddocuments,
        description: "From epic quests to magical creatures, our fantasy fiction ghostwriting services will turn your wildest dreams into reality. In mesmerizing worlds that will captivate readers, we work to develop intricate plots and complex characters. If you have a captivating fantasy story, we are devoted to bringing it to life.",

    }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
    title: (
        <>
            Our Fiction <br />
        </>
    ),
    highlight: "Writing Process"
};
const desc = "Crafting compelling stories through a streamlined process We follow a streamlined, 4-step process to ensure your vision is brought to life smoothly and efficiently:";

const steps = [
    {
        image: designprocess1,
        alt: "Initial Consultation & Project Setup",
        title: "Initial Consultation & Project Setup",
        description: "The procedure commences with completing a basic form describing the concept and vision for their book. Our project managers will contact you to gather all the details needed to start your book. We'll then provide a personalized quote and discuss the project timeline."
    },
    {
        image: designprocess2,
        alt: "Fiction Writing & Revisions",
        title: "Fiction Writing & Revisions",
        description: "Once the project is confirmed, we assign a skilled fiction ghostwriter to bring your story to life. They will begin writing the chapters and send them to you for feedback. You can request revisions and provide input as we go along, ensuring the story aligns with your expectations."
    },
    {
        image: designprocess3,
        alt: "Final Approval & Publishing",
        title: "Final Approval & Publishing",
        description: "After the book is completed and you approve the final manuscript, we will proceed with the formatting and other steps needed for publishing. Custom marketing and promotional strategies specific to your work are also provided to maximize your exposure."
    },
    {
        image: designprocess4,
        alt: "Launch & Marketing Support",
        title: "Launch & Marketing Support",
        description: "After the completion of production for your fiction book, we will supply marketing tools that include full launch support to optimize successful releases. At our organization, we help you establish powerful reader connections, and then we help steer your book to suitable audiences."
    }
];


// ******************************** End Design Process Props ******************************



const heading1 = {
    title: (
        <>
            Start Your Fiction
            <br />
        </>
    ),
    highlight: " Journey Today"
};
const descs = "Do you wish to transform your story into reality while showing your world to a global audience? Our team of fiction ghostwriters is here to help authors write stunning novels that match the unforgettable essence of their characters. Contact our team today to embark on your fiction adventure.";


// ******************************** Start FAQ Section ******************************
const faqData = [
    {
        question: "What is fiction ghostwriting?",
        answer: "Fiction ghostwriting is to create a story or novel on behalf of someone else. The client provides ideas and guidance, and the writer brings them to life, maintaining the client's voice and style."
    },
    {
        question: "How do I hire a fiction ghostwriter from AMZ Book Publishing?",
        answer: "Simply fill out the form on our website, and one of our project managers will contact you to gather details about your book and provide a personalized quote."
    },
    {
        question: "Can I make revisions during the writing process?",
        answer: "Yes, we offer unlimited revisions throughout the process. You'll be sent chapters for your approval, and you can request changes along the way to ensure the story aligns with your vision."
    },
    {
        question: "How long does it take to complete a fiction book?",
        answer: "The timeline varies depending on the length and complexity of the project. Once we understand your needs, we’ll provide an estimated timeline, but we aim to deliver high-quality content on time."
    },
    {
        question: "Do I own the rights to the book after it’s completed?",
        answer: "Yes, once the project is completed and you give final approval, you will own all the rights to the book. We ensure that all work is original and fully transferred to you."
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
                <title>Fiction Ghostwriting Services | AMZ Book Publishing</title>
                <meta name="description" content="Get top-quality fiction ghostwriting services with AMZ Book Publishing. We craft compelling stories that captivate readers and bring your ideas to life!" />
                <link rel="canonical" href="https://amzbookpublishing.net/affordable-fiction-ghostwriting-services " />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Affordable Fiction Ghostwriting Services by Ghostwriters" />
                <meta property="og:description" content="Need a fiction ghostwriter? We offer professional fiction ghostwriting services at an affordable price. Our experienced writers are well-trained for all genres." />
                <meta property="og:url" content="https://amzbookpublishing.net/affordable-fiction-ghostwriting-services" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-20T07:36:14+00:00" />
            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            <Header />
            {/* <BreadCrumb
                title="Turning Your Ideas into Meaningful Stories with Professional Fiction Ghostwriting Services "
                desc={
                    <>
                        Our professional fiction ghostwriting services will make your plots captivating with our unforgettable characters and creative writing. Our fiction ghostwriters will work with you whether you are seeking a thrilling adventure, dramatic tale, magical fantasy, or anything else. Ensure that your narrative stands out and resonates with the readers.
                    </>
                }
                buttonText="Get a Quote"
                onClick={openModal} // Call openModal on button click
                backgroundImage={Ghostwritingbg} // Pass the image URL as a prop
            /> */}
            <BreadCrumb
                className="responsive-height"
                title="Turning Your Ideas into Meaningful Stories with Professional Fiction Ghostwriting Services"
                desc={
                    <>
                        Our professional fiction ghostwriting services will make your plots captivating with our unforgettable characters and creative writing. Our fiction ghostwriters will work with you whether you are seeking a thrilling adventure, dramatic tale, magical fantasy, or anything else. Ensure that your narrative stands out and resonates with the readers.
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


            <div style={{ padding: '40px 0px 0px 0px' }}>
                <ImageRightBanner
                    heading="Hire a Fiction Ghostwriter From Our Team and"
                    subHeading=" Watch Your Story Come to Life"
                    description={
                        <>
                            Transforming story ideas into fiction books is an intricate process, whether about dragons, magic, or mythical creatures. Turning creative ideas into a well-written novel can be challenging. At our affordable ghostwriting agency, you will get quality fiction writing at the lowest price. There are a variety of novel writing websites, but competing for the right one is tricky. Our expert fiction ghostwriters will help you out.
                            Providing spellbinding services and capturing imaginations along the way is what we excel at as a ghostwriting agency. As an affordable fictional ghostwriting agency, we offer lower fees, unlimited revisions, punctual delivery, and careful attention to detail that will guarantee your story shines.


                        </>
                    }
                    imageSrc={FictionMain}
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


            <div>
                <SecondSection
                    buttonLabel="S e r v i c e s"
                    heading1={<>
                        Bringing Stories to </>}
                    subHeading={<>
                        Life in Every Genre:<br />
                        Expert Fiction</>}
                    heading2=" Ghostwriting Services"
                    paragraph="Our fiction ghostwriters are passionate about delivering compelling narratives that resonate with readers."
                    services={services}
                />
            </div>


            <div style={{ padding: '0px 0px 50px 0px' }}>
                <ImageLeftBanner
                    className="Top-gap"
                    heading="Why Choose Our Affordable Fiction Ghostwriting Services?"
                    subHeading=""
                    description={
                        <>
                            Fiction ghostwriting is our specialty! We create captivating stories for our clients at AMZ Book Publishing. It does not matter what subgenre of fiction you choose; our writers are ready to assist you every step of the way. Having partnered with us, you can rest assured that the content delivered will be creative, engaging, and of top-tier quality.
                            <br />
                            <br />
                            We know how hard it is to assemble the outline when so many ideas are fighting for your attention. Our talented ghostwriters skilled in fiction are here to help you make an exciting novel from your notes. Besides, our ghostwriting for fiction novels is so affordable that your budget won’t feel the strain and so good that readers will be glued to your story until the final page!


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
export default FictionGhostwriting;
