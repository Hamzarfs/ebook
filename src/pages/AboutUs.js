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
import { Helmet } from 'react-helmet-async';

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

];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [

  {
    question: "Can I provide feedback or ask questions during the editing process?",
    answer: "Absolutely! We value our clients' feedback immensely. Our collaborative approach encourages open communication, allowing you to discuss changes with your editor at any stage of the process."
  },
  {
    question: "What file formats do you accept for editing?",
    answer: "We mainly prefer working on Google Docs and MS Word, as they allow easy tracking of changes. If you are comfortable with any other format, feel free to share, and our editors can accommodate you accordingly."
  },
  {
    question: "Do I retain the rights to my book if I publish it with you?",
    answer: "Yes, through our services, you retain all rights to your book. This means you will be in control of where and how it is sold, while you will receive full royalties without having to share ownership with us."
  },
  {
    question: "What types of authors do you work with?",
    answer: "We work with authors of all levels, from first-time writers to seasoned professionals, across various genres, including fiction, non-fiction, and poetry."
  },
  {
    question: "How do you ensure quality in your services?",
    answer: "We maintain high standards through meticulous editing processes, quality design, and strategic marketing plans."
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
      <Helmet>
        <title>About Us - AMZ Book Publishing</title>
        <meta name="description" content="AMZ Book Publishing offers comprehensive book publishing solutions for authors. Let us guide you through every step of the publishing journey with professionalism and expertise." />
        <link rel="canonical" href="https://amzbookpublishing.net/about-us" />
      </Helmet>
      <BreadCrumb
        title="About Us"
        desc={
          <>
Your Partner in Publishing Success
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
    heading="Partnering with You for Publishing Success"
    subHeading="Your Success is Our Priority"
    description={
      <>
At AMZ Book Publishing, we simplify the journey from manuscript to masterpiece. Whether you're a budding author or an experienced writer, our team provides personalized support in editing, formatting, and distribution, ensuring your first book stands out in a competitive market.


<br/><br/>
With a commitment to quality and innovation, AMZ Book Publishing doesn't just publish your book—we position it for success. From eye-catching cover designs to strategic marketing services, we ensure your story reaches its audience, empowering you to achieve your publishing dreams effortlessly.

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


