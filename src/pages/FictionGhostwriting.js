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
import SecondSection from '../components/home/SecondSection';
import DesignProcess from '../components/common/DesignProcess';



const contentItems = [
   
    {
        heading: "Cover-To-Cover Creativity",
        paragraph: "A great book design starts with the perfect cover. Our global design community has created thousands of them. We’ve designed stunning artwork for everything from kids’ books to cookbooks—including New York Times bestselling authors Tim Ferris and Rick Warren.",
        imgSrc: ghostimage1,
        imgAlt: "Book Cover Design",
        flexDirection: "normal"
    },
 
  ];

  const contentItems2 = [
   
    {
        heading: "Cover-To-Cover Creativity",
        paragraph: "A great book design starts with the perfect cover. Our global design community has created thousands of them. We’ve designed stunning artwork for everything from kids’ books to cookbooks—including New York Times bestselling authors Tim Ferris and Rick Warren.",
        imgSrc: ghostimage1,
        imgAlt: "Book Cover Design",
        flexDirection: "normal"
    },
 
  ];


const FictionGhostwriting = () => {
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

<div style={{ padding: '0px 0px 30px 0px' }}>
<ImageTextBanner 
  
    
    contentItems={contentItems} 
/>
    
</div>

<div style={{ padding: '0px 0px 30px 0px' }}>
<SecondSection/>
</div>


<DesignProcess/>

<div style={{ padding: '0px 0px 30px 0px' }}>
<ImageTextBanner 
  
    
    contentItems={contentItems2} 
/>
    
</div>





<CtaButton/>





          {/* Include the BannerSection component here */}
         <FAQSection/>
         <ContactForm/>

      <Footer/>
    </div>
    
  );
};
export default FictionGhostwriting;


