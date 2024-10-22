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

// ******************************** Start SecondSection ******************************
const services = [
  {
    title: "Save Time",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Publish your book efficiently with our flexible plans. Choose your timeline to decide when your book reaches its readers, saving you time and stress."
  },
  {
    title: "Creative Design",
    image: designingImage, // Update this if you have a specific image
    description: "Our professional editors and designers highlight the uniqueness of your book. Expect original layouts and cover designs that reflect your vision, ready in a few weeks."
  },
  {
    title: "Customer Support",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Our dedicated support team is available 24/7 to assist with any issues. Contact us via email, phone, or chat for help throughout the publishing process."
  }
];

// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
Book Publishing
    </>
  ),
  highlight: "Process"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "We start off by understanding your vision and goals for your work. This creates a clear roadmap for your publishing process."
  },
  {
    image: designprocess2,
    alt: "Editing & Designing",
    title: "Editing & Designing",
    description: "Our team conducts thorough editing and proofreading to enhance clarity. We also design a stunning cover and format your manuscript."
  },
  {
    image: designprocess3,
    alt: "Publishing Options",
    title: "Publishing Options",
    description: "We discuss various publishing options, whether mainstream or self-publishing. Our team provides tools and resources for informed decisions."
  },
  {
    image: designprocess4,
    alt: "Distributing & Marketing",
    title: "Distributing & Marketing",
    description: "Once published, we create effective marketing strategies to reach your readers. We ensure your book finds its place in the market."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How is self-publishing different from traditional publishing?",
    answer: "In self-publishing, you handle everything, including printing. Traditional publishing involves a publishing house that manages the process, but you must pitch your work for acceptance. Self-publishing offers more creative freedom, while traditional publishing provides more industry support."
  },
  {
    question: "How long does publishing a book take?",
    answer: "The time varies based on the stages of editing, design, and printing. Self-publishing can take a few weeks to several months, while traditional publishing typically takes 12 to 18 months due to the lengthy approval and production processes."
  },
  {
    question: "Do I retain the rights of my book if I publish with you?",
    answer: "Yes, when you use our services, you retain all rights to your book. You maintain control over where and how it is sold, and you receive full royalties without sharing ownership with us."
  },
  {
    question: "Can you help me with book marketing and distribution?",
    answer: "Absolutely! We provide marketing support, from social media promotions to Amazon listings, and manage distribution to ensure your book reaches both online and physical stores."
  },
  {
    question: "How much does self-publishing a book cost?",
    answer: "We provide quotes based on the requested services, including editing, cover design, formatting, and printing. Our packages allow you to select the services that matter most to you while staying within budget."
  }
];
// ******************************** End FAQ Section ******************************

const BookPublishing = () => {
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
        title="Book Publishing"
        desc={
          <>
Professional book publishing services will make your story come alive on paper. From a manuscript to the masterpiece, we will help your words leave an enduring mark on the readers!

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
Being part of AMZ Book Publishings means that publishing becomes more than just producing a book. Its about talking to the world through your story in a way that resonates with your intended audience. Our custom publishing approach will bring your voice and vision to the top of every task we undertake. With this strategy, we are committed to ensuring you meet your potential in this competitive market as you utilise a platform that puts the focus on your unique voice and its intended audience.
<br/><br/>
Our team knows exactly how to guide you through every step in the process and is committed to ensuring that your work reaches reader worldwide. We know each writer has a unique vision and we are committed to helping you navigate this publishing landscape easily and confidently.

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
        Publish Your </>}
        subHeading={<>
        Book, <br/>
        Grow Your </>}
        heading2="Audience"
        paragraph="Expand your reach with professional publishing services crafted by our industry experts. From cover design to the final print, we bring your vision to life!"
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
We have worked hard for years in bringing books to life at AMZ Book Publishings. Over the years, We have learned from industry veterans and are acutely aware of the new trends coming forward in this dynamic world of publishing. We polish our skills toward using this experience to help create books that not only sweep the reader's heart but also stand unique against other similar publications in the market.
<br/><br/>
We don't just follow trends, but rather we combine time-tested publishing practices with innovative approaches to reveal your individual voice. In close collaboration, we ensure that every page represents your vision and that the published book is not just a book, but an achievement of your writing work.
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
export default BookPublishing;


