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
    title: "Save Time And Money",
    image: ghostWritingImage,
    description: "Get the perfect logo at competitive prices with one of our four plans. Plus, you control the timeline, giving you the flexibility to choose how long your logo design will take, saving you both time and hassle."
  },
  {
    title: "Creativity To Help You Stand Out",
    image: designingImage,
    description: "Keep your custom logo design private to ensure all submissions are original and authentic. In just a few days, you will have dozens of unique logo design ideas crafted exclusively for your brand."
  },
  {
    title: "24/7 Customer Support",
    image: bookEditingImage,
    description: "Having trouble launching your logo? No worries; our support team is here to help around the clock. Whether you prefer email, a quick call, or instant chat, our experts are ready to assist you every step of the way."
  }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Our
    
    </>
  ),
  highlight: "Designing Process"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Discovery & Consultation",
    title: "Discovery & Consultation",
    description: "We kick off with a detailed consultation to learn about your brand’s story, mission, and audience. This helps us align the logo design with your vision and ensure it truly represents what your brand stands for."
  },
  {
    image: designprocess2,
    alt: "Concept Development",
    title: "Concept Development",
    description: "Our creative team brainstorms and develops multiple logo concepts that reflect your brand’s personality. Each concept is designed to capture the essence of your brand while offering a unique and professional touch."
  },
  {
    image: designprocess3,
    alt: "Design & Refinement",
    title: "Design & Refinement",
    description: "After narrowing down the best concepts, we move into refining the design. From adjusting colors and fonts to fine-tuning every detail, we ensure the logo resonates with your brand and meets your expectations."
  },
  {
    image: designprocess4,
    alt: "Final Delivery",
    title: "Final Delivery",
    description: "Once you are completely satisfied with the final design, we provide the logo in various formats, ready for use across all your digital and print platforms, ensuring consistency and impact wherever it appears."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What makes a good business logo?",
    answer: "A great logo does three key things: it tells potential customers if your product is right for them, communicates your brand’s values, and makes your brand unforgettable. To achieve this, working with a professional designer is essential. They will recommend the best logo style, colors, shapes, and fonts to ensure your brand sends the right message."
  },
  {
    question: "Who owns the copyright, and when?",
    answer: "On AMZ Book Publishings, designers submit only original work, so they retain ownership until you choose a winner. Once you select a logo, the designer transfers the rights to you during the handover process, making you the owner of the copyright for your winning logo."
  },
  {
    question: "Can I use my own images in the design?",
    answer: "Absolutely! If you have specific images, symbols, or icons you want to be included, simply share them with the designers in your brief, and they will incorporate them into the logo design."
  },
  {
    question: "What if I need additional logo variations?",
    answer: "We provide various designs, which include one winning logo, but if you need more variations, you have options. You can either pick multiple winners, run a new design, or work directly with your designer to create additional versions."
  },
  {
    question: "Can I keep my logo designs confidential?",
    answer: "Yes, your logo designs are kept completely confidential to protect your privacy and maintain trust throughout the process."
  }
];


// ******************************** End FAQ Section ******************************

const LogoDesign = () => {
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
        <title>Custom Logo Design Services From Top Logo Designers</title>
        <meta name="description" content="Need a logo designer? We offer professional custom logo design services for book writer's website. Hire expert logo designers for portfolio website." />
        <link rel="canonical" href="https://amzbookpublishing.net/logo-design" />

      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Logo Design"
        desc={
          <>
Nurture your brand identity with exceptional logo design from the industry’s leading pioneers. Let your logo leave a lasting mark.

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
    heading="Logo "
    subHeading="Design"
    description={
        <>
At AMZ Book Publishings, our decades of experience have given us a deep understanding of what it takes to create a truly distinct and memorable logo. We have spent years perfecting our craft, learning from industry leaders, and staying ahead of trends in the ever-evolving design landscape. This wealth of experience has allowed us to develop a keen sense of what resonates with audiences and how to craft logos that not only capture attention but leave a lasting impression.
  
           <br/><br/>
           We are not just following the latest fads; we are combining timeless design principles with fresh, innovative ideas to create logos that reflect your unique identity. Our team takes the time to understand your vision, ensuring that your logo not only stands out but also tells the story of who you are. 
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
        Custom Logos That <br/>  </>}
        subHeading={<>
         Grow Your Business  
        </>}
        heading2="Your Business"
        paragraph="Every element is crafted with your unique voice in mind, ensuring your online presence reflects the power of your words."
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
Imagine discovering the perfect author website that truly understands your style and vision, all without spending a single dollar upfront. Therefore, we offer a unique approach that allows you to preview your ideal website before making any commitment. We believe in eliminating the guesswork, miscommunication, and endless revisions that can make the design process frustrating. 
         <br/><br/>
         Our one-of-a-kind designs are tailored specifically for authors like you, ensuring that your online presence reflects your unique identity. With expert guidance and a straightforward process, you can see exactly what your website will look like before making a decision. Explore your options, and when you are ready, reach out to us to elevate your online presence to new heights
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
export default LogoDesign;


