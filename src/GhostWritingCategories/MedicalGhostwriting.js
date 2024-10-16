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
    title: "Chic Novels",
    image: ghostWritingImage,
    description: "Dive into the world of stylish storytelling with our chic novels. Our talented writers create captivating fiction that keeps readers hooked from the first page, making it the perfect choice when you want to hire a ghostwriter who knows how to craft elegance into every narrative."
  },
  {
    title: "Memoirs with Flair",
    image: designingImage,
    description: "Share your extraordinary life journey with a dash of glamour through our memoirs. We work closely with you to weave your experiences into a captivating narrative that resonates to ensure your story shines as it deserves to."
  },
  {
    title: "Upscale Non-Fiction",
    image: bookEditingImage,
    description: "Our upscale non-fiction services are designed to present your expertise with sophistication. Whether you are sharing insights on lifestyle, self-improvement, or any niche topic, our writers ensure your message is both impactful and beautifully articulated."
  }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
     Our Process To Concoct The Best
     <br />
    </>
  ),
  highlight: "Piece Of Fancy Ghostwriting"
};
// const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "We kick things off with a friendly chat to understand your vision. During this initial meeting, we will discuss your ideas, themes, and the style you are aiming for, ensuring we are on the same page right from the start."
  },
  {
    image: designprocess2,
    alt: "Research & Planning",
    title: "Research & Planning",
    description: "Once we have a solid understanding of your concept, our team dives into thorough research and planning. We gather inspiration, explore relevant topics, and outline the structure of your project to create a roadmap for your story."
  },
  {
    image: designprocess3,
    alt: "Writing & Collaboration",
    title: "Writing & Collaboration",
    description: "With the outline in place, our talented ghostwriters begin crafting your masterpiece. We keep the lines of communication open throughout the writing process, allowing for collaboration and feedback to ensure your voice and vision shine through."
  },
  {
    image: designprocess4,
    alt: "Final Review & Polishing",
    title: "Final Review & Polishing",
    description: "After completing the draft, we enter the final review phase. We meticulously edit and polish your manuscript, adding the finishing touches to ensure it reflects the high standards of our ghostwriting services before it is ready for publication."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is fancy ghostwriting?",
    answer: "Fancy ghostwriting is all about creating high-quality, polished content that elevates your ideas and tells your story in an elegant and engaging manner. Whether it is a memoir, a novel, or a specialized piece of writing, our skilled team can add that touch of sophistication that makes your work stand out."
  },
  {
    question: "How do I know if fancy ghostwriting is right for me?",
    answer: "If you have a brilliant idea but struggle with expressing it in writing, or if you want to add a layer of flair to your narrative, then fancy ghostwriting is perfect for you! At AMZ Book Publishings, our ghostwriters work closely with you to ensure your voice and vision shine through, making your writing both personal and captivating."
  },
  {
    question: "What is the process for working with your fancy ghostwriters?",
    answer: "We start with an in-depth consultation to understand your goals, style, and audience. Then, our team conducts research and develops an outline. From there, we collaborate closely with you to draft and refine the content until it is exactly what you envisioned. It is a seamless and enjoyable experience!"
  },
  {
    question: "Can I provide input during the writing process?",
    answer: "Absolutely! Your input is invaluable to us. We encourage open communication throughout the process, allowing you to share your thoughts and feedback at every stage. After all, this is your story, and we want to ensure it reflects your unique perspective."
  },
  {
    question: "How can I get started with your fancy ghostwriting services?",
    answer: "Getting started is easy! Just reach out to us through our website or give us a call. We will set up a time to chat about your project and discuss how our fancy ghostwriting services can bring your ideas to life. We cannot wait to hear from you!"
  }
];



// ******************************** End FAQ Section ******************************

const MedicalGhostwriting = () => {
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
        title="Fantasy Ghostwriting"
        desc={
          <>
           Looking for ghostwriters for hire? At AMZ Book Publishings, we take your ideas and turn them into compelling stories, ensuring your voice shines through every word.

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


<div style={{ padding: '40px 0px 100px 0px' }}>
<ImageRightBanner
    heading="Fantasy "
    subHeading="Ghostwriting"
    description={
        <>
         At AMZ Book Publishings, our fancy ghostwriting services are designed to elevate your narrative to new heights. Whether you are looking to pen a chic novel, a captivating memoir, or a dazzling piece of non-fiction, our team of skilled ghostwriters for hire is here to bring your ideas to life. Our goal is to create a seamless experience where your voice shines through, all while capturing the elegance and sophistication you envision.
           <br/><br/>
           What sets us apart is our commitment to understanding your unique style and vision. With our expertise in storytelling and attention to detail, you can rest assured that your book will not only be well-written but also enchanting and engaging. 
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
        Professional  </>}
        subHeading={<>
        Fancy <br/>
        Ghostwriting </>}
        heading2="Services"
        paragraph="Let us help you transform your ideas into a polished masterpiece that stands out in the literary world, making your dream of becoming a published author a reality."
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
        We believe that everyone has a story to tell, and we are here to make that journey exciting and effortless. Here is why choosing us for your ghostwriting needs is a fantastic decision.
        <ul>
          <li>
            <b>Expert Team at Your Service:</b> Our talented ghostwriters come equipped with a wealth of experience, ready to transform your ideas into a beautifully crafted narrative that captures the essence of your story.
          </li>
          <li>
            <strong>Tailored Just for You:</strong> We take the time to get to know you and your vision, ensuring that your unique voice and style shine through on every page we write.
          </li>
          <li>
            <strong>Budget-Friendly Options:</strong> Looking for affordable ghostwriters for hire? Look no further! We provide top-notch ghostwriting services that won’t break the bank, making professional writing accessible to everyone.
          </li>
          <li>
            <strong>Effortless Collaboration:</strong> With our streamlined process, you can focus on your creative ideas while we handle the writing. We are here to make the experience smooth, enjoyable, and stress-free.
          </li>
        </ul>
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
export default MedicalGhostwriting;


