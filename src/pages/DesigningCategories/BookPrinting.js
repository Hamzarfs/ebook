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
    title: "Custom Book Printing Services",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "With custom book printing, you have the freedom to choose the perfect size that matches your vision. Whether you want a compact book or a bold, larger design, custom sizes let your book stand out on the shelf. Tailor the look, feel, and readability to reflect the heart of your content. It's all about making sure your book is as unique as the story it tells!"
  },
  {
    title: " Quality Book Printing Pages",
    image: designingImage, // Update this if you have a specific image
    description: "Choosing the right cover for your book is key to making a lasting impression. With hardcover book printing, you get a durable, polished look that is perfect for formal works or special editions. Matte finishes offer a sleek, refined feel, while glossy ones add vibrancy to your design. Add texture with foil stamping, embossing, or debossing for that extra touch of elegance, ensuring your cover truly reflects your book’s message."
  },
  {
    title: "Quality Color Printing",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Bring your book to life with full-color printing, adding vivid visuals that captivate and engage readers. Perfect for art books, children's stories, cookbooks, and more, full-color printing ensures every illustration, photo, and design detail pops off the page. It is a fantastic way to elevate the reading experience and make your content truly stand out."
  }
];
// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Our Streamlined
    
    </>
  ),
  highlight: "Book Printing Services"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Consultation & Concept",
    title: "Consultation & Concept",
    description: "We begin by discussing your vision for the project, whether it is for personal or business purposes. Our team helps bring your ideas to life with custom book printing options designed to match your needs."
  },
  {
    image: designprocess2,
    alt: "Design & Layout",
    title: "Design & Layout",
    description: "Once we have your concept, our designers craft a professional layout that captures your book’s essence. From selecting paper types to choosing finishes, we focus on quality that stands out in book printing services near you."
  },
  {
    image: designprocess3,
    alt: "Proofing & Revisions",
    title: "Proofing & Revisions",
    description: "Before going to print, we provide digital proofs to ensure everything meets your expectations. You can review the layout, make changes, and give final approval, ensuring the custom book printing process is seamless."
  },
  {
    image: designprocess4,
    alt: "Printing & Delivery",
    title: "Printing & Delivery",
    description: "Once approved, we handle the printing process with the utmost care. Your high-quality paperback or hardcover book will be delivered straight to your doorstep, making book printing as easy and professional as possible."
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What are book printing services, and how do they differ from online book printing services?",
    answer: "Book printing services are professional companies that produce physical copies of books, offering options like custom printing, cover design, and binding. Online book printing services do the same, but with the added convenience of managing everything online, making it easy for authors and publishers to print from anywhere."
  },
  {
    question: "What advantages does custom book printing offer over standard printing options?",
    answer: "Custom book printing gives authors full control over design, from paper types to cover style and binding. It ensures your book reflects your vision and resonates with your target audience."
  },
  {
    question: "What kind of paper is used for book pages?",
    answer: "You can choose uncoated paper, which has a natural feel for traditional books, or coated paper, ideal for photography, art, or children's books that require vibrant visuals."
  },
  {
    question: "How much does it cost to have a book printed?",
    answer: "The cost depends on factors like binding, paper type, and size. With AMZ Book Publishings, you will find flexible options that fit your budget while delivering the best results."
  },
  {
    question: "What is the best book printing service?",
    answer: "Finding the right service can be tricky. At AMZ Book Publishings, we provide top-quality printing, a range of options, and dedicated support to guide you through the process from start to finish."
  }
];


// ******************************** End FAQ Section ******************************

const BookPrinting = () => {
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
        <title>Quality Book Printing Services for Self-Published Authors</title>
        <meta name="description" content="Need Book Printing services? We offer professional book printing services for authors on affordable price. Contact us to hire expert print on-deman services."/>
        <link rel="canonical" href="https://amzbookpublishing.net/book-printing" />

      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Book Printing"
        desc={
          <>
We specialize in high-quality paperback and hardcover book printing tailored to your needs. Even if it is just for yourself, we ensure a book you will be proud to hold.
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
    subHeading="Printing"
    description={
        <>
We are your go-to destination for transforming your writing into a beautifully crafted masterpiece. We take immense pride in offering premium book printing services that bring your words to life and turn your book into a true work of art. With a team of passionate experts and cutting-edge technology, we are committed to delivering outstanding results on every project.
<br/><br/>
Our professionals understand that your book is more than just words on a page: it is your passion, your dream, and your legacy. That is why we focus on providing exceptional quality and a personalized experience that sets us apart as a key player in the book printing industry. 
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
       Turning Your Vision  </>}
        subHeading={<>
         Into Reality  <br/>
         With Our Book </>}
        heading2="Printing Services"
        paragraph="We specialize in book printing services, adding a touch of magic and sohpistication to every project we handle."
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
When it comes to book printing, the right choice can make all the difference. We offer custom book printing services that go above and beyond the ordinary. Our team of skilled book printers is committed to delivering exceptional quality, ensuring that every page of your book reflects the care and craftsmanship you deserve.
<br/><br/>
By choosing AMZ Book Publishings as your trusted book printing partner, you can experience the thrill of seeing your words come to life in print. Our convenient online printing services make the process seamless, while our dedication to excellence ensures your book stands out. Let us bring your vision to reality and create something you will be proud to share with the world.
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
export default BookPrinting;


