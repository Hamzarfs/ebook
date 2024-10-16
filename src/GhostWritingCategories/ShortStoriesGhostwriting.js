// src/pages/About.js
import React,{ useState } from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import CtaButton from '../components/common/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Ghostwritingbg from '../images/Ghostwritingbg.png'; // Import the image
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';
import SecondSection from '../components/home/SecondSection';
import DesignProcess from '../components/common/DesignProcess';
import ImageRightBanner from '../components/common/ImageRightText';
import ImageLeftBanner from '../components/common/ImageLeftText';
import FictionImage1 from '../images/fictiongimg1.png';
import fictionwhychoose from '../images/fictionwhychoose.png';
import ghostWritingImage from '../images/Ghost Writing.png';
import designingImage from '../images/Designing.png';
import bookEditingImage from '../images/book edit.png';
import designprocess1 from '../images/design-process-1.png';
import designprocess2 from '../images/design-process-2.png';
import designprocess3 from '../images/design-process-3.png';
import designprocess4 from '../images/design-process-4.png';
import PopupForm1 from '../components/common/PopupForm';

// ******************************** Start SecondSection ******************************

const services = [
  {
    title: "Fictional Short Stories",
    image: ghostWritingImage,
    description: "Our expert short story ghostwriters dive into your ideas, creating imaginative and thrilling fictional worlds that keep readers hooked from start to finish. From suspenseful plots to heartwarming tales, we bring your fiction to life."
  },
  {
    title: "Memoir-Based Short Stories",
    image: designingImage,
    description: "We transform your personal memories into beautifully written short stories, blending truth with storytelling finesse to capture the essence of your experiences and share them with a broader audience."
  },
  {
    title: "Children's Short Stories",
    image: bookEditingImage,
    description: "With our fiction ghostwriting services, we craft enchanting children's stories filled with creativity and moral lessons that spark young imaginations and foster a lifelong love for reading."
  }
];


// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    How Our Experts Create Your
     <br />
    </>
  ),
  highlight: "Short Stories Masterpiece"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Research & Layout",
    title: "Research & Layout",
    description: "We dive deep into your vision, conducting thorough research and organizing everything based on your input. Then, we get to work, drafting the first chapter that sets the tone for the entire story."
  },
  {
    image: designprocess2,
    alt: "Concept Development",
    title: "Concept Development",
    description: "Every great short story starts with a spark of an idea. We work closely with you, brainstorming and refining concepts, shaping characters, and exploring every twist and turn your story could take."
  },
  {
    image: designprocess3,
    alt: "Editing and Proofreading",
    title: "Editing and Proofreading",
    description: "No matter how rough you think your draft is, we will turn it into something flawless. Our team polishes your scripts, ensuring they are sharp, engaging, and ready to impress."
  },
  {
    image: designprocess4,
    alt: "Formatting",
    title: "Formatting",
    description: "A beautifully written story deserves an equally stunning presentation. Our designers take care of formatting, typesetting, and cover design, giving your story the professional look it needs to stand out."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Do ghostwriters proofread their work?",
    answer: "Absolutely! Once the writing is done, our ghostwriters carefully proofread and edit everything to make sure there are no mistakes. It’s all about delivering a polished and flawless story."
  },
  {
    question: "How can I hire a short story ghostwriter?",
    answer: "It’s super easy! Just fill out the info on our website, and we will take it from there. One of our team members will get in touch with you shortly to get things rolling."
  },
  {
    question: "What are the important things for a short story?",
    answer: "A great short story needs a gripping theme, a solid plot, and well-paced writing. Add in a vivid setting and a satisfying ending, and you have a story that leaves a lasting impression on readers."
  },
  {
    question: "How long does it take to write a short story?",
    answer: "The timeline for writing a short story depends on its complexity and the details you want to include. Typically, our short story ghostwriters can craft a well-developed story in a few weeks, ensuring every aspect is polished and captivating."
  },
  {
    question: "Can I provide input during the writing process?",
    answer: "Absolutely! We encourage collaboration. You can share your ideas, feedback, or any specific direction at any stage. Our short story ghostwriters will work closely with you to make sure your vision comes to life exactly as you imagine it."
  }
];





// ******************************** End FAQ Section ******************************

const ShortStoriesGhostwriting = () => {
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
        title="Short Stories Ghostwriting"
        desc={
          <>
         There is no limit to what we can imagine for you. With our short stories ghostwriting services, let us help you tell a story that resonates and keeps your audience coming back for more!

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
    heading="Short Stories "
    subHeading="Ghostwriting"
    description={
        <>
        At AMZ Book Publishings, we specialize in crafting short stories that grab the attention of your readers from the very first sentence and keep them turning pages until the last word. Whether you are dreaming up a magical fantasy world, exploring the depths of human emotion through fiction, or recounting powerful real-life events, our team of expert ghostwriters is dedicated to bringing your unique vision to life. 
           <br/><br/>
           With creativity, flair, and a deep understanding of storytelling, we do not just write; we create an immersive experience that resonates with your audience. 
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
        High-End  </>}
        subHeading={<>
         Short Stories  <br/>
         Ghostwriting </>}
        heading2="Services"
        paragraph="Every story we craft is tailored to your voice and style, ensuring it feels authentic and leaves a lasting impression."
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
At AMZ Book Publishings, we have the perfect short story ghostwriters ready to bring your next story to life. You might wonder what makes our writers stand out. Well, not only are they incredibly talented, with published works adored by readers everywhere, but they also treat your project like it is their own. 
         <br/><br/>
         From start to finish, our writers are personally invested in making sure you get nothing but the best, delivering high-quality scripts that captivate and resonate with your audience. We strive to ensure that our short stories keep you and the audience hooked until the very end!
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
export default ShortStoriesGhostwriting;


