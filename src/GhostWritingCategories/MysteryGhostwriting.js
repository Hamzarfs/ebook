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
import { Helmet } from 'react-helmet-async';

// ******************************** Start SecondSection ******************************

const services = [
  {
    title: "Cozy Mystery Ghostwriting",
    image: ghostWritingImage,
    description: "If you are looking to charm your readers with a delightful whodunit, our cozy mystery ghostwriting services are just what you need! We will help you create lovable characters and captivating plots that weave humor and intrigue into every page."
  },
  {
    title: "Psychological Thriller Ghostwriting",
    image: designingImage,
    description: "Ready to delve into the depths of the human mind? Our psychological thriller mystery ghostwriting will keep your readers on their toes with intense plots and unexpected twists that make them question everything."
  },
  {
    title: "Noir Mystery Ghostwriting",
    image: bookEditingImage,
    description: "If you are aiming for that gritty, edge-of-your-seat feel, our noir mystery ghostwriting services are the perfect match. We will develop dark, complex narratives that draw readers into a world of suspense and moral ambiguity, which is ideal for fans of thrilling mysteries and intricate storytelling."
  }
];



// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    The Process Our Mystery Ghostwriters
     <br />
    </>
  ),
  highlight: "Follow For You"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Research",
    title: "Research",
    description: "Once you join forces with us, our talented mystery ghostwriters roll up their sleeves and dive into research! They will thoroughly analyze your target audience and have in-depth conversations with you to pinpoint exactly what thrilling tale you want to tell."
  },
  {
    image: designprocess2,
    alt: "Plot Development",
    title: "Plot Development",
    description: "With all that research in the bag, our ghostwriting team will craft a captivating plot designed just for you. They will seamlessly weave your story's theme into a well-structured outline that acts as a roadmap, ensuring that every twist keeps readers on the edge of their seats and craving more."
  },
  {
    image: designprocess3,
    alt: "Character Sculpting",
    title: "Character Sculpting",
    description: "Next, we will focus on character sculpting! Our writers will breathe life into your characters, shaping their traits, personalities, and roles within your mystery. You can expect characters so vivid and relatable that your readers will either cheer them on or be desperate to see them get their comeuppance!"
  },
  {
    image: designprocess4,
    alt: "Composition and Delivery",
    title: "Composition and Delivery",
    description: "Finally, it’s time to bring your story to life! Our skilled writers will create draft manuscripts that flow beautifully, polishing your prose to perfection. Once we have crafted a draft you will love, we'll ensure it’s ready for the next steps."
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

const MysteryGhostwriting = () => {
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
        <title>Mystery Ghostwriting Online Services by Mystery Book Writers</title>
        <meta name="description" content="Need Mystery ghostwriter? We offer professional Mystery ghostwriting services on affordable price. Contact us to hire expert writers remotely for your project." />
        <link rel="canonical" href="https://amzbookpublishing.net/mystery-ghostwriting" />

      </Helmet>
      <Header />
      <BreadCrumb
        title="Mystery Ghostwriting"
        desc={
          <>
         At AMZ Book Publishings, our seasoned short story ghostwriters are like your creative partners-in-crime, ready to take your ideas and spin them into gripping narratives.

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
    heading="Mystery "
    subHeading="Ghostwriting"
    description={
        <>
 Creating a chilling mystery or a heart-pounding thriller is about more than just having a fantastic idea; it is about weaving that idea into a compelling story that grips your readers from the first page. At AMZ Book Publishings, our mystery ghostwriting service is here to help you do just that. Think of our talented ghostwriters as your creative partners, ready to turn your visions into a gripping narrative.
           <br/><br/>
           We will collaborate with you to develop an intriguing plot filled with unexpected twists that keep readers guessing at every turn. Moreover, our writers excel at crafting memorable characters with depth and complexity, adding layers to your story that will resonate with your audience.
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
        Quality  </>}
        subHeading={<>
        Mystery  <br/>
         Ghostwriting </>}
        heading2="Services"
        paragraph="From unexpected twists to memorable characters, we will turn your vision into a page-turner that keeps readers hooked until the very end. Let’s bring your story to life together!"
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
We specialize in crafting intricate plots packed with jaw-dropping twists that will keep readers guessing until the very last page. Our talented team knows how to breathe life into complex characters, each hiding their own secrets, making your story a thrilling ride from start to finish.
         <br/><br/>
         We understand that a great mystery is built on a solid foundation, which is why we dive deep into meticulous research. 
         <br/><br/>
         Whether it is police procedures, forensic science, or historical nuances, we leave no stone unturned; no plot hole will slip through our fingers. Our thorough review process sharpens every detail, ensuring your concept transforms into a polished masterpiece that sends chills down the spines of all your readers.
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
export default MysteryGhostwriting;


