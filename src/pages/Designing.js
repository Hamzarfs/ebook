// src/pages/About.js
import React,{ useState } from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BreadCrumb from '../components/common/BreadCrumb';
import DesigningServices from '../components/Designing/DesigningServices'
import DesignProcess from '../components/common/DesignProcess';
import BookCoverSwiper from '../components/Designing/BookCoverSwipper';
import ImageTextBanner from '../components/common/ImageTextBanner';
import CtaButton from '../components/common/CtaButton';
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import breadcrumbbg from '../images/breadcrumbbg.png'; // Import the image
import frame10 from '../images/Frame 10.png'; // Adjust the path as necessary
import frame11 from '../images/Frame 11.png'; // Adjust the path as necessary
import frame12 from '../images/Frame 12.png'; // Adjust the path as necessary
import designprocess1 from '../images/design-process-1.png';
import designprocess2 from '../images/design-process-2.png';
import designprocess3 from '../images/design-process-3.png';
import designprocess4 from '../images/design-process-4.png';
import PopupForm1 from '../components/common/PopupForm';



<Header/>

// ******************************** Start Design Process Props ******************************

const heading = {
  title: "How We Create ",
  highlight: "Your Masterpiece"
};

const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Project Discussion",
    title: "Brainstorming",
    description: "We believe in a collaborative and creative journey to bring your vision to life. With your guidance, we will brainstorm ideas together and dive into the details of what you want to accomplish, making sure every step reflects your goals perfectly."

  },
  {
    image: designprocess2,
    alt: "Design Research",
    title: "Research",
    description: "Once we have nailed down the creative direction, our team dives deep into research, gathering all the necessary information. This way, we ensure that every word we write is not only accurate but also engaging, bringing your subject to life with confidence and flair."
  },
  {
    image: designprocess3,
    alt: "First Sample Layout",
    title: "First Sample Layout",
    description: "After plenty of fine-tuning and polishing, we will present you with the first draft. This is just a starting point, giving you a feel for what we can create. We are all ears for any edits or suggestions you have: it is all about making sure the final result aligns with your vision."
  },
  {
    image: designprocess4,
    alt: "Final Design Delivery",
    title: "Final Design Delivery ",
    description: "After plenty of hard work and collaboration, our combined creativity brings the final product to life. We will send you the finished copy for your approval, and once you are happy with it, Voilà, we are all set!"
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start ImageTextBanner ******************************


const contentItems = [
  {
      heading: "Captivating Covers",
      paragraph: "First impressions matter, especially when it comes to your book. Even if you have written the next big bestseller, readers will not pick it up unless the cover demands their attention. In a sea of titles on the shelf, or in an online store, you need a design that makes your book impossible to ignore. Let AMZ Book Publishers create a cover that pops, both in print and online.",
      imgSrc: frame10,
      imgAlt: "Book Cover Design",
      flexDirection: "normal"
  },
  {
      heading: "Creative Book Design",
      paragraph: "When we take on your book, you can trust that we are handling the entire interior design, from the layout to the visual elements that enhance the reading experience. We carefully craft everything to ensure it aligns with your vision. Once the design is ready, we will gather your feedback to perfect the look, creating a custom template for the final typesetting.",
      imgSrc: frame11,
      imgAlt: "Book Design",
      flexDirection: "reverse"
  },
  {
      heading: "Personalized Illustrations",
      paragraph: "Every book has its own story to tell, and the right illustrations bring it to life. The good news? We have got you covered with custom illustrations that captivate readers from the first glance!",
      imgSrc: frame12,
      imgAlt: "Book Illustration",
      flexDirection: "normal"
  },
];

// ******************************** End ImageTextBanner ******************************


// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Will I own the book design files?",
    answer: "Yes! Once your project is done, you will receive the final PDFs ready for print or eBook publishing, plus the original design files for any future updates or changes."
  },
  {
    question: "How long does the book design process take?",
    answer: "On average, a full project, which includes cover design, page layout, typesetting, proofreading, edits, and eBook formatting, can take around 2-3 months, maybe more depending on complexity. If you are only looking for specific services or your project is simpler, it will likely take less time. Do you have a tight deadline? Let us know, and we will do our best to work with it!"
  },
  {
    question: "What is the difference between page design and typesetting?",
    answer: "Page design is all about the visual layout, including how images, text, and other elements are arranged on each page. Typesetting, on the other hand, focuses on the organization and formatting of the text itself, ensuring readability and consistency throughout your book. Both play a big role in creating a professional and engaging final product."
  },
  {
    question: "Do you offer design services for both print books and eBooks?",
    answer: "Absolutely! Whether you are aiming for a stunning print edition or a sleek digital eBook, we have you covered. Our design services cater to both formats, ensuring your book looks amazing on any shelf,  virtual or physical!"
  }
  ,
  {
    question: "Why is strong book design so crucial?",
    answer: "A compelling book design is not just about looking pretty; it is your book’s first impression and a key player in drawing readers in. A well-crafted design grabs attention, reflects the essence of your story, and sets the tone for the reading experience. It can make the difference between a book that stands out on a crowded shelf and one that gets overlooked. In short, strong design helps your book shine and invites readers to explore your world."
  }
];

// ******************************** End FAQ Section ******************************

const PageHeading = () => {
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
        <title>Book Designing Services for Authors by Top Book Designers</title>
        <meta name="description" content="Need book designing services? We are expert in ebook and book cover design and book layout design. Our professional designers cover every style and genre."/>
        <link rel="canonical" href="https://amzbookpublishing.net/designing" />

      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header/>
      <BreadCrumb
        title="Book Designing Services"
        desc={
          <>
            Catch every reader’s eye with custom interior design and professional
        <br />
        typesetting that makes reading a truly enjoyable experience!
          </>
        }
        buttonText="Get a Quote"
        onClick={openModal} // Call openModal on button click
        backgroundImage={breadcrumbbg} // Pass the image URL as a prop
      />

      {/* Popup Form */}
      <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />




<DesigningServices/>
<BookCoverSwiper/>
<DesignProcess 
        heading={heading}
        description={description}
        steps={steps}
      />



<ImageTextBanner 
    title="Changing The Landscape Of" 
    subtitle="Book Designing" 
    description={
        <>
           With your creativity and our professional touch, we will craft a masterpiece<br />
           that readers will not be able to put down!

        </>
    } 
    contentItems={contentItems} 
/>



<CtaButton/>
<FAQSection faqData={faqData} />
<ContactForm/>


       
          {/* Include the BannerSection component here */}
    
      
      
      <Footer/>
    </div>
      
  );
};
export default PageHeading;


