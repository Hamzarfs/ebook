// src/pages/About.js
import React,{ useState } from 'react';
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
import FictionImage1 from '../images/pbg.jpeg';
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
    title: "Beauty Blogs & Articles: ",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Our beauty ghostwriting agency in the USA includes developing beauty blogs and articles incorporating different issues, tutorials, and expert recommendations that are captivating and SEO-friendly to help draw your audience and traffic to your website."
  },
  {
    title: "Product Descriptions & Reviews: ",
    image: designingImage, // Update this if you have a specific image
    description: "Our writers craft compelling product beauty descriptions that are persuasive and emphasize the products to help increase sales."
  },
  {
    title: "Beauty eBooks & Guides: ",
    image: bookEditingImage, // Update this if you have a specific image
    description: "We assist beauty professionals and brands in developing comprehensive eBooks and guides to enable them to offer educational value to their audience."
  }
];


// ******************************** End SecondSection ******************************


const heading1 = {
    title: (
        <>
           Start Your Beauty 
            <br />
        </>
    ),
    highlight: "Ghostwriting Journey Today"
};
const descs = "Ready to hire a beauty ghostwriter and bring your content vision to life? AMZ Book Publishing offers professional beauty ghostwriting services to help you create compelling content for your beauty brand or blog. Contact us today for a free consultation, and let’s start crafting content that shines.";




// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
Our Beauty
     <br />
    </>
  ),
  highlight: "Ghostwriting Process "
};
const desc = "Bringing your beauty book to life is easy with our 3-step process, designed to ensure that every detail is taken care of:";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation & Project Setup",
    title: "Initial Consultation & Project Setup",
    description: "Gather details during an early consultation and note the project's goals, vision, and timelines. Afterward, provide customized quotes and project schedules."
  },
  {
    image: designprocess2,
    alt: "Content Creation & Revisions",
    title: "Content Creation & Revisions",
    description: "The beautician ghostwriters prepare the content after we understand your expectations of your brand. The content can range from product descriptions to beauty marketing brochures and blogs. "
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
    question: "What is beauty ghostwriting?",
    answer: "Beauty ghostwriting involves hiring a professional writer to create beauty-related content on your behalf. The content is crafted to align with your brand voice and vision, but you receive the credit for the final product."
  },
  {
    question: "How do I hire a beauty ghostwriter?",
    answer: "To hire a beauty ghostwriter, contact us for an initial consultation. We'll discuss your goals, content needs, and deliverables and then provide a custom quote for your project."
  },
  {
    question: "Can I make revisions during the writing process?",
    answer: "Yes! We offer unlimited revisions to ensure the content matches your expectations. You’ll have the opportunity to review drafts and suggest changes."
  },
  {
    question: "How long does it take to complete beauty content?",
    answer: "The timeline varies depending on the type and complexity of the content. After our consultation, we’ll provide an estimated completion time based on your needs."
  },
  {
    question: "Do I own the rights to my beauty content?",
    answer: "Yes! You will own all its rights once the content is finalized and approved. We guarantee original work and complete ownership transfer."
  }
];

// ******************************** End FAQ Section ******************************

const LegalGhostwriting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {/* -------------------Start Banner section---------------------- */}
      <Helmet>
            <title>Professional Beauty Ghostwriting Services | AMZ Book Publishing</title>
            <meta name="description" content="Our Professional Beauty Ghostwriting Services help beauty experts, influencers, and brands create high-quality, engaging content that sells." />
            <link rel="canonical" href="https://amzbookpublishing.net/professional-beauty-ghostwriting-services " />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Beauty Ghostwriting Agency With Top-Notch Writing Services" />
            <meta property="og:description" content="Need a Beauty ghostwriter? We offer professional Beauty ghostwriting services at an affordable price. Contact us to hire expert writers remotely for your project." />
            <meta property="og:url" content="https://amzbookpublishing.net/professional-beauty-ghostwriting-services" />
            <meta property="og:site_name" content="AMZBookPublishing" />
            <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
            <meta property="article:modified_time" content="2024-08-23T07:32:51+00:00" />
      </Helmet>
      <Header />
      <BreadCrumb
        title="Beauty Ghostwriting Services"
        desc={
          <>
          The intersection of innovation, consumer behavior, and authentic storytelling fuels success in beauty and Cosmetics ghostwriting. In a marketplace full of great ideas, remarkable content still requires specialized skills to create. At AMZ Book Publishing, we offer Beauty Ghostwriting Services in New Jersey that allow beauty professionals, social media influencers, and brands to craft written content that seamlessly resonates with their image and target audience.
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
    heading="Professional Beauty "
    subHeading=" Ghostwriters for Hire"
    description={
        <>
Professional beauty ghostwriters at AMZ Book Publishing possess the experience to develop high-quality content targeted at the beauty industry. Our skilled beauty writers can transform your concepts into engaging content that respects your brand identity for blog posts, product descriptions, eBooks, and brand narratives.
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
        heading1={ <>
       Types of </>}
        subHeading={<>
      Beauty Content We  <br/>
          </>}
        heading2="Specialize In"
        paragraph="We provide content services for all types of businesses within the beauty and cosmetics industry. Below are some of the categories that we focus on:"
        services={services}
      />
      </div>


<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why You Should Choose "
    subHeading="Our Beauty Ghostwriting Services"
    description={
        <>
        When you select AMZ Book Publishing you benefit from partnering with a team that understands beauty writing and branding intricacies.
          <ul>
              <li>
                  <b>Experienced Professionals: </b> Our professional beauty ghostwriters are seasoned professionals in the beauty sector, so you can be guaranteed that the beauty content will be crafted appropriately and audience-friendly.
              </li>
              <li>
                  <strong>Collaborative Process: </strong> We work with you at every step to ensure the content reflects your voice, message, and goals. Your feedback is integral to the process.
              </li>
              <li>
                  <strong>Unlimited Revisions: </strong> We allow you to alter the content to make every piece suit you perfectly. If you find anything that is not right, we will assist you in adjusting it.
              </li>
              <li>
                  <strong>	Affordable Rates: </strong> We provide affordable beauty ghostwriting services for beauty ghostwriting, allowing you to purchase the beauty content at a reasonable price.
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
<CtaButton/>
         
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
         <ContactForm/>

      <Footer/>
    </div>
  );
};
export default LegalGhostwriting;


