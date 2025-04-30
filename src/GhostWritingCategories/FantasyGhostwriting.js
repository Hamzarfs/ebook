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
import FictionImage1 from '../images/Fantasy1.png';
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
        title: "Epic Fantasy:",
        image: ghostWritingImage,
        description: "Epic Fantasy Chronicles feature elaborate worlds with politics integrated into them, sophisticated magic structures, and iconic heroes. These stories showcase the constant struggle between good and evil."
    },
    {
        title: "Urban Fantasy:",
        image: designingImage,
        description: "This subgenre of Fantasy integrates magical elements into modern settings. In urban Fantasy, one may encounter supernatural creatures, magical activities, or even concealed magical societies residing in cities. Urban Fantasy seeks to examine magic's role in the contemporary world."
    },
    {
        title: "Dark Fantasy:",
        image: bookEditingImage,
        description: "A dark fantasy combination takes fantasy elements through a horror vision while investigating ambiguous moral questions. Characters in Dark Fantasy face complex dilemmas and stark realities. Within traditional Fantasy stories, good and evil stay in clear opposition to one another. Readers who want to explore darker aspects of humanity should choose Black Fantasy because of its great value for exploration."
    },
    {
        title: "High Fantasy:",
        image: officedeskkeyboarddocuments,
        description: "High Fantasy fully developed worlds with pre-existing history, culture, and in-depth mythology to accompany the worlds. These narratives take root in imaginary settings with mythical beings, magic, and epic quests alongside brave protagonists. The story is about grand and heroic adventures along with mighty conflict, detailed lore, and the use of magic that make the experience more immersive for the reader."
    }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
    title: (
        <>
            Our Fantasy Book
            <br />
        </>
    ),
    highlight: " Writing Process"
};
const desc = "We follow a streamlined process that ensures your fantasy book is written with precision, creativity, and authenticity:";

const steps = [
    {
        image: designprocess1,
        alt: "Initial Consultation & Project Setup",
        title: "Initial Consultation & Project Setup",
        description: "We discuss your fantasy concept and relate themes and readers through an initial meeting to discover your book vision. The project managers at our company will acquire every vital detail about your ideas, your writing style choices, and the desired deadline."
    },
    {
        image: designprocess2,
        alt: "Fantasy Book Writing & Revisions",
        title: "Fantasy Book Writing & Revisions",
        description: "The project moves forward after your approval, and we will proceed to select an accomplished adventure ghostwriter for book creation. Our system provides multiple drafts for review and redesign if you want. "
    },
    {
        image: designprocess3,
        alt: "Final Approval & Publishing",
        title: "Final Approval & Publishing",
        description: "We perform final checks during this stage to produce a streamlined book along with clarity. After you approve the final draft we publish it for print as well as for eBook distribution."
    },
    {
        image: designprocess4,
        alt: "Launch & Marketing Support",
        title: "Launch & Marketing Support",
        description: "We have advertising plans to ensure that you reach your intended audience when unveiling your fantasy book. With our help, your book will get the attention it deserves, from promotion to launch."
    }
];


// ******************************** End Design Process Props ******************************



const heading1 = {
    title: (
        <>
            Start Your Fantasy
            <br />
        </>
    ),
    highlight: "Book Journey Today"
};
const descs = "Ready to bring your fantasy world to life? Our team of professional fantasy ghostwriters is here to help you craft a novel that will captivate your readers. Contact us today for a free consultation and take the first step toward publishing your fantasy book!";

// ******************************** Start FAQ Section ******************************
const faqData = [
    {
        question: "What is fantasy book ghostwriting?",
        answer: "Fantasy book ghostwriting involves hiring a professional writer to create a book based on your ideas, world-building, and character concepts. The ghostwriter writes the manuscript while reflecting on your vision and ensuring it resonates with your audience."
    },
    {
        question: "How do I hire a ghostwriter for a fantasy book?",
        answer: "To hire a fantasy ghostwriter, contact us for an initial consultation. We'll discuss your story, target audience, and goals. Afterward, we'll provide a custom quote and timeline based on your project."
    },
    {
        question: "Can I make revisions during the writing process?",
        answer: "Yes! We offer unlimited revisions to ensure your fantasy book aligns perfectly with your vision. You'll be able to review drafts and provide feedback at every stage."
    },
    {
        question: "How long does it take to complete a fantasy book?",
        answer: "The timeline for completing your fantasy book depends on the book's length and complexity. After the initial consultation, we'll provide a tailored estimate for your project."
    },
    {
        question: "Do I have the right to the fantasy book after completion?",
        answer: "Yes! Once the book is finished and you approve the final manuscript, you will own all rights to it. We ensure that all work is original and fully transferred to you."
    }
];



// ******************************** End FAQ Section ******************************

const FantasyGhostwriting = () => {
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

                <title>Fantasy Ghostwriting Services | AMZ Book Publishing</title>
                <meta name="description" content="Transform your fantasy ideas into a captivating book! AMZ Book Publishing’s expert ghostwriters craft magical, high-quality stories with ease." />
                <link rel="canonical" href="https://amzbookpublishing.net/fantasy-ghostwriting-services  " />
                <meta name="robots" content="index, follow" /><meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Fantasy Ghostwriting Services by Professional Fantasy Writers" />
                <meta property="og:description" content="Need a Fantasy ghostwriter? We offer Fantasy ghostwriting services at an affordable price. Contact us to hire fantasy writers remotely for your project." />
                <meta property="og:url" content="https://amzbookpublishing.net/fantasy-ghostwriting-services" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-20T07:41:23+00:00" />


            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            <Header />
            <BreadCrumb
                className="responsive-height"
                title="Fantasy Ghostwriting Services: Bringing Your Imagination to Life"
                desc={
                    <>
                        Everyone possesses some raw creative ideas, but not everyone is skilled at putting those ideas on paper. Imagine, for instance, a created fantasy world with deep characters, but putting it on paper seems daunting. Just picture how our proficient fantasy ghostwriters would help you get your book done precisely how you want it. Our book writing services for authors specialize in crafting story ideas of new and seasoned writers professionally so that it is easy for the writer.

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
                    heading="Professional Fantasy "
                    subHeading="Ghostwriters for Hire"
                    description={
                        <>
                            Writing a captivating fantasy novel involves several critical steps. A writer needs compelling world-building, character, and plot development from imagination alone. Our professional fantasy book ghostwriters are committed and adept specialists in fantasy writing who will ensure you have your story told in an original and captivating manner.
                            We combine your ideas with story writing, we create fantasy ghostwriting services that meet your expectations. Irrespective of the type of high fantasy, we help you convert your ideas into a novel that displays your individuality.

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
  <div>
                <SecondSection
                    buttonLabel="S e r v i c e s"
                    heading1={<>
                        Creating Fantasy </>}
                    subHeading={<>
                        Books <br />
                        for Every</>}
                    heading2=" Subgenre"
                    paragraph="Here at our Fantasy ghostwriting agency, we cater to virtually all subgenres of Fantasy. Whether it's epic Fantasy, Dark Fantasy, or even urban Fantasy, we have the right writers to assist you with the following:"
                    services={services}
                />
            </div>

            <div style={{ padding: '0px 0px 50px 0px' }}>
                <ImageLeftBanner
                    heading="Why Choose Our Affordable Fantasy Ghostwriting Company?"
                    subHeading=""
                    description={
                        <>
                            Our fantasy ghostwriting services are designed to be accessible while maintaining the highest quality. Here's why our clients choose us:
                            <ul>
                                <li>
                                    <b>Experienced Fantasy Writers: </b> Our team of fantasy writers for hire brings years of experience in crafting engaging, imaginative stories.
                                </li>
                                <li>
                                    <strong>Collaborative Process: </strong> We believe in working closely with our clients. Your feedback is essential, and we ensure your voice, ethos, and creativity are reflected in every chapter.
                                </li>
                                <li>
                                    <strong>Unlimited Revisions: </strong> We provide unlimited revisions during the writing process. We want your fantasy book to be precisely what you envision.
                                </li>
                                <li>
                                    <strong>Affordable Rates: </strong> Our services are budget-friendly, so all aspiring fantasy authors can afford to share their creativity with the world.
                                </li>
                                <li>
                                    <strong>On-Time Delivery: </strong>We understand the importance of deadlines and work diligently to ensure your book is completed and delivered on time without compromising quality.
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
export default FantasyGhostwriting;


