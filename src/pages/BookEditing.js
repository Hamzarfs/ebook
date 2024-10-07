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

<FAQSection/>





          {/* Include the BannerSection component here */}
     
      <Footer/>
    </div>
    
  );
};
export default BookEditing;


