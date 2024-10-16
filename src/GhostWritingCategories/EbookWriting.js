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
    title: "Fiction Ebook Ghostwriting",
    image: ghostWritingImage,
    description: "Dive into captivating narratives with our fiction ebook ghostwriting services! Our talented ebook ghostwriters will help you craft unforgettable characters and thrilling plots that keep readers hooked from the first page to the last."
  },
  {
    title: "Non-Fiction Ebook Ghostwriting",
    image: designingImage,
    description: "Share your expertise and insights with the world through our non-fiction ebook ghostwriting services. Our skilled professionals will transform your ideas into engaging, well-researched content that informs and inspires your audience."
  },
  {
    title: "Business Ebook Ghostwriting",
    image: bookEditingImage,
    description: "Elevate your brand and establish your authority with our services. Our expert ebook ghostwriters will create compelling ebooks that not only share your knowledge but also resonate with your target audience, helping you stand out in a competitive market."
  }
];

// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Our Process To 
   
    </>
  ),
  highlight: "Craft Your Ebook"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";
const steps = [
  {
    image: designprocess1,
    alt: "Outline",
    title: "Outline",
    description: "Let's kick things off! After you share your vision, we will match you with the perfect ebook ghostwriter from our talented team. They will create a detailed chapter outline based on your ideas, and once you give us the thumbs-up, it's time to start writing!"
  },
  {
    image: designprocess2,
    alt: "Chapter Approval",
    title: "Chapter Approval",
    description: "As your ebook comes to life, communication is key! Our expert ebook ghostwriters will share research materials and send chapters your way for approval. Your feedback is essential, as it shapes the direction of your ebook and ensures everything aligns with your vision."
  },
  {
    image: designprocess3,
    alt: "Editing and Proofreading",
    title: "Editing and Proofreading",
    description: "Once the writing is wrapped up, your manuscript gets polished by our dedicated editor. They will comb through every word to make sure it shines. After that, our proofreader takes the reins, eliminating any errors to ensure your ebook is ready for the spotlight."
  },
  {
    image: designprocess4,
    alt: "Designing",
    title: "Designing",
    description: "The final version then moves to our publication department, where we transform your text into a beautifully formatted ebook. Our graphic designers will also work on a stunning cover that grabs attention. Rest assured, we will ensure everything meets the guidelines of your chosen publishing platform, setting you up for success!"
  }
];

// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "Are ghostwriters legal?",
    answer: "Absolutely! Ghostwriters are perfectly legal professionals. Think of them as your behind-the-scenes allies, bringing your ideas to life without seeking credit. The world of ebook ghostwriting thrives on their expertise, and they earn their living by providing valuable services to authors like you."
  },
  {
    question: "What exactly is ebook ghostwriting?",
    answer: "Great question! Ebook ghostwriting is all about collaboration. You team up with a skilled ghostwriter who crafts a well-formatted ebook tailored to your needs. Whether you have a specific vision or need guidance, we’re here to help you shine!"
  },
  {
    question: "How many words should my ebook be?",
    answer: "It really depends on what you are aiming for! Shorter ebooks, like guides or list books, typically clock in under 10,000 words. For fiction or non-fiction, expect anywhere between 25,000 to 100,000 words, depending on the genre."
  },
  {
    question: "Do you assist with ebook design?",
    answer: "Absolutely! Our talented designers specialize in creating eye-catching visuals, illustrations, and infographics that align perfectly with your brand or story theme. We ensure that your book cover grabs attention and that the layout is reader-friendly, making for a smooth reading experience."
  },
  {
    question: "Is your service confidential?",
    answer: "You bet! We adhere to professional standards and respect your privacy. Rest assured, your book's excerpts will not be used anywhere without your permission. Your trust is paramount to us!"
  }
];





// ******************************** End FAQ Section ******************************

const EbookWriting = () => {
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
        title="E-book Writing"
        desc={
          <>
        Let’s collaborate and transform your vision into a best-selling ebook masterpiece that readers cannot put down. Connect with us today, and let’s get started on your writing journey!

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
    heading="E-book "
    subHeading="Writing"
    description={
        <>
In today’s competitive market, having a polished ebook is essential to stand out. That is where we come in! At AMZ Book Publishings, we offer top-notch ebook ghostwriting services to help you create something truly remarkable. Our talented team of ghostwriters, editors, and designers is dedicated to transforming your ideas into a captivating ebook that shines.
           <br/><br/>
           Just share a bit about yourself, your writing style, and your vision for the book. This helps us capture your unique voice and purpose. Then, we will match you with an experienced ghostwriter who will bring your dream to life. Let’s make your ebook a reality!
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
        Expert  </>}
        subHeading={<>
         Ebook  <br/>
         Ghostwriting </>}
        heading2="Services"
        paragraph="Our talented team at AMZ Book Publishings specializes in ebook ghostwriting services that bring your ideas to life."
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
        In today’s digital age, eBooks are more than just a reading option; they are a gateway to building authority and connecting with a broader audience. Here is why our ebook ghostwriting services stand out.
        <ul>
          <li>
            <b>Expert Writers:</b> Our talented ebook ghostwriters are skilled at transforming your ideas into engaging, well-researched ebooks that resonate with your target audience.
          </li>
          <li>
            <strong>Proven Track Record:</strong> We have a history of creating successful ebooks for a diverse range of clients, helping them share their knowledge and expertise effectively.
          </li>
          <li>
            <strong>Comprehensive Support:</strong> From concept development to final publication, we provide end-to-end support to ensure your ebook is polished and ready for the market.
          </li>
          <li>
            <strong>Convenient Format:</strong> eBooks allow readers to access your content anytime, anywhere, making them an ideal choice for reaching a wider audience.
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
         <ContactForm/>

      <Footer/>
    </div>
  );
};
export default EbookWriting;


