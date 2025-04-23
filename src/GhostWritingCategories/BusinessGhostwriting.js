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
import FictionImage1 from '../images/Business1.png';
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
    title: "Leadership & Management Books",
    image: ghostWritingImage,
    description: "We provide opportunities to leaders and managers who wish to distribute their knowledge regarding leadership development together with team construction and business expansion. The writers at our company will assist you in developing a business book containing practical leadership strategies."
  },
  {
    title: "Entrepreneurship & Startups",
    image: designingImage,
    description: "Through collaboration, our team assists experienced entrepreneurs in creating books about their business experiences, along with lessons they acquired and valuable tips for startup owners. With your startup history, you will motivate people who want to build their own businesses."
  },
  {
    title: "Business Strategy & Consulting",
    image: bookEditingImage,
    description: "The writers at our company understand how to develop books that reflect the techniques and strategies of business consultants and strategists. We will assist you in explaining your business approaches along with consulting methods in ways that draw in customers while showcasing your expertise to the market."
  }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
     Our Business Book Writing Process
     <br />
    </>
  ),
  // highlight: "Ghostwriting Masterpiece"
};
const desc = "We follow a process that ensures your business book is written with clarity and authority:";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation & Project Setup",
    title: "Initial Consultation & Project Setup",
    description: "First, we do a starting consultation to learn your business ideas, audience, and vision for your book. Our project managers will collect all the required information about your skills and the book's objective. We then send a custom proposal with transparent pricing and timeframes for your project."
  },
  {
    image: designprocess2,
    alt: "Business Book Writing & Revisions",
    title: "Business Book Writing & Revisions",
    description: "After you approve the project, we'll match you with one of our skilled business ghostwriters, ready to bring your ideas to life. You will review drafts and provide feedback, ensuring that the book is exactly the same as you are expecting. "
  },
  {
    image: designprocess3,
    alt: "Final Approval & Publishing",
    title: "Final Approval & Publishing",
    description: "After completion, the manuscript receives additional modifications to achieve maximum refinement before it reaches publication status. Our team will conclude all editing procedures while preparing the manuscript for both traditional and electronic publication formats."
  },
  {
    image: designprocess4,
    alt: "Launch & Marketing Support",
    title: "Launch & Marketing Support",
    description: "When your business book is ready to go, we help with marketing so you can start generating buzz and reaching your audience. We also assist with promotion strategies so you can get your book to the right target market and allow it to leave a lasting impression."
  }
];


// ******************************** End Design Process Props ******************************



const heading1 = {
    title: (
      <>
       Start Your Business
       <br />
      </>
    ),
    highlight: "Book Journey Today"
  };
  const descs = "Ready to share your business expertise with the world? Our team of professional ghostwriters is here to help you craft a business book that positions you as a leader in your field. Contact us today for a free consultation and take the first step toward publishing your business book!";


// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What is business book ghostwriting?",
    answer: "Business book ghostwriting services involves hiring a professional writer to help you create a business book based on your ideas, experiences, and knowledge. The ghostwriter will craft a book that reflects your business expertise and resonates with your audience."
  },
  {
    question: "How do I hire a ghostwriter for a business book?",
    answer: "To hire a business ghostwriter, contact us for an initial consultation. We will discuss your book's concept, target audience, and goals, then provide a custom quote and timeline."
  },
  {
    question: "Can I make revisions during the writing process?",
    answer: "Yes! We offer unlimited revisions to ensure your business book meets your vision. You can review drafts, provide feedback, and suggest changes as needed."
  },
  {
    question: "How long does it take to complete a business book?",
    answer: "The timeline for completing a business book depends on its complexity and length. After our initial consultation, we will provide a tailored estimate based on your project requirements."
  },
  {
    question: "Do I have the right to the business book after completion?",
    answer: "Yes! Once the business book is finished and you've approved the final manuscript, you will own all rights to the book. We ensure all work is original and fully transferred to you."
  }
];


// ******************************** End FAQ Section ******************************

const BusinessGhostwriting = () => {
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
        <title>Business Book Ghostwriting Services | AMZ Book Publishing</title>
        <meta name="description" content="Our Business Book Ghostwriting Services help you turn your knowledge into a powerful, well-structured book that inspires success." />
        <link rel="canonical" href="https://amzbookpublishing.net/business-book-ghostwriting-services  " />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Business Book Ghostwriting Services by Expert Ghostwriters" />
        <meta property="og:description" content="Need a business book ghostwriter? We offer business book ghostwriting services at an affordable price. Meet our talented writers who can work easily." />
        <meta property="og:url" content="https://amzbookpublishing.net/business-book-ghostwriting-services" />
        <meta property="og:site_name" content="AMZBookPublishing" />
        <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
        <meta property="article:modified_time" content="2024-08-20T07:39:16+00:00" />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
      className="responsive-height"
        title="Business Ghostwriting Services"
        desc={
          <>
           To turn your business concepts and expertise into an impactful, professional book, you need an experienced ghostwriter for business books. At AMZ Book Publishing, we specialize in helping entrepreneurs, CEOs, and industry leaders develop their business stories, strategies, and insights into authoritative business books. 
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


<div style={{ padding: '40px 0px 100px 0px' }}>
<ImageRightBanner
    heading="Professional Business "
    subHeading="Ghostwriters for Hire"
    description={
        <>
         A business book's success requires aspects above fact sharing and strategic delivery. To succeed in business writing a book needs to merge stories with solutions while building emotional relationships with readers. Your business book ghostwriters can assist you in crafting a book that demonstrates your field knowledge and leadership position.
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
        Creating Business </>}
        subHeading={<>
        Books<br/>
        for Every </>}
        heading2="Industry"
        paragraph="Our business ghostwriting agency in the USA specializes in a wide range of business genres. Whether you're an entrepreneur, executive, or industry expert, our writers can help you craft the perfect business book to share your expertise:"
        services={services}
      />
      </div>

<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why Choose Our Affordable Business Ghostwriting Company?"
    subHeading=""
    description={
        <>
        AMZ Book Publishing ghostwriting services for you. Affordable business book ghostwriters help clients receive high-quality written business books for an affordable price.
        <ul>
    <li>
        <b>Experienced Business Writers: </b> Our professional business book ghostwriting services comprise experienced qualitative authors with experience in personal business and entrepreneurship
    </li>
    <li>
        <strong>Collaborative Process: </strong>We work with clients during the writing process. Your feedback is invaluable, and we fully guarantee your voice, ethos, and expertise will be reflected in every chapter of your book. 
    </li>
    <li>
        <strong>Unlimited Revisions: </strong>We allow clients unlimited revisions to their first draft. We want your business book to be what you envision.
    </li>
    <li>
        <strong>Affordable Rates: </strong> We ensure our services are affordable to encourage affordable business books for everyone. Any client can afford to share their knowledge and experiences.
    </li>
    <li>
        <strong>On-Time Delivery: </strong>We understand respecting deadlines is essential, and we work diligently to help ensure timely completion and delivery without sacrificing quality. 
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
      />
         <ContactForm/>

      <Footer/>
    </div>
    
  );
};
export default BusinessGhostwriting;


