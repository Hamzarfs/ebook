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
import FictionImage1 from '../../images/LogoDesign1.png';
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
        title: "Company Logo Designs",
        image: ghostWritingImage,
        description: "Our company logo designs are created for businesses of all sizes, from startups to large enterprises. These logos are versatile, professional, and built to work across multiple platforms. We ensure your company's values and industry positioning are reflected through a timeless design that builds recognition, credibility, and long-term brand equity."
    },
    {
        title: "Business Custom Logo Designs",
        image: designingImage,
        description: "Business custom logo designs are tailored to showcase your unique niche and market advantage. We collaborate closely with you to create logos that reflect your brand's goals, audience, and tone. With fully personalized concepts and revisions, these logos are ideal for brands seeking to make a strong and lasting impression."
    },
    {
        title: "Minimalist & Iconic Logos",
        image: bookEditingImage,
        description: "Minimalist and iconic logos are clean, modern, and highly scalable — perfect for tech, startups, and contemporary lifestyle brands. These logos rely on simplicity and strong symbolism to convey your brand message effectively. We focus on form, function, and clarity to deliver instantly recognizable and powerfully memorable visuals."
    }
];

// ******************************** End SecondSection ******************************


const heading1 = {
    title: (
        <>
          Start Your Business Custom 
            <br />
        </>
    ),
    highlight: "Logo Design Journey Today"
};
const descs = "Ready to elevate your brand with a powerful, custom-made logo? AMZ Book Publishing offers bespoke and company logo designs that help your business stand out in any industry. Get in touch today for a free consultation and let our expert logo designers craft a visual identity that's bold, memorable, and uniquely yours.";




// ******************************** Start Design Process Props ******************************

const heading = {
    title: (
        <>
           Our Logo 

        </>
    ),
    highlight: "Design Process"
};
const desc = "We follow a simple process that ensures your logo captures the essence of your brand.";

const steps = [
    {
        image: designprocess1,
        alt: "Initial Consultation & Project Setup",
        title: "Initial Consultation & Project Setup",
        description: "We begin with a thorough consultation to understand your brand's story, vision, and design goals. This allows us to gather key details, such as your target audience, industry, and preferences. We then provide a personalized quote and timeline to ensure transparency and clarity before proceeding."
    },
    {
        image: designprocess2,
        alt: "Design Creation & Revisions",
        title: "Design Creation & Revisions",
        description: "Our expert designers develop initial concepts tailored to your brand's identity. You will receive design drafts to review and offer feedback. We refine the designs based on your input, ensuring your logo aligns with your vision. We include multiple revision rounds to ensure the final product meets your expectations."
    },
    {
        image: designprocess3,
        alt: "Final Approval & Delivery",
        title: "Final Approval & Delivery",
        description: "We present the final version for approval once the logo is perfected based on your revisions. After receiving your approval, we prepare the final files in multiple formats suitable for print and digital use. You'll receive a complete set of logo assets ready for immediate use across all platforms."
    },
    {
        image: designprocess4,
        alt: "Launch & Marketing Support",
        title: "Launch & Marketing Support",
        description: "As your new logo is ready to launch, we offer support for brand activation. We provide promotional materials and marketing assets, ensuring your brand's debut is impactful. Our resources help you build momentum, creating the visibility and recognition your brand deserves in the marketplace."
    }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
    {
        question: "What is a bespoke logo design?",
        answer: "A bespoke logo design is an entirely custom logo that reflects your brand's unique identity. It's original, one-of-a-kind, and not based on templates."
    },
    {
        question: "How do I hire expert logo designers?",
        answer: "Contact us for a free consultation. We'll learn about your business and match you with the best designer to bring your vision to life."
    },
    {
        question: "Can I request revisions during the design process?",
        answer: "Absolutely. We offer unlimited revisions to ensure your logo meets your expectations in every way."
    },
    {
        question: "How long does the logo design process take?",
        answer: "The timeline depends on the complexity of your project, but most logos are completed within 5–10 business days from concept to final approval."
    },
    {
        question: "Do I own the rights to the final logo?",
        answer: "Yes! Upon final approval, you will receive complete ownership and all design rights to your logo for personal and commercial use."
    }
];


// ******************************** End FAQ Section ******************************

const LogoDesign = () => {
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
                <title>Bespoke Logo Design | AMZ Book Publishing</title>
                <meta name="description" content="Get a custom-designed logo with AMZ Book Publishing’s Bespoke Logo Design—tailored, high-quality visuals that represent your brand perfectly." />
                <link rel="canonical" href="https://amzbookpublishing.net/bespoke-logo-design " />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Bespoke Logo Designs | AMZ Book Publishing" />
                <meta property="og:description" content="We create bespoke logo designs for writers. Get our company logo design services for showcasing your books, book sales, reader's email list, and attention." />
                <meta property="og:url" content="https://amzbookpublishing.net/bespoke-logo-design" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-23T07:20:34+00:00" />
            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            <Header />
            <BreadCrumb
                className="responsive-height"
                title="Bespoke Logo Designs for Branding Solutions"
                desc={
                    <>
                        A compelling logo is critical while building a unique and unforgettable brand identity. AMZ Book Publishing offers professional logo design services that align with your business's character and goals.

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
                    heading="Expert Logo "
                    subHeading="Designers for Hire"
                    description={
                        <>
                            Our team of expert logo designers specializes in creating visually stunning and meaningful designs that communicate your brand story. Our specialists work hard to make each design attractive and engaging. Whether you need a logo or a complete corporate identity, our designers develop striking graphics for your business.
                            We are a custom logo design company that creates logos that capture the attention of your target market while upholding your brand's culture.

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
                        Types of   </>}
                    subHeading={<>
                       Logo Design<br /> Services 
                    </>}
                    heading2=" We Specialize In"
                    paragraph="At AMZ Book Publishing, we cater to a wide variety of branding needs, offering:"
                    services={services}
                />
            </div>
            <div style={{ padding: '0px 0px 50px 0px' }}>
                <ImageLeftBanner
                    heading="Why Choose Our"
                    subHeading=" Logo Design Company?"
                    description={
                        <>
                        Choosing AMZ Book Publishing for your logo design needs means working with a creative team that values innovation and professionalism:
                          <ul>
                              <li>
                                  <b>Skilled Designers: </b> Our expert logo designers have years of experience crafting timeless, functional, and market-ready logos.
                              </li>
                              <li>
                                  <strong>Custom Design Approach: </strong>Every client gets a personalized experience. We ensure that your vision leads the design process from concept to final delivery.
                              </li>
                              <li>
                                  <strong>Unlimited Revisions: </strong> Your satisfaction is our priority. We provide unlimited changes until your logo perfectly reflects your brand.
                              </li>
                              <li>
                                  <strong>Affordable Pricing: </strong>We are a trusted logo design company that offers high-quality work at competitive rates to help businesses of all sizes succeed.
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
export default LogoDesign;


