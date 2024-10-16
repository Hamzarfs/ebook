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
    question: "How do I know if I need a business ghostwriter?",
    answer: "If you are an expert in your field but do not have the time or writing skills to put your thoughts into a compelling business book, that is where we come in. Our business book ghostwriters for hire are here to help you turn your ideas into professional manuscripts while you stay focused on running your business."
  },
  {
    question: "Will the book still feel like it was written by me?",
    answer: "Absolutely! We take the time to understand your voice, style, and vision through detailed interviews and brainstorming sessions. Our best business ghostwriters ensure that your book not only reflects your expertise but also sounds authentically you."
  },
  {
    question: "What is the process like for business ghostwriting?",
    answer: "It is a collaborative journey. We start with understanding your goals and audience, then move on to outlining, writing, and revising until we have a polished manuscript. You are involved every step of the way to make sure the final product meets your expectations."
  },
  {
    question: "Can you help me get my business book published?",
    answer: "Yes! We do not just write the book; we guide you through the publishing process as well. Whether you are looking for traditional publishing or self-publishing, we provide support with everything from editing to cover design to marketing strategies."
  },
  {
    question: "How long does it take to write a business book?",
    answer: "It depends on the complexity of the project, but typically, it takes a few months to complete a full manuscript. Our business book ghostwriters for hire work with you to establish a timeline that fits your schedule while maintaining quality at every stage."
  }
];


// ******************************** End FAQ Section ******************************

const FantasyGhostwriting = () => {
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
export default FantasyGhostwriting;


