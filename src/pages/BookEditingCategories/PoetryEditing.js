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
    title: "Line Editing",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Within poetry, every line resonates with the emotion of the poet. Our editors help with word choice, sentence structure, and overall readability to enhance the lyrical quality of the poem. "
  },
  {
    title: "Poetry Formatting",
    image: designingImage, // Update this if you have a specific image
    description: "Our editors provide a proper format for print or digital publishing. The format includes guidance on line breaks, stanza spacing, and ensuring the visual presentation complements the poem’s tone and style."
  },
  {
    title: "Poetry Translation Editing",
    image: bookEditingImage, // Update this if you have a specific image
    description: "For poets translating poetry into multiple languages, editors offer services to preserve the nuances, rhythm, and emotional tone of the original work in translation."
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
    alt: "Opening Consultation",
    title: "Opening Consultation",
    description: "The editor and poet establish a mutual understanding, discussing the poet’s goals and vision. The poet then submits their poetry manuscript for review."
  },
  {
    image: designprocess2,
    alt: "Editor’s Feedback",
    title: "Editor’s Feedback",
    description: "The editor conducts a thorough review of the themes, style, and emotional tone of the poems, noting areas for improvement and necessary adjustments."
  },
  {
    image: designprocess3,
    alt: "Creative Refinements",
    title: "Creative Refinements",
    description: "The poet revises the manuscript based on the editor’s feedback. The editor checks the amendments to ensure the flow of the poems is maintained."
  },
  {
    image: designprocess4,
    alt: "Final Touches",
    title: "Final Touches",
    description: "The editor performs a final copyedit to correct grammatical errors, punctuation issues, and formatting inconsistencies before the manuscript is ready for publication."
  }
];
// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What types of poetry editing services do you offer?",
    answer: "Our editors specialize in services such as line editing, copyediting, structural editing, and providing feedback on imagery and metaphor. If you require any other editing service, feel free to contact us."
  },
  {
    question: "Can you help with editing a poetry collection?",
    answer: "Yes, our editors excel in editing both individual poems and full poetry collections, ensuring thematic cohesion and a smooth flow between poems."
  },
  {
    question: "What if I’m not satisfied with the editing?",
    answer: "Client satisfaction is our utmost priority. If you feel any aspect of the editing is lacking, you can request a review meeting or communicate directly with your assigned editor to point out any amendments needed."
  },
  {
    question: "What qualifications do your editors have?",
    answer: "Our editors possess extensive expertise in poetry, with backgrounds in creative writing, literature, and editing. We have professionals experienced in handling complex projects, especially poetry collections."
  },
  {
    question: "Do you provide editing for poets of all experience levels?",
    answer: "Yes, we cater to poets at all levels of their writing journey, whether they are beginners or experienced. Our editors maintain consistent work ethics, ensuring unbiased evaluations for all poets."
  }
];



// ******************************** End FAQ Section ******************************

const PoetryEditing = () => {
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
          <title>Professional Poetry Editing Services to Enhance Your Verses</title>
          <meta name="description" content="Need Poetry Editing Services? We offer affordable poetry editing services for self-published poets at an affordable price. Hire expert editors for your book." />
          <link rel="canonical" href="https://amzbookpublishing.net/affordable-poetry-editing-services " />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Professional Poetry Editing Services to Enhance Your Verses" />
          <meta property="og:description" content="Need Poetry Editing Services? We offer affordable poetry editing services for self-published poets at an affordable price. Hire expert editors for your book." />
          <meta property="og:url" content="https://amzbookpublishing.net/affordable-poetry-editing-services" />
          <meta property="og:site_name" content="AMZBookPublishing" />
          <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
          <meta property="article:modified_time" content="2024-08-23T07:38:30+00:00" />
      </Helmet>
      <Header />
      <BreadCrumb
        title="Poetry Editing"
        desc={
          <>
We Refine The Beauty Of Your Verses From Subtle Shifts To Powerful Finishes - Editing That Reflects Your Style!


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
    heading="Poetry "
    subHeading="Editng"
    description={
        <>
Poetry is an art that requires words to flow with clarity and grace, our editors will bring your poetic voice to its fullest potential. We work with poets of all levels, whether you’re just starting to explore your craft or have years of experience behind you. Our expert editors will help you focus on improving the structure, imagery, and emotional impact of your poems. 
<br/><br/>
We will help you achieve the clarity and depth that captivates your readers. Our poetry editing services offer the professional insight needed to take your writing to the next level. It can be any genre of work, publication, competition, or hobby, our editors will guide you through it all. 
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
        Poetry  <br/>
         Editing </>}
        heading2="Services"
        paragraph="Transform your manuscript with our expert editing services and captivate readers all around the world!"
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
We have an expert team who understands the nuances of poetic expression. Your poems will reflect your essence and not the editor’s, the team carefully makes adjustments to preserve your style of poetry. Every poem is different and unique, our services offer different styles and approaches that the poet can choose from. 
<br/><br/>
Every poet dreams of leaving an impact of their poetry on the reader, making it unforgettable. Collaboration with our editor will give emotional depth to your poems and leave a meaningful mark on the reader’s mind. We firmly believe in an environment where you can grow as a poet. Our editor’s feedbacks are detailed critiques that highlight areas for improvement. We take pride in helping you produce polished, publication-ready poetry that resonates with readers.
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
export default PoetryEditing;


