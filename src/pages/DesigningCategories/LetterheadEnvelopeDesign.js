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
    title: "Custom Formatting",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Our custom interior formatting service is a favorite among authors, catering to all genres of fiction and nonfiction. Your story deserves more than just plain text; we focus on creating dynamic layouts and vibrant images that enhance your narrative. Our team is dedicated to making sure your book looks exactly how you envision it!"
  },
  {
    title: "Manuscript Formatting",
    image: designingImage, // Update this if you have a specific image
    description: "Professional manuscript formatting is crucial for a polished book design. We ensure a clear hierarchy and easy-to-read typeface, inviting readers in. Every part of your manuscript, from foreword to chapters, receives custom formatting for that finished look. Before we move to print, you'll receive a PDF proof for your approval."
  },
  {
    title: "Affordable Options",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Why overspend when you can have high-quality book interior formatting at affordable prices? We offer several flexible plans, so you can choose one that perfectly fits your needs. Enjoy exceptional quality without the hassle—your book deserves it!"
  }
];

// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Comprehensive Letterhead and <br/>
    
    </>
  ),
  highlight: "Envelope Design Process"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "We begin with an initial consultation to understand your brand's vision, goals, and specific design preferences. During this conversation, we will discuss your business values, target audience, and any ideas you may already have in mind. This step is crucial for us to gather the insights needed to create a letterhead and envelope design that truly reflects your identity."
  },
  {
    image: designprocess2,
    alt: "Design Concept Development",
    title: "Design Concept Development",
    description: "Once we have a clear understanding of your needs, our talented design team will create several design concepts tailored to your brand. We will focus on elements such as typography, color schemes, and graphics to ensure that the designs align with your brand image. You will receive these initial concepts for review, allowing you to provide feedback and share your thoughts."
  },
  {
    image: designprocess3,
    alt: "Revisions & Finalization",
    title: "Revisions & Finalization",
    description: "Based on your feedback, we will refine the chosen design concept, making any necessary adjustments to ensure it meets your expectations. This collaborative process allows us to create a letterhead and envelope design that you will be proud to use for your business communications. Once you are completely satisfied with the final design, we will prepare the files for printing."
  },
  {
    image: designprocess4,
    alt: "Delivery & Support",
    title: "Delivery & Support",
    description: "After finalizing the design, we will deliver print-ready files that can be easily sent to your preferred printing service. Additionally, our team remains available for any questions or further support you may need as you implement your new letterhead and envelope in your business."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How many designs do I get to choose from?",
    answer: "At AMZ Book Publishings, we pride ourselves on offering a wide variety of options. We have several professional designers on our team, and as part of your package, you will receive an array of designs from different artists. Our goal is to provide you with more than a dozen unique styles, ensuring you find the perfect fit for your brand."
  },
  {
    question: "What if I want to use my own elements in the envelope design?",
    answer: "Absolutely, you can! If you have specific elements, such as images or icons, that you would like to include in your design, just send them our way along with your instructions. Our talented designers will be happy to incorporate your elements into the final design files, ensuring that your vision comes to life seamlessly."
  },
  {
    question: "Will I get editable source files for the selected design?",
    answer: "Yes, you will receive editable source files for the design you choose. Since our designs are created using different platforms, you will get a production-ready Adobe Illustrator file, an Adobe Photoshop file, and a PDF file."
  },
  {
    question: "Are the colors used in letterhead and envelope important?",
    answer: "Yes, color plays a significant role in how your stationery is perceived. When considering colored stationery, think about the message that each color conveys to your customers."
  },
  {
    question: "Should letterhead and stationery complement the look of a website and other electronic materials?",
    answer: "Absolutely! It is essential for your letterhead and stationery to align with the overall look of your website and other electronic materials. Consistency in design helps create a uniform message that resonates with your audience. When your letterhead, envelopes, website, email newsletters, and blog all share a similar aesthetic, it enhances your brand identity and reinforces your professional image."
  }
];

// ******************************** End FAQ Section ******************************

const LetterheadEnvelopeDesign= () => {
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
        title="Letterhead & Envelope Design"
        desc={
          <>
We have crafted everything from letterheads to envelopes, so let us help you create a cohesive and eye-catching identity that leaves a lasting impression.

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
    heading="Letterhead &  "
    subHeading="Envelope Design"
    description={
<>
At AMZ Book Publishings, it is all about your brand. Whether you are just starting out or already have an established corporate identity, we will ensure that your new letterhead and envelope help strengthen your brand’s identity.
<br/><br/>
Perhaps you are a new business owner without a logo yet, or maybe you feel it is time for an upgrade. We have worked with many clients, each with their unique goals, and we are ready to tailor our services to meet your specific needs. Let us help you create a cohesive look that truly reflects who you are and what your brand stands for.
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
     Captivating </>}
        subHeading={<>
        Letterhead &   <br/>
        Envelope </>}
        heading2="Designs"
        paragraph="Our team of professional and experienced designers is here to help you get your brand noticed with the right graphics, typography, and content on letterheads and envelopes."
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
When it comes to stationery design, we believe that your brand deserves to shine. Whether you are looking for corporate, modern, or classic styles, our professional designers will create letterheads and envelope designs that resonate with your vision and values. We understand that perfection can look different for everyone, and that is why we take the time to capture your unique essence in every design.
<br/><br/>
At AMZ Book Publishings, we have recognized that one designer's idea of perfection may not align with yours. To ensure you find the perfect fit, we offer a diverse selection of custom graphic designs created by our talented pool of designers. You can browse through dozens of designs, choose your favorite, and refine it further until it perfectly aligns with your vision. 
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
export default LetterheadEnvelopeDesign;


