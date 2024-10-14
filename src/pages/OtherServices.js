// src/pages/About.js
import React, { useState } from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import ImageTextBanner from '../components/common/ImageTextBanner';
import CtaButton from '../components/common/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import othersericebg from '../images/othersericebg.png'; // Import the image
import ghostimage1 from '../images/ghostimage1.png'; // Adjust the path as necessary
import ghostimage2 from '../images/ghostimage2.png'; // Adjust the path as necessary
import ghostimage3 from '../images/ghostimage3.png'; // Adjust the path as necessary
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';
import PopupForm1 from '../components/common/PopupForm';
import SideTabContent from '../components/OtherServices/SideTabContent';
import OtherServicesSec from '../components/OtherServices/OtherServicesSec';


const contentItems = [
  {
    heading: "Cover-To-Cover Creativity",
    paragraph: "A great book design starts with the perfect cover. Our global design community has created thousands of them. We’ve designed stunning artwork for everything from kids’ books to cookbooks—including New York Times bestselling authors Tim Ferris and Rick Warren.",
    imgSrc: ghostimage1,
    imgAlt: "Book Cover Design",
    flexDirection: "normal"
  },
  {
    heading: "Make Every Page Perfect With Creative Book Design",
    paragraph: "We’d never forget about the inside of your book. We’ve curated a team of our expert book designers to bring you custom typesetting and interiors—whether you’ve got a novel, a self-help book, or something extra special.",
    imgSrc: ghostimage2,
    imgAlt: "Book Design",
    flexDirection: "reverse"
  },
  {
    heading: "Your Destination For Custom Book Illustration",
    paragraph: "Our book design artists love turning your words into gorgeous art. From storybook sketches to clever cartoons, imagine the beautiful imagery that will pull your readers further into your book.",
    imgSrc: ghostimage3,
    imgAlt: "Book Illustration",
    flexDirection: "normal"
  },
];


// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How does your book writing process ensure a unique and compelling narrative?",
    answer: "We start by understanding your vision and target audience. Then, our writers dive into research to craft a fresh and engaging story, focusing on developing strong characters and themes to ensure your book stands out and resonates with readers."
  },
  {
    question: "Can you help me become a published author?",
    answer: "Absolutely! Our fiction book ghostwriting services are designed to help you create an engaging story that is ready to pitch to top publishing platforms and literary agents. With a professional ghostwriter on your side, someone who has helped numerous authors achieve their publishing dreams, you will significantly boost your chances of success."
  },
  {
    question: "What are the key steps involved in your book publishing service, and how do you ensure quality and compliance?",
    answer: "We handle everything from formatting and cover design to final proofreading. Our team ensures your manuscript meets industry standards and legal requirements. We also take care of copyright issues to get your book ready for publishing."
  },
  {
    question: "Are your services confidential?",
    answer: "Absolutely! We understand the importance of confidentiality. Unlike unprofessional ghostwriters who might share project details to attract new clients, we keep everything you share with us strictly private. Your ideas and manuscripts are safe with us!"
  },
  {
    question: "How do SEO and Amazon marketing strategies work together to boost my book’s visibility and sales?",
    answer: "SEO helps drive traffic to your book’s website through keyword optimization, while Amazon marketing enhances the listing with targeted ads and reviews. Together, they increase visibility and sales both on your site and on Amazon."
  },
  {
    question: "What if I don't like the final draft?",
    answer: "No worries at all! If you are not completely satisfied with the draft, just let us know what you would like to change. We offer free revisions because your satisfaction is our priority. Your feedback helps us understand your vision better, and we are here to work with you until you are thrilled with the final product!"
  },
  {
    question: "Can you explain how your social media marketing strategies are tailored to the book industry?",
    answer: "We create targeted campaigns for platforms where your potential readers are most active. This includes crafting engaging posts, running ads, and interacting with book communities to build a strong online presence for your book."
  },
  {
    question: "What steps are involved in creating a compelling book trailer, and how does it help in book promotion?",
    answer: "We script, shoot, and edit a short, engaging video that highlights the key themes and hooks in your book. A well-made trailer captures attention and can be shared across social media and video platforms to generate buzz."
  }
];


// ******************************** End FAQ Section ******************************

const OtherServices = () => {
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
        title="Other Services"
        desc={
          <>
            Give your writing career a boost by investing in expert book-writing services.

            <br />
            We can help you reach your goals and connect with readers!
          </>
        }
        buttonText="Get a Quote"
        onClick={openModal} // Call openModal on button click
        backgroundImage={othersericebg} // Pass the image URL as a prop
      />

      {/* Popup Form */}
      <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />

      {/* -------------------End Banner section---------------------- */}


      <OtherServicesSec />
      <ImageTextBanner
        title="A Whole New Chapter In"
        subtitle="Book Design"
        description={
          <>
            You've got the next bestseller. We’ve got a complete book design solution: custom covers,<br />
            interior design, illustration, tools and more.
          </>
        }
        contentItems={contentItems}
      />

      <SideTabContent />


      <CtaButton />





      {/* Include the BannerSection component here */}
      <FAQSection faqData={faqData} />
      <ContactForm />

      <Footer />
    </div>

  );
};
export default OtherServices;


