// src/pages/About.js
import React from 'react';

import BreadCrumb from '../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import GhostwritingServices from '../components/Ghostwritting/GhostWritingServices';
import ImageTextBanner from '../components/common/ImageTextBanner';

import CtaButton from '../components/books/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Ghostwritingbg from '../images/Ghostwritingbg.png'; // Import the image
import ghostimage1 from '../images/ghostimage1.png'; // Adjust the path as necessary
import ghostimage2 from '../images/ghostimage2.png'; // Adjust the path as necessary
import ghostimage3 from '../images/ghostimage3.png'; // Adjust the path as necessary
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';



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


const GhostWriting = () => {
  return (
    <div>
{/* -------------------Start Banner section---------------------- */}
<Header/>
<BreadCrumb
    title="Ghost Writing"
    desc={
      <>
        Kimono photography Agency runs wide and deep. Across many markets,
        <br />
        geographies, typologies, our team members.
      </>
    }
    buttonText="Learn More"
    buttonLink="/learn-more"
    backgroundImage={Ghostwritingbg} // Pass the image URL as a prop
  />
{/* -------------------End Banner section---------------------- */}

<GhostwritingServices/>
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





          {/* Include the BannerSection component here */}
         <FAQSection/>
         <ContactForm/>

      <Footer/>
    </div>
    
  );
};
export default GhostWriting;


