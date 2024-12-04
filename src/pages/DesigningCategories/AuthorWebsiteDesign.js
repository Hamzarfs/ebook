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
    title: "Creating Visual Masterpieces",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Our author website designers are like artists working on a digital canvas, turning your vision into a visual masterpiece. They carefully select color palettes, typography, and imagery that capture the very essence of your work. Every element is thoughtfully chosen to evoke emotion, set the perfect tone, and invite visitors to dive deeper into your world."
  },
  {
    title: "Navigational Architects",
    image: designingImage, // Update this if you have a specific image
    description: "User experience is at the heart of every author’s website. Our designers take the time to carefully craft the navigation, making sure visitors can easily explore and uncover your content. From smooth menu layouts to intuitive interfaces, each click guides readers deeper into your world, keeping the journey seamless and engaging."
  },
  {
    title: "Ongoing Support",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Our commitment to you does not stop once your website goes live. Our author website designers continue to offer ongoing support, keeping your site updated, secure, and in sync with your evolving goals. We are here to ensure your online presence grows alongside your journey as an author."
  }
];


// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Our
    
    </>
  ),
  highlight: "Designing Process"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Discovery",
    title: "Discovery",
    description: "We kick things off by learning about your writing style, audience, and personal goals to ensure your site truly reflects who you are as an author. Think of it as a creative brainstorming session where your vision takes center stage."
  },
  {
    image: designprocess2,
    alt: "Design & Concept",
    title: "Design & Concept",
    description: "Our designers will craft a stunning layout that aligns with your brand and resonates with your readers. It’s like designing a cover that captures the essence of your book, but this time, it’s for your entire online presence."
  },
  {
    image: designprocess3,
    alt: "Development",
    title: "Development",
    description: "Once the design is nailed down, we build your site with seamless navigation and interactive elements to engage your audience. This is where the magic happens: your vision turns into a fully functional, immersive website."
  },
  {
    image: designprocess4,
    alt: "Launch & Support",
    title: "Launch & Support",
    description: "When everything is ready, we go live, making sure your website launch is smooth and exciting. But it doesn’t end there: we are here to provide ongoing support to keep your site fresh and up-to-date as your writing career evolves."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How much does a custom website cost?",
    answer: "Every website we build is as unique as the business behind it. We take the time to understand your specific needs so our proposals are tailored to your project. After asking plenty of questions and assessing what you need, we will provide you with a detailed quote that reflects the custom design and functionality your small business requires."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! In today's world, a mobile-friendly website is a must. We make sure your site looks and functions beautifully on all devices. Throughout the development process, we will test it thoroughly to ensure everything works seamlessly, whether on a phone, tablet, or desktop."
  },
  {
    question: "How long will it take to get a new website?",
    answer: "The timeline can vary depending on the complexity of the project and your availability for feedback. We will work closely with you to set realistic deadlines and ensure everything stays on track, but the overall duration will depend on the scope of the site."
  },
  {
    question: "Who writes the content for the site?",
    answer: "Typically, you provide the content since you are the expert on your business. However, if you need assistance, we have experienced ghostwriters on board who can help polish up your words or create original content that reflects your voice and vision."
  },
  {
    question: "What if I need help with my site down the road?",
    answer: "We are just an email away! Whether you need occasional support or more regular updates, we are here to help as much or as little as you need. Rest assured, we will not vanish after your site is launched."
  }
];

// ******************************** End FAQ Section ******************************

const AuthorWebsiteDesign = () => {
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
        <title>Custom Portfolio Website Design Services for Authors </title>
        <meta name="description" content="We create stunning websites for writers. Get our author website design services for showcasing your books, book sales, readers email list and attention." />
        <link rel="canonical" href="https://amzbookpublishing.net/author-website-design" />

      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Author Website Design"
        desc={
          <>
 Work with our professional web designers to create an engaging, interactive author website that truly reflects your style!

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
    heading="Author Website "
    subHeading="Design"
    description={
        <>
At AMZ Book Publishings, we believe that an experienced team is the foundation of success. Just as important is having a talented design unit to create captivating websites for authors. A well-designed, customer-focused website should not only look great, but it should also be simple to navigate. 
           <br/><br/>
           Seasonal updates and frequent posts keep your readers engaged and coming back for more. We focus on delivering custom-author website designs that are both professional and affordable, giving visitors a clear sense of your work and style.
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
        Crafting   </>}
        subHeading={<>
         Websites   <br/>
         That Bring </>}
        heading2="Your Story to Life"
        paragraph="Every element is crafted with your unique voice in mind, ensuring your online presence reflects the power of your words."
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
Imagine discovering the perfect author website that truly understands your style and vision, all without spending a single dollar upfront. Therefore, we offer a unique approach that allows you to preview your ideal website before making any commitment. We believe in eliminating the guesswork, miscommunication, and endless revisions that can make the design process frustrating. 
         <br/><br/>
         Our one-of-a-kind designs are tailored specifically for authors like you, ensuring that your online presence reflects your unique identity. With expert guidance and a straightforward process, you can see exactly what your website will look like before making a decision. Explore your options, and when you are ready, reach out to us to elevate your online presence to new heights
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
export default AuthorWebsiteDesign;


