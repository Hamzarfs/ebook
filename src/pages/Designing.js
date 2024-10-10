// src/pages/About.js

import React,{ useState } from 'react';
// import { Link } from 'react-router-dom';
import BreadCrumb from '../components/common/BreadCrumb';
import DesigningServices from '../components/Designing/DesigningServices'
import DesignProcess from '../components/common/DesignProcess';
import BookCoverSwiper from '../components/Designing/BookCoverSwipper';
import ImageTextBanner from '../components/common/ImageTextBanner';
import CtaButton from '../components/books/CtaButton';
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import breadcrumbbg from '../images/breadcrumbbg.png'; // Import the image
import frame10 from '../images/Frame 10.png'; // Adjust the path as necessary
import frame11 from '../images/Frame 11.png'; // Adjust the path as necessary
import frame12 from '../images/Frame 12.png'; // Adjust the path as necessary
import designprocess1 from '../images/design-process-1.png';
import designprocess2 from '../images/design-process-2.png';
import designprocess3 from '../images/design-process-3.png';
import designprocess4 from '../images/design-process-4.png';
import PopupForm1 from '../components/common/PopupForm';



<Header/>

// ******************************** Start Design Process Props ******************************

const heading = {
  title: "Designing Process",
  highlight: "We Apply"
};

const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Project Discussion",
    title: "Project Discussion",
    description: "First thing we do is discuss the client's expectations regarding the design."
  },
  {
    image: designprocess2,
    alt: "Design Research",
    title: "Design Research",
    description: "Our designers do thorough research to ensure the most fitting product."
  },
  {
    image: designprocess3,
    alt: "First Sample Layout",
    title: "First Sample Layout",
    description: "Our experts prepare the first draft and send it to the client for approval."
  },
  {
    image: designprocess4,
    alt: "Final Design Delivery",
    title: "Final Design Delivery",
    description: "Once approved, we deliver the final files to the client."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start ImageTextBanner ******************************


const contentItems = [
  {
      heading: "Cover-To-Cover Creativity",
      paragraph: "A great book design starts with the perfect cover. Our global design community has created thousands of them. We’ve designed stunning artwork for everything from kids’ books to cookbooks—including New York Times bestselling authors Tim Ferris and Rick Warren.",
      imgSrc: frame10,
      imgAlt: "Book Cover Design",
      flexDirection: "normal"
  },
  {
      heading: "Make Every Page Perfect With Creative Book Design",
      paragraph: "We’d never forget about the inside of your book. We’ve curated a team of our expert book designers to bring you custom typesetting and interiors—whether you’ve got a novel, a self-help book, or something extra special.",
      imgSrc: frame11,
      imgAlt: "Book Design",
      flexDirection: "reverse"
  },
  {
      heading: "Your Destination For Custom Book Illustration",
      paragraph: "Our book design artists love turning your words into gorgeous art. From storybook sketches to clever cartoons, imagine the beautiful imagery that will pull your readers further into your book.",
      imgSrc: frame12,
      imgAlt: "Book Illustration",
      flexDirection: "normal"
  },
];

// ******************************** End ImageTextBanner ******************************


// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "I have a fantastic idea for a novel, but writing is not my strong suit. Can you help?",
    answer: "Absolutely! Our talented team of fiction ghostwriters is here to turn your ideas into something amazing. Just share your story concepts with us, and we will weave them into captivating prose. Before you know it, people will be binge-reading your book in just a few sittings!"
  },
  {
    question: "Can you help me become a published author?",
    answer: "Absolutely! Our fiction book ghostwriting services are designed to help you create an engaging story that is ready to pitch to top publishing platforms and literary agents. With a professional ghostwriter on your side, someone who has helped numerous authors achieve their publishing dreams, you will significantly boost your chances of success."
  },
  {
    question: "Are your services confidential?",
    answer: "Absolutely! We understand the importance of confidentiality. Unlike unprofessional ghostwriters who might share project details to attract new clients, we keep everything you share with us strictly private. Your ideas and manuscripts are safe with us!"
  },
  {
    question: "What if I don't like the final draft?",
    answer: "No worries at all! If you are not completely satisfied with the draft, just let us know what you would like to change. We offer free revisions because your satisfaction is our priority. Your feedback helps us understand your vision better, and we are here to work with you until you are thrilled with the final product!"
  }
];

// ******************************** End FAQ Section ******************************

const PageHeading = () => {
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
      <Header />
      <BreadCrumb
        title="Book Designing Services"
        desc={
          <>
            Catch every reader’s eye with custom interior design and professional
        <br />
        typesetting that makes reading a truly enjoyable experience!
          </>
        }
        buttonText="Get a Quote"
        onClick={openModal} // Call openModal on button click
        backgroundImage={breadcrumbbg} // Pass the image URL as a prop
      />

      {/* Popup Form */}
      <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />




<DesigningServices/>
<BookCoverSwiper/>
<DesignProcess 
        heading={heading}
        description={description}
        steps={steps}
      />



<ImageTextBanner 
    title="A Whole New Chapter In" 
    subtitle="Book Design" 
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


       
          {/* Include the BannerSection component here */}
    
      
      
      <Footer/>
    </div>
      
  );
};
export default PageHeading;


