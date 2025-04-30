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
import SecondSection from '../components/home/SecondCarousel';
import officedeskkeyboarddocuments from '../images/officedeskkeyboarddocuments.jpg';
import DesignProcess from '../components/common/DesignProcess';
import ImageRightBanner from '../components/common/ImageRightText';
import ImageLeftBanner from '../components/common/ImageLeftText';
import FictionImage1 from '../images/legal1.png';
import fictionwhychoose from '../images/fictionwhychoose.png';
import ghostWritingImage from '../images/Ghost Writing.png';
import designingImage from '../images/Designing.png';
import bookEditingImage from '../images/book edit.png';

import digitaldevicesoffice from '../images/digitaldevicesoffice.jpg';
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
    title: "Contracts & Agreements: ",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "From employment contracts to partnership agreements, we ensure your contracts are clear, binding, and legally sound."
  },
  {
    title: "Legal Briefs & Motions: ",
    image: designingImage, // Update this if you have a specific image
    description: "Our team drafts well-researched and strategically crafted briefs and motions for a court case or legal presentation."
  },
  {
    title: "Legal Articles & Blogs: ",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Our writers can help law firms and professionals create informative, engaging content to build their online presence and authority."
  },
  {
    title: "Legal Correspondence: ",
    image:  officedeskkeyboarddocuments, // Update this if you have a specific image
    description: "We draft professional and concise legal letters, including notices, demands, and formal letters between parties."
  },
  {
    title: "Legal Research Papers: ",
    image:  digitaldevicesoffice, // Update this if you have a specific image
    description: "We provide comprehensive research and well-written papers for law firms and legal professionals needing expert-level analysis."
  }
];


// ******************************** End SecondSection ******************************



const heading1 = {
    title: (
        <>
          Start Your Legal 
            <br />
        </>
    ),
    highlight: "Ghostwriting Journey Today"
};
const descs = "Ready to hire a legal ghostwriter and get professional help with your legal writing? At AMZ Book Publishing, we provide high-quality legal ghostwriting experts that will save you time and help you create the perfect legal documents. Contact us today for a free consultation, and take the first step toward transforming your legal writing needs into polished, professional content.";






// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Our Legal
     <br />
    </>
  ),
  highlight: " Ghostwriting Process"
};
const desc = "We make sure to utilize the highest degree of professionalism, accuracy, and transparency while preparing your documents.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation & Project Setup",
    title: "Initial Consultation & Project Setup",
    description: "As the first step, we have a meeting with you to gather information on your desired legal requirements, objectives, and target audience. This is where our project managers will collect all the necessary information needed for us to understand your expectations and requirements fully."
  },
  {
    image: designprocess2,
    alt: "Legal Document Writing & Revisions",
    title: "Legal Document Writing & Revisions",
    description: "Upon receiving your feedback on the outline, the legal ghostwriter begins working on the document whereas we coordinate with you during the entire process, sharing drafts, and accepting comments until we achieve the required results."
  },
  {
    image: designprocess3,
    alt: "Final Approval & Submission",
    title: "Final Approval & Submission",
    description: "We do a comprehensive quality check on the document upon receiving the payment to ensure that there are no logical, factual, or grammatical mistakes. After this, we either send the document directly to you or seek your final approval after submission."
  },
  {
    image: designprocess4,
    alt: "Launch & Continued Support",
    title: "Launch & Continued Support",
    description: "Here at our company, you can expect outstanding post-project support. We assist you with the required changes, modifications, and any additional legal composition requirements that arise."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is legal ghostwriting?",
    answer: "Legal ghostwriting involves hiring a professional writer to create legal documents, articles, or content on your behalf. The writer ensures that the work aligns with your needs while maintaining legal standards."
  },
  {
    question: "How do I hire a legal ghostwriter?",
    answer: "To hire a legal ghostwriter, simply contact us for an initial consultation. We'll discuss your project’s requirements and provide a custom quote based on your needs."
  },
  {
    question: "Can I make revisions during the writing process?",
    answer: "Yes! We offer unlimited revisions to ensure your legal document meets your specifications. You can review drafts and suggest changes at every process stage."
  },
  {
    question: "How long does it take to complete a legal document?",
    answer: "The timeline depends on the complexity and type of legal document. After our initial consultation, we’ll provide an estimated timeline based on your requirements."
  },
  {
    question: "Do I own the rights to my legal document?",
    answer: "Yes! Once the legal document is completed and you approve the final draft, you will own all rights to the work. We guarantee all content is original and fully transferred to you."
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
            <title>Professional Legal Ghostwriting Services | AMZ Book Publishing</title>
            <meta name="description" content="AMZ Book Publishing offers Professional Legal Ghostwriting Services, crafting high-quality legal content with precision, clarity, and expertise." />
            <link rel="canonical" href="https://amzbookpublishing.net/professional-legal-ghostwriting-services " />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Legal Ghostwriting Services for Lawyers by Legal Ghostwriters" />
            <meta property="og:description" content="Need a Legal ghostwriter? We offer professional Legal ghostwriting services at an affordable price. Contact us to hire expert writers remotely for your project." />
            <meta property="og:url" content="https://amzbookpublishing.net/professional-legal-ghostwriting-services" />
            <meta property="og:site_name" content="AMZBookPublishing" />
            <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
            <meta property="article:modified_time" content="2024-08-23T07:09:16+00:00" />
      </Helmet>
      <Header />
      <BreadCrumb
       className="responsive-height"
        title="Legal Ghostwriting Services"
        desc={
          <>
   All legal documents need detailed accuracy in combination with expertise and clarity. The creation process takes both lengthy periods of work and complex steps when working with contracts, along with legal briefs and professional legal documents. The legal ghostwriting services at AMZ Book Publishing help legal professionals and lawyers develop expert legal content through efficient, professional assistance.

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


<div style={{ padding: '30px 0px 20px 0px' }}>
<ImageRightBanner
    heading="Professional Legal "
    subHeading="Ghostwriters for Hire"
    description={
        <>
AMZ Book Publishing delivers legal documents through their team of expert ghostwriters who compose documents that fulfill industry criteria. Our team understands legal writing needs and maintains close communication to provide documents that satisfy your expectations. The writers at our company have the expertise to assist you in any case.
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
        heading1={ <>
        Types of  </>}
        subHeading={<>
         Legal   <br/>
         Documents </>}
        heading2="We Specialize In"
        paragraph="Our legal ghostwriter agency online covers a wide range of legal content. Here are some examples of the types of legal documents we can create:"
        services={services}
      />
      </div>
<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why You Should Choose Our Professional Legal Ghostwriting Services"
    subHeading=""
    description={
        <>
        When hiring a legal ghostwriter from AMZ Book Publishing, you choose a team that understands the importance of accuracy, confidentiality, and professionalism in legal writing.
          <ul>
              <li>
                  <b>Experienced Professionals: </b>Our professional legal ghostwriters have years of experience drafting various legal documents for law firms, corporations, and legal professionals.
              </li>
              <li>
                  <strong>Collaborative Process: </strong> We work closely with you, ensuring the content meets your specifications while preserving your unique style and voice.
              </li>
              <li>
                  <strong>Unlimited Revisions: </strong> If unsatisfied, we offer unlimited revisions until your legal document meets your expectations.
              </li>
              <li>
                  <strong>Affordable Rates: </strong> High-quality legal ghostwriting services shouldn’t break the bank. We offer competitive rates for all of our legal writing services.
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


