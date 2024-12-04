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
    title: "Personal Memoirs",
    image: ghostWritingImage,
    description: "Capture your unique journey with a skilled memoir ghostwriter who will help transform your life experiences into an engaging narrative that resonates with readers.",
    // link: "https://www.facebook.com/",
    // buttonPadding :"10px 25px",
    // learnmore:"Click Here",
  },
  {
    title: "Family Memoirs",
    image: designingImage,
    description: "Share your family’s rich history by collaborating with AMZ Book Publishings and together, we will weave cherished stories from multiple generations to preserve your legacy for years to come.",
    
  },
  {
    title: "Professional Memoirs",
    image: bookEditingImage,
    description: "Showcase your career journey with the expertise of a memoir writing coach who can articulate your professional milestones and lessons learned, creating a compelling narrative that highlights your growth and achievements.",
    
  }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
     What Our Process Looks Like

     <br />
    </>
  ),
 
};
// const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Preparing And Researching",
    title: "Preparing And Researching",
    description: "Let’s dive into your memoir together! Through friendly phone calls and helpful questionnaires, we will explore your life, audience, and the marketplace. Plus, we will sift through any drafts, notes, or outlines you have on hand to gather all the juicy details and ensure we are on the right track!"
  },
  {
    image: designprocess2,
    alt: "Strategizing And Outlining",
    title: "Strategizing And Outlining",
    description: "Get ready to roll up your sleeves and dive deep into your memoir! You will meet with your dedicated book-writing team, whether in person or over video chat, for engaging strategy sessions. Together, we will brainstorm, plan, and lay down the groundwork for your story."
  },
  {
    image: designprocess3,
    alt: "Writing",
    title: "Writing",
    description: "It is time to kick off your memoir! When you hire a memoir writer, we make sure your book truly reflects who you are. Through engaging interviews and thoughtful editing, we will capture your unique voice, ensuring every idea and word resonates with your distinct style."
  },
  {
    image: designprocess4,
    alt: "Showcasing Your Masterpiece",
    title: "Showcasing Your Masterpiece",
    description: "We will not only help you with your ghostwritten memoir but stand by you throughout the publishing journey. We will connect you with industry professionals for cover design, formatting, and distribution and make sure your book stands out in the crowded marketplace."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Is there enough in my life to write about?",
    answer: "Absolutely! Our talented ghostwriters are expert interviewers who will help you uncover intriguing anecdotes and moments from your life. Contrary to popular belief, no one's life is 'too boring'; everyone has unique stories and insights just waiting to be shared."
  },
  {
    question: "Do you have any samples?",
    answer: "Definitely! We can provide a few writing samples, with the permission of our clients, so you can see the quality of our work."
  },
  {
    question: "Will my memoir sound like it was written in my voice?",
    answer: "You bet! Our interviews go beyond just gathering information; they are designed to capture your essence. This way, your ghostwriter can craft your memoir in a way that truly reflects your voice and the tone you want."
  },
  {
    question: "Who will be credited as the author of my book?",
    answer: "You will! We do not take any credit as authors or co-authors, nor do we receive royalties. This is your story, and you deserve to own it."
  },
  {
    question: "What if I don’t know what I want to say?",
    answer: "No worries at all! You do not need to have everything figured out; just knowing you have something to share is a great start. Our friendly and approachable ghostwriters are here to ask the right questions to help you uncover and shape your narrative."
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
        <title>Memoir Ghostwriting Services by Experienced Memoir Writers</title>
        <meta name="description" content="Need Memoir ghostwriter? We offer professional Memoir ghostwriting services on affordable price. Meet well experienced biography book and ebook writers." />
        <link rel="canonical" href="https://amzbookpublishing.net/memoir-ghostwriting" />

      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Memoir Ghostwriting"
        desc={
          <>
        Think of our memoir ghostwriting services as finding a creative partner who helps you navigate tough questions and uncover feelings
            {/* <br/>  */}
            you may have never addressed before, ensuring your unique narrative shines through!

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
    heading="Memoir "
    subHeading="Ghostwriting"
    description={
        <>
         Your life story is a tapestry woven from countless experiences, and every day adds another thread. While we gain wisdom from our own journeys, there is a treasure trove of lessons to learn from the stories of those around us, like the tales we hear from our parents and grandparents, who in turn learned from their ancestors. This beautiful cycle of storytelling connects us all! So, why not capture your unique insights and life lessons? 
           <br /><br />
           Working with a ghostwriter for memoir is a fantastic way to preserve your legacy and share your experiences with the world and future generations. Let’s turn your story into something unforgettable!
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
         Memoir <br/>
        Ghostwriters </>}
        heading2="Services"
        paragraph="Our team of highly skilled and capable professionals will weave your stories into words and produce a masterpiece of your life that is worth sharing with the world!"
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
       Writing and publishing your memoir is one of the best ways to share the unique story of your life with the world. At AMZ Book Publishings, we are all about bringing your vision to life and telling your story just the way you’ve always imagined. Our memoir ghostwriting services focus on crafting a personalized narrative that not only meets but exceeds your expectations, making sure that your book finds its rightful place on the shelf.

       <br /><br />
       We pride ourselves on offering affordable and reliable services tailored just for you. So, why wait? Reach out today, and let’s embark on your journey to becoming a published author together!

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


