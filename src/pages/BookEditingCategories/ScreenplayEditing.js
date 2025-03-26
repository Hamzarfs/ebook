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
import FictionImage1 from '../../images/ScreenplayEditing1.png';
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
    title: "Structure and Pacing",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Our editors evaluate the overall arc and pacing of your narrative, ensuring it maintains tension and excitement. We help create a smooth flow that keeps your audience engaged throughout the story."
  },
  {
    title: "Character Development",
    image: designingImage, // Update this if you have a specific image
    description: "It is crucial for each character to be well-defined and meaningful to the story. Our team studies character arcs and provides insights into dialogue and interactions that deepen emotional connections with your audience."
  },
  {
    title: "Dialogue Refinement",
    image: bookEditingImage, // Update this if you have a specific image
    description: "We meticulously review dialogue to ensure it serves the story at every point. Our editors offer suggestions for making conversations more impactful, leaving a lasting impression on the audience."
  }
];

// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
    Let Your Voice Find
    <br/>
    </>
  ),
  highlight: " Its Perfect Expression"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Discussion",
    title: "Initial Discussion",
    description: "The editor and writer establish a mutual understanding, discussing the writer’s goals and submitting the screenplay draft for review."
  },
  {
    image: designprocess2,
    alt: "Draft Review",
    title: "Draft Review",
    description: "The editor assesses key elements like plot, dialogue, and character development, providing comments directly in the draft for suggested improvements."
  },
  {
    image: designprocess3,
    alt: "Manuscript Critique",
    title: "Manuscript Critique",
    description: "The editor offers detailed feedback on clarity and impact, refining dialogue and scene descriptions while discussing potential revisions with the writer."
  },
  {
    image: designprocess4,
    alt: "Revisions and Finale",
    title: "Revisions and Finale",
    description: "The writer revises based on the editor's feedback, after which the editor reviews the final version for any remaining issues before submission."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How long does the screenplay editing process take?",
    answer: "Screenplay editing typically takes between 1 to 3 weeks for a comprehensive edit, depending on length and complexity. We'll provide an estimated timeframe during the initial consultation."
  },
  {
    question: "What types of feedback can I expect from the editor?",
    answer: "Feedback can range from minor grammatical errors to extensive notes on plot structure, pacing, character development, and dialogue. Open communication allows for continuous feedback throughout the process."
  },
  {
    question: "Can you help with a specific part of my screenplay, or do I need to submit the entire script?",
    answer: "We can assist with specific sections of your screenplay, whether it's dialogue or a particular act. You don't need to submit the entire script."
  },
  {
    question: "What genres do you specialize in for screenplay editing?",
    answer: "Our editors specialize in a wide range of genres, including drama, comedy, action, thriller, horror, and romance. We match you with an editor familiar with your genre's nuances."
  },
  {
    question: "Can I provide feedback or ask questions during the editing process?",
    answer: "Absolutely! Client feedback is highly appreciated, as we believe in collaboration and two-way communication. You can discuss changes with your editor at any stage of the process."
  }
];

// ******************************** End FAQ Section ******************************

const ScreenplayEditing = () => {
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
          <title>Professional Screenplay Editing Services | AMZ Book Publishing</title>
          <meta name="description" content="AMZ Book Publishing’s Professional Screenplay Editing Services polish your script while maintaining its unique voice and cinematic appeal." />
          <link rel="canonical" href="https://amzbookpublishing.net/professional-screenplay-editing-services " />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Screenplay Editing Services by Experienced Industry Editors" />
          <meta property="og:description" content="Need Script Editing Services? We offer professional Screenplay Editing services for self-published authors at an affordable price. Hire an expert for your book." />
          <meta property="og:url" content="https://amzbookpublishing.net/professional-screenplay-editing-services" />
          <meta property="og:site_name" content="AMZBookPublishing" />
          <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
          <meta property="article:modified_time" content="2024-08-23T07:44:31+00:00" />
      </Helmet>

      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Screenplay Editing"
        desc={
          <>
Begin Your Cinematic Journey Today! Let Your Screenplay Soar With Our Professional Editing Touch!
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
    heading="Screenplay "
    subHeading="Editng"
    description={
        <>
If you have been looking for a captivating narrative that grips audiences from the very first scene, you have landed in the right place! We understand the meaning of a well-crafted screenplay and our expert editors are here to elevate your vision into a reality. Our team of seasoned editors possesses a deep understanding of storytelling techniques, character development, and pacing. 
<br/><br/>
An artfully created screenplay is the backbone of any successful film. Our editor will inspire you to push your creativity further by crafting a script that stands out in today’s competitive market. Collaborative work with our team will bring out a finished product that will be a major hit in your cinematic journey. Elevate your script today and bring your dreams to reality! 
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
        Screen Play  <br/>
         Editing </>}
        heading2="Services"
        paragraph="Passionate about poetry, our editorial team provides insightful feedback to take your artistic vision to new heights."
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
Our screenplay editing services stand out because of our personalized, detail-oriented approach and deep industry expertise. Our editors are highly focused on both the creative and technical aspects of your script. They not only have skills and expertise but also are passionate about storytelling. 
<br/><br/>
We offer more than just spelling and grammar checks—we dive deep into character development, thematic consistency, and emotional impact, that will bring the audience to your cinema screens. Additionally, our editing is entirely done based on ongoing industry standards ensuring your screenplay is submission-ready for agents, producers, or film festivals.
<br/><br/>
The collaboration will not only allow you to have an editor but also a creative partner along the journey, with an entire credit being only yours. 
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
export default ScreenplayEditing;


