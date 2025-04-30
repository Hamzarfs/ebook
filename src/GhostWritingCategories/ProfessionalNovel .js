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
import SecondSection from '../components/home/SecondCarousel';
import officedeskkeyboarddocuments from '../images/officedeskkeyboarddocuments.jpg';
import DesignProcess from '../components/common/DesignProcess';
import ImageRightBanner from '../components/common/ImageRightText';
import ImageLeftBanner from '../components/common/ImageLeftText';
import ghostWritingImage from '../images/Ghost Writing.png';
import fictionwhychoose from '../images/fictionwhychoose.png';
import NovelExpert from '../images/NovelExpert.jpg';
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
    title: "Fiction Novels",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "From science fiction to romance, thriller, fantasy, and literary fiction, we craft captivating stories that keep readers hooked from start to finish."
  },
  {
    title: "Non-fiction Novels: ",
    image: designingImage, // Update this if you have a specific image
    description: "For authors looking to tell real stories, we help create non-fiction novels that are informative, inspiring, and impactful."
  },
  {
    title: "Historical Novels: ",
    image: bookEditingImage, // Update this if you have a specific image
    description: "We specialize in writing historical novels that are both accurate and engaging, bringing past events and characters to life."
  },
  {
    title: "Memoirs & Biographies: ",
    image: officedeskkeyboarddocuments, // Update this if you have a specific image
    description: "We assist authors in writing compelling memoirs or biographies, capturing personal stories with authenticity and emotion."
  }
];


// ******************************** End SecondSection ******************************



const heading1 = {
    title: (
        <>
           Start Your Novel 
            <br />
        </>
    ),
    highlight: "Ghostwriting Journey Today"
};
const descs = "Ready to bring your novel to life with the help of a Professional Novel Ghostwriting Service? AMZ Book Publishing offers expert Novel Ghostwriting Services to help you turn your ideas into a captivating, well-written manuscript. Whether you're just starting or need assistance finishing your book, our team is here to support you. Contact us today for a free consultation and start your journey toward becoming a published author.";






// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Our Novel 
     <br />
    </>
  ),
  highlight: "Ghostwriting Process"
};
const desc = "Our process ensures that your novel is written with precision, creativity, and professionalism. ";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation & Project Setup",
    title: "Initial Consultation & Project Setup",
    description: "Our first stage relies on focused dialogue because we work with you to identify the core components that make your short story framework and every fundamental requirement. Our project managers at our company need to receive essential information regarding your writing style along with your personal preferences to produce an accurate representation of your creative vision. "
  },
  {
    image: designprocess2,
    alt: "Writing & Revisions",
    title: "Writing & Revisions",
    description: "Novel Writer working at AMZ with experience in novel writing translating your approved concept into professional publications. Your story gets multiple analyses during ghostwriting because you can offer suggestions that improve the outcome throughout the development process."
  },
  {
    image: designprocess3,
    alt: "Final Approval & Delivery",
    title: "Final Approval & Delivery",
    description: "Our team thoroughly checks the story for smooth reading while you assess its content until you approve it. Your approval of the last draft allows us to deliver the finished content, which can be used for publication or as an asset for personal purposes."
  },
  {
    image: designprocess4,
    alt: "Ongoing Support & Publishing Guidance",
    title: "Ongoing Support & Publishing Guidance",
    description: "When your novel is ready to go, we help with marketing so you can start generating buzz and reaching your audience. We also assist with promotion strategies so you can get your book to the right target market and allow it to leave a lasting impression."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What are Novel Ghostwriting Services?",
    answer: "Novel ghostwriting services involve hiring a professional writer to create a novel on your behalf. The content is written in your style, and you receive credit for the final product."
  },
  {
    question: "How do I hire a Novel Ghostwriter?",
    answer: "To hire a Novel Ghostwriter, contact us for an initial consultation. We will discuss your vision, genre, and goals for the novel, and provide a custom quote and timeline for your project."
  },
  {
    question: "Can I make revisions during the writing process?",
    answer: "Yes! We offer unlimited revisions throughout the process, allowing you to provide feedback and ensure the novel reflects your vision every step of the way."
  },
  {
    question: "How long does it take to complete a novel?",
    answer: "The timeline depends on the length and complexity of your novel. After our initial consultation, we will provide an estimated timeline based on the details of your project."
  },
  {
    question: "Do I own the rights to my novel?",
    answer: "Yes! You will own all rights to your novel once it is completed and approved. We guarantee original work and full ownership transfer upon final approval."
  }
];

// ******************************** End FAQ Section ******************************

const LegalGhostwriting = () => {
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
                <title>Professional Novel Ghostwriting Services | AMZ Book Publishing</title>
                <meta name="description" content="Get a professionally written novel with AMZ Book Publishing! Our Professional Novel Ghostwriting Services bring your vision to the page." />
                <link rel="canonical" href="https://amzbookpublishing.net/professional-novel-writing-services " />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Professional Novel Writing Services for Aspiring Authors" />
                <meta property="og:description" content="Need a Novel ghostwriter? We offer professional Novel ghostwriting services at an affordable price. Contact us to hire expert writers remotely for your project." />
                <meta property="og:url" content="https://amzbookpublishing.net/professional-novel-writing-services" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-23T07:20:58+00:00" />



      </Helmet>
      <Header />
      <BreadCrumb
      className="responsive-height"
        title="Professional Novel Writing Services"
        desc={
          <>
It’s no small thing to write a novel, and creating a compelling, well-paced story that engages readers’ imaginations takes an expert hand. AMZ Book Publishing professional Novel writing Services provides help for authors, publishers, and literary agents to help write their stories.
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
    heading="Novel Ghostwriters"
    subHeading=" for Hire"
    description={
        <>
Novel Ghostwriters from our team maintain professional skills that allow them to write stories that reach deep within readers' emotions. Each story receives personalized approach development from AMZ Book Publishing because the company recognizes the unique attributes of each narrative.
        </>
    }
    imageSrc={NovelExpert}
    objectfit="contain"
    imageHeight="400px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
/>
</div>

{/*****************  SERVICE Section *****************/}
<div>

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



<SecondSection 
        buttonLabel="S e r v i c e s"
        heading1={ <>
        Types of </>}
        subHeading={<>
       Novel <br/>
       Content We </>}
        heading2="Specialize In"
        paragraph="At AMZ Book Publishing, we offer a range of novel writing services, including:"
        services={services}
      />
      </div>



<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why Choose Our Novel" 
    subHeading=" Ghostwriting Agency in the USA?"
    description={
        <>
        When you choose AMZ Book Publishing for your Professional Novel Ghostwriting Services, you partner with an experienced team that understands the intricacies of novel writing:
          <ul>
              <li>
                  <b>Expert Writers: </b> Our Novel Ghostwriters have extensive experience in writing and story development, ensuring your novel is both captivating and professionally crafted.
              </li>
              <li>
                  <strong>Collaborative Approach: </strong>We work closely with you every step of the way, ensuring your vision is at the forefront of the writing process. Your input and feedback are invaluable.
              </li>
              <li>
                  <strong>Unlimited Revisions: </strong> We offer unlimited revisions to ensure the final manuscript aligns with your expectations. We are committed to perfecting your novel to your satisfaction.
              </li>
              <li>
                  <strong>Affordable Pricing: </strong>We are an Affordable Novel Ghostwriting Company, providing high-quality novel writing services at competitive rates without sacrificing quality.
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
export default LegalGhostwriting;


