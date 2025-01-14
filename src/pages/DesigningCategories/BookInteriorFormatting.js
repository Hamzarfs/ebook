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
import FictionImage1 from '../../images/book-inter.png';
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
    title: "Custom Formatting",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "When it comes to book formatting, our custom interior service is a favorite among authors. It does not matter if you are writing fiction or nonfiction; we can cater to all genres. We believe your story deserves more than just plain text, so we focus on creating dynamic layouts and vibrant images that enhance your narrative. Our team is dedicated to making sure your book looks just the way you envision it!"
  },
  {
    title: "Manuscript Formatting",
    image: designingImage, // Update this if you have a specific image
    description: "Getting your text professionally formatted is crucial for a polished book design. With a clear hierarchy and easy-to-read typeface, we ensure your layout invites readers in. Each part of your manuscript, be it the foreword, dedication, or chapters, receives custom formatting to create that finished look you want. Before we move to print, we will send you a PDF proof for your approval."
  },
  {
    title: "Affordable Options",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Why break the bank when you can have top-notch book interior formatting at prices that will not make you cringe? We offer several flexible plans, so you can pick the one that fits your needs perfectly. Enjoy exceptional quality without the hassle. After all, your book deserves it!"
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    How We Produce Captivating <br/>
    
    </>
  ),
  highlight: "Book Illustrations"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "Let us kick things off with a deep dive into your work and goals. We want to truly understand your vision and preferences, so we will have a thorough discussion. To guide you even further, we will also send over a detailed questionnaire, where you can share specifics like chapter descriptions, scene details, and color requests for each illustration you want to purchase."
  },
  {
    image: designprocess2,
    alt: "Illustrator Recommendations",
    title: "Illustrator Recommendations",
    description: "Once we get a sense of your creative vision, our project managers will match you with an illustrator whose artistic style fits your needs perfectly. If you want to have a say in your illustrator choice, no problem! We can provide examples of our talented artists' work. To give you peace of mind, we always offer guidance and an initial sketch to ensure you feel confident in the direction of your illustrations."
  },
  {
    image: designprocess3,
    alt: "Pair With an Illustrator",
    title: "Pair With an Illustrator",
    description: "Our talented illustrators have a proven track record of creating captivating book illustrations that bring stories to life. After we find the right illustrator for your project, they will whip up an initial sketch to give you a sneak peek of your characters. You will then receive two rounds of unlimited changes, allowing you to fine-tune the illustration until it perfectly matches your vision."
  },
  {
    image: designprocess4,
    alt: "Get Started",
    title: "Get Started",
    description: "Whatever your vision, genre, or target audience may be, we are here to create eye-catching illustrations for your cover or interior pages. Reach out to our team today and discover how we can help bring your book to life!"
  }
];
// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What should go on the front of a book?",
    answer: "The front cover of a book should feature the author's name, the book title, and engaging imagery. These elements work together to create an inviting and informative first impression that draws readers in. Think of the cover as your book’s chance to shine and make an impact before anyone even flips it open."
  },
  {
    question: "Who owns the creative work?",
    answer: "As the author, you retain full ownership of all aspects of your print book. This means you have the creative control to decide how your work is presented and shared with the world. Our role is simply to assist you in formatting the book to make it look as polished and professional as possible."
  },
  {
    question: "What does book formatting mean?",
    answer: "Book formatting involves the visual presentation of your manuscript, including aspects like font size, page color, word count, page numbers, line spacing, and paragraph breaks. It ensures that your text is not only readable but also aesthetically pleasing, creating a comfortable reading experience for your audience. Good formatting can make a significant difference in how your story is perceived."
  },
  {
    question: "What if I want to make changes to the formatted draft you sent?",
    answer: "No worries at all! We offer unlimited formatting changes until you are completely satisfied with the draft we provide. Just keep in mind that this unlimited option applies only to the first draft; once you approve the manuscript, any further adjustments will incur additional fees."
  },
  {
    question: "Can I see more examples of your formatted books?",
    answer: "Absolutely! We would be delighted to share more examples of our formatted books with you. Just reach out to us, and we will provide you with a selection of our work, showcasing the quality and style of formatting you can expect when you choose our services."
  }
];

// ******************************** End FAQ Section ******************************

const BookInteriorFormatting= () => {
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
          <title>Professional Book Formatting and Interior Formatting Services</title>
          <meta name="description" content="Need Book Formatting services? We offer Professional Book Formatting & Interior Design Services at an affordable price. Contact us to hire experts." />
          <link rel="canonical" href="https://amzbookpublishing.net/interior-book-formatting-services " />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Professional Book Formatting and Interior Formatting Services" />
          <meta property="og:description" content="Need Book Formatting services? We offer Professional Book Formatting & Interior Design Services at an affordable price. Contact us to hire experts." />
          <meta property="og:url" content="https://amzbookpublishing.net/interior-book-formatting-services" />
          <meta property="og:site_name" content="AMZBookPublishing" />
          <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
          <meta property="article:modified_time" content="2024-08-23T07:26:32+00:00" />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Book Interior Formatting"
        desc={
          <>
We ensure your interior design is just as captivating as your cover, making your book truly shine and stand out from the crowd.
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
    heading="Book Interior "
    subHeading="Formatting"
    description={
<>
A well-formatted and beautifully designed book is essential for your success as an author. Even if you have poured your heart and soul into your manuscript, it may not receive the attention it deserves without professional formatting from a dedicated book formatting service. 
<br/><br/>
Whether you need eBook formatting or formatting for physical copies, AMZ Book Publishings is here to help. We offer top-notch book formatting services that ensure your readers have the best possible experience with your work. Let us take care of the details so you can focus on what you do best: telling your story.
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
       Professional </>}
        subHeading={<>
        Book Interior   <br/>
        Formatting </>}
        heading2="Services"
        paragraph="Let us help you transform your manuscript into a visually stunning masterpiece that captivates your readers from start to finish!"
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
Boost your writing with a professionally designed and formatted book interior. At AMZ Book Publishings, we draw on decades of collective experience to help you create a layout that resonates with your readers and enhances their reading experience.
<br/><br/>
We are passionate about turning your manuscript into a polished masterpiece. Our team will work closely with you to unlock your book's potential, ensuring that every page reflects your unique voice and vision. Contact us today to learn more about how we can help transform your work into something truly exceptional.
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
export default BookInteriorFormatting;


