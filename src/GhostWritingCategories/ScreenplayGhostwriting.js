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
import ghostWritingImage from '../images/Ghost Writing.png';
import fictionwhychoose from '../images/fictionwhychoose.png';
import ScreenPlay from '../images/screenplay.jpg';
import designingImage from '../images/Designing.png';
import bookEditingImage from '../images/book edit.png';
import designprocess1 from '../images/design-process-1.png';
import designprocess2 from '../images/design-process-2.png';
import designprocess3 from '../images/design-process-3.png';
import designprocess4 from '../images/design-process-4.png';
import PopupForm1 from '../components/common/PopupForm';
import { Helmet } from 'react-helmet-async';

// ******************************** Start SecondSection ******************************

const services = [
  {
    title: "Stand Out from the Crowd",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "At AMZ Book Publishing, our budget-friendly screenplay ghostwriting services provide a distinct edge in a crowded market. Our team of expert ghostwriters stays attuned to industry demands, allowing them to adapt and deliver tailored solutions. Recognizing the ever-increasing competition, that exceeds our clients' expectations."
  },
  {
    title: "Award-winning Screenwriters",
    image: designingImage, // Update this if you have a specific image
    description: "What sets AMZ book publishing apart is our roster of accomplished writers who have garnered prestigious awards. If your it's likely to make a big-screen debut soon. A key benefit of partnering with us is that we deliver high-caliber screenplay productions that meet your budgetary needs."
  },
  {
    title: "Unique and Exceptional Papers",
    image: bookEditingImage, // Update this if you have a specific image
    description: "At AMZ Book Publishing, our top priority is delivering high-quality, bespoke screenplay content that meets the precise needs of our clients. To guarantee originality and authenticity, we utilize advanced tools like Turnitin and Copyscape to meticulously scan our work for any potential plagiarism."
  }
];


// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
 Our  Screenplay 
     <br />
    </>
  ),
  highlight: "Ghostwriting Process"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Guidelines for Examining and Creating Drafts:",
    title: "Guidelines for Examining and Creating Drafts:",
    description: "Here at AMZ Book Publishing, we specialize in crafting detailed outlines to assist you in the examination and drafting process of your book."
  },
  {
    image: designprocess2,
    alt: "Authentic Content Reflecting Your Perspective:",
    title: "Authentic Content Reflecting Your Perspective:",
    description: "Our team of skilled ghostwriters at a top-tier ghostwriting firm works closely with clients to capture their viewpoints, concepts, and thoughts in their writing."
  },
  {
    image: designprocess3,
    alt: "Evaluating and Refining Written Content for Accuracy",
    title: "Evaluating and Refining Written Content for Accuracy",
    description: "AMZ book publishing is diligent in examining all content, with our editing and proofreading team thoroughly checking every detail, such as organization and punctuation, to guarantee flawless quality."
  },
  {
    image: designprocess4,
    alt: "Organizing, Setting up, and Inputting:",
    title: "Organizing, Setting up, and Inputting:",
    description: "AMZ Book Publishing is a proficient ghostwriting service that excels in creativity. Our team of professional ghostwriters, cover designers, editors, and typesetters is dedicated to serving our clients."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Can you find me a ghostwriter who has specific experience/knows about law?",
    answer: "Absolutely! At AMZ Book Publishings, we make sure to pair you with a legal ghostwriter who has the expertise and background in law that fits your project. Whether it’s contracts, legal briefs, or academic legal writing, we have a team of professionals who know their way around legal jargon and concepts."
  },
  {
    question: "If I invest in your services, can you ensure my legal ghostwriting piece is authentic?",
    answer: "Yes, authenticity is key. Our legal ghostwriters work closely with you to ensure your unique voice and ideas shine through while still adhering to all the legal details. We take the time to understand your needs so that the final piece is 100% original, personalized, and tailored to your specific goals."
  },
  {
    question: "Are your ghostwriting services confidential?",
    answer: "Absolutely! Confidentiality is a top priority for us. We treat every project with the utmost discretion, so your documents, ideas, and personal information are completely secure. Your privacy is just as important to us as delivering quality work."
  },
  {
    question: "What kind of legal documents can I hire a ghostwriter for?",
    answer: "You can hire us for a wide range of legal documents, including contracts, legal memos, case summaries, briefs, research papers, and even full legal textbooks. Whatever you need, our skilled team can handle it!"
  },
  {
    question: "Is ghostwriting ethical?",
    answer: "Yes, ghostwriting is completely ethical. It is a collaborative process where you provide the direction, and the ghostwriter provides the expertise. You are still the mastermind behind the project and our job is to help you bring it to life in a professional and polished way."
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
            <title>Screenplay Ghostwriting Services by Expert Screenwriters</title>
            <meta name="description" content="Need Screenplay ghostwriter? We offer professional Screenplay ghostwriting services at an affordable price. Contact us to hire expert writers for your project." />
            <link rel="canonical" href="https://amzbookpublishing.net/affordable-screenplay-ghostwriting-services" />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Screenplay Ghostwriting Services by Expert Screenwriters" />
            <meta property="og:description" content="Need Screenplay ghostwriter? We offer professional Screenplay ghostwriting services at an affordable price. Contact us to hire expert writers for your project." />
            <meta property="og:url" content="https://amzbookpublishing.net/affordable-screenplay-ghostwriting-services" />
            <meta property="og:site_name" content="AMZBookPublishing" />
            <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
            <meta property="article:modified_time" content="2024-08-23T07:34:12+00:00" />
      </Helmet>
      <Header />
      <BreadCrumb
        title="Screenplay Ghostwriting Services"
        desc={
          <>
Our aspiring writers and industry enthusiasts can tap into the latest insights and trends in screenwriting, focusing on the most popular Netflix and Hollywood content, all under the guidance of expert screenplay ghostwriters.
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
    heading="Professional Screenplay  "
    subHeading="Ghostwriting Services"
    description={
        <>
Our innovative and unconventional thinking sets our ghostwriting services apart and makes them a popular choice across various media platforms like Hulu, Netflix, TV video platforms, and Hollywood.
           <br/><br/>
           Discover your premier source for flawless screenplays at AMZ Book Publishing, where professional screenplay ghostwriters craft high-quality, research-driven content that meets the latest industry standards. With a deep understanding of the competitive world, we deliver exceptional services that balance excellence with budget-friendly pricing. Our team boasts mastery of English writing, produces meticulously researched content, and is well-versed in referencing and ghostwriting protocols, ensuring timely delivery of outstanding screenplays.
        </>
    }
    imageSrc={ScreenPlay}
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
        Top Screenplay  </>}
        subHeading={<>
       Ghostwriting   <br/>
       </>}
        heading2=" Services Online"
        paragraph="Our talented team of expert screenwriters is renowned for delivering exceptional content that consistently meets the highest standards."
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
    heading="Why Choose Our Screenplay Ghostwriting Agency"
    subHeading=""
    description={
      <>
Looking to bring your literary vision to life? AMZ Book Publishing is the ideal partner for your book-writing endeavors. We've built an exceptional reputation for delivering high-quality, professional book-writing services.
  <br/><br/>
  Our commitment to excellence is evident in every aspect of our work. Our team boasts experienced authors and project managers with at least 10 years of book writing experience. We exclusively utilize USA-based writers to ensure personalized and affordable screenplay ghostwriting services. Furthermore, we guarantee multiple revisions to perfect your book and maintain the utmost confidentiality, ensuring your ideas remain safe and secure.
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
export default LegalGhostwriting;


