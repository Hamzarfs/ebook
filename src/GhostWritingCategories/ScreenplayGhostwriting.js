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
import ghostWritingImage from '../images/Ghost Writing.png';
import fictionwhychoose from '../images/fictionwhychoose.png';
import ScreenPlay from '../images/screenplay.jpg';
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
    title: "Feature Films:",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "We help craft full-length feature screenplays that can captivate audiences and stand out in the film industry."
  },
  {
    title: "Short Films:",
    image: designingImage, // Update this if you have a specific image
    description: "Our screenplay ghostwriters are also experts in writing short film scripts that pack a punch in a condensed format."
  },
  {
    title: "TV Pilots & Series:",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Whether you need a pilot script for a new series or a full episode, our ghostwriters can develop compelling scripts tailored for the small screen."
  }
];


// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
 Our screenplay 
     <br />
    </>
  ),
  highlight: "Ghostwriting Process"
};
const desc = "We make sure to utilize the highest degree of professionalism, accuracy, and transparency ";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation & Project Setup",
    title: "Initial Consultation & Project Setup",
    description: "At the first step, we have a meeting with you to gather information on your desired screen requirements, objectives, and target audience. This is where our project managers will collect all the necessary information needed for us to understand your expectations and requirements fully."
  },
  {
    image: designprocess2,
    alt: "Screenplay Writing & Revisions",
    title: "Screenplay Writing & Revisions",
    description: "Upon receiving your feedback on the outline, the ghostwriter begins working on the document whereas we coordinate with you during the entire process, sharing drafts, and accepting comments until we achieve the required results."
  },
  {
    image: designprocess3,
    alt: "Final Approval & Submission",
    title: "Final Approval & Submission",
    description: "We do a comprehensive quality check upon receiving the payment to ensure that there are no logical, factual, or grammatical mistakes. After this, we either send the document directly to you or seek your final approval after submission."
  },
  {
    image: designprocess4,
    alt: "Launch & Continued Support",
    title: "Launch & Continued Support",
    description: "Here at our company, you can expect outstanding post-project support. We assist you with the required changes, modifications, and any additional legal composition requirements that arise."
  }
];



// ******************************** End Design Process Props ******************************



const heading1 = {
    title: (
        <>
           Start Your Screenplay 
            <br />
        </>
    ),
    highlight: "Ghostwriting Journey Today"
};
const descs = "Ready to bring your story to life on the big screen? AMZ Book Publishing offers Professional Screenplay Ghostwriting Services Online to help you create high-quality screenplays for film, TV, and more. Contact us today for a free consultation, and let's start working on your screenplay that will captivate audiences and industry professionals alike.";






// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is screenplay ghostwriting?",
    answer: "Screenplay ghostwriting involves hiring a professional writer to create a screenplay on your behalf. The content is written in your voice and style, but you receive the credit for the final product."
  },
  {
    question: "How do I hire a screenplay ghostwriter?",
    answer: "To hire a screenplay ghostwriter, simply reach out for an initial consultation. We’ll discuss your project, goals, and vision, and then provide a custom quote and timeline."
  },
  {
    question: "Can I make revisions during the writing process?",
    answer: "Yes! We offer unlimited revisions to ensure that your screenplay meets your expectations. You’ll be able to review drafts and provide feedback throughout the process."
  },
  {
    question: "How long does it take to complete a screenplay?",
    answer: "The timeline depends on the complexity of your screenplay. After our initial consultation, we’ll provide an estimated delivery time based on your project’s needs."
  },
  {
    question: "Do I own the rights to my screenplay?",
    answer: "Yes! Once the screenplay is completed and approved, you will own all rights to the content. We guarantee original work and complete ownership transfer upon delivery."
  }
];

// ******************************** End FAQ Section ******************************

const LegalGhostwriting = () => {
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
            <title>Affordable Screenplay Ghostwriting Services | AMZ Book Publishing</title>
            <meta name="description" content="Bring your story to the big screen with our Affordable Screenplay Ghostwriting Services—expertly crafted scripts at a price you can afford." />
            <link rel="canonical" href="https://amzbookpublishing.net/affordable-screenplay-ghostwriting-services" />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Screenplay Ghostwriting Services by Expert Screenwriters" />
            <meta property="og:description" content="Need Screenplay ghostwriter? We offer professional Screenplay ghostwriting services at an affordable price. Contact us to hire expert writers for your project." />
            <meta property="og:url" content="https://amzbookpublishing.net/affordable-screenplay-ghostwriting-services" />
            <meta property="og:site_name" content="AMZBookPublishing" />
            <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
            <meta property="article:modified_time" content="2024-08-23T07:34:12+00:00" />
      </Helmet>
      <Header />
      <BreadCrumb
      className="responsive-height"
        title="Screenplay Ghostwriting Services"
        desc={
          <>
Winning in the film business requires impeccable storytelling. That is why AMZ Book Publishing offers Screenplay Ghostwriting Services for filmmakers, producers, and authors looking to tell their stories differently. Tell us your concept, and if you don’t have one, we’ll brainstorm a full screenplay for you and our ghostwriters will deliver a captivating script for your expectations.
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


<div style={{ padding: '30px 0px 0px 0px' }}>
<ImageRightBanner
    heading="Professional Screenplay"
    subHeading=" Ghostwriters for Hire"
    description={
        <>
        The screenplay ghostwriting staff at AMZ Book Publishing composes entertainment pages for different cinematic genres. Ghostwriters at AMZ Book Publishing handle all movie genres, including dramatic scripts, thriller projects, and comical screenplays. Each screenplay stands alone as an original product that carries more content than mere written words.
        </>
    }
    imageSrc={ScreenPlay}
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
        Types of </>}
        subHeading={<>
       Screenplay Content<br/>
       </>}
        heading2="We Specialize In"
        paragraph="At AMZ Book Publishing, we cater to all types of screenplay writing, including:"
        services={services}
      />
      </div>

<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why Choose Our Screenplay "
    subHeading="Ghostwriting Agency"
    description={
        <>
                           When you work with AMZ Book Publishing, you benefit from a team that understands the intricacies of screenplay writing and storytelling:
                            <ul>
                                <li>
                                    <b>Experienced Screenplay Writers:  </b> Our Professional Screenplay Ghostwriters have years of experience in the industry, ensuring your screenplay is expertly crafted and adheres to all required standards.
                                </li>
                                <li>
                                    <strong>Collaborative Writing Process: </strong> We prioritize collaboration, allowing you to be part of the process every step of the way. Your input is vital in creating a screenplay that truly represents your vision.
                                </li>
                                <li>
                                    <strong>Unlimited Revisions: </strong> Your satisfaction is our priority. We offer unlimited revisions to ensure the final screenplay is perfect and ready for production.
                                </li>
                                <li>
                                    <strong>Affordable Rates: </strong>We provide Affordable Screenplay Ghostwriting Services without compromising on quality, making professional screenplay writing accessible to all.
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
export default LegalGhostwriting;


