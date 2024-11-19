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
    title: "Biographical Ghostwriting",
    image: ghostWritingImage,
    description: "Let our skilled historical ghostwriters bring the stories of remarkable individuals to life. We craft engaging biographies that not only highlight achievements but also reveal the personal journeys behind the historical figures you admire."
  },
  {
    title: "Historical Fiction Ghostwriting",
    image: designingImage,
    description: "Dive into the past with our historical fiction ghostwriting services! Our talented writers blend factual research with imaginative storytelling to create captivating novels that transport readers to different eras and immerse them in rich, vivid narratives."
  },
  {
    title: "Academic Historical Writing",
    image: bookEditingImage,
    description: "Elevate your scholarly work with our academic historical writing services. Our experienced historical ghostwriters collaborate with you to produce well-researched articles and books that meet the highest academic standards."
  }
];


// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
     Our Historical Ghostwriters
     {/* <br /> */}
    </>
  ),
  highlight: "Are At Your Service"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Making Your Mark",
    title: "Making Your Mark",
    description: "At AMZ Book Publishings, we believe your historical narrative deserves to be told in a way that captivates and resonates with readers. Our commitment is to help you bring your story to life, ensuring it makes a lasting impact in the literary world."
  },
  {
    image: designprocess2,
    alt: "Expert Guidance",
    title: "Expert Guidance",
    description: "Whether you are aiming to highlight significant events or share personal anecdotes from the past, our team of expert historical ghostwriters is here to support your vision. We have the knowledge and resources to transform your ideas into a compelling narrative."
  },
  {
    image: designprocess3,
    alt: "Refining Your Manuscript",
    title: "Refining Your Manuscript",
    description: "We will meticulously refine your manuscript, enhancing clarity and flow while preserving your unique voice. Our goal is to create a polished piece that not only educates but also inspires, allowing your historical narrative to shine."
  },
  {
    image: designprocess4,
    alt: "Expanding Your Reach",
    title: "Expanding Your Reach",
    description: "With our guidance, we will help you expand your audience reach and ensure your work achieves the recognition it deserves. Together, we will make sure your historical narrative captivates readers and stands out in the competitive literary landscape!"
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is the purpose of writing a history memoir?",
    answer: "The goal of writing a history memoir is to uncover and explore the significance behind historical events or a series of moments from the past. It's all about making sense of what happened and why it matters."
  },
  {
    question: "What exactly is a history memoir?",
    answer: "A history memoir tells the story of how an author experienced and observed the past. It is a blend of personal narrative and historical context that brings history to life through individual perspectives."
  },
  {
    question: "Can you hire someone to write your history book?",
    answer: "Absolutely! Many people turn to history writing services for a variety of reasons. Some might not know what key elements to include, while others may feel they lack the writing expertise to create a compelling history memoir. Hiring a professional can really help bring their vision to fruition!"
  },
  {
    question: "What is the concept of ghostwriting?",
    answer: "At its heart, ghostwriting is all about writing for someone else who gets credited as the author. Ghostwriters use their literary talents to turn ideas, stories, and concepts into engaging narratives while working behind the scenes to make their clients shine."
  },
  {
    question: "What is your design process like?",
    answer: "Once the manuscript is polished and our client is happy with the final draft, our talented team jumps into action. We will format, design, and typeset your manuscript to meet the publishing platform’s guidelines, ensuring it looks fantastic and is ready for readers!"
  }
];





// ******************************** End FAQ Section ******************************

const HistoryGhostwriting = () => {
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
        <title>Historical Book Ghostwriting Services by History Writers</title>
        <meta name="description" content="Need History ghostwriter? We offer professional Historical ghostwriting services on affordable price. Contact us to hire History writers remotely for your project." />
      </Helmet>
      <Header />
      <BreadCrumb
        title="Historical Ghostwriting"
        desc={
          <>
         Finding the time to dive into history book writing can feel like a monumental task, especially if you are starting from scratch. This is where our exceptional historical ghostwriting services come in to save the day! We are here to help you weave compelling narratives that bring history to life, leaving you free to focus on your other passions.

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
    heading="Historical "
    subHeading="Ghostwriting"
    description={
        <>
        Writing a history book can feel overwhelming, especially if you are just starting out on this journey. But why stress about it when you can have skilled history writers take the reins for you? At AMZ Book Publishing, we specialize in professional historical ghostwriting services for anyone aspiring to be a successful history author. 
           <br/><br/>
           We offer our clients access to incredible resources for crafting compelling history narratives. Our talented team of historians enhances the factual richness of your book, ensuring it accurately captures the past while making it engaging and accessible for readers. 
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
        Expert  </>}
        subHeading={<>
         Historical  <br/>
         Writing </>}
        heading2="Services"
        paragraph="At AMZ Book Publishings, we have professional history book writers ready to bring your vision to life! Our skilled history ghostwriters take care of every step of the writing process, ensuring your book is packed with facts and covers all the essential aspects of history."
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
    We believe your book deserves to shine and leave a lasting impression on readers. That is why we are dedicated to helping you unlock its full potential and stand out in the competitive literary landscape. 

         <br/><br/>
         Whether you want to make a powerful impact or grow your readership, our team of seasoned professionals is here to support your literary dreams. We will refine your manuscript, broaden your audience, and maximize your profits; everything you need to turn your book into a resounding success!
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
export default HistoryGhostwriting;


