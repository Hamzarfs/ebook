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
import FictionImage1 from '../images/Non-Fiction1.png';
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
import Queries from '../components/common/Queries';

// ******************************** Start SecondSection ******************************

const services = [
  {
    title: "Memoirs",
    image: ghostWritingImage,
    description: "We capture the turning points of one's life and personal growth to craft a compelling memoir.",
    // link: "https://www.facebook.com/",
    // buttonPadding :"10px 25px",
    // learnmore:"Click Here",
  },
  {
    title: "Biographies",
    image: designingImage,
    description: "Our professional writers prepare engaging biographies that accurately tell someone's life story while supporting thorough research.",
    
  },
  {
    title: "Self-Help Books",
    image: bookEditingImage,
    description: "Do you have expertise in personal development, productivity, or motivation? We can transform your knowledge into a self-help book that inspires your readers.",
    
  }
];

// ******************************** End SecondSection ******************************

const heading1 = {
    title: (
        <>
            Start Your Nonfiction
            <br />
        </>
    ),
    highlight: " Journey Today"
};
const descs = "Do you want to present your expertise to the world? Our organization's nonfiction ghostwriters will develop a compelling book that informs and captivates readers. Contact us today for a complimentary consultation, marking your first step toward writing a nonfiction book.";


// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
     Our Nonfiction
     <br />
    </>
  ),
  highlight: " Writing Process"
};
const desc = "Creating your nonfiction book is easy with our 3-step process:";





const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation & Project Setup",
    title: "Initial Consultation & Project Setup",
    description: "Gather details during an early consultation and note the project's goals, vision, and timelines. Afterward, provide customized quotes and project schedules."
  },
  {
    image: designprocess2,
    alt: "Nonfiction Writing & Revisions",
    title: "Nonfiction Writing & Revisions",
    description: "Post project confirmations, assign a dedicated non-fiction ghostwriter, and begin outlining the book. Send completed chapter drafts to collect feedback to ensure revisions are made."
  },
  {
    image: designprocess3,
    alt: "Final Approval & Publishing",
    title: "Final Approval & Publishing",
    description: "With the manuscript finalized and approved, we format, design the cover, and prepare the book for publication. The book will be proofread by focused marketing strategies."
  },
  {
    image: designprocess4,
    alt: "Launch & Marketing Support",
    title: "Launch & Marketing Support",
    description: "After the completion of production for your non-fiction book, we will supply marketing tools that include full launch support to optimize successful releases. At our organization, we help you establish powerful reader connections, and then we help steer your book to suitable audiences."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is nonfiction ghostwriting?",
    answer: "It’s the process of hiring a professional writer to create a nonfiction book on your behalf while maintaining your voice and ideas."
  },
  {
    question: "How do I hire a nonfiction ghostwriter?",
    answer: "Contact us through our website, and a project manager will reach out to discuss your book and provide a customized quote."
  },
  {
    question: "Can I collaborate with the ghostwriter throughout the process?",
    answer: "Yes, we encourage collaboration. You’ll review chapters, provide feedback, and request revisions as needed."
  },
  {
    question: "What types of nonfiction books do you specialize in?",
    answer: "We specialize in memoirs, biographies, self-help, business, health, true crime, and travel books."
  },
  {
    question: "How much involvement do I need in the writing process?",
    answer: "Your involvement is entirely up to you. Whether you want to be hands-on or let us handle most of the work, we adapt to your preferences."
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
      <meta name="description" content="Get expert non-fiction ghostwriting with AMZ Book Publishing. We create engaging, well-researched books that inform, inspire, and captivate readers!" />
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
      className="responsive-height"
        title="Professional Nonfiction Ghostwriting Services"
        desc={
          <>
           At our non-fiction ghostwriting agency, we offer services to assist you in turning your concepts, life events, or knowledge into refined, professional-grade nonfiction literature. Our proficient non-fiction ghostwriters collaborate with you to compose attention-grabbing memoirs, self-help books, business documents, and even autobiographies seamlessly integrated with your unique voice and perspective. We guarantee to capture your intent and focus on the overall message of the nonfiction book while evidencing its efficiency, clarity, and engagement for a deeper audience-level connection.
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


<div style={{ padding: '40px 0px 0px 0px' }}>
<ImageRightBanner
    heading="Expert Nonfiction Ghostwriting: Transform Your Insights into a "
    subHeading="Masterpiece"
    description={
        <>
           Crafting a powerful, captivating nonfiction book based on your insights and experience does not have to break the bank. With our affordable nonfiction ghostwriting services, we guarantee masterpieces crafted with meticulous attention to detail. We help carve out strong manuscripts ranging from personal memoirs and business guides to health books. Our team of nonfiction ghostwriting services offers unlimited revisions, and deadlines to your needs, and casts above and beyond basic requirements for attention to detail.

        </>
    }
    imageSrc={FictionImage1}
    objectfit="contain"
    imageHeight="400px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
/>
</div>




{/* <div style={{ padding: '0px 0px 30px 0px' }}>
<SecondSection/>
</div> */}


<DesignProcess 
        heading={heading}
        description={
            <div className="custom-description">
                {desc}
            </div>
        }        

        steps={steps}
      />


{/*****************  SERVICE Section *****************/}
<div>
<SecondSection 
        buttonLabel="S e r v i c e s"
        heading1={ <>
        Types of Specialize In</>}
        subHeading={<>
         Nonfiction <br/>
         We </>}
        heading2="Specialize In"
        paragraph="Our non-fiction ghostwriting services in NJ provide skilled ghostwriting services for different nonfiction genres. Each book is carefully crafted to ensure quality and accuracy. Here are some of the services we offer:"
        services={services}
      />
      </div>

<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why Choose Our Affordable Nonfiction Ghostwriting Services?"
    subHeading=""
    description={
        <>
        These are the reasons clients utilize our ghostwriting services:
            <ul>
                <li>
                    <b>Leading Experts:</b>Our ghostwriters have vast experience across different writing genres. This guarantees that your book is structured accurately.
                </li>
                <li>
                    <strong>Reasonable Pricing:</strong> Our rates are one of the lowest in the industry. For these charges, clients receive the best value mutilated in quality.
                </li>
                <li>
                    <strong>Individual Booking:</strong> We partner with you and guide you through every step of the way to guarantee that your book meets your expectations.
                </li>
                <li>
                    <strong>No Charge for Revisions:</strong> There is no limit on how many times you can revise the manuscript. The final form has to be what you desire; it has to be perfect.
                </li>
                <li>
                    <strong>Deadline Completion:</strong> We meet the milestone dates submitted. This allows us to keep the project on track.
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
    <Queries
                heading={heading1}
                description={
                    <div className="custom-description">
                        {descs}
                    </div>
                }
                steps={steps}
            />
         <ContactForm/>

      <Footer/>
    </div>
    
  );
};
export default FictionGhostwriting;


