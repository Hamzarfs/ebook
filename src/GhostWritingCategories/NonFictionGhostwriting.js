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
    title: "History and Politics",
    image: ghostWritingImage,
    description: "AMZ Book Publishings offers expert ghostwriting in history and politics, combining thorough research with engaging storytelling. We help you illuminate significant events and figures, providing fresh perspectives that resonate with readers.",
    // link: "https://www.facebook.com/",
    // buttonPadding :"10px 25px",
    // learnmore:"Click Here",
  },
  {
    title: "Self-Help",
    image: designingImage,
    description: "Our Self-Help non-fiction ghostwriting services inspire personal growth by turning your insights into relatable stories and actionable strategies. We help articulate your unique experiences, guiding readers on their journeys toward positive change.",
    
  },
  {
    title: "Religion and Spirituality",
    image: bookEditingImage,
    description: "In religion and spirituality, we help articulate your beliefs and experiences with clarity. Our nonfiction writers for hire can create thoughtful narratives that foster connection and understanding for readers seeking inspiration and guidance on their spiritual paths.",
    
  }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
     Our Creative Process For 
     <br />
    </>
  ),
  highlight: "Non-Fiction Ghostwriting"
};
// const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Drafting Outlines",
    title: "Drafting Outlines",
    description: "With our expert nonfiction ghostwriting services, we craft detailed outlines that will be your roadmap throughout the writing journey!"
  },
  {
    image: designprocess2,
    alt: "Examining Content",
    title: "Examining Content",
    description: "Our talented team of professional ghostwriters works closely with you to capture your unique perspectives, ideas, and opinions, ensuring your voice shines through in every word!"
  },
  {
    image: designprocess3,
    alt: "Proofreading and Editing",
    title: "Proofreading and Editing",
    description: "We take pride in meticulously reviewing every piece of material. Our editorial and proofreading team checks everything from structure to punctuation, ensuring that every detail is just right!"
  },
  {
    image: designprocess4,
    alt: "Ready For You",
    title: "Ready For You",
    description: "At AMZ Book Publishings, we are here to help you navigate the world of publishing, whether you are aiming for traditional publishing, exploring hybrid options. "
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What are narrative and creative nonfiction?",
    answer: "Narrative nonfiction is like telling a true story in a captivating way. Imagine the elements of a gripping novel, which is all based on real events. The author weaves together factual details to create a compelling narrative that keeps readers hooked. On the other hand, creative nonfiction takes that storytelling a step further, using fiction-like techniques to revamp the structure and presentation of the facts."
  },
  {
    question: "What are some popular genres of nonfiction?",
    answer: "The beauty of nonfiction is that it covers a wide array of genres! While true crime, travel, health, psychology, philosophy, and politics are popular, it also includes self-help and personal development books."
  },
  {
    question: "Can you help me become a published author?",
    answer: "Absolutely! Our nonfiction ghostwriting services are here to help you craft an engaging narrative that you can present to top publishing platforms and literary agents."
  },
  {
    question: "Do nonfiction book writers receive royalties?",
    answer: "Typically, no. Nonfiction ghostwriters usually work on a work-for-hire basis, which means they receive payment as the project progresses rather than earning royalties from book sales."
  },
  {
    question: "What is the importance of nonfiction in education and personal growth?",
    answer: "Nonfiction plays a crucial role in education by delivering factual and educational content that broadens students' knowledge. It encourages analytical and critical thinking, fostering curiosity and promoting lifelong learning. Through nonfiction, readers gain the insights they need to make informed decisions in both their personal and professional lives."
  }
];


// ******************************** End FAQ Section ******************************

const FictionGhostwriting = () => {
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
      <title>Non-Fiction Ghostwriting Services | AMZ Book Publishing</title>
      <meta name="description" content="Need a non-fiction ghostwriter? We offer non-fiction ghostwriting services in NJ at an affordable price. Our experienced writers are well-trained for all genres." />
      <link rel="canonical" href="https://amzbookpublishing.net/affordable-non-fiction-ghostwriting-services " />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Non-Fiction Ghostwriting Services | AMZ Book Publishing" />
      <meta property="og:description" content="Need a non-fiction ghostwriter? We offer non-fiction ghostwriting services in NJ at an affordable price. Our experienced writers are well-trained for all genres." />
      <meta property="og:url" content="https://amzbookpublishing.net/affordable-non-fiction-ghostwriting-services" />
      <meta property="og:site_name" content="AMZBookPublishing" />
      <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
      <meta property="article:modified_time" content="2024-08-20T07:35:23+00:00" />

      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Non Fiction Ghostwriting"
        desc={
          <>
           Our non-fiction ghostwriting services are exceptional, and we confidently stand by that. With our 
            {/* <br/>  */}
            skilled nonfiction ghostwriters, we will transform your idea into a publishable book. 
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
    heading="Non Fiction "
    subHeading="Ghostwriting"
    description={
        <>
           Writing nonfiction goes beyond just time and creativity: it is about crafting a deep human connection. From original narratives to accurate descriptions, figurative language, and concrete imagery, nonfiction writing brings stories to life. Add a touch of poetic elements like rhyme and rhythm to keep readers hooked.
           <br /><br />
           Writing a book can be daunting, but with a nonfiction writing coach by your side, it becomes an exciting journey. Whether you are sharing your memories, experiences, or knowledge, we are here to guide you. Looking for nonfiction writers for hire? Let’s help you get started on your book today!

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
        Non-Fiction<br/>
        Ghostwriting </>}
        heading2="Services"
        paragraph="Our team excels in active listening, detailed note-taking, and an impressive writing style, ensuring a smooth and enjoyable experience for you. You will find that our services are perfect for."
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
            <ul>
                <li>
                    <b>Fast Turnaround Time:</b> At AMZ Book Publishings, we pride ourselves on delivering projects right when you need them. Our dedicated experts oversee every detail, ensuring your content is processed quickly and flawlessly.
                </li>
                <li>
                    <strong>Unlimited Revisions:</strong> Your satisfaction is our priority! We offer unlimited revisions to guarantee that your vision is fully realized. Whether it is editing or fine-tuning, we will work closely with you to meet your needs.
                </li>
                <li>
                    <strong>Secure and Reliable Services:</strong> When you work with us, you can trust that your content and credentials are safe. At AMZ Book Publishing, we are committed to providing secure and dependable writing services, so you can focus on what really matters.
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
export default FictionGhostwriting;


