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
import FictionImage1 from '../../images/BookWriting1.png';
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
    title: "Novel Writing",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Writing a novel is a thrilling journey requiring dedication and imagination. Our services assist you from brainstorming to final edits, ensuring reader engagement from start to finish."
  },
  {
    title: "Short Stories",
    image: designingImage, // Update this if you have a specific image
    description: "Short stories brilliantly summarize big ideas in few words. Our experienced writers help you craft compelling narratives, transforming them into quick yet meaningful masterpieces."
  },
  {
    title: "Series Writing",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Writing a series requires attention to character growth and plot coherence. Our services ensure consistency, helping you build a dedicated audience eager for your next release."
  }
];
// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
Our Writing 
    </>
  ),
  highlight: "Process"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Exploration Phase",
    title: "Exploration",
    description: "We aim to understand your thoughts, themes, and goals for the book. This vital process sets the tone for our successful collaboration."
  },
  {
    image: designprocess2,
    alt: "Outline Development",
    title: "Outline & Structure",
    description: "Our writers develop a detailed outline showcasing the narrative flow. This blueprint helps us structure your story into an exciting reading experience."
  },
  {
    image: designprocess3,
    alt: "Drafting Manuscript",
    title: "Drafting",
    description: "Once the outline is approved, we write your manuscript. Our writers craft exciting chapters that keep readers engaged throughout."
  },
  {
    image: designprocess4,
    alt: "Revision Process",
    title: "Revision & Finalization",
    description: "After completing the first draft, we incorporate your feedback to polish it. Once approved, we provide the final manuscript, ready for publication."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How much does book writing cost?",
    answer: "Our writing service charges depend on the complexity and length of your project. After discussing your specific needs, we will provide a quote based on your book's custom nature."
  },
  {
    question: "Can I give my own book ideas and content?",
    answer: "Yes, absolutely! Your ideas are core to our writing process. We value your input to ensure your unique book ideas are transformed into a tangible book."
  },
  {
    question: "How long will it take to write my book?",
    answer: "The time to write your book depends on the length and complexity of the manuscript and your availability for feedback. We'll work together to establish realistic timelines."
  },
  {
    question: "What if I need revisions after the book is finished?",
    answer: "We prioritize customer satisfaction. If you want us to rework or rewrite certain sections after the first draft, just let us know, and we'll assist you."
  },
  {
    question: "Will you be helpful to me once my book is published?",
    answer: "Absolutely! Our support extends beyond writing your book. Whether you need help with marketing or the publishing process, we're just an email away."
  }
];



// ******************************** End FAQ Section ******************************

const BookWriting = () => {
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
        <title>USA Book Writing Services | Expert Book Writers</title>
        <meta name="description" content="AMZ Book Publishing is here to assist you with professional book writing services at affordable prices. Sign up now to get our discount offer." />
        <link rel="canonical" href="https://amzbookpublishing.net/professional-book-writing-services " />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="USA Book Writing Services | Expert Book Writers" />
        <meta property="og:description" content="AMZ Book Publishing is here to assist you with professional book writing services at affordable prices. Sign up now to get our discount offer." />
        <meta property="og:url" content="https://amzbookpublishing.net/professional-book-writing-services" />
        <meta property="og:site_name" content="AMZBookPublishing" />
        <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
        <meta property="article:modified_time" content="2024-08-23T07:25:31+00:00" />


      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Book Writing"
        desc={
          <>
Transform your book ideas into compelling narratives that truly hook your readers from the first page to the last! 

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
    heading="Book  "
    subHeading="Writing"
    description={
        <>
At AMZ Book Publishings, we understand that the success of a newly published book lies heavily on the experienced writers. A well-written book is not just about its story and ideas, but also about the way it is written. So, just as important it is to have a great idea for your book, having a talented team of writers that know how to articulate that on paper is equally important.
<br/><br/>
Our focus is on delivering premium-quality writing services to support your unique voice and vision. So whether you are a seasoned writer or a first-time author, AMZ Book Publishings is here to help you to breathe life in your book! 

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
      Writing That  </>}
        subHeading={<>
        Compels   <br/>
        Readers </>}
        heading2="To Read The Book"
        paragraph="Our team of writers are experts in their respective fields, dedicated to writing a masterpiece taking into account your creative and unique vision for your book."
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
Imagine working with a team that wholly understands your vision but also empowers you in realising it. No additional costs of course, but a preview of our writing services before any commitment: that is what we offer at AMZ Book Publishings! 
<br/><br/>
Our method eliminates the frustration and uncertainty associated with most book writing services available. We focus on crafting personal stories that accurately reflect your voice. Hence, you can look at other options with absolute confidence and reach out to us when you are certain about choosing the best partner for your new book writing journey!
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
export default BookWriting;


