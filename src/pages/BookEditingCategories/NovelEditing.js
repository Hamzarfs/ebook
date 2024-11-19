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
    title: "Developmental Editing",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "We provide a comprehensive overview of your manuscript, focusing on structure, plot, character development, and pacing. Our editors offer detailed feedback and suggest plot adjustments, character enhancements, and guidance on expanding or reducing scenes to create a more compelling narrative."
  },
  {
    title: "Line Editing",
    image: designingImage, // Update this if you have a specific image
    description: "Our line editing service refines your text by enhancing clarity and strengthening your voice. We work on dialogue to boost engagement and address consistency issues, ensuring your writing resonates with readers."
  },
  {
    title: "Copyediting",
    image: bookEditingImage, // Update this if you have a specific image
    description: "We focus on making your content error-free, thoroughly reviewing grammar, punctuation, spelling, and syntax. Our editors ensure clarity and readability, using tracking tools to mark changes for your review."
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Perfect Your Novel From <br/>
    </>
  ),
  highlight: " Draft To Masterpiece"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Kick-off Meeting",
    title: "Kick-off Meeting",
    description: "The author and editor discuss the manuscript’s purpose and editing needs. The author provides the complete manuscript for review."
  },
  {
    image: designprocess2,
    alt: "Manuscript Evaluation",
    title: "Manuscript Evaluation",
    description: "The editor evaluates the manuscript, offering feedback on structure, plot, and characters in a detailed report. Recommendations are included for improvement."
  },
  {
    image: designprocess3,
    alt: "Text Refinement",
    title: "Text Refinement",
    description: "The editor refines sentence structure, clarity, and dialogue, highlighting suggestions in the manuscript. The author reviews and revises based on feedback."
  },
  {
    image: designprocess4,
    alt: "Quality Check & Delivery",
    title: "Quality Check & Delivery",
    description: "A final review ensures the manuscript meets expectations, and any last adjustments are made. The polished manuscript is then delivered along with publication recommendations."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Do you edit all genres of novels?",
    answer: "Our editors specialize in a wide range of genres, including literary fiction, fantasy, romance, thriller, historical fiction, young adult, and more. Let us know your genre, and we’ll match you with an editor experienced in that area."
  },
  {
    question: "How much does novel editing cost?",
    answer: "Pricing depends on the manuscript's length and the type of editing required. After the manuscript evaluation, the author receives a quotation that is often negotiable."
  },
  {
    question: "How do I communicate with my editor during the process?",
    answer: "We maintain open communication through email, calls, or video calls, depending on your preference. Our editors welcome any feedback and questions throughout the editing process."
  },
  {
    question: "What file formats do you accept for editing?",
    answer: "We primarily work with Google Docs and MS Word for easy tracking of changes. If you prefer a different format, let us know, and our editors can accommodate you."
  },
  {
    question: "Will my manuscript be kept confidential?",
    answer: "Yes, your manuscript's confidentiality is our priority. All editors sign non-disclosure agreements (NDAs) to ensure your manuscript and personal information are fully protected."
  }
];



// ******************************** End FAQ Section ******************************

const NovelEditing = () => {
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
        <title>Expert Novel Editing Services for Perfecting Your Story</title>
        <meta name="description" content="Need Novel Editing Services? We offer professional Novel Editing services for self-published authors on affordable price. Hire expert editors for your Novel." />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Novel Editing"
        desc={
          <>
Bring Your Characters To Life - We Will Help You Make Them Shine With Our Expert Editing!

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
    heading="Novel "
    subHeading="Editng"
    description={
        <>
We are here to bring your story to life, helping you in every step of your novel publishing journey. Whether you’re developing characters, fine-tuning dialogue, or refining plot structure, our team provides the support you need. Our services are tailored according to your liking and your mindset for the novel - we ensure your novel is polished, cohesive, and ready for readers. 
<br/><br/>
We carry on a personalized approach, where having a close connection with you throughout the editing process is essential to meet the goals of the project. Your feedback highly matters with every passing stage, to bring out your narrative style on paper. 
<br/><br/>
Let us transform your manuscript into a compelling and professional work that stands out in today’s literary world. 
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
        Novel  <br/>
         Editing </>}
        heading2="Services"
        paragraph="Transform your manuscript with our expert editing services and captivate readers all around the world!
"
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
Partnering with us gives you editors who are passionate about storytelling - a storyteller is best understood by someone who equally applauds the magic of words and recognizes the heart and soul woven into each narrative. Our expertise spans various genres like fiction, non-fiction, horror, mystery or children’s literature. We pride ourselves on our meticulous approach to editing, ensuring that every word, sentence, and paragraph contributes to a compelling narrative.
<br/><br/>
We understand the importance of deadlines, which is why we streamline the process allowing the client to move forward with the publishing journey without delays. We fulfill our commitment to quality and prioritize client satisfaction by welcoming feedback throughout the editing process. We’re always here to provide ongoing support, whether you need guidance on publishing or marketing strategies. Let us help you transform your words into a novel that readers can’t put down.
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
export default NovelEditing;


