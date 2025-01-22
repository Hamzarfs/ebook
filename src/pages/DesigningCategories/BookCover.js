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
import FictionImage1 from '../../images/fictiongimg1.png';
import BookCoverDesign from '../../images/BookCoverDesign.jpg';
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
    title: "book cover design",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Our talented team creates stunning book cover designs tailored to every genre. Whether your work is rich fiction or inspiring nonfiction, we highlight its unique essence. We collaborate closely with you to ensure your teaser grabs attention and leaves readers eager for more. Let us help you showcase your book in a captivating way!"
  },
  {
    title: "Amplify Your book cover design",
    image: designingImage, // Update this if you have a specific image
    description: "Maximize your visibility with our expertly crafted book cover designs, designed to be easily shareable across all your favorite social media platforms! Whether it is YouTube, Facebook, Instagram, Twitter, TikTok, or beyond, our teasers make a splash and get people talking. They are not just eye-catching; they are strategically created to engage viewers and encourage sharing. Let us help you turn your book into the next trending topic online!"
  },
  {
    title: "Elevate Your book cover design",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Get ready for a captivating book cover design that combines breathtaking visuals, enchanting music, and a professional voice-over. We focus on creating a polished presentation that not only grabs attention but also enhances your book's overall appeal. Each element is thoughtfully designed to resonate with your audience and leave them eager to dive into your story."
  }
];
// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
    Crafting Engaging
    
    </>
  ),
  highlight: "Book Cover Design"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";
const steps = [
  {
    image: designprocess1,
    alt: " Your Vision",
    title: " Your Vision",
    description: "We start by diving deep into your book’s essence and your unique vision. This involves discussions about the themes, characters, and the emotions you want to evoke. By getting to know your story inside and out, we can create teasers that truly reflect your narrative."
  },
  {
    image: designprocess2,
    alt: " Compelling Content",
    title: " Compelling Content",
    description: "Next, our talented team crafts engaging content that captures the heart of your story. We focus on key moments, intriguing quotes, and captivating visuals that will resonate with your target audience. This step is all about making sure your teaser feels authentic and enticing."
  },
  {
    image: designprocess3,
    alt: " Eye-Catching Visuals",
    title: " Eye-Catching Visuals",
    description: "Once the content is set, we move on to creating stunning visuals that complement the text. Our designers carefully choose colors, typography, and images that embody the tone of your book. The goal is to make your teaser visually striking so it grabs attention and sparks interest."
  },
  {
    image: designprocess4,
    alt: "Finalizing & Launching",
    title: "Finalizing & Launching",
    description: "Finally, we refine the teaser based on your feedback, ensuring it aligns perfectly with your vision. Once you are thrilled with the result, we prepare it for launch across your chosen platforms. With your teaser ready, you will be set to captivate your audience and generate buzz for your upcoming release!"
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is a book cover design design?",
    answer: "A book cover design design is a series of targeted marketing activities designed to promote a book to a specific audience. The goal is to increase visibility, generate buzz, and ultimately drive sales for the book."
  },
  {
    question: "Is a book cover design design important?",
    answer: "Absolutely! A well-crafted book cover design can create excitement and anticipation around your book, helping it stand out in a crowded market. It engages potential readers and gets them eager to dive into your story, increasing the chances of sales."
  },
  {
    question: "Will my book cover design design have images and music?",
    answer: "Yes, it will! A great book cover design combines stunning visuals and captivating music to create an immersive experience that draws in your audience. This multimedia approach not only enhances engagement but also leaves a lasting impression."
  },
  {
    question: "Can you incorporate my ideas into a book cover design?",
    answer: "Definitely! Your ideas are essential to the process. We will work closely with you to ensure that your vision and unique voice are woven into the teaser, making it a true reflection of your book."
  },
  {
    question: "Will my book cover design be confidential?",
    answer: "Absolutely! We prioritize your privacy and confidentiality. Your ideas and materials will be kept secure throughout the entire process, so you can focus on what matters most: bringing your story to life."
  }
];
// ******************************** End FAQ Section ******************************
const BookTeaser = () => {
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
        <title>Custom Book Cover Design Services | AMZ Book Publishing</title>
        <meta name="description" content="Need a book cover designer? We offer professional book cover design services for self-published authors at affordable prices." />
        <link rel="canonical" href="https://amzbookpublishing.net/professional-book-cover-design-services " />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Custom Book Cover Design Services | AMZ Book Publishing" />
        <meta property="og:description" content="Need a book cover designer? We offer professional book cover design services for self-published authors at affordable prices." />
        <meta property="og:url" content="https://amzbookpublishing.net/professional-book-cover-design-services" />
        <meta property="og:site_name" content="AMZBookPublishing" />
        <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
        <meta property="article:modified_time" content="2024-08-23T07:06:24+00:00" />


      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Book Cover Design"
        desc={
          <>
Our book cover designs are designed to spark curiosity and excitement, drawing readers in with compelling visuals and enticing snippets.
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
    heading="Book Cover "
    subHeading="Design"
    description={
        <>
Is your book getting lost in the crowd, struggling to stand out among countless others? Do you want to capture more readers' attention and give your book that extra edge it needs? At AMZ Book Publishings, we understand that a well-crafted book cover design can make all the difference between a book that gets noticed and one that fades into the background.

<br/><br/>
That is why we are here to help you bring your book into the spotlight with a visually stunning and emotionally impactful teaser. Our team of professionals specializes in creating teasers that not only captivate audiences but also build excitement and buzz around your story.
        </>
    }
    imageSrc={BookCoverDesign}
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
       Create  </>}
        subHeading={<>
          Buzz With  <br/>
          Captivating  </>}
        heading2="Book Cover Design"
        paragraph="A book cover design engages your audience and highlights your story visually. Our team creates captivating teasers that leave viewers eager to read more!"
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
We know that a great book deserves an equally captivating introduction. That is why we create powerful book cover designs that bring your story to life, grabbing the attention of your audience from the very first moment. Our team of experts specializes in turning your words into a visually stunning and dynamic teaser that captures the essence of your book. 
<br/><br/>
Whether it is the suspense, the drama, or the heart of your story, we know how to craft a teaser that hooks viewers and keeps them wanting more. Let us help you showcase your work in a way that leaves a lasting impact. Experience the power of a book cover design with AMZ Book Publishings, and watch as your story comes to life like never before.
      </>
  }
    imageSrc={BookCoverDesign}
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
export default BookTeaser;


