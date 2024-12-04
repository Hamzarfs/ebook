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
    title: "Video Book Teasers",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Our experienced team of video book teasers creates excitement for any genre. Whether it's a thriller mystery or heartfelt romantic moment, our video will grip the spirit of your work."
  },
  {
    title: "Boost Your Book",
    image: designingImage, // Update this if you have a specific image
    description: "Book video teasers are all the rage on social media! We craft video book teasers that you can share on all your favorite social media sites, from YouTube and Instagram to TikTok and more."
  },
  {
    title: "Amazing Video Teaser",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Get ready for that blockbuster video teaser, which is great in visuals, full-option soundtracks, and great professional voice-overs. "
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
Crafting Compelling Video
    </>
  ),
  highlight: "Book Trailers"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Vision Understanding",
    title: "Vision Understanding",
    description: "We explore your book's themes, characters, and emotions to craft trailers that reflect your narrative."
  },
  {
    image: designprocess2,
    alt: "Compelling Content",
    title: "Compelling Content",
    description: "Our creative team selects key scenes and visuals to authentically capture your book's message."
  },
  {
    image: designprocess3,
    alt: "Brilliant Visuals",
    title: "Brilliant Visuals",
    description: "We design captivating graphics, aligning colors and imagery with your book's tone to grab attention."
  },
  {
    image: designprocess4,
    alt: "Final Launch",
    title: "Final Launch",
    description: "After refining the trailer, we prepare it for a successful launch across your chosen platforms."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How long will the trailer be for the video?",
    answer: "Generally, our trailers are between 30 seconds and two minutes in length, depending on how complex your book is and the kind of site you are using it on."
  },
  {
    question: "Can I give input at various points along the way?",
    answer: "Absolutely. We welcome your input throughout the process to make sure that this trailer reflects your vision."
  },
  {
    question: "Do I require different trailers for various platforms?",
    answer: "We offer you various packages of your trailer customized to suit different platforms and audience groups."
  },
  {
    question: "How do I promote my trailer video?",
    answer: "We'll give some ideas on how to distribute it, including social campaign ideas, email marketing, and website integration."
  },
  {
    question: "May I use it for promotional activities prior to its launch date?",
    answer: "Yes! A video trailer is a fantastic buzz generator before the book comes out, increasing anticipation and getting early readers."
  }
];


// ******************************** End FAQ Section ******************************

const VideoBookTrailers = () => {
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
        <title>Engaging Video Book Trailer Services to Promote Your Book</title>
        <meta name="description" content="Need Video Book Trailers Services? We offer professional and engaging Video Book Trailers creatives for self-published authors on affordable price." />
        <link rel="canonical" href="https://amzbookpublishing.net/video-book-trailers" />

      </Helmet>
      <Header />
      <BreadCrumb
        title="Video Book Trailers"
        desc={
          <>
Capture the imagination of your readers and captivate their mind with our Video Book Trailers!
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
    heading="Book "
    subHeading="Marketing"
    description={
        <>
Do you have the fear of your book getting drowned in the crowd and, hence, finding it difficult to gain prominence over millions of other books? Or, do you want to grasp more eyeballs for your book and give that added oomph it needs? At AMZ Book Publishings, we realize that tapping into today's trends can make all the difference in creating a video book trailer that stands out. That is why we are here to help you shine with a visually stunning and trendy book trailer.
<br/><br/>
Our skilled team specialize in making videos that can command audiences and connect with popular themes and styles. This will skyrocket the excitement and buzz around your story. So, contact us to make your book an interesting visual experience resonating deep down in readers' hearts! 
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
        Create Buzz With </>}
        subHeading={<>
        Our Captivating <br/>
        Video </>}
        heading2="Book Trailers!"
        paragraph="A video book trailer is truly remarkable to engage your audience and promote your book visually. Our team create outstanding book trailers which keeps the readers hooked for more!"
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
Imagine your video book trailer in which exactly the sense is delivered to the reader's eyes, enticing readers before they even turn a page without having to spend a dollar upfront. Our service allows you to see your trailer first before it is released to the public so you can be sure it meets your creative vision perfectly.

<br/><br/>
No more guesswork, miscommunication, or endless adjustments. Our trailers are built for authors specifically to connect you with readers, build anticipation, and stand out among the crowd. You will know exactly how your trailer is going to look and feel with expert support.
Ready to hook your audience? Find out your options and let us bring your story to life today!

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
export default VideoBookTrailers;


