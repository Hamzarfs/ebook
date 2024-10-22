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
    title: "Self-Editing Techniques",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Interactive sessions that teach writers effective editing strategies. Covering structure, character development, and pacing."
  },
  {
    title: "Editing Checklist",
    image: designingImage, // Update this if you have a specific image
    description: "A customized checklist to identify potential errors during writing. Includes checks for terminology, names, formatting, grammar, and punctuation."
  },
  {
    title: "Peer Feedback",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Facilitated groups for sharing work and receiving constructive feedback. A supportive environment encourages collaboration among writers."
  }
];

// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
  Let’s Make Your Self Editing 
    <br/>
    </>
  ),
  highlight: "Shine With Our Fiction Writers "
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";
const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "We discuss your vision for the manuscript, outlining your specific goals and needs. Submitting a sample allows us to assess its unique elements for better support."
  },
  {
    image: designprocess2,
    alt: "Self-Editing Plan",
    title: "Self-Editing Plan",
    description: "Based on our discussion, the editor provides a customized self-editing plan. This may include checklists and guides to enhance your self-editing skills."
  },
  {
    image: designprocess3,
    alt: "Self-Editing Phase",
    title: "Self-Editing Phase",
    description: "You undertake the self-editing process using the provided plan and resources. Feel free to reach out with questions or for clarification on techniques."
  },
  {
    image: designprocess4,
    alt: "Feedback Session",
    title: "Feedback Session",
    description: "After self-editing, submit the revised manuscript for feedback from the editor. A detailed report or direct feedback will be provided upon review."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How does self-editing differ from professional editing?",
    answer: "Self-editing allows you to improve your manuscript on your own, while professional editing involves an expert editor reviewing and polishing your work for consistency, clarity, and accuracy."
  },
  {
    question: "Do I need to finish my manuscript before I start self-editing?",
    answer: "It isn’t entirely necessary, but preferably it creates ease as you edit with a flow. We can also guide you through self-editing strategies during the writing process to enhance specific sections."
  },
  {
    question: "Do you offer tools or resources to help with self-editing?",
    answer: "Absolutely. We provide checklists, guides, and recommended software to assist you throughout the self-editing process."
  },
  {
    question: "What if I still need professional editing after self-editing?",
    answer: "Self-editing helps strengthen your manuscript, but we also offer additional professional editing services if you need further refinement after the self-editing phase."
  }
];


// ******************************** End FAQ Section ******************************

const SelfEditingFictionWriters = () => {
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
        title="Self-Editing Fiction Writers"
        desc={
          <>
Get Your Rough Drafts Kept Aside And Take Control Of Your Narrative By Editing Like A Pro!


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
    heading="Self-Editing   "
    subHeading="Fiction Writers"
    description={
        <>
Managing your edits like a professional before it reaches the eyes of professional editors or readers is essential for many reasons such as securing your ideas and vision. The journey of writing a novel often leaves authors deeply immersed in their narratives, making it easy to overlook inconsistencies, awkward phrasing, or plot holes. Self-editing helps bridge this gap, enabling you to approach your work from a fresh perspective. 

<br/><br/>
Self-editing boosts a writer's confidence in their work. It sharpens the mind of the writer while they are writing their drafts. The more adept you become at self-editing, the more confident you will feel in presenting your stories to the world. So, roll up your sleeves, grab that red pen, and embark on the rewarding journey of self-editing.
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
        Self Editing <br/>
        Fiction </>}
        heading2="Writer"
        paragraph="When it's your story, your mind, and your vision - then why not your edits? Empower your story now with self-editing!"
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
We believe in working closely with the client to understand their vision and enhance their voice, creating a helping environment where you develop the skills needed to refine your manuscript independently. We don’t just edit your work; we empower you to become a more confident, capable writer through personalized self-editing plans, practical resources, and continuous support.
<br/><br/>
Our collaborative approach means you’ll have access to professional insights without losing creative control over your narrative. Whether you’re polishing a novel or a short story, we guide you through each step of the self-editing process, helping you produce a manuscript that’s sharp, cohesive, and ready for publication. 


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
export default SelfEditingFictionWriters;


