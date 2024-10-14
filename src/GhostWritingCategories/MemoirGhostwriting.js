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
  highlight: "Non-Fiction Ghostwriting"
};
// const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Brainstorming",
    title: "Brainstorming",
    description: "We begin by collaborating with you to understand your vision and the story you want to tell. Together, we brainstorm ideas, shaping the plot, characters, and setting to bring your concept to life."
  },
  {
    image: designprocess2,
    alt: "Writing",
    title: "Writing",
    description: "Once the outline is set, our talented science fiction writers dive into crafting the first draft. We focus on developing multi-dimensional characters, painting vivid worlds, and weaving in dialogue that draws readers in from the start."
  },
  {
    image: designprocess3,
    alt: "Editing",
    title: "Editing",
    description: "Once the draft is ready, we jump into the editing phase. Our sharp-eyed editors comb through the text, catching grammar, spelling, and punctuation hiccups while also keeping an eye out for any plot holes, character inconsistencies, or theme misalignments."
  },
  {
    image: designprocess4,
    alt: "Publishing",
    title: "Publishing",
    description: "Once the final draft is polished and ready to go, we team up with our clients to bring their stories to life. With a solid network of science fiction publishers at our disposal, we handle everything from eye-catching cover designs to seamless book formatting and distribution."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is science fiction writing?",
    answer: "Science fiction, or sci-fi for short, is all about exploring futuristic worlds and the consequences of technological advancements. What is great about sci-fi is that it plays by the rules of science. If a story starts leaning into magic or supernatural forces, then we are stepping into the realm of fantasy!"
  },
  {
    question: "What is fiction?",
    answer: "Fiction is like a big umbrella covering all sorts of creative writing that is not based on real-life events. It includes a ton of genres, each with its own flavor and themes. Even though these genres can be really different from one another, they often share some common threads that help us categorize them."
  },
  {
    question: "What are three common mistakes to avoid when writing science fiction?",
    answer: "When it comes to writing sci-fi, watch out for these three common traps: skipping on world-building, creating flat characters, and losing sight of the science! Building a believable universe, crafting rich characters, and keeping your scientific concepts grounded are all keys to a captivating story."
  },
  {
    question: "What are the different types of science fiction ghostwriting?",
    answer: "There is a whole world of science fiction ghostwriting to explore! You have hard sci-fi, which sticks closely to realistic technology and science. Then there is soft sci-fi, which dives deep into character development and emotional stories. And do not forget speculative fiction, which stretches the limits of what we know about science and society!"
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
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Memoir Ghostwriting"
        desc={
          <>
        Think of our memoir ghostwriting services as finding a creative partner who helps you navigate tough questions and uncover feelings
            <br/> 
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
    heading="Memoir"
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
       Crafting a science fiction story that keeps its logic intact can be quite the challenge, especially when you are diving into tricky concepts like time travel, alternate timelines, or parallel universes. Nobody wants to trip over plot holes or contradictions that leave readers scratching their heads!
       <br /><br />
       That is where our skilled fiction ghostwriters come in. With their expertise in the genre, they will weave a high-quality science fiction tale that is consistent, original, and believable. We collaborate closely with you to capture your vision, goals, and preferences and offer affordable ghostwriting services that will not break the bank.<br /><br />
       Remember, it is your story; we are just here to put it into words!
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


