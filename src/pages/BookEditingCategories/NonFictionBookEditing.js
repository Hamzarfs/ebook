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
    title: "Content Development",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "An overview of structure, plot, and characters. Detailed feedback on pacing, scenes, and improvements."
  },
  {
    title: "Text Refinement",
    image: designingImage, // Update this if you have a specific image
    description: "Focuses on clarity, voice, and consistency. Enhances dialogue and boosts reader engagement."
  },
  {
    title: "Accuracy & Formatting",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Verifies facts and ensures credible sources. Ensures proper manuscript formatting for publishers."
  }
];
// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
  Let’s Make Your Non-Fiction Shine With Our 
    <br/>
    </>
  ),
  highlight: " Professional Editing"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Discuss Your Vision",
    title: "Discuss Your Vision",
    description: "We discuss your manuscript goals and review a sample. This helps tailor the editing process to meet your specific needs."
  },
  {
    image: designprocess2,
    alt: "Proposal & Agreement",
    title: "Proposal & Agreement",
    description: "The editor sends a detailed proposal outlining services, timeline, and costs. Once finalized, both parties sign the agreement."
  },
  {
    image: designprocess3,
    alt: "Editing & Feedback",
    title: "Editing & Feedback",
    description: "The editor begins the editing process, covering various levels. Ongoing feedback ensures alignment with your vision."
  },
  {
    image: designprocess4,
    alt: "Finalization & Delivery",
    title: "Finalization & Delivery",
    description: "After the edits, the manuscript is sent for your final review. Once finalized, it is polished and ready for publishing."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Do you specialize in specific non-fiction genres?",
    answer: "Yes, our editors have experience across various non-fiction genres, including memoirs, self-help, business, academic writing, and more."
  },
  {
    question: "Will you help with fact-checking?",
    answer: "Yes, we highly emphasize factual accuracy and can verify claims and sources to ensure your work is credible and reliable."
  },
  {
    question: "What file formats do you accept for editing?",
    answer: "We mainly prefer working on Google Docs and MS Word for easy tracking of changes. If you prefer another format, feel free to share it, and we’ll accommodate you."
  },
  {
    question: "What are your payment terms?",
    answer: "Our payment terms are outlined in the initial agreement, including deposit requirements and payment schedules based on project milestones."
  },
  {
    question: "What if I need multiple rounds of editing?",
    answer: "We are available to provide multiple rounds of editing to ensure your manuscript meets your expectations and goals."
  }
];

// ******************************** End FAQ Section ******************************

const NonFictionBookEditing = () => {
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
        title="Non-Fiction Book Editing"
        desc={
          <>
Put Your Facts And Figures Into A Cohesive Story And Experience Our Dedicated Non-Fiction Editing Services!


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
    heading="Non-Fiction Book  "
    subHeading="Editing"
    description={
        <>
We are here to transform your insights into impactful narratives, helping you in every step of your non-fiction book publishing journey. Whether you’re developing characters, fine-tuning dialogue, or refining plot structure, our team provides the support you need. Our services are tailored according to your liking and your mindset for the book - we ensure your manuscript is polished, cohesive, and ready for readers. 
<br/><br/>
We carry on a personalized approach, where having a close connection with you throughout the editing process is essential to meet the goals of the project. Your feedback highly matters with every passing stage, to bring out your narrative style on paper. 
<br/><br/>
Ensure accuracy and clarity on every page, resulting in a polished final product that stands out in today’s literary world. 
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
        Non-Fiction  <br/>
        Book Editing </>}
        heading2="Services"
        paragraph="Our team’s expertise will give your story the precision it requires to be polished and make your message clear and compelling."
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
Our non-fiction book editing service is designed to provide a unique and tailored experience created just for you. We work closely in our initial screening with the author to understand their vision and writing style. Our experienced editors bring a wealth of knowledge in storytelling, offering comprehensive services that cover everything from big-picture insights to detailed sentence-level polishing.
<br/><br/>
A two-way communication channel via email, video call or calls is created to maintain clear communication throughout the process, ensuring you can ask questions or give feedback at any given moment. Our editors work efficiently to deliver quality edits within agreed-upon timelines, highlighting the importance of word of mouth. 
<br/><br/>
Sign up today and watch our editing services bring your non-fiction to life!

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
export default NonFictionBookEditing;


