// src/pages/About.js
import React, { useState } from 'react';
import BreadCrumb from '../../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import CtaButton from '../../components/common/CtaButton';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Ghostwritingbg from '../../images/Ghostwritingbg.png'; // Import the image
import FAQSection from '../../components/Designing/DesignFaq';
import ContactForm from '../../components/common/ContactForm1';
import SecondSection from '../../components/home/SecondSection';
import DesignProcess from '../../components/common/DesignProcess';
import ImageRightBanner from '../../components/common/ImageRightText';
import ImageLeftBanner from '../../components/common/ImageLeftText';
import FictionImage1 from '../../images/StationaryDesign1.png';
import fictionwhychoose from '../../images/fictionwhychoose.png';
import ghostWritingImage from '../../images/Ghost Writing.png';
import designingImage from '../../images/Designing.png';
import bookEditingImage from '../../images/book edit.png';
import designprocess1 from '../../images/design-process-1.png';
import designprocess2 from '../../images/design-process-2.png';
import designprocess3 from '../../images/design-process-3.png';
import designprocess4 from '../../images/design-process-4.png';
import PopupForm1 from '../../components/common/PopupForm';
import { Helmet } from 'react-helmet-async';
import Queries from '../../components/common/Queries';





// ******************************** Start SecondSection ******************************
const services = [
    {
        title: "Stationery Design Services for Authors",
        image: ghostWritingImage, // Update this if you have a specific image
        description: "Our stationery services are not only confined to the literary field but also offer authors a variety of options to make their brand stand out throughout the process, such as book signings and media/press kits. One of the benefits of custom-designed bookmarks, letterheads, and thank-you notes is that they help your literary brand be easily recognized and stand out while keeping your brand consistent."
    },
    {
        title: "Professional Stationery Design Services",
        image: designingImage, // Update this if you have a specific image
        description: "Across industries, we have come up with premium stationery sets that can cater to the needs of professionals. The set has become a tool for branding, presenting, and corresponding by featuring innovative and creative business cards. During the negotiations, presentations, and correspondence, you can capture a handy card, write a thank-you note on a professional-looking branded letterhead, or drop your message in a distinctive envelope. "
    },
    {
        title: "Affordable Stationery Design Services",
        image: bookEditingImage, // Update this if you have a specific image
        description: "Startups, freelancers, and small businesses are the right recipients who are exclusively served without quality or professionalism being undermined by us with direction, commitment, and provision. Picture your project running much faster and more efficiently by making our creative team your loyal assistant, literally taking this role."
    }
];

// ******************************** End SecondSection ******************************


const heading1 = {
    title: (
        <>
          Find Your Stationery
            <br />
        </>
    ),
    highlight: "Design Right Now"
};
const descs = "Are you interested in updating your writer's brand with professional, visually appealing stationery? AMZ Book Publishing has the right solution – the best stationery designs that can make your brand more recognizable. Let the AMZ Book Publishing team give you a free guide to your perfect stationery.";





// ******************************** Start Design Process Props ******************************

const heading = {
    title: (
        <>
            Our Stationery

        </>
    ),
    highlight: " Design Process"
};
const desc = "Our process, represented in a simplified form below, was developed with the brand and its connection with the audience in mind.";

const steps = [
    {
        image: designprocess1,
        alt: "Initial Consultation & Project Setup",
        title: "Initial Consultation & Project Setup",
        description: "We will start the project with a discussion on what you consider most relevant to your brand. The scope of this step also comprises the clarification of your public and the tone of your message, as well as the drawing of the characteristics that your branding will have. Once we have the details of your requirements, we give you an individual rate for the project and an accurate timetable for its realization."
    },
    {
        image: designprocess2,
        alt: "Design Creation & Revisions",
        title: "Design Creation & Revisions",
        description: "Our team of creative designers provides the first sketches of your stationery, which uniquely show your brand. You can comment on further samples and make your remarks. Together, we will go through the stages of revision, making the designs more straightforward regarding the writer's personality and the brand."
    },
    {
        image: designprocess3,
        alt: "Final Approval & Delivery",
        title: "Final Approval & Delivery",
        description: "As soon as the corrections are wrapped up and the art is signed off, we provide the deliverables as final stationery files in various options suitable for print or electronic use. In use-ready formats, you will receive letterheads, envelopes, bookmarks, and author cards."
    },
    {
        image: designprocess4,
        alt: "Launch & Marketing Support",
        title: "Launch & Marketing Support",
        description: "With your stationery all set, we run the extra mile to support you in marketing and brand collateral. Our marketing support is the best vehicle to achieve any destination. They play an essential role in brand visibility."
    }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
    {
        question: "What are stationery design services?",
        answer: "Stationery design services revolve around creating hard-copy items like letterhead, business cards, envelopes, etc. The goal is to ensure the brand's image and professionalism are well-represented throughout the printed materials."
    },
    {
        question: "Can my author brand be represented by a custom stationery design?",
        answer: "Absolutely. Our strength lies in creating unique and interesting designs that perfectly fit your genre and brand."
    },
    {
        question: "How many revisions are included in the process?",
        answer: "We give you all the time in the world to demand changes. Our primary concern is your happiness, so we are here to facilitate the process so that it is perfect for you."
    },
    {
        question: "How long does the stationery design process take?",
        answer: "If we are not overwhelmed, the project can usually be finished within a week or a week and a half. Of course, this doesn't include the consultation time, which could take up to ten more days."
    },
    {
        question: "Do I get to keep the designs after you finish the project?",
        answer: "For sure. Once you hit the approve button, you own the designs with no restrictions."
    }
];

// ******************************** End FAQ Section ******************************

const StationeryDesign = () => {
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
                <title>Stationery Design Services | AMZ Book Publishing</title>
                <meta name="description" content="Our Stationery Design Services provide premium, eye-catching designs that make your brand’s business cards, envelopes, and letterheads stand out." />
                <link rel="canonical" href="https://amzbookpublishing.net/stationery-design-services " />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Creative Stationery Design Services for Authors" />
                <meta property="og:description" content="Get our stationery design services at an affordable price. Contact us for authors' stationery designs including letterheads, envelopes, & business card designs." />
                <meta property="og:url" content="https://amzbookpublishing.net/stationery-design-services" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-23T07:24:57+00:00" />
            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            <Header />
            <BreadCrumb
                className="responsive-height"
                title="Professional Stationery Design Services for Authors"
                desc={
                    <>
                        AMZ Book Publishing provides stationery design services that come with a personal touch, and it is the author's brand in the most elegant and well-matched way.

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
                    heading="Stationery design"
                    subHeading=" services for authors"
                    description={
                        <>
                            The artists who design our stationery are professionals. They create a consistent and good-looking set of personalized designs that will reflect your image as an author to the highest degree. If you use a business card or notepad, we made it in such a way that showcases your brand’s voice. We create outstanding designs with creativity and memory. We are a professional agency specializing in stationery design and offering unique products.

                            Our designs will help your creations get noticed and be in line with your brand and message. The designs are carefully crafted so that they will remain memorable in your clients' minds long after they have been presented to them.

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
             <SecondSection
                    buttonLabel="S e r v i c e s"
                    heading1={<>
                        Types of </>}
                    subHeading={<>
                        Stationery Design<br />
                        Services</>}
                    heading2=" We Specialize In"
                    paragraph="AMZ Book Publishing stands as a provider of a substantial number of stationery design services that are adapted to various professional needs in a very competitive way:"
                    services={services}
                />
            </div>
            <div style={{ padding: '0px 0px 50px 0px' }}>
                <ImageLeftBanner
                    heading="Why Choose "
                    subHeading="Our Stationery Design Company?"
                    description={
                        <>
                        When you choose AMZ Book Publishing for your stationery design needs, you are collaborating with a highly innovative professional team who only have your best interests in mind and who will stay with you until your brand assets are personalized and impactful:
                          <ul>
                              <li>
                                  <b>Experienced Designers: </b> Allow our experts to bring their understanding of your style to their creative process, ensuring that each piece reflects your standard and brand.
                              </li>
                              <li>
                                  <strong>Bespoke Design: </strong>Each design will be uniquely developed from the start. We consider your contributions so that together, we can achieve the most suitable tone and image for each asset.
                              </li>
                              <li>
                                  <strong>Unlimited Revisions: </strong> Your complete peace of mind is our happiness. We won't start printing your stationery set until you give us your green light.
                              </li>
                              <li>
                                  <strong>Affordable Pricing: </strong>Whether you are an author, professional, or small business, you can now enjoy the best quality at the best prices. The packages are highly flexible and have been made explicitly for your categories.
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
export default StationeryDesign;


