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
    title: "Developmental Editing",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "We focus on the bigger picture—the structure, plot, characters, and overall content. This approach allows us to improve the substance and structure of the story, resulting in a more compelling narrative."
  },
  {
    title: "Copyediting",
    image: designingImage, // Update this if you have a specific image
    description: "We focus on making the content error-free. An extensive review of technical elements—such as language, grammar, spelling, and punctuation—is conducted. Furthermore, corrections related to sentence structure and word choice are made to enhance the clarity and readability of the writing."
  },
  {
    title: "Proofreading",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Proofreaders perform a last check to ensure the text looks professional, is completely error-free, and is ready for print or digital release. This step offers authors confidence that their work is publication-ready."
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Creating Your 
    
    </>
  ),
  highlight: " Perfect Masterpiece"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "We start by understanding your vision for your business cards. Whether you have a specific design in mind or need creative guidance, we gather all the details to ensure your card aligns perfectly with your brand."
  },
  {
    image: designprocess2,
    alt: "Design Concepts",
    title: "Design Concepts",
    description: "Our designers craft multiple unique concepts tailored to your preferences and industry. Explore a variety of styles, layouts, and materials to find the perfect fit that makes your card stand out."
  },
  {
    image: designprocess3,
    alt: "Revisions & Refinements",
    title: "Revisions & Refinements",
    description: "After selecting a design, we fine-tune it to your specifications. Your feedback is crucial to perfecting every detail, from layout to typography, ensuring it’s ready to impress."
  },
  {
    image: designprocess4,
    alt: "Final Approval & Delivery",
    title: "Final Approval & Delivery",
    description: "Once approved, we prepare your business cards for production. You’ll receive high-quality, print-ready cards that reflect your brand beautifully and professionally."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What genres do your editors specialize in?",
    answer: "Our book editors specialize in a variety of genres, including fiction, non-fiction, academic and educational, technical writing, and children's and young adult literature. Each genre requires a unique set of skills and knowledge."
  },
  {
    question: "Are there discounts on larger manuscripts or multiple projects?",
    answer: "Yes, we offer custom pricing and potential discounts for larger projects, series, or returning clients. Feel free to reach out to discuss options that best fit your needs."
  },
  {
    question: "Will the editor change my writing style?",
    answer: "Our priority is client satisfaction. We work to enhance your voice without changing it, focusing on improving readability and clarity while preserving your original style."
  },
  {
    question: "How long does the editing process take?",
    answer: "The duration of the editing process depends on the manuscript's length. We include a time frame clause during the agreement process to ensure timely delivery and avoid delays."
  },
  {
    question: "How do I know which editing service is right for me?",
    answer: "Don’t worry! We offer an initial consultation where our team assesses your manuscript, discusses your goals, and recommends the most suitable editing type for your book."
  }
];


// ******************************** End FAQ Section ******************************

const BookEditing = () => {
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
        <title>Comprehensive Book Editing Services for Flawless Manuscripts</title>
        <meta name="description" content="Our book editors are highly professional to initaite on your book editing project. Publish error free your book on online platforms confidently." />
        <link rel="canonical" href="https://amzbookpublishing.net/book-editing" />

      </Helmet>
      <Header />
      <BreadCrumb
        title="Book Editing"
        desc={
          <>
From Your First Draft To The Final Touch - Professional Editing Services to Make Your Words Shine!

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
    subHeading="Editng"
    description={
        <>
We understand that crafting a book is no joke, which is why we’re here to help authors bring their stories to life with professional editing services. Our experts are here to deliver to you according to your needs. Every stage of the writing journey is crucial, whether the plot, detailed copyediting, or final proofreading - we’re here to make your work publish-ready! 

<br/><br/>

We are committed to providing our clients with high-quality work and immense respect for their voices, allowing readers to fall in love with their books. 
Partner with us today to begin the journey of crafting a book you’ll be proud of! 
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
      Bringing Your </>}
        subHeading={<>
         Manuscript To  <br/>
         Perfection With </>}
        heading2="Our Expert Editing"
        paragraph="We provide specialized services before publication, ensuring your work is readable, compelling and resonating with the intended audience. "
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
A book is more than just words on a page; it’s an expression of the author’s emotions. We believe in working closely with the client to understand their vision and enhance their voice, creating a collaborative editing experience. Whether you're a first-time author or a seasoned writer, we offer a full range of editing services, including developmental editing, copyediting, and proofreading. We believe in timely work delivery, without compromising quality. 
<br/><br/>
Most importantly, we take care of your content and ideas. Keeping confidentiality is our priority ensuring your manuscript remains secure. Quality editing shouldn’t mean going heavy on the pockets, we offer clients to negotiate and have a transparent quotation process. 
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
export default BookEditing;


