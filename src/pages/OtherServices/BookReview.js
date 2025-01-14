// src/pages/About.js
import React,{ useState } from 'react';
import BreadCrumb from '../../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import CtaButton from '../../components/common/CtaButton';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Ghostwritingbg from '../../images/Ghostwritingbg.png'; // Import the image
import FAQSection from '../../components/Designing/DesignFaq';
import ContactForm from '../../components/common/ContactForm1';
import SecondSection from '../../components/home/SecondSection';
import DesignProcess from '../../components/common/DesignProcess';
import ImageRightBanner from '../../components/common/ImageRightText';
import ImageLeftBanner from '../../components/common/ImageLeftText';
import FictionImage1 from '../../images/BookReviews1.png';
import fictionwhychoose from '../../images/fictionwhychoose.png';
import ghostWritingImage from '../../images/Ghost Writing.png';
import designingImage from '../../images/Designing.png';
import bookEditingImage from '../../images/book edit.png';
import designprocess1 from '../../images/design-process-1.png';
import designprocess2 from '../../images/design-process-2.png';
import designprocess3 from '../../images/design-process-3.png';
import designprocess4 from '../../images/design-process-4.png';
import PopupForm1 from '../../components/common/PopupForm';
import { Helmet } from 'react-helmet-async';

// ******************************** Start SecondSection ******************************
const services = [
  {
    title: "Targeted Reviewer",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "We connect your book with the right reviewers, ensuring it reaches the most relevant and interested readers through a vast network of influencers and critics."
  },
  {
    title: "Authentic Feedback",
    image: designingImage, // Update this if you have a specific image
    description: "Our team provides honest, constructive feedback to help improve your book and guide future projects."
  },
  {
    title: "Exposure & Credibility",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Positive reviews build credibility on platforms like Amazon and Goodreads, increasing visibility and attracting more readers."
  }
  
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
Maximise Your Book's Potential
    </>
    
  ),

  highlight: "with Powerful Reviews!"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";
const steps = [
  {
    image: designprocess1,
    alt: "Book Strategy",
    title: "Book Strategy",
    description: "We discuss your book's goals, target audience, and vision to create a customized production plan that fits your needs."
  },
  {
    image: designprocess2,
    alt: "Manuscript Prep",
    title: "Manuscript Prep",
    description: "We format and adjust your manuscript for narration, ensuring it's optimized for an engaging audio experience."
  },
  {
    image: designprocess3,
    alt: "Narrator Selection",
    title: "Narrator Selection",
    description: "We select a narrator whose voice matches your book's tone and genre, offering samples to help you choose the best fit."
  },
  {
    image: designprocess4,
    alt: "Audio Production",
    title: "Audio Production",
    description: "We record and edit your audiobook with attention to quality, ensuring the final product meets the highest standards."
  }
  
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

const BookReview = () => {
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
          <title>Book Review Services to Gain Credibility and Exposure </title>
          <meta name="description" content="Need Book Review Services? We offer professional Book Review services to self-published authors at an affordable price. Get a free quote now!" />
          <link rel="canonical" href="https://amzbookpublishing.net/professional-book-review-services" />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Book Review Services to Gain Credibility and Exposure" />
          <meta property="og:description" content="Need Book Review Services? We offer professional Book Review services to self-published authors at an affordable price. Get a free quote now!" />
          <meta property="og:url" content="https://amzbookpublishing.net/professional-book-review-services" />
          <meta property="og:site_name" content="AMZBookPublishing" />
          <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
          <meta property="article:modified_time" content="2024-08-23T07:34:12+00:00" />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Book Review"
        desc={
          <>
Improve the credibility and visibility of your book with our Book Review Services!
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


<div style={{ padding: '30px 0px 100px 0px' }}>
<ImageRightBanner
    heading="Book Review "
    subHeading="Services"
    description={
        <>
At AMZ Book Publishings, we recognize that a well-crafted review could go a long way in making or breaking the reader's choice. Our personalised approach is designed to attach your work to the reviewers who will appreciate your genre and style. It's this approach that we hope your book will be represented at its best strengths and through reviews appealing to a potential reader.
<br/><br/>
We understand the importance of quality reviews in today's cutthroat literary marketplace. We will enable you to receive authentic feedback from your target audience, which can elevate the reputation of your book.
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
     Maximise Your </>}
        subHeading={<>
        Book's Potential <br/>
        with Powerful</>}
        heading2=" Reviews! "
        paragraph="Our authentic reviews build trust and excitement around your book, connect you with your target market, and increase your visibility. "
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
At AMZ Book Publishings, we believe every review tells the story of your book. It is our effort to ensure that your book reaches their ideal readers and creates meaningful communication with them. Useful and positive reviews creates trust but also help increase the visibility of a book because more readers are attracted to it.

<br/><br/>
Working closely with you, we ensure that your book receives just the right amount of attention needed for maximum success. Through our well-structured team, we carefully match your book with reviewers who resonate with the themes and genre. From improving the credibility of your book to increasing its visibility on platforms like Amazon and Goodreads, we take each step that helps your book stand out in the competitive market.

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
export default BookReview;


