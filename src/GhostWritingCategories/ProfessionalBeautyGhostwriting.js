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

// ******************************** Start SecondSection ******************************

const services = [
  {
    title: "Fashion Trends",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Beauty is considered incomplete without incorporating the latest fashion trends. At AMZ Book Publishing, our expert beauty ghostwriters possess a deep understanding of contemporary fashion trends."
  },
  {
    title: "Organic Beauty Tips",
    image: designingImage, // Update this if you have a specific image
    description: "As an affordable beauty ghostwriting service, AMZ Book Publishing boasts a team of experts who offer valuable insights into organic beauty. Our ghostwriters possess extensive knowledge of organic products that contribute to enhanced beauty."
  },
  {
    title: "Makeup Tips",
    image: bookEditingImage, // Update this if you have a specific image
    description: "As an affordable beauty ghostwriting agency, we also employ ghostwriters with in-depth knowledge of the latest makeup trends and tips. Makeup enjoys immense popularity among women of all ages."
  }
];


// ******************************** End SecondSection ******************************

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
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Consultation & Discovery: ",
    title: "Consultation & Discovery: ",
    description: "The process starts with a consultation to understand the client's needs, goals, brand, target audience, and content requirements."
  },
  {
    image: designprocess2,
    alt: "Research & Planning: ",
    title: "Research & Planning: ",
    description: "The ghostwriter researches trends, audiences, and competitors, then develops a content strategy and style guide for consistency."
  },
  {
    image: designprocess3,
    alt: "Content Creation & Refinement: ",
    title: "Content Creation & Refinement: ",
    description: "The ghostwriter drafts content based on the strategy and style guide, incorporating client feedback in multiple revision rounds until approval."
  },
  {
    image: designprocess4,
    alt: "Delivery & Support: ",
    title: "Delivery & Support: ",
    description: "Final content is delivered, with ongoing support available for editing, proofreading, or additional writing as needed."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Can you find me a ghostwriter who has specific experience/knows about law?",
    answer: "Absolutely! At AMZ Book Publishings, we make sure to pair you with a legal ghostwriter who has the expertise and background in law that fits your project. Whether it’s contracts, legal briefs, or academic legal writing, we have a team of professionals who know their way around legal jargon and concepts."
  },
  {
    question: "If I invest in your services, can you ensure my legal ghostwriting piece is authentic?",
    answer: "Yes, authenticity is key. Our legal ghostwriters work closely with you to ensure your unique voice and ideas shine through while still adhering to all the legal details. We take the time to understand your needs so that the final piece is 100% original, personalized, and tailored to your specific goals."
  },
  {
    question: "Are your ghostwriting services confidential?",
    answer: "Absolutely! Confidentiality is a top priority for us. We treat every project with the utmost discretion, so your documents, ideas, and personal information are completely secure. Your privacy is just as important to us as delivering quality work."
  },
  {
    question: "What kind of legal documents can I hire a ghostwriter for?",
    answer: "You can hire us for a wide range of legal documents, including contracts, legal memos, case summaries, briefs, research papers, and even full legal textbooks. Whatever you need, our skilled team can handle it!"
  },
  {
    question: "Is ghostwriting ethical?",
    answer: "Yes, ghostwriting is completely ethical. It is a collaborative process where you provide the direction, and the ghostwriter provides the expertise. You are still the mastermind behind the project and our job is to help you bring it to life in a professional and polished way."
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
            <title>Beauty Ghostwriting Agency with Top-Notch Writing Services</title>
            <meta name="description" content="Need a Beauty ghostwriter? We offer professional Beauty ghostwriting services at an affordable price. Contact us to hire expert writers remotely for your project." />
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
At AMZ Book Publishing, we weave comprehensive content encompassing the latest beauty and fashion developments. Our team stays ahead of the curve, keeping pace with global style trends and emerging beauty products to deliver informed and authoritative writing.          </>
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


<div style={{ padding: '30px 0px 100px 0px' }}>
<ImageRightBanner
    heading="Professional Beauty  "
    subHeading=" Ghostwriting Services"
    description={
        <>
The concept of beauty is multifaceted and spans numerous areas of interest. At AMZ Book Publishing, our beauty experts possess in-depth knowledge and hands-on experience with various beauty products, enabling them to guide individuals seeking advice.
           <br/><br/>
           Our team of skilled beauty ghostwriters is well-versed in conducting thorough research and meeting the specific requirements when writing about beauty topics. We provide engaging and well-researched content to our readers, relying on factual data and ensuring accuracy through thorough review before publication. Our writers stay updated on beauty trends, understand referencing and ghostwriting practices, and are committed to providing beauty ghostwriting services in New Jersey.
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
        heading1={ <>
       Expert Beauty and   </>}
        subHeading={<>
      Cosmetics Ghostwriting   <br/>
          </>}
        heading2="Services"
        paragraph="For beauty brands seeking to connect with their audience through compelling content, AMZ book publishing offers a team of skilled writers with expertise in fashion, organic beauty, and makeup trends."
        services={services}
      />
      </div>
{/* <div style={{ padding: '0px 0px 30px 0px' }}>
<SecondSection/>
</div> */}
<DesignProcess 
        heading={heading}
        // description={description}
        steps={steps}
      />
<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Affordable Beauty Ghostwriting"
    subHeading=" Agency In The USA"
    description={
      <>
Select AMZ book publishing to fulfill aspirations, where we are distinguished by our outstanding reputation and dedication to delivering top-notch work. Our proficient team, comprising writers and project leaders with more than a decade of experience in writing books, guarantees superior service. With writers based in the USA, we provide custom affordable beauty ghostwriting services designed to meet your specific requirements.
         <br/><br/>
         We guarantee the opportunity to review and refine your manuscript until it perfectly captures your creative vision. Furthermore, we maintain complete confidentiality you have complete confidence that your work will remain private and protected every step of the way.
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
         <ContactForm/>

      <Footer/>
    </div>
  );
};
export default LegalGhostwriting;


