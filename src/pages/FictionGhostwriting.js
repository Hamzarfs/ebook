// src/pages/About.js
import React from 'react';

import BreadCrumb from '../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import CtaButton from '../components/books/CtaButton';
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
  title: "Designing Process",
  highlight: "We Apply"
};

const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Project Discussion",
    title: "Project Discussion",
    description: "First thing we do is discuss the client's expectations regarding the design."
  },
  {
    image: designprocess2,
    alt: "Design Research",
    title: "Design Research",
    description: "Our designers do thorough research to ensure the most fitting product."
  },
  {
    image: designprocess3,
    alt: "First Sample Layout",
    title: "First Sample Layout",
    description: "Our experts prepare the first draft and send it to the client for approval."
  },
  {
    image: designprocess4,
    alt: "Final Design Delivery",
    title: "Final Design Delivery",
    description: "Once approved, we deliver the final files to the client."
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
  return (
    <div>
{/* -------------------Start Banner section---------------------- */}
<Header/>
<BreadCrumb
    title="Fiction Ghostwriting"
    desc={
      <>
        With our fiction ghostwriting services, we bring your stories to life with captivating plots, 
        <br />
        unforgettable characters, and a creative spark that keeps readers hooked.
      </>
    }
    buttonText="Discover More"
    buttonLink="/learn-more"
    backgroundImage={Ghostwritingbg} // Pass the image URL as a prop
  />
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

<div style={{ padding: '30px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why Choose Us"
    subHeading=""
    description={
        <>
            At RFS, we offer a wide range of book services tailored to meet the needs of authors, publishers, and book enthusiasts. Whether you're looking to publish your next great read, seeking expert editing, or need support with distribution, we've got you covered. Our dedicated team is here to guide you through every step of the book process.<br /><br />
            We understand that writing a book is a profound and personal journey. Our expert book writing services are designed to support you every step of the way, transforming your ideas into a compelling, polished manuscript. Whether you’re an aspiring author with a story to tell or a seasoned writer seeking professional assistance, our team is here to help you bring your vision to life.
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


