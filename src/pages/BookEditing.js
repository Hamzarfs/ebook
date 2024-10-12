// src/pages/About.js
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/common/BreadCrumb';
import BookService from '../components/BookEditing/BookServices';
import BookProcess from '../components/books/BookProces';
import CtaButton from '../components/books/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import bookeditingbg from '../images/Bookeditingbg.png'; // Import the image
import FAQSection from '../components/Designing/DesignFaq';
import BookEditingServices from '../components/BookEditing/BookEditingServices';
import PopupForm1 from '../components/common/PopupForm';
import designprocess1 from '../images/design-process-1.png';
import designprocess2 from '../images/design-process-2.png';
import designprocess3 from '../images/design-process-3.png';
import designprocess4 from '../images/design-process-4.png';
import DesignProcess from '../components/common/DesignProcess';


// ******************************** Start Design Process Props ******************************


const heading = { 
  title: "Professional ",
  highlight: "Book Editing Services"
};



const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Experienced & Skillful Editors",
    title: "Experienced & Skillful Editors",
    description: "Our team of  editors dives deep into your manuscript, meticulously polishing every detail. We refine your text for clarity and style while ensuring your unique voice shines through so your story is always authentically yours."

  },
  {
    image: designprocess2,
    alt: "Detailed Editing Services",
    title: "Detailed Editing Services",
    description: "With extensive experience in the field, AMZ Book Publishings goes beyond basic book editing. We offer everything from content and plot enhancements to typesetting, formatting, and cover design, making your publishing journey as smooth as possible."
  },
  {
    image: designprocess3,
    alt: "Unlimited Re-Editing",
    title: "Unlimited Re-Editing",
    description: "After plenty of fine-tuning and polishing, we will present you with the first draft. This is just a starting point, giving you a feel for what we can create. We are all ears for any edits or suggestions you have: it is all about making sure the final result aligns with your vision."
  },
  {
    image: designprocess4,
    alt: "Robust Data Security",
    title: "Robust Data Security ",
    description: "Your work is in safe hands with us. We adhere to a strict non-disclosure agreement and safeguard your files so you can confidently share your manuscript, knowing your intellectual property is secure."
  }
];


// ******************************** End Design Process Props ******************************



// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Who will edit my manuscript?",
    answer: "We handpick experienced professionals to ensure every detail of your manuscript is spot-on. Our editors are English speakers with specialized knowledge in various academic fields and publishing. They bring a keen eye for grammar, terminology, and conventions specific to your subject matter, providing thorough assessments and invaluable guidance to help your book reach its full potential."
  },
  {
    question: "What makes your Book Editing service stand out?",
    answer: "We recognize the hard work that goes into crafting your manuscript and know that just a basic proofread will not cut it. At AMZ Book Publishings, we offer a blend of developmental and substantive editing, along with copyediting and proofreading. This comprehensive approach ensures that your book not only shines but also connects effectively with your target audience."
  },
  {
    question: "Is my manuscript secure?",
    answer: "Your manuscript’s confidentiality is our top priority. We ensure all our editors sign non-disclosure agreements to keep your work private. Plus, our secure online system means only your manuscript editor and project manager will see your draft. If needed, we are happy to sign a confidentiality agreement with you before you share anything you want to keep strictly private."
  },
  {
    question: "What background and specializations do your editors have?",
    answer: "We are all about expertise. Our editorial team is made up of professionals who have deep technical knowledge and a thorough understanding of book editing, including the right conventions and terminology."
  }
  ,
  {
    question: "How do you ensure that my manuscript is edited according to my specific needs?",
    answer: "We start by discussing your manuscript's unique requirements and goals. Our editors then tailor their approach to fit your vision, using their subject-matter expertise to provide feedback and improvements that align with your intended message. You will also receive detailed feedback throughout the process, so you are always in the loop and can guide the editing to match your expectations."
  }
];

// ******************************** End FAQ Section ******

// ******************************** End FAQ Section ******************************

const BookEditing = () => {
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
        title="Book Editing Services"
        desc={
          <>
           Take your good writing and transform it into something great with our professional editing services. We will polish your manuscript
            {/* <br /> */}
            until it shines helping you turn your book into something truly exceptional.
          </>
        }
        buttonText="Get a Quote"
        onClick={openModal} // Call openModal on button click
        backgroundImage={bookeditingbg} // Pass the image URL as a prop
      />

      {/* Popup Form */}
      <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />

{/* -------------------End Banner section---------------------- */}

<BookEditingServices/>
<BookService/>
<DesignProcess 
        heading={heading}
        description={description}
        steps={steps}
      />

<CtaButton/>

<FAQSection faqData={faqData} />





          {/* Include the BannerSection component here */}
     
      <Footer/>
    </div>
    
  );
};
export default BookEditing;


