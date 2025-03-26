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
        heading: "Personalized Ghostwriting Services for You",
        paragraph: "Your raw thoughts and ideas are molded into articulate narratives by premier ghostwriters at AMZ Book Publishing. We write books exactly how you want them and use your voice. You are fully in control. You will become the book's author while our ghostwriters transform your vision into reality. Through our affordable ghostwriting services, all the writing stress is lifted off your shoulders, and you can keep your attention on your core message. You still hold the creative reins but without the torment of putting every word to paper.",
        imgSrc: ghostimage1,
        imgAlt: "Book Cover Design",
        flexDirection: "reverse"
    },
    {
        heading: "Hire a Ghostwriter For Book To Craft Extraordinary Works",
        paragraph: "Here at AMZ Book Publishing, we know and appreciate that ghostwriting is more than transcribing words; it is about articulating your concepts and thoughts. Our ghostwriters are attuned to your thoughts and ensure you are adequately represented in the final book. Whether you are writing a memoir, a guide, or some other work of creativity, we convert your ideas into compelling content. We strive to ensure that your intentions are addressed without losing authenticity, making the book inviting to readers.",
        imgSrc: ghostimage2,
        imgAlt: "Book Design",
        flexDirection: "normal"
    },
    {
        heading: "To Reach New Heights With Our Professional Book Ghostwriting Services",
        paragraph: "With our ghostwriting solutions, you receive more than just writing; better yet, you receive personal and professional growth. From biography writing services to any other project, we help you tell your one-of-a-kind story. You are building a legacy and we make sure that your voice is heard. We go above and beyond to capture every part of your life story and present it in a way that will be unforgettable to the readers.",
        imgSrc: ghostimage3,
        imgAlt: "Book Illustration",
        flexDirection: "reverse"
    },
  ];

  // *************** End ImageTextBanner **********************


  // ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Q: How does Ghostwriting work?",
    answer: "Our expert Ghostwriting services start with a full consultation of the work to capture your vision, ideas, and goals. The ghostwriter then prepares a draft for you which is revised by you and then if you want all the things well, we proceed. "
  },
  {
    question: "Q: How do I choose the best ghostwriter for my project?",
    answer: "You should hire a ghostwriter for an eBook based on their experience in your genre and relevant past work. You should also discuss specific details of the book. Ensure that the candidate has sufficient understanding of the subject, your writing style, and what you want. "
  },
  {
    question: "Q: What type of materials must I furnish to the ghostwriter?",
    answer: "Based on the progress of your project, you may need to provide an initial draft, concept notes, some research materials, or even just your thoughts and vision for the book. Some clients offer chapter outlines, while others do audio recordings or detailed interviews. The ghostwriter's goals can be met the more guidance you provide."
  },
  {
    question: "Q: Can I have creative control while working with a ghostwriter",
    answer: "Absolutely. You will be able to maintain full creative control over the entire project. You can give approval for the final outline and drafts. It's up to you. The ghostwriter's work is to execute your concepts while preserving your voice and message."
  },
  {
    question: "Q: How do ghostwriters guarantee client confidentiality? ",
    answer: "Most ghostwriting contracts are governed by non-disclosure agreements which ensures that the ghostwriter will never disclose their participation in legal proceedings without your permission. Professional ghostwriters keep confidentiality. They will not expose you as the author of the unpublished document, which will be subject to proprietary rights protections until you decide."
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
<title>Professional Ghostwriting Services | AMZ Book Publishing</title>
<meta
name="description"
content="Need a book? We write it for you! AMZ Book Publishing offers top ghostwriting services to turn your vision into a compelling story."/>
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://amzbookpublishing.net/professional-ghostwriting-services " />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Affordable Ghostwriting Services | AMZ Book Publishing" />
<meta property="og:description" content="Need a ghostwriter? Get professional ghostwriting services. Trusted by best-selling authors, USA's top premier ghostwriting agency." />
<meta property="og:url" content="https://amzbookpublishing.net/professional-ghostwriting-services" />
<meta property="og:site_name" content="AMZBookPublishing" />
<meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
<meta property="article:modified_time" content="2024-08-22T06:49:19+00:00" />

</Helmet>
    
    <div>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
      className="responsive-height"
        title="Premium Ghostwriting Services"
        desc={
          <>
           As one of the premier ghostwriting agencies, we professionally ghostwrite books, novels and memoirs. We help you share your story with the world. Turn your ideas into reality with the help of our talented ghostwriters.
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
    title="Professional Ghostwriting Services in the" 
    subtitle=" USA" 
    description={
        <>
            Unlike our competitors, we customize strategies to meet your requirements, enabling you to get the most out of our ghostwriting services in the USA. Our skilled writers ensure that your project meets the highest standards of professionalism and creativity, which helps you capture the attention of your target audience.
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


