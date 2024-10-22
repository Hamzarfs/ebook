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
    title: "Targeted Campaigns",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "We create tailored marketing campaigns that reach your ideal audience through in-depth research and data-driven insights."
  },
  {
    title: "Quality Content",
    image: designingImage, // Update this if you have a specific image
    description: "Our team produces engaging marketing materials, from eye-catching graphics to informative blog posts, building a community around your work."
  },
  {
    title: "Multi-Channel Marketing",
    image: bookEditingImage, // Update this if you have a specific image
    description: "We employ various channels, including social media and email newsletters, to maximize your book’s visibility and engage with your target audience."
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
How We Design Your 
    </>
  ),
  highlight: "Book's Marketing Strategy"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Consultation & Research",
    title: "Consultation & Research",
    description: "We begin with a detailed consultation to understand your goals and target audience. In-depth market research helps us identify your competitors and refine your marketing approach."
  },
  {
    image: designprocess2,
    alt: "Strategy Development",
    title: "Strategy Development",
    description: "Using insights from our research, we create a comprehensive marketing strategy with clear objectives and timelines. This plan keeps us focused throughout the marketing process."
  },
  {
    image: designprocess3,
    alt: "Content Creation",
    title: "Content Creation",
    description: "Our team produces engaging content tailored to reach your audience effectively. We distribute this content across various channels, from social media to press releases, to maximize reach."
  },
  {
    image: designprocess4,
    alt: "Ongoing Support",
    title: "Ongoing Support",
    description: "After launching your campaign, we provide continuous support and monitor performance. We value your feedback to adjust strategies, ensuring long-term success for your marketing efforts."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is book marketing?",
    answer: "Book marketing involves reaching the audience with suitable measures like social media campaigns, email marketing, an author's website, and reviews. It aims to increase visibility among users, connect with readers, and generate sales."
  },
  {
    question: "Why do I need book marketing services?",
    answer: "Just writing a good book is only half the battle. Book marketing helps you identify your target audience and grow a fan base, all of which are essential for selling books."
  },
  {
    question: "What types of book marketing strategies are offered through AMZ Book Publishings?",
    answer: "We utilize social media marketing, email campaigns, press releases, influencer outreach, and book launch events. Our strategies are custom-tailored to fit your book's specific goals and reach your intended readers."
  },
  {
    question: "How do I get started with the book marketing services?",
    answer: "Getting started is easy! Share the details of your book, your objectives, and your target market. Based on this, we provide a customized roadmap of actions, and we're with you throughout this journey."
  },
  {
    question: "Can marketing really make a difference for self-published authors?",
    answer: "Absolutely! Effective marketing can help self-published authors gain visibility, attract more readers, and increase their fan base, just as it does for commercially published authors."
  }
];

// ******************************** End FAQ Section ******************************

const BookMarketing = () => {
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
        title="Book Marketing"
        desc={
          <>
Enhance your book's visibility and reach your target audience with AMZ Book Publishings’ expert marketing services!
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
    subHeading="Marketing"
    description={
        <>
Publishing a worthy-read is just the beginning and effective marketing of your book is crucial for success. By building a strong author brand, your book gets the love and recognition it deserves from the readers.
<br/><br/>
Every time someone finds your book whether it's through a blog post, an email campaign, or a listing in some online store, they carry away a lasting impression of your message and creativity. Moments such as these really drive the recognition and trust required to get your book into the hands of more and more people, reaching wider audiences.
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
        Accelerate Your </>}
        subHeading={<>
        Book’s <br/>
        Reach With </>}
        heading2="Powerful Marketing"
        paragraph="Elevate your book’s potential with dynamic marketing strategies that leave a lasting impact on your readers!"
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
AMZ Book Publishings focuses on making your book stand out in the global marketplace. This includes every element such as marketing your book from attractive cover designs to versatile promotional strategies that strike a chord within your readers. Thus, our aim is to create marketing campaigns not only to attract attention but also to reflect the unique story that your book portrays.

<br/><br/>
We also take time to get to know your vision, so the book message will be evident throughout all your marketing. Consequently, it will assist you in making an unforgettable impression. Do you want book marketing that will capture your true readers? Trust us and reach out to us! Success for your book is our priority - let's get your book out there and make it reach its deserved potential! 
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
export default BookMarketing;


