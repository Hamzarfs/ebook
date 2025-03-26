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
import FictionImage1 from '../../images/SocialMediaMarketing1.png';
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
    title: "Voice of Your Brand",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Our team collaborates with you to learn your values, style, and target audience. We then develop authentic messaging that resonates with your readers. "
  },
  {
    title: "Designed Content",
    image: designingImage, // Update this if you have a specific image
    description: "Our experts will create a personalised content strategy in line with your book genre and areas of interest among the audience. "
  },
  {
    title: "Engaging Visuals",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Our creative team creates those awesome graphics, videos, and images that will promote your book as well as embody your brand.  "
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
Social Media Strategy for 
    </>
  ),
  highlight: "Book Marketing"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "We discuss your needs, target audience, and social media presence. This ensures a strategy aligned with your vision."
  },
  {
    image: designprocess2,
    alt: "Platform Selection",
    title: "Platform Selection",
    description: "We identify the best platforms for your audience, focusing on reaching the right readers for your book."
  },
  {
    image: designprocess3,
    alt: "Content Calendar",
    title: "Content Calendar",
    description: "We develop a calendar of promotional and interactive content to keep your book consistently top-of-mind."
  },
  {
    image: designprocess4,
    alt: "Performance Tracking",
    title: "Performance Tracking",
    description: "We track engagement metrics and adjust strategies based on data to ensure maximum marketing effectiveness."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How do you determine the cost for a campaign?",
    answer: "We work within your budget, customizing our programs to meet your goals. A comprehensive quote is provided after discussing your objectives."
  },
  {
    question: "Can I see the content before it's published?",
    answer: "Yes, absolutely! We send you content for approval beforehand to ensure it aligns with your vision and brand."
  },
  {
    question: "How do you measure the success of your social media strategy?",
    answer: "We track metrics like engagement rates, follower growth, and website traffic, adjusting strategies for effectiveness based on data."
  },
  {
    question: "Do you support social media ads?",
    answer: "Absolutely! We offer full support for social media advertising, including ad creation, targeting, and performance monitoring."
  },
  {
    question: "What if I need help after the initial campaign?",
    answer: "Our team is available to assist even after the campaign. Whether it's strategy changes or new initiatives, we're here to help."
  }
];



// ******************************** End FAQ Section ******************************

const SocialMediaMarketing = () => {
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
          <title>Social Media Marketing Services for Authors | AMZ Book Publishing</title>
          <meta name="description" content="AMZ Book Publishing's Social Media Marketing Services for Authors boost your book's online presence, connecting you with a broader readership." />
          <link rel="canonical" href="https://amzbookpublishing.net/social-media-marketing-services-for-authors" />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Social Media Marketing Services for Authors to Build Audience" />
          <meta property="og:description" content="Need Social Media Marketing? We offer professional Social Media Marketing for book promotion to authors at an affordable price. Get a free quote now!" />
          <meta property="og:url" content="https://amzbookpublishing.net/social-media-marketing-services-for-authors" />
          <meta property="og:site_name" content="AMZBookPublishing" />
          <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
          <meta property="article:modified_time" content="2024-08-23T07:28:16+00:00" />
      </Helmet>
      <Header />
      <BreadCrumb
        title="Social Media Marketing"
        desc={
          <>
Enhance your online visibility and connect with your target audience online with our Social Media Marketing!</>
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
    heading="Social Media"
    subHeading="Marketing"
    description={
        <>
Social media is a big deal these days in the world of marketing. Millions of users are on various platforms. In this dynamic environment, a social media strategy becomes crucial and assists the author in promoting and reaching out to his readers. AMZ Book Publishings helps you unleash your power in telling your story to your readers.
<br/><br/>
Our experienced team comes up with creative strategies to promote your online presence, add value to your community, and increase traffic directed to your book or author page.
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
        Reach Your Readers </>}
        subHeading={<>
        Online with  <br/>
        Our Social Media </>}
        heading2="Marketing!"
        paragraph="Our team develops compelling strategies that connect with your target market, ensuring growth across all platforms."
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
Our passion for storytelling and understanding of the needs of authors make us different from others in social media marketing. We believe that your book has a unique voice, and our team combines creativity with effective strategies to help you make your brand resonate on Facebook, Instagram, Twitter, and TikTok.

<br/><br/>
We manage your online presence with a content calendar geared to interact and connect with your audience. Measuring performance and making adjustments to improve means that we will be here working to make your story reach those readers' hearts all around the world. Let's work together to get your book out there and shining in the digital world.
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
export default SocialMediaMarketing;


