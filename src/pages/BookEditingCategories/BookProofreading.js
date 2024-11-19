// src/pages/About.js
import React,{ useState } from 'react';
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
import FictionImage1 from '../../images/fictiongimg1.png';
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

// ******************************** Start SecondSection ******************************
const services = [
  {
    title: "Grammar Check",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Our proofreaders examine the text for grammatical errors, punctuation mistakes, and spelling issues. We also address sentence structure to enhance clarity and readability."
  },
  {
    title: "Consistency Review",
    image: designingImage, // Update this if you have a specific image
    description: "Proofreaders ensure consistent use of terminology, names, and formatting throughout the manuscript. A thorough check on fonts, styles, and headings keeps the flow intact."
  },
  {
    title: "Formatting Assessment",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Our editors verify that the manuscript adheres to industry-standard formatting guidelines for submissions. This includes checking margin sizes, line spacing, and page numbering for professionalism."
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
   Get Your Book Ready
    <br/>
    </>
  ),
  highlight: "For Its Launch!"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Kickoff Meeting",
    title: "Kickoff Meeting",
    description: "The author and proofreader discuss the project’s scope, timeline, and specific needs. A mutual understanding is established as the author provides the draft to the editor."
  },
  {
    image: designprocess2,
    alt: "Agreement Signing",
    title: "Agreement Signing",
    description: "Both parties may sign an agreement outlining the terms of the proofreading service. This includes payment, confidentiality, and deadlines to ensure clarity."
  },
  {
    image: designprocess3,
    alt: "Annotations Review",
    title: "Annotations Review",
    description: "The proofreader reviews the manuscript for grammar, punctuation, and formatting issues. Comments and suggestions are added directly in the document to highlight areas for improvement."
  },
  {
    image: designprocess4,
    alt: "Final Check",
    title: "Final Check",
    description: "The author reviews the proofreader’s comments and makes necessary changes to the manuscript. A final review is conducted to catch any remaining errors before publication."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What file formats do you accept for editing?",
    answer: "We mainly prefer working with Google Docs and MS Word for easy tracking of changes. If you’re comfortable with another format, feel free to share, and our proofreaders can accommodate you."
  },
  {
    question: "How do I communicate with my editor during the process?",
    answer: "We maintain open communication through email, calls, or video calls, depending on your preference. Our proofreaders welcome any feedback and questions from you."
  },
  {
    question: "Do you provide proofreading for specific genres?",
    answer: "Yes, our proofreaders are experienced in various genres, including fiction, non-fiction, academic, and more."
  },
  {
    question: "What can I expect in terms of feedback?",
    answer: "Feedback primarily focuses on grammar, punctuation, spelling, consistency, and formatting errors. Extensive changes may not be included within the proofreading scope."
  },
  {
    question: "Can you help with formatting for submission to publishers?",
    answer: "Yes, our proofreading services include formatting according to industry standards. We provide a detailed report and comments on identified formatting errors for you to amend."
  }
];


// ******************************** End FAQ Section ******************************

const BookProofreading = () => {
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
        <title>Thorough Book Proofreading Services for Error-Free Texts</title>
        <meta name="description" content="Need Book Proofreading Services? We offer professional Book Proofreading services for self-published authors on affordable price. Get a free quote now!" />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Book Proofreading"
        desc={
          <>
Partner With Us To Give Your Book The Final Touches It Needs For A Flawless Finish!
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


<div style={{ padding: '30px 0px 100px 0px' }}>
<ImageRightBanner
    heading="Book "
    subHeading="Proofreading"
    description={
        <>
Before publication, a book is bound to go through the hands of multiple authors for cross-checking but that might affect your confidentiality. We are dedicated to ensuring your book is polished and ready for publication without your ideas being traveled and talked about. We understand that even the smallest errors can distract readers and undermine your success. With our attention to detail, we review your work, checking for grammar, punctuation, spelling, and consistency to ensure every word shines. 
<br/><br/>
Let us handle the last part of your journey before publication, preparing the book to be error-free without changing the vision and message of the author. We understand the hard work and dedication that goes into crafting a book, and we’re here to support you in making it the best it can be.

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
      Professional </>}
        subHeading={<>
        Book   <br/>
        Proofreading </>}
        heading2="Services"
        paragraph="We provide a comprehensive proofreading service that goes beyond just fixing typos. We fine-tune your words for a seamless read!"
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
    heading="Why Choose Us"
    subHeading=""
    description={
      <>
Choosing our book proofreading service means investing in your success. Our proofreaders have a strong background in writing and editing, ensuring your manuscript receives the top-notch attention that it deserves. We understand every author is unique and will have a different approach towards their craft, our tailored services are perfect for such occasions. 
<br/><br/>
Beyond basic proofreading, we offer formatting checks and adherence to style guides aligning the draft with industry standards. Client satisfaction is always on our proofreader's priority list - timely turnaround, a clear communication channel, and commitment to confidentiality are our promises to every client who decides to sign up with us.
<br/><br/>
We take pride when we say - we take your book to the next level where you gather a market that emotionally connects with your work. 
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
export default BookProofreading;


