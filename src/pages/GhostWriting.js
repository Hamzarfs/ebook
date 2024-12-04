// src/pages/About.js
import React, {useState} from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
import { Helmet } from 'react-helmet-async';

// import DesigningServices from '../components/Designing/DesigningServices';
import GhostwritingServices from '../components/Ghostwritting/GhostWritingServices';
import ImageTextBanner from '../components/common/ImageTextBanner';
import CtaButton from '../components/common/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Ghostwritingbg from '../images/Ghostwritingbg.png'; // Import the image
import ghostimage1 from '../images/ghostimage1.png'; // Adjust the path as necessary
import ghostimage2 from '../images/ghostimage2.png'; // Adjust the path as necessary
import ghostimage3 from '../images/ghostimage3.png'; // Adjust the path as necessary
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';
import PopupForm1 from '../components/common/PopupForm';


// ***************  Start ImageTextBanner **********************

const contentItems = [
    {
        heading: "Critical Review & Analysis: ",
        paragraph: "Whether you need a quick spelling and grammar check or a detailed developmental review, we have you covered. Our flexible editing options allow you to customize the process, ensuring your work gets the precise attention it deserves: from fine-tuning the details to reshaping the bigger picture.",
        imgSrc: ghostimage1,
        imgAlt: "Book Cover Design",
        flexDirection: "reverse"
    },
    {
        heading: "Line Editing",
        paragraph: "We ensure your book is polished to perfection by having our professional proofreaders meticulously review it for any grammatical or spelling errors. Any issues are quickly corrected, all while maintaining the integrity and flow of your story.",
        imgSrc: ghostimage2,
        imgAlt: "Book Design",
        flexDirection: "normal"
    },
    {
        heading: "Developmental Editing",
        paragraph: "Our expert book editors dive deep into the topic of your book, adding valuable insights where needed. They will then create a detailed outline of the edits and work closely with you throughout the entire process, ensuring your vision stays intact every step of the way.",
        imgSrc: ghostimage3,
        imgAlt: "Book Illustration",
        flexDirection: "reverse"
    },
  ];

  // *************** End ImageTextBanner **********************


  // ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Q: What is the ghostwriting process from start to finish?",
    answer: "Ghostwriting begins with a thorough consultation to understand your ideas, vision, and goals. Then, the ghostwriter creates an outline or proposal, followed by drafts that are reviewed and revised collaboratively. Once the final manuscript is complete, it undergoes editing, proofreading, and formatting for publication."
  },
  {
    question: "Q: How do I choose the right ghostwriter for my project?",
    answer: "Selecting the right ghostwriter involves assessing their expertise in your genre, reviewing past work samples, and discussing your vision for the book. Look for someone with a deep understanding of your subject matter and writing style preferences."
  },
  {
    question: "Q: What kind of materials do I need to provide the ghostwriter?",
    answer: "Depending on the stage of your project, you might need to provide an initial draft, notes, research materials, or simply your vision for the book. Some clients provide chapter outlines, while others give audio recordings or detailed interviews."
  },
  {
    question: "Q: Can I retain full creative control while working with a ghostwriter?",
    answer: "Absolutely. You will have full creative control throughout the project, from approving the outline to reviewing drafts. The ghostwriter’s job is to bring your ideas to life, ensuring your voice and message remain authentic."
  },
  {
    question: "Q: How do ghostwriters ensure confidentiality?",
    answer: "Most ghostwriting agreements include non-disclosure clauses, ensuring that the ghostwriter never reveals their involvement without your consent. Reputable ghostwriters prioritize confidentiality and respect for your intellectual property."
  }

];

// ******************************** End FAQ Section ******************************

const GhostWriting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
     <Helmet>
        <title>Affordable Book Ghostwriting Services by Expert Ghostwriters</title>
        <meta name="description" content="Need a ghostwriter for your book? Get professional ghostwriting services on affordable price. We are the best book ghostwriting agency in USA for best-selling author." />
        <link rel="canonical" href="https://amzbookpublishing.net/ghostwriting" />

      </Helmet>
    
    <div>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Ghostwriting Services"
        desc={
          <>
            Let us turn your ideas into reality and help share your story with the world,
            {/* <br /> */}
            all while upholding the highest standards of excellence.
          </>
        }
        buttonText="Get a Quote"
        onClick={openModal} // Call openModal on button click
        backgroundImage={Ghostwritingbg} // Pass the image URL as a prop
      />

      {/* Popup Form */}
      <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
     


{/* -------------------End Banner section---------------------- */}
<GhostwritingServices/>
<ImageTextBanner 
    title="Professional Ghostwriting " 
    subtitle="Services" 
    description={
        <>
            You've got the next bestseller. We’ve got a complete book design solution: custom covers,<br />
            interior design, illustration, tools and more.
        </>
    } 
    contentItems={contentItems} 
/>
<CtaButton/>
          <FAQSection faqData={faqData} />
         <ContactForm/>

      <Footer/>
    </div>
    </>
  );
};
export default GhostWriting;


