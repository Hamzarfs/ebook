// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/common/BreadCrumb';
import DesigningServices from '../components/Designing/DesigningServices';
import BookService from '../components/books/BookServices';
import BookProcess from '../components/books/BookProces';
import CtaButton from '../components/books/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import bookeditingbg from '../images/Bookeditingbg.png'; // Import the image
import FAQSection from '../components/Designing/DesignFaq';



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

// ******************************** End FAQ Section ******


const BookEditing = () => {
  return (
    <div>
{/* -------------------Start Banner section---------------------- */}
<Header/>

<BreadCrumb
    title="Book Editing"
    desc={
      <>
        Kimono photography Agency runs wide and deep. Across many markets,
        <br />
        geographies, typologies, our team members.
      </>
    }
    buttonText="Learn More"
    buttonLink="/learn-more"
    backgroundImage={bookeditingbg} // Pass the image URL as a prop
  />

{/* -------------------End Banner section---------------------- */}

<DesigningServices/>
<BookService/>
<BookProcess/>

<CtaButton/>

<FAQSection faqData={faqData} />





          {/* Include the BannerSection component here */}
     
      <Footer/>
    </div>
    
  );
};
export default BookEditing;


