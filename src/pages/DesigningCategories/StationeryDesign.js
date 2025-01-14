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
import FictionImage1 from '../../images/StationaryDesign1.png';
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
    title: "Personalized Pen Designs",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Pens are essential stationery items that can effectively showcase your brand. Adding your brand name to high-quality pens is a clever and cost-effective marketing strategy. When people use your pens, they will see your brand name, keeping it fresh in their minds."
  },
  {
    title: "Impactful Notebook Designs",
    image: designingImage, // Update this if you have a specific image
    description: "Notepads are a powerful stationery item for boosting brand awareness. By creating beautifully designed notepads, you can connect with clients and consumers while enhancing your brand identity."
  },
  {
    title: "Budget Friendly Designs",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Save both time and money with our affordable stationery design services. We offer customizable packages that start at budget-friendly prices, ensuring there is an option for every business, no matter the size."
  }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    How We Design 
    
    </>
  ),
  highlight: "Your Stationery"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "We start by diving deep into your brand’s identity, understanding its values, target audience, and the type of stationery you need. Whether it is business cards, letterheads, or envelopes, we make sure every element reflects your brand’s personality and purpose."
  },
  {
    image: designprocess2,
    alt: "Concept Creation",
    title: "Concept Creation",
    description: "Based on our consultation, our designers brainstorm and develop multiple stationery design concepts. Each piece is crafted with your brand in mind, ensuring consistency across all materials, from logo placement to font choice."
  },
  {
    image: designprocess3,
    alt: "Design Refinement",
    title: "Design Refinement",
    description: "After presenting the initial concepts, we welcome your feedback and work closely with you to make any necessary adjustments. Whether it is tweaking the layout or fine-tuning color schemes, we ensure every detail is aligned with your vision."
  },
  {
    image: designprocess4,
    alt: "Approval & Delivery",
    title: "Approval & Delivery",
    description: "Once you are fully satisfied with the designs, we finalize and deliver them in high-quality formats, ready for both print and digital use. You will have professional, polished stationery that enhances your brand image in every interaction."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is a stationery design service?",
    answer: "A stationery design service involves a professional team creating unique and eye-catching designs for a brand's stationery items. With online stationery design services, clients and designers collaborate remotely, making it easy to communicate and share ideas. There are plenty of options out there, so just find one that suits your needs, and you are all set!"
  },
  {
    question: "What is branded stationery?",
    answer: "Branded stationery includes items featuring your brand's logo, colors, and slogans, helping to establish a strong brand identity. Businesses create custom stationery to enhance recognition and often use it as promotional giveaways to attract potential customers."
  },
  {
    question: "Why is brand stationery important?",
    answer: "Stationery is a common necessity for businesses, and it serves as a fantastic way to showcase professionalism. If you want engaging stationery that truly represents your brand, reach out to AMZ Book Publishings. We are here to help you get it right!"
  },
  {
    question: "How do I get a stationery design from AMZ Book Publishings?",
    answer: "It is simple! Launch your project, set your budget, and provide direct feedback to our talented designers around the world to ensure you receive a stationery design that both you and your customers will love."
  },
  {
    question: "Does my business need a custom stationery design?",
    answer: "Absolutely! Beautiful, custom stationery is an effective way to connect with your customers and strengthen your brand's presence."
  }
];

// ******************************** End FAQ Section ******************************

const StationeryDesign = () => {
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
          <title>Creative Stationery Design Services for Authors</title>
          <meta name="description" content="Get our stationery design services at an affordable price. Contact us for authors' stationery designs including letterheads, envelopes, & business card designs." />
          <link rel="canonical" href="https://amzbookpublishing.net/stationery-design-services " />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Creative Stationery Design Services for Authors" />
          <meta property="og:description" content="Get our stationery design services at an affordable price. Contact us for authors' stationery designs including letterheads, envelopes, & business card designs." />
          <meta property="og:url" content="https://amzbookpublishing.net/stationery-design-services" />
          <meta property="og:site_name" content="AMZBookPublishing" />
          <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
          <meta property="article:modified_time" content="2024-08-23T07:24:57+00:00" />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Stationery Design"
        desc={
          <>
Capture your customer's attention with a stunning, well-crafted stationery design kit that leaves a lasting impression.

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
    heading="Stationery "
    subHeading="Design"
    description={
        <>
Using custom stationery design can play a big role in growing your business. With unique, creative, and professional designs, your brand gets the boost it needs, both through direct and indirect marketing.  
           <br/><br/>
           Every time someone interacts with your stationery, whether it is a business card, letterhead, or envelope, they are left with a lasting impression of your brand’s professionalism and attention to detail. These little touches can go a long way in building recognition and trust, helping your business expand and reach new heights.
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
       Transform Your </>}
        subHeading={<>
         Business With  <br/>
          A Striking </>}
        heading2="Stationery Design"
        paragraph="Revamp your business with a captivating stationery design that makes a lasting impression!"
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
At AMZ Book Publishings, we are dedicated to making your brand stand out, whether it is through a simple brochure or an unforgettable stationery design. We understand that every detail matters, from captivating taglines to the perfect color palette that resonates with your audience. Our goal is to design custom stationery that not only looks stunning but also reflects your brand’s core values.
         <br/><br/>

         We take the time to get to know your brand, ensuring that every element we create aligns with your vision and leaves a lasting impression. If you are looking for stationery that will make your brand truly memorable, give us a try. We are confident that you will be impressed with the results because your success is our success. Let us help you make your brand famous—you will not be disappointed.
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
export default StationeryDesign;


