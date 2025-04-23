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
import FictionImage1 from '../images/Historical1.png';
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
import Queries from '../components/common/Queries';

// ******************************** Start SecondSection ******************************

const services = [
  {
    title: "Historical Non-Fiction",
    image: ghostWritingImage,
    description: "From biographies to factual accounts of significant events, we help you write non-fiction books that are both informative and compelling."
  },
  {
    title: "Historical Fiction",
    image: designingImage,
    description: "The writers at our firm excel at creating historical fiction, which combines historical events with imaginative storytelling to create a compelling narrative. Our writing service guides you in developing endearing personality-driven figures in environments derived from genuine historical occurrences."
  },
  {
    title: "Memoirs and Biographies",
    image: bookEditingImage,
    description: "Whether you’re documenting the life of a historical figure or recounting your own personal history, our team ensures your story is told with authenticity and emotional depth."
  }
];


// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
     Our Historical 
     {/* <br /> */}
    </>
  ),
  highlight: "Book Writing Process"
};
const desc = "We follow a thorough and collaborative process to ensure your historical book is written with precision, clarity, and authenticity:";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation & Project Setup",
    title: "Initial Consultation & Project Setup",
    description: "We discuss your historical concept and relate themes and readers through an initial meeting to discover your book vision. The project managers at our company will acquire every vital detail about your ideas, your writing style choices, and the desired deadline."
  },
  {
    image: designprocess2,
    alt: "Historical Book Writing & Revisions",
    title: "Historical Book Writing & Revisions",
    description: "The project moves forward after your approval, and we will proceed to select an accomplished historical ghostwriter for book creation. Our system provides multiple drafts for review and redesign if you want. "
  },
  {
    image: designprocess3,
    alt: "Final Approval & Publishing",
    title: "Final Approval & Publishing",
    description: "We perform final checks during this stage to produce a streamlined book along with clarity. After you approve the final draft we publish it for print as well as for eBook distribution."
  },
  {
    image: designprocess4,
    alt: "Launch & Marketing Support",
    title: "Launch & Marketing Support",
    description: "We have advertising plans to ensure that you reach your intended audience when unveiling your historical book. With our help, your book will get the attention it deserves, from promotion to launch."
  }
];



// ******************************** End Design Process Props ******************************


const heading1 = {
    title: (
        <>
            Start Your Historical 
            <br />
        </>
    ),
    highlight: "Book Journey Today"
};
const descs = "Are you ready to bring your historical story to life? Whether you’re writing about a significant event, historical figures, or an entire era, our team of professional historical ghostwriters is here to help. Contact us today for a free consultation and begin your journey toward publishing a captivating historical book!";


// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is historical book ghostwriting?",
    answer: "Historical book ghostwriting involves hiring a professional writer to craft a manuscript based on your historical ideas or stories. The ghostwriter will work under your direction, ensuring the book reflects your voice and vision while accurately depicting historical events."
  },
  {
    question: "How do I hire a ghostwriter for a historical book?",
    answer: "To hire a historical ghostwriter, contact us for an initial consultation. We will discuss your vision, subject matter, target audience, and goals for the project. From there, we provide a custom quote and timeline for your project."
  },
  {
    question: "Can I make revisions during the writing process?",
    answer: "Yes! We offer unlimited revisions to ensure your historical book is exactly as you envision it. You’ll have the opportunity to review drafts and provide feedback at every stage."
  },
  {
    question: "How long does it take to complete a historical book?",
    answer: "The timeline for completing a historical book depends on the complexity and length of the manuscript. After our consultation, we will provide a more accurate estimate based on your specific needs."
  },
  {
    question: "Do I own the rights to my historical book after completion?",
    answer: "Yes! Once the book is completed and you approve the final manuscript, you will retain all rights to the book. We ensure that all work is original and custom-tailored to your vision."
  }
];





// ******************************** End FAQ Section ******************************

const HistoryGhostwriting = () => {
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
          <title>Historical Ghostwriting Services | AMZ Book Publishing</title>
          <meta name="description" content="AMZ Book Publishing offers expert historical ghostwriting, blending meticulous research with captivating storytelling to bring history to life." />
          <link rel="canonical" href="https://amzbookpublishing.net/historical-ghostwriting-services "/>
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Historical Book Ghostwriting Services by History Ghostwriters" />
          <meta property="og:description" content="Need a History ghostwriter? We offer affordable history book writing services at an amazing price. Contact us to hire history writers remotely for your project." />
          <meta property="og:url" content="https://amzbookpublishing.net/historical-ghostwriting-services" />
          <meta property="og:site_name" content="AMZBookPublishing" />
          <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
          <meta property="article:modified_time" content="2024-08-23T07:04:22+00:00" />
      </Helmet>
      <Header />
      <BreadCrumb
       className="responsive-height"
        title="Historical Book Ghostwriting Services: Bringing the Past to Life"
        desc={
          <>
         AMZ transforms historical concepts alongside stories from characters and events into written materials that present alive historical elements. Ghostwriters under our company develop captivating manuscripts that cover every type of historical content, including events alongside biographies and historical fiction compositions.

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
    heading="Professional Historical "
    subHeading="Ghostwriters for Hire"
    description={
        <>
       Authors must blend historical facts with excellent storytelling ability beyond simple event retelling to write a compelling historical book. Historical ghostwriters at our organization prove expertise in research and storytelling while maintaining the accuracy of facts. Ghostwriters enable you to develop books that blend historical accuracy with compelling storytelling elements between historical facts and compelling plots with interesting characters. Historical ghostwriters will help tell past stories through deep analysis and emotional storytelling that appeals to current readers.
        </>
    }
    imageSrc={FictionImage1}
    objectfit="contain"
    imageHeight="400px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
/>
</div>


{/* <div style={{ padding: '0px 0px 30px 0px' }}>
<SecondSection/>
</div> */}
<DesignProcess 
        heading={heading}
        description={
            <div className="custom-description">
                {desc}
            </div>
        }
        steps={steps}
      />
      {/*****************  SERVICE Section *****************/}
<div>
<SecondSection 
        buttonLabel="S e r v i c e s"
        heading1={ <>
        Creating Historical </>}
        subHeading={<>
         Books for <br/>
         Every</>}
        heading2=" Genre"
        paragraph="Our historical ghostwriting agency specializes in a variety of genres, ensuring your historical book fits perfectly within the framework you desire. Whether you're a historian, novelist, or aspiring writer, we can help you craft the perfect historical manuscript:"
        services={services}
      />
      </div>

<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why Choose Our Affordable Historical Ghostwriting Company?"
    subHeading=""
    description={
        <>
        At AMZ Book Publishing, we offer high-quality historical ghostwriting services that are affordable without compromising on excellence. Here’s why clients choose us for their historical book projects:
         <ul>
             <li>
                 <b>Experienced Historical Writers: </b> Our team consists of skilled writers with a deep understanding of history, ensuring your book is both factual and engaging.
             </li>
             <li>
                 <strong>Collaborative Process: </strong>We work closely with clients to ensure their vision is realized. Your feedback is key, and we ensure your ideas, tone, and historical accuracy are reflected throughout the manuscript.
             </li>
             <li>
                 <strong>Unlimited Revisions: </strong>We offer unlimited revisions during the writing process to ensure that the final manuscript meets your expectations.
             </li>
             <li>
                 <strong>Affordable Rates: </strong>Our affordable history book writing services make it possible for all aspiring authors to share their historical knowledge and stories with the world.
             </li>
             <li>
                 <strong>On-Time Delivery: </strong>We respect deadlines and work diligently to ensure timely delivery without sacrificing the quality of the work.
             </li>
         </ul>
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
    <Queries
                heading={heading1}
                description={
                    <div className="custom-description">
                        {descs}
                    </div>
                }
                steps={steps}
            />
         <ContactForm/>

      <Footer/>
    </div>
  );
};
export default HistoryGhostwriting;


