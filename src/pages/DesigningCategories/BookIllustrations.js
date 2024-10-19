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

// ******************************** Start SecondSection ******************************
const services = [
  {
    title: "Children’s Illustration",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Children’s book illustrations are a vibrant canvas that brings stories to life, each style adding its own unique charm. Cartoon illustrations burst with color and energy, instantly capturing young readers’ attention with their playful, exaggerated expressions. For a softer touch, watercolor illustrations create a dreamy atmosphere, perfect for gentle tales of adventure and discovery."
  },
  {
    title: "Perfect Illustrator",
    image: designingImage, // Update this if you have a specific image
    description: "At AMZ Book Publishings, we offer a talented pool of professional book illustrators ready to help you bring your vision to life. Whether you need stunning illustrations for your pages, an eye-catching cover, or memorable characters, our illustrators are here to deliver exceptional results tailored to your needs. We kick off our book illustration services by getting to know you and your work, ensuring your unique vision is our first step."
  },
  {
    title: "Stunning Illustrations",
    image: bookEditingImage, // Update this if you have a specific image
    description: "If you want gorgeous book illustrations without breaking the bank, AMZ Book Publishings is your go-to solution! We pride ourselves on offering beautiful, one-of-a-kind illustrations tailored to any genre, all backed by outstanding customer service. Our talented illustrators craft each piece by hand, ensuring your project shines with originality and flair. Let us help you bring your vision to life!"
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
    question: "Do book illustrators receive royalties?",
    answer: "At AMZ Book Publishings, our illustrators do not receive royalties. When you hire our illustrator services, you simply pay a set fee for each illustration, allowing you to focus on your book without worrying about future payments."
  },
  {
    question: "Can you illustrate children's books for different age groups?",
    answer: "Absolutely! Our talented illustrators are skilled in creating illustrations for picture books, early readers, and middle-grade novels, ensuring they appeal to the specific age group you have in mind."
  },
  {
    question: "Can you illustrate specific scenes or characters?",
    answer: "Yes, indeed! Our illustrators are more than happy to create illustrations tailored to specific scenes or characters based on your unique requests. Just let us know what you need!"
  },
  {
    question: "Do you offer a variety of artistic styles?",
    answer: "We sure do! We provide a diverse range of artistic styles to perfectly match the tone and theme of your book, so you can find the perfect fit for your story."
  },
  {
    question: "How do authors and illustrators collaborate?",
    answer: "We take the guesswork out of collaboration by matching authors with illustrators based on artistic style. Authors will work closely with their Project Manager throughout multiple phases to ensure the final illustrations align with their vision."
  }
];


// ******************************** End FAQ Section ******************************

const BookIllustrations = () => {
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
        title="Book Illustrations"
        desc={
          <>
Every designer at AMZ Book Publishings is ready to help you craft a stunning book, making sure it shines both inside and out.
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
    subHeading="Illustrations"
    description={
        <>
Our talented team of illustrators has created a wide range of book covers across various genres. No matter what you are working on, our professionals are trained to handle any project, delivering top-quality work without compromising any aspect of your book.
<br/><br/>
While we can describe how stunning our designs are, the illustrations truly speak for themselves. Each of our illustrators is a full-time independent professional, exceptional in their craft. We believe in collaborating closely with our clients and taking the time to fully understand their goals and vision. Your story deserves nothing less than extraordinary, and we are here to make that happen.
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
       Ignite Your Readers </>}
        subHeading={<>
         Imaginations  <br/>
         with Breathtaking </>}
        heading2="Illustrations"
        paragraph="Transform your story into a visual masterpiece that captivates your audience! With stunning illustrations, you can create a world that sparks curiosity and wonder."
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
Whether you are a self-published author, a traditional publisher, or simply looking to create a beautiful keepsake, our book illustration service at AMZ Book Publishings is the perfect way to add a touch of visual magic to your story. Our talented illustrators are dedicated to bringing your characters and your world to life in a way that captures your unique vision.
<br/><br/>
Our team specializes in a variety of styles and mediums, from whimsical and humorous to fantastical and vibrant. With our keen attention to detail and commitment to quality, you can trust that your book illustrations will be stunning and engaging. Once the final illustrations are approved, you will receive print-ready files, ensuring your book looks its best.
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
export default BookIllustrations;


