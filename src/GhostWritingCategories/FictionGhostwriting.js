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
import FictionImage1 from '../images/fictiongimg1.png';
import fictionwhychoose from '../images/fictionwhychoose.png';
import ghostWritingImage from '../images/Ghost Writing.png';
import designingImage from '../images/Designing.png';
import bookEditingImage from '../images/book edit.png';
import designprocess1 from '../images/design-process-1.png';
import designprocess2 from '../images/design-process-2.png';
import designprocess3 from '../images/design-process-3.png';
import designprocess4 from '../images/design-process-4.png';
import PopupForm1 from '../components/common/PopupForm';

// ******************************** Start SecondSection ******************************

const services = [
  {
    title: "Novel Writing",
    image: ghostWritingImage,
    description: "Novel writing is all about crafting stories that captivate readers from start to finish. Our team weaves together compelling plots and unforgettable characters, and with the expertise of a skilled fiction editor, every element is refined to create a polished, engaging novel that keeps readers hooked.",
    // link: "https://www.facebook.com/",
    // buttonPadding :"10px 25px",
    // learnmore:"Click Here",
  },
  {
    title: "Short Stories",
    image: designingImage,
    description: "Our talented team of writers excels in all forms of writing, including short stories. They know exactly how to take your ideas and turn them into bestsellers. Dedicated and passionate, our experts make it easy to bring your vision to life, ensuring a smooth and stress-free experience for you.",
    
  },
  {
    title: "Series Writing",
    image: bookEditingImage,
    description: "Our series writers are incredibly passionate about transforming your ideas into engaging stories, sometimes even more than you might expect! When you hire a fiction ghostwriter from our team, you can trust that your vision will be brought to life with creativity and precision, resulting in a series that captivates readers from start to finish.",
    
  }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
     Expert Fiction Book Writing Services<br />
    </>
  ),
  highlight: " Across All Genres"
};
const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Showcase Talent",
    title: "Showcase Talent",
    description: "Secure your spot by completing a quick and easy form, and you will be warmly greeted by one of our friendly project managers. They will eagerly gather all the details you want to share about your book!"
  },
  {
    image: designprocess2,
    alt: "Pay A Fee",
    title: "Pay A Fee",
    description: "We will whip up a personalized quote just for you based on our services, and when you are ready, you can easily make your payment through our secure system!"
  },
  {
    image: designprocess3,
    alt: "Fiction Writer",
    title: "Fiction Writer",
    description: "Your assigned writer will send you a chapter for your approval. Once you give the thumbs up, they will wait for your go-ahead. Plus, you can request changes along the way without affecting the entire project each time a revision is made!"
  },
  {
    image: designprocess4,
    alt: "Final Approval",
    title: "Final Approval",
    description: "Once you have given the final manuscript the green light for publishing, we will get your book out there in your preferred format. Moreover, we will roll out a tailored marketing and promotional strategy just for you!"
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "I have a fantastic idea for a novel, but writing is not my strong suit. Can you help?",
    answer: "Absolutely! Our talented team of fiction ghostwriters is here to turn your ideas into something amazing. Just share your story concepts with us, and we will weave them into captivating prose. Before you know it, people will be binge-reading your book in just a few sittings!"
  },
  {
    question: "Can you help me become a published author?",
    answer: "Absolutely! Our fiction book ghostwriting services are designed to help you create an engaging story that is ready to pitch to top publishing platforms and literary agents. With a professional ghostwriter on your side, someone who has helped numerous authors achieve their publishing dreams, you will significantly boost your chances of success."
  },
  {
    question: "Are your services confidential?",
    answer: "Absolutely! We understand the importance of confidentiality. Unlike unprofessional ghostwriters who might share project details to attract new clients, we keep everything you share with us strictly private. Your ideas and manuscripts are safe with us!"
  },
  {
    question: "What if I don't like the final draft?",
    answer: "No worries at all! If you are not completely satisfied with the draft, just let us know what you would like to change. We offer free revisions because your satisfaction is our priority. Your feedback helps us understand your vision better, and we are here to work with you until you are thrilled with the final product!"
  }
];

// ******************************** End FAQ Section ******************************

const FictionGhostwriting = () => {
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
      <Header />
      <BreadCrumb
        title="Fiction Ghostwriting"
        desc={
          <>
            With our fiction ghostwriting services, we bring your stories to life with captivating plots,
            {/* <br/>  */}
            unforgettable characters, and a creative spark that keeps readers hooked.

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
    heading="Fiction "
    subHeading="Ghostwriting"
    description={
        <>
           Writing a fiction book is all about transforming imaginative ideas into captivating stories, whether it is dragons, magic, or mythical creatures. But turning those creative sparks into a well-crafted novel isn’t always easy. While there are plenty of novel writing websites out there, finding the right fit can be a challenge. That is where our fiction ghostwriters for hire step in. <br /><br />
           We bring your ideas to life in a way that’s fun, imaginative, and engaging, leaving readers spellbound and eager for more. AMZ Book Publishings also offers minimal charges, unlimited revisions, and timely delivery, all while paying close attention to the details that make your story shine!

        </>
    }
    imageSrc={FictionImage1}
    objectfit="contain"
    imageHeight="400px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
/>
</div>

<div>
<SecondSection 
        buttonLabel="S e r v i c e s"
        heading1={ <>
        Distinguished  </>}
        subHeading={<>
        Fictional<br/>
         Ghostwriting </>}
        heading2="Services"
        paragraph="Whether you are envisioning a thrilling adventure or an emotional journey, our affordable fiction ghostwriting services can help transform your ideas into compelling narratives. From the first idea to the final draft, we pour our dedication into crafting a story that truly stands out."
        services={services}
      />
      </div>


{/* <div style={{ padding: '0px 0px 30px 0px' }}>
<SecondSection/>
</div> */}


<DesignProcess 
        heading={heading}
        description={description}
        steps={steps}
      />

<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why Choose Us"
    subHeading=""
    description={
        <>
            Looking to hire a fiction ghostwriter? Our team at AMZ Book Publishing is trained to craft the best fiction books. No matter the genre you choose within the fiction realm, our writers are here to make your job easier. You can expect creative, engaging, and high-quality content from us. <br /><br />
            We understand that structuring a novel can be challenging, especially when you have so many ideas swirling around. That is where our skilled fiction ghostwriters come in: they will help turn your thoughts into an exciting novel. In addition, our ghostwriting services are not just budget-friendly; they are so well-written that readers will be hooked until the very last page!

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
export default FictionGhostwriting;


