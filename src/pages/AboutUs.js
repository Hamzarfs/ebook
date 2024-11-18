// src/pages/About.js
import React,{ useState } from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import CtaButton from '../components/common/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Ghostwritingbg from '../images/aboutus.webp'; // Import the image
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';

import DesignProcess from '../components/common/DesignProcess';
import ImageRightBanner from '../components/common/ImageRightText';
import ImageLeftBanner from '../components/common/ImageLeftText';


import aboutus1 from '../images/aboutus1.webp';

import aboutusdesign1 from '../images/aboutusdesign1.png';
import aboutusdesign2 from '../images/aboutusdesign2.png';
import aboutusdesign3 from '../images/aboutusdesign3.png';
import aboutusdesign4 from '../images/aboutusdesign4.png';
import imagetab from '../images/aboutus2.webp';
import aboutus3 from '../images/aboutus3.webp';

import bookcard1 from '../images/Bookcard1.png';
import bookcard2 from '../images/Bookcard2.png';
import bookcard3 from '../images/Bookcard3.png';





import PopupForm1 from '../components/common/PopupForm';
import BookCards from '../components/AboutUs/BookCards';
import ImageLeftTab from '../components/AboutUs/Imagelefttab';

// ******************************** Start SecondSection ******************************



// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  
  title: (
    <>
Why Choose The AMZ
    </>
    
  ),

  // highlight: "with Powerful Reviews!"
 
};
const description = "A storyteller is best understood by someone who equally applauds the magic of words and recognizes the heart and soul woven into each narrative. ";
const steps = [
  {
    image: aboutusdesign1,
    alt: "Novel Editing",
    title: "Novel Editing",
    description: "Refine your characters, dialogue, and plot to perfect your story. Enhance your vision, we ensure your manuscript is polished and ready to shine."
  },
  {
    image: aboutusdesign2,
    alt: "Video Trailer Production",
    title: "Video Trailer Production",
    description: "Make your book stand out with trendy, engaging trailers. Generate excitement and grab readers’ attention with captivating visuals."
  },
  {
    image: aboutusdesign3,
    alt: "Book Editing",
    title: "Book Editing",
    description: "Make your manuscript publish-ready while honoring your voice. High-quality editing ensures readers connect deeply with your book."
  },
  {
    image: aboutusdesign4,
    alt: "Book Formatting",
    title: "Book Formatting",
    description: "Craft professional layouts for print and digital formats. Enhance readability and captivate readers with polished designs."
  }
  
];

const books = [
  {
    image: bookcard1,
    title: 'Allies in Time',
    rating: '⭐⭐⭐⭐⭐',
    category: 'Series Writing',
  },
  {
    image: bookcard2,
    title: 'Make It Out',
    rating: '⭐⭐⭐⭐⭐',
    category: 'Series Writing',
  },
  {
    image: bookcard3,
    title: 'Blood Honey',
    rating: '⭐⭐⭐⭐⭐',
    category: 'Series Writing',
  },
  {
    image: bookcard1,
    title: 'Another Book',
    rating: '⭐⭐⭐⭐⭐',
    category: 'Novel Writing',
  },
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How much does your audiobook service cost?",
    answer: "This will depend on what you want and how long your book is. After discussing your goals, we’ll provide a detailed quotation that reflects the work to be done."
  },
  {
    question: "Can I be involved in the process of my audiobook?",
    answer: "Absolutely! We really value your input at every step. Nothing is final until you feel it captures your book exactly as you intend."
  },
  {
    question: "How long does an audiobook take to produce?",
    answer: "The time to produce an audiobook depends on your book’s length and the narrator's schedule. We'll keep you updated and ensure you're informed throughout."
  },
  {
    question: "Do you provide support in marketing of an audiobook?",
    answer: "Yes! We outline marketing practices and strategies to help promote your audiobook and reach the right audience."
  },
  {
    question: "Can you help me at the release of the audiobook?",
    answer: "We’re here for you even after the release. Whether you need ongoing support or new marketing strategies, we’re just an email away."
  }
  
  
];


// ******************************** End FAQ Section ******************************

const AboutUs = () => {
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
        title="About Us"
        desc={
          <>
Where Your Writing Dreams Come True
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
    // heading="Book Review "
    // subHeading="Services"
    description={
        <>
<b>We’re your dedicated partners who believe every story deserves to be told and shared with the world. </b>At AMZ Book Publishing, we are committed to empowering authors with the tools and resources to transform their manuscripts into successful, published books.
<br/><br/> We provide comprehensive services that bring your stories to life, from expert editing and captivating cover design to innovative marketing strategies. Whatever your publishing needs, we’ve got you covered every step of the way!



        </>
    }
    imageSrc={aboutus1}
    objectfit="cover"
    imageHeight="300px"
    imageWidth="550px"     // Set width here
    borderRadius="30px"
/>
</div>

<ImageLeftTab
imageleft={imagetab}
objectfit="cover"
 // Set height here
 imageHeight="300px"
imageWidth="600px"     // Set width here

/>

{/*****************  SERVICE Section *****************/}

{/* <div style={{ padding: '0px 0px 30px 0px' }}>
<SecondSection/>
</div> */}


<DesignProcess 
        heading={heading}
        description={description}
        steps={steps}
      />

<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Let’s see the inside full"
    subHeading="overview chapter."
    description={
      <>
Creating a fictional world is an art, and our expert ghostwriters are here to help you perfect it. Whether you have a plot, characters,  just a concept, we transform your vision into a compelling and professionally-written novel.

<br/><br/>
Creating a fictional world is an art, and our expert ghostwriters are here to help you perfect it. Whether you have a plot, characters, or just a concept. Creating a fictional world is an art.

      </>
  }
    imageSrc={aboutus3}
    imageHeight="500px"        // Set height here
    imageWidth=""          // Set width here
    objectfit="cover"          // Set object-fit here
    borderRadius="15px"        // Set border radius here
/>
</div>
<div style={{ padding: '0px 0px 80px 0px' }}>
<BookCards books={books} />
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
export default AboutUs;


