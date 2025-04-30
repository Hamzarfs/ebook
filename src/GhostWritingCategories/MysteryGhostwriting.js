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
import SecondSection from '../components/home/SecondCarousel';
import officedeskkeyboarddocuments from '../images/officedeskkeyboarddocuments.jpg';
import DesignProcess from '../components/common/DesignProcess';
import ImageRightBanner from '../components/common/ImageRightText';
import ImageLeftBanner from '../components/common/ImageLeftText';
import FictionImage1 from '../images/Mystery1.png';
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
    title: "Detective Stories:",
    image: ghostWritingImage,
    description: "Be it a private investigator or an amateur detective, a protagonist always has to solve the mystery. We develop stories with cases with clever detective work, and thrilling ends."
  },
  {
    title: "Thrillers & Suspense: ",
    image: designingImage,
    description: " Our engaging thrillers are always a page-turner. With tension-building plots, hair-raising twists, and surprises, our audience in the thriller and suspense genre is always captivated."
  },
  {
    title: "Crime Fiction: ",
    image: bookEditingImage,
    description: "For those who wish to tell a story around a crime, hire our ghostwriter for writing mystery books who efficiently fabricate masterful criminal plots, from thefts to blood-curdling murders. We weave tales with spine-chilling crime scenes and immaculate investigations."
  },
  {
    title: "Cozy Mysteries: ",
    image: officedeskkeyboarddocuments,
    description: "For cartoonish, lighthearted mysteries, our cozy ghostwriters create extraordinary stories featuring captivating characters, beautiful locations, and unsolvable yet fascinating mysteries devoid of dark, heavy themes."
  }
];



// ******************************** End SecondSection ******************************


const heading1 = {
    title: (
        <>
           Start Your 
            <br />
        </>
    ),
    highlight: "Mystery Journey Today"
};
const descs = "Ready to hire a mystery ghostwriter and bring your story to life? Our team of mystery writers for hire is here to help you craft a mystery that's as unique and compelling as your life. Contact us today for a free consultation and take the first step in sharing your unforgettable journey with the world.";





// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Our Mystery 
     <br />
    </>
  ),
  highlight: "Ghostwriting Process"
};
const desc = "Our process ensures that your mystery book is written with precision, creativity, and professionalism.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation & Project Setup",
    title: "Initial Consultation & Project Setup",
    description: "We discuss your mystical concept and relate themes and readers through an initial meeting to discover your book vision. The project managers at our company will get every detail about your ideas."
  },
  {
    image: designprocess2,
    alt: "Book Writing & Revisions",
    title: "Book Writing & Revisions",
    description: "The project moves forward after your approval, and we will proceed to select an accomplished mystery ghostwriter for book creation. Our system provides multiple drafts for review and redesign if you want. "
  },
  {
    image: designprocess3,
    alt: "Final Approval & Publishing",
    title: "Final Approval & Publishing",
    description: "We perform final checks during this stage to produce a streamlined book along with clarity. After you approve the final draft we publish it for print as well as for eBook distribution."
  },
  {
    image: designprocess4,
    alt: "Launch & Marketing Support",
    title: "Launch & Marketing Support",
    description: "We have advertising plans to ensure that you reach your intended audience when unveiling your mystery book. With our help, your book will get the attention from promotion to launch."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is mystery ghostwriting?",
    answer: "Mystery ghostwriting involves hiring a professional writer to craft a mystery or crime novel based on your ideas. The ghostwriter will create the manuscript while ensuring your voice and creative direction are reflected in the final product."
  },
  {
    question: "How do I hire a mystery ghostwriter?",
    answer: "To hire a mystery ghostwriter, simply reach out to us for an initial consultation. We’ll discuss your concept, goals, and timeline, and provide you with a custom quote for the project."
  },
  {
    question: "Can I make revisions during the writing process?",
    answer: "Yes! We offer unlimited revisions to ensure that your mystery novel aligns perfectly with your vision. You’ll have the opportunity to review drafts and suggest changes at every stage."
  },
  {
    question: "How long does it take to complete a mystery book?",
    answer: "The timeline depends on the length and complexity of your mystery story. After our initial consultation, we’ll provide a personalized estimate for the completion of your project."
  },
  {
    question: "Do I own the rights to my mystery book?",
    answer: "Yes! Once your mystery book is completed and you approve the final manuscript, you will own all rights to the work. We ensure all content is original and fully transferred to you."
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

      <title>Professional Mystery Ghostwriting Services | AMZ Book Publishing</title>
      <meta name="description" content="AMZ Book Publishing specializes in Professional Mystery Ghostwriting, crafting suspenseful, expertly written stories tailored to your vision." />
      <link rel="canonical" href="https://amzbookpublishing.net/professional-mystery-ghostwriting-services " />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Mystery Ghostwriting Online Services by Mystery Book Writers" />
      <meta property="og:description" content="Need a Mystery ghostwriter? We offer professional Mystery ghostwriting services at an affordable price. Contact us to hire writers remotely for your project." />
      <meta property="og:url" content="https://amzbookpublishing.net/professional-mystery-ghostwriting-services" />
      <meta property="og:site_name" content="AMZBookPublishing" />
      <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
      <meta property="article:modified_time" content="2024-08-23T07:08:16+00:00" />

      </Helmet>
      <Header />
      <BreadCrumb
      className="responsive-height"
        title="Mystery Ghostwriting Services"
        desc={
          <>
         All notable mysteries start through their compelling central concept. Creating fascinating mystery books from ideas poses significant challenges to numerous individuals. We assist authors who possess remarkable mystery concepts yet need professional assistance to find appropriate words through our expert ghostwriter team.

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
    heading="Professional Mystery "
    subHeading="Ghostwriters for Hire"
    description={
        <>
 The experienced mystery storytellers at our company serve as professional ghostwriters because they excel at creating suspenseful stories for reader engagement. Collaborating together we create a specific story outline distinct personality profiles and surprising plot points to guarantee your mystery novel becomes precisely what you had in mind.
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
        Types of </>}
        subHeading={<>
        Mystery <br/>
        Stories</>}
        heading2=" We Specialize In"
        paragraph="Our professional mystery ghostwriting services cover a wide range of subgenres. Here are some examples of the types of mystery stories we create:"
        services={services}
      />
      </div>


<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why you should choose our Mystery Ghostwriting Services?"
    subHeading=""
    description={
        <>
       When you hire a mystery ghostwriter from our agency, you choose high-quality books that engage and thrill readers. 
         <ul>
             <li>
                 <b>Experienced Professionals:</b> Our team of professional mystery ghostwriters has years of experience in helping individuals tell their stories.
             </li>
             <li>
                 <strong>Collaborative Process: </strong> We work closely with you in the whole writing process. Your feedback is important.
             </li>
             <li>
                 <strong>Unlimited Revisions: </strong> We offer unlimited revisions. If you're unsatisfied, we'll work with you to refine the manuscript until it's perfect.
             </li>
             <li>
                 <strong>Affordable Rates: </strong>Our services are not only top-notch but also affordable.
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
export default MysteryGhostwriting;


