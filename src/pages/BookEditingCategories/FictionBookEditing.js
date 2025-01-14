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
import FictionImage1 from '../../images/FictionBookEditing1.png';
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
    title: "Story Editing",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "We focus on the bigger picture—structure, plot, and characters. This approach enhances the overall substance and makes your narrative more compelling."
  },
  {
    title: "Content Review",
    image: designingImage, // Update this if you have a specific image
    description: "We ensure your manuscript is error-free by reviewing grammar, spelling, and punctuation. Corrections to sentence structure and word choice improve clarity and readability."
  },
  {
    title: "Final Proofreading",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Proofreaders conduct a final check to ensure the text is completely error-free and professional. This step gives authors confidence that their work is ready for publication."
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
  Creating A Fiction World
    <br/>
    </>
  ),
  highlight: " That Makes You Shine!"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Consultation Meeting",
    title: "Meeting",
    description: "We discuss your vision for the manuscript and outline your specific goals. By submitting a sample, we assess its unique elements to better support you."
  },
  {
    image: designprocess2,
    alt: "Proposal Agreement",
    title: "Proposal Agreement",
    description: "After evaluating the manuscript, the editor provides a detailed proposal. This includes services offered, estimated timeframe, and a quotation for your review."
  },
  {
    image: designprocess3,
    alt: "Editing Process",
    title: "Editing Process",
    description: "The editor begins various editing stages, including developmental and copy editing. Ongoing feedback and clarifying questions ensure alignment with your intent."
  },
  {
    image: designprocess4,
    alt: "Final Review",
    title: "Final Review",
    description: "Once editing is complete, the manuscript is sent back for your review. You can request revisions, and the editor will make final adjustments to ensure it’s error-free."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Can you help with specific genres of fiction?",
    answer: "Yes, our editors are experienced in various genres, including fantasy, romance, science fiction, literary fiction, and more."
  },
  {
    question: "How long does the editing process take?",
    answer: "The longer the draft, the more time it requires for review. Typically, manuscript editing takes 2-3 weeks minimum, with an estimated timeframe provided during the initial consultation."
  },
  {
    question: "Will the editor change my writing style?",
    answer: "Our priority is client satisfaction. We work to enhance your voice, keeping your style original while improving readability and clarity."
  },
  {
    question: "Will you provide feedback on character development?",
    answer: "We assess character depth and development, offering suggestions to enhance their believability and relatability based on your vision."
  },
  {
    question: "Are there discounts on larger manuscripts or multiple projects?",
    answer: "Yes, we offer custom pricing and potential discounts for larger projects, series, or returning clients. Reach out to discuss options that fit your needs."
  }
];



// ******************************** End FAQ Section ******************************

const FictionBookEditing = () => {
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
          <title>Fiction Book Editing Services for Aspiring Novelists</title>
          <meta name="description" content="Need Fiction Book Editing Services? We offer professional Fiction Book Editing services for self-published authors at an affordable price. Get a free quote now!" />
          <link rel="canonical" href="https://amzbookpublishing.net/fiction-book-editing-services" />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Fiction Book Editing Services for Aspiring Novelists" />
          <meta property="og:description" content="Need Fiction Book Editing Services? We offer professional Fiction Book Editing services for self-published authors at an affordable price. Get a free quote now!" />
          <meta property="og:url" content="https://amzbookpublishing.net/fiction-book-editing-services" />
          <meta property="og:site_name" content="AMZBookPublishing" />
          <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
          <meta property="article:modified_time" content="2024-08-23T07:03:49+00:00" />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Fiction Book Editing"
        desc={
          <>
Breathe Life Into Your Characters - Collaborate With Us And Take Your Fiction To New Heights!

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
    heading="Fiction Book  "
    subHeading="Editing"
    description={
        <>
We understand that crafting a fiction book is no joke, which is why we’re here to help authors bring their stories to life with specific fiction book editing services. Our experts are here to deliver to you according to your needs. Every stage of the writing journey is crucial, whether the plot, detailed copyediting, or final proofreading - we’re here to make your work publish-ready! We are committed to providing our clients with high-quality work and immense respect for their voices, allowing readers to fall in love with their books. 

<br/><br/>
Let us enhance every element of your fiction - from plot twists to character arcs! We take care of every minor detail for you.

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
        Fiction Book   <br/>
        Editing </>}
        heading2="Services"
        paragraph="Our team of skilled editors will shape your narrative into an unforgettable journey by transforming your script into a masterpiece."
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
A fiction book is more than just words on a page; it’s a visual of the author’s emotions. We believe in working closely with the client to understand their vision and enhance their voice, creating a collaborative editing experience. Whether you're a first-time author or a seasoned writer, we offer a full range of editing services, including developmental editing, copyediting, and proofreading. We believe in timely work delivery, without compromising quality. 
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
export default FictionBookEditing;


