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
import FictionImage1 from '../../images/BookCardDesign1.png';
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
    title: "Business Card Options",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Choosing the right business card goes beyond just picking paper. The card stock you select is a reflection of your identity and can truly set you apart. At AMZ Book Publishings, we offer a range of premium card stock options and sizes to suit your unique style. Whether you prefer standard, oval, mini, square, or fold-over designs, each option is crafted to ensure your card stands out and makes a lasting impact."
  },
  {
    title: "Business Card Designs",
    image: designingImage, // Update this if you have a specific image
    description: "A business card is more than a piece of paper: it is your chance to leave a lasting impression. That is why we offer business cards in various categories to suit your specific needs. Whether you are looking to grow your network or attract new clients, we craft cards that showcase your personality while delivering a professional touch."
  },
  {
    title: "Industry-Specific Customization",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Each industry has its own unique design needs when it comes to business cards. At AMZ Book Publishings, we specialize in customizing business cards that cater to a variety of sectors, commercial, corporate, private, or public. Our talented designers focus on clean, simple layouts that make your contact details and message easy to grasp at a glance."
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Whipping Up Eye-Catching <br/>
    
    </>
  ),
  highlight: " Business Card Designs"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "We begin by understanding your vision and the message you want to convey through your business cards. Whether you have a specific design in mind or need creative guidance, we gather all the details to ensure your business card aligns perfectly with your brand identity."
  },
  {
    image: designprocess2,
    alt: "Design Concepts",
    title: "Design Concepts",
    description: "Our team of professional designers creates multiple design concepts for you to choose from. These options are based on your preferences, industry, and target audience. We offer a variety of styles, layouts, and card stock choices to make sure your card truly stands out."
  },
  {
    image: designprocess3,
    alt: "Revisions & Refinements",
    title: "Revisions & Refinements",
    description: "Once you have selected a design concept, we fine-tune it to match your exact specifications. We encourage feedback during this stage to ensure every element, from the layout to the typography, is polished and ready to impress."
  },
  {
    image: designprocess4,
    alt: "Final Approval & Delivery",
    title: "Final Approval & Delivery",
    description: "After the final design is approved, we prepare the business card for production. You will receive your print-ready cards on the high-quality stock of your choice, ensuring a professional and polished finish that represents your brand beautifully."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is the difference between matte, glossy, and soft-touch business cards?",
    answer: "Matte business cards have a smooth, non-reflective finish, making them easy to write on with a permanent marker. Glossy business cards, on the other hand, bring out vibrant colors with a shiny, reflective surface that enhances images and gives them depth. Soft-touch business cards offer a unique, luxurious feel with a velvety, non-glossy coating that invites people to hold on to your card longer."
  },
  {
    question: "In what formats are the final files provided?",
    answer: "We provide all the necessary file formats, including source and print-ready files, ensuring you have everything you need."
  },
  {
    question: "Are all the designs created in-house?",
    answer: "Yes, all of our designs are created by our talented team of in-house designers. We do not outsource any of our work."
  },
  {
    question: "What should I include on my business card?",
    answer: "It is easy! Start by selecting one of our business card design templates and customize it with your details. You can add your logo, images, and even a catchy tagline to make it truly your own."
  },
  {
    question: "Do you have a refund policy?",
    answer: "Yes, we offer refunds if a client is genuinely unsatisfied with our work. We are committed to ensuring your satisfaction, but the reason for the refund must be valid and reasonable."
  }
];


// ******************************** End FAQ Section ******************************

const BusinessCardDesign = () => {
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
          <title>Professional Business Card Design Services | AMZ Book Publishing</title>
          <meta name="description" content="Need Business Card Design Services? We offer business cards for your business for self-published authors at affordable prices. Hire expert designers.
          " />
          <link rel="canonical" href="https://amzbookpublishing.net/business-card-design-services " />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Professional Business Card Design Services" />
          <meta property="og:description" content="Need Business Card Design Services? We offer business cards for your business for self-published authors at affordable prices. Hire expert designers." />
          <meta property="og:url" content="https://amzbookpublishing.net/business-card-design-services" />
          <meta property="og:site_name" content="AMZBookPublishing" />
          <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
          <meta property="article:modified_time" content="2024-08-23T07:10:21+00:00" />

      </Helmet>

      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Business Card Design"
        desc={
          <>
Your business card should be as unique as your brand, making sure it speaks volumes before you even say a word.
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
    heading="Business Card "
    subHeading="Design"
    description={
        <>
In today’s competitive landscape, a custom business card is more than just a way to pass along your contact details, it is a vital tool for creating a lasting impression that truly reflects who you are and what your business stands for. A well-crafted business card goes beyond the basics; it visually communicates your brand’s personality, values, and professionalism. By making it unique and thoughtfully designed, you are ensuring that you stand out from the crowd, demanding attention in a subtle yet powerful way.
<br/><br/>
Think of your business card as the handshake of your brand. Just as a strong, confident handshake sets the tone in a meeting, your card does the same when exchanged with potential clients or partners. It is often the first tangible connection someone has with your business.
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
       Creative </>}
        subHeading={<>
         Business Card  <br/>
         Designing </>}
        heading2="Services"
        paragraph="Whether you are networking at an event or meeting a potential client, a well-designed business card leaves a lasting impression, ensuring people remember who you are and what you stand for."
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
We understand that your business card is more than just a way to share contact details; it is an extension of your brand and personality. That is why our team of experienced designers works closely with you to create a card that truly represents who you are and what you stand for. 
<br/><br/>
Whether you are looking for a sleek, modern design or something more creative and unique, we tailor each card to suit your specific needs. Moreover, we are always here to answer any questions or provide support throughout the process, ensuring you get a business card you will be proud to hand out.
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
export default BusinessCardDesign;


