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
    title: "Professional Narration",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "The audio quality of a good audiobook lies in its narration. Our professional voice artists bring characters and stories to life. We ensure the selection of the apt narrator for your book's tone, one that will create a listening experience that fully leaves the audience captivated throughout."
  },
  {
    title: "High-Quality Production",
    image: designingImage, // Update this if you have a specific image
    description: "Quality will matter in the production of each of our audiobooks. High-quality recording and editing tools ensure high-quality delivery at the end of our processes. Editing and sound designing are intensively done to promote a quality product from every angle. This makes sure that your audiobook is one of the highest standards for silky smooth listening."
  },
  {
    title: "Multiple Platforms",
    image: bookEditingImage, // Update this if you have a specific image
    description: "After preparing the audiobook, we help distribute it to popular sites such as Audible, iTunes, and Google Play. Our team will ensure that it becomes easy to find so that more people can hear it and you can reach a greater visibility in the audiobook market."
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
Make Your Book Auditory 
    </>
    
  ),

  highlight: "with our Audiobook service"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";
const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "First, we consult and get to know exactly what you want your book to say and whom you are targeting. This consultation sets the tone for a customized production plan that fits your vision and goals."
  },
  {
    image: designprocess2,
    alt: "Script Preparation",
    title: "Script Preparation",
    description: "Our role then would be to help you prepare your manuscript for narration. The text is formatted for audio and adjusted wherever necessary to make it an easy listen."
  },
  {
    image: designprocess3,
    alt: "Casting the Right Narrator",
    title: "Casting the Right Narrator",
    description: "We ensure that we cast a narrator for your book that would be fitting for the tone and genre of your book. We offer samples that will help you choose the one who best represents your story."
  },
  {
    image: designprocess4,
    alt: "Recording & Editing",
    title: "Recording & Editing",
    description: "Once we have chosen a narrator for the book, we start by recording the audiobook. Our quality control team oversees this recording and sees it through to the final product. This involves carefully editing and sound designing to get your book the best possible quality."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How much does your audiobook service cost?",
    answer: "This will depend on what you want and how long your book is. After discussion of what you're hoping to achieve, we would provide you with a detailed quotation that accurately reflects the work to be done."
  },
  {
    question: "Can I be involved in the process of my audiobook?",
    answer: "Absolutely! We really like your input at every step of the way. Nothing is complete, and nothing can be done right until you feel it captures your book exactly as you intend."
  },
  {
    question: "How long does an audiobook take to produce?",
    answer: "The time it takes to produce an audiobook depends on the length of your book and the narrator's schedule. We will determine appropriate timing together and keep you informed of our progress."
  },
  {
    question: "Do you provide support in marketing of an audiobook?",
    answer: "Yes! I am going to outline some good practices and strategies on marketing the audiobook. This will include possible tips for promotion and distribution strategies to bring the product to the perfect audience."
  },
  {
    question: "Can you help me at the release of the audiobook?",
    answer: "We're here for you even after your audiobook comes out. Whether you need ongoing support or wish to look for new marketing initiatives, our team is an email away to help you."
  }
];


// ******************************** End FAQ Section ******************************

const Audiobook = () => {
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
        <title>Professional Audio Book Production Services for Your Written Work</title>
        <meta name="description" content="Need Audiobook Publishing Services? We offer professional amazon audio book publishing services to self-published authors on affordable price. Get a free quote!" />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Audiobook"
        desc={
          <>
Bring your written words to an excited audible life through our Audiobook services! 
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
    heading="Audiobook "
    subHeading="Services"
    description={
        <>
Audiobooks are now the number one favourite of busy readers. You can listen to your recent read while commuting, exercising, or doing housework. We capture your book's heart and make your audiobook a sleek-finished product that fans will appreciate, and new listeners will like. We want your audiobook to be a real treasure in your journey as an author, getting you closer to more people and widening your audience. 

<br/><br/>
Our expert team at AMZ Book Publishings is dedicated to helping you reach a wider audience by bringing your stories to life with high-quality audio narration. This means making sure that your book will resonate with the book listeners worldwide. Let's join the audiobook revolution and make your book come alive! 
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
      Make Your Book </>}
        subHeading={<>
         Auditory <br/>
        For The  </>}
        heading2="Non-Readers! "
        paragraph="Our skilled and professional team transforms your book into an engaging audio experience for the listeners."
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
Have you ever wondered how your book would actually sound if it came to life? We partner with gifted voice artists who not only get to read your words but infuse emotion and richness in every line. This means the listeners will resonate with your book on a personal level. Your story deserves to be heard, and we're here to make it unforgettable.

<br/><br/>
We take care of every detail, from the recording and the editing all the way to perfecting every little thing to make listening a natural and flowing experience. When it's ready, we'll help you distribute your audiobook to Audible, iTunes, and Google Play to give it the visibility it needs to grow your audience.
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
export default Audiobook;


