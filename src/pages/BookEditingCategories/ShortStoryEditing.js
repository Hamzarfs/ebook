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
    description: "We focus on the bigger picture—structure, plot, characters, and overall content. This approach enhances the substance and structure of your story, resulting in a more compelling narrative."
  },
  {
    title: "Copyediting",
    image: designingImage, // Update this if you have a specific image
    description: "Our team ensures your content is error-free through a thorough review of grammar, spelling, and punctuation. We also refine sentence structure and word choice to enhance clarity and readability."
  },
  {
    title: "Content Suggestions",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Editors provide expert recommendations for additional content or scenes that can elevate the mood of your story. These additions help engage readers and foster emotional connections."
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
   Bring Your Short Story’s
    <br/>
    </>
  ),
  highlight: "Potential To Life!"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Getting Started",
    title: "Getting Started",
    description: "We discuss the client’s goals, needs, and project scope, ensuring clarity. The client submits a sample manuscript for assessment to define their requirements."
  },
  {
    image: designprocess2,
    alt: "Proposal Agreement",
    title: "Proposal Agreement",
    description: "After evaluating the draft, the editor provides a proposal outlining services, timeframe, and costs. The client can negotiate before signing the agreement."
  },
  {
    image: designprocess3,
    alt: "Draft Review",
    title: "Draft Review",
    description: "The client submits the complete manuscript, which the editor reviews based on the agreed services. Throughout the project, communication ensures alignment with the client’s needs."
  },
  {
    image: designprocess4,
    alt: "Final Review",
    title: "Final Review",
    description: "Once editing is complete, the final draft is sent to the client for any amendments. The editor addresses requested revisions to ensure the manuscript is error-free before delivery."
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

const ShortStoryEditing = () => {
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
        <title>Short Story Editing Services to Refine Your Narrative</title>
        <meta name="description" content="Need Short Story Editing Services? We offer professional Short Story Editing services for self-published authors on affordable price. Hire expert for your book." />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Short Story Editing"
        desc={
          <>
Let Us Perfect Your Short Story With Our Comprehensive Editing Services Ensuring You Shine Through Each Page.
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
    heading="Short Story "
    subHeading="Editng"
    description={
        <>
Our offering of short story editing is here to help you turn your story into a powerful, unforgettable piece of writing. If you are an emerging writer lost in the world of industry standards, we are here to help you get through it! We dig into every little detail from grammar to character development, any aspect that you want assistance in, convey it to us and we’ll surpass your expectations.
<br/><br/>
Our goal is to help you make your story as clear and engaging as possible, with every word working to grab the reader’s attention. Within a short story every word counts. Once we have finalized your story, you can confidently submit it for publication or competition, knowing it’s been refined to perfection.
Partner with our editorial team and let your short story be your biggest turnaround.

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
        Short Story  <br/>
         Editing </>}
        heading2="Services"
        paragraph="Looking for brilliant editors with great knowledge and expertise - you are on the right side. We are here to make your short story stand out!"
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
Our short story editing service is designed to provide a unique and tailored experience created just for you. We work closely in our initial screening with the author to understand their vision and writing style. Our experienced editors bring a wealth of knowledge in storytelling, offering comprehensive services that cover everything from big-picture insights to detailed sentence-level polishing.
<br/><br/>
A two-way communication channel via email, video call or calls is created to maintain clear communication throughout the process, ensuring you can ask questions or give feedback at any given moment. Our editors work efficiently to deliver quality edits within agreed-upon timelines, highlighting the importance of word of mouth. 
<br/><br/>
We believe in sharing your love for storytelling equally!
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
export default ShortStoryEditing;


