// src/pages/About.js
import React from 'react';
// import { Link } from 'react-router-dom';
import BreadCrumb from '../components/common/BreadCrumb';
import DesigningServices from '../components/Designing/DesigningServices'
import DesignProcess from '../components/common/DesignProcess';
import BookCoverSwiper from '../components/Designing/BookCoverSwipper';
import ImageTextBanner from '../components/common/ImageTextBanner';
import CtaButton from '../components/books/CtaButton';
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import breadcrumbbg from '../images/breadcrumbbg.png'; // Import the image
import frame10 from '../images/Frame 10.png'; // Adjust the path as necessary
import frame11 from '../images/Frame 11.png'; // Adjust the path as necessary
import frame12 from '../images/Frame 12.png'; // Adjust the path as necessary



<Header/>
const contentItems = [
  {
      heading: "Cover-To-Cover Creativity",
      paragraph: "A great book design starts with the perfect cover. Our global design community has created thousands of them. We’ve designed stunning artwork for everything from kids’ books to cookbooks—including New York Times bestselling authors Tim Ferris and Rick Warren.",
      imgSrc: frame10,
      imgAlt: "Book Cover Design",
      flexDirection: "normal"
  },
  {
      heading: "Make Every Page Perfect With Creative Book Design",
      paragraph: "We’d never forget about the inside of your book. We’ve curated a team of our expert book designers to bring you custom typesetting and interiors—whether you’ve got a novel, a self-help book, or something extra special.",
      imgSrc: frame11,
      imgAlt: "Book Design",
      flexDirection: "reverse"
  },
  {
      heading: "Your Destination For Custom Book Illustration",
      paragraph: "Our book design artists love turning your words into gorgeous art. From storybook sketches to clever cartoons, imagine the beautiful imagery that will pull your readers further into your book.",
      imgSrc: frame12,
      imgAlt: "Book Illustration",
      flexDirection: "normal"
  },
];

const PageHeading = () => {
  return (
    <div>
<Header/>
<BreadCrumb
    title="Designing"
    desc={
      <>
        Kimono photography Agency runs wide and deep. Across many markets,
        <br />
        geographies, typologies, our team members.
      </>
    }
    buttonText="Learn More"
    buttonLink="/learn-more"
    backgroundImage={breadcrumbbg} // Pass the image URL as a prop
  />



<DesigningServices/>
<BookCoverSwiper/>
<DesignProcess/>



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



<CtaButton/>
<FAQSection/>
<ContactForm/>


       
          {/* Include the BannerSection component here */}
    
      
      
      <Footer/>
    </div>
      
  );
};
export default PageHeading;


