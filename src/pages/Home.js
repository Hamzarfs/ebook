import React from 'react';
import '../App.css'; // Assuming your styles are in App.css or similar
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Make sure this import is included if you're using Link
import { Helmet } from 'react-helmet-async';
import BannerSection from '../components/home/BannerSection';
import SecondSection from '../components/home/SecondSection';
import ThirdSection from '../components/home/ThirdSection';
import ForthSection from '../components/home/ForthSection';
import FourthSection from '../components/home/FourthSection';
import Header from '../components/common/Header';
import TestimonialCarousel from '../components/home/Testimonial';
import Footer from '../components/common/Footer';
import ContactForm from '../components/common/ContactForm1';
import ghostWritingImage from '../images/Ghost Writing.png';
import designingImage from '../images/Designing.png';
import bookEditingImage from '../images/book edit.png';


const services = [
  {
    title: "Ghost Writing",
    image: ghostWritingImage ,
    description: "Worried about bringing your narrative to life? Fret no more; we have you covered in any niche. Our gifted writers create captivating stories with relatable characters and astoundingly unpredictable story arcs that make readers binge and devour Kindles and paperbacks alike.",
    // link: "https://www.facebook.com/",
    // buttonPadding :"10px 25px",
    // learnmore:"Click Here",
  },
  {
    title: "Designing",
    image: designingImage,
    description: "We have skilled illustrators who design stunning book covers for every genre, fully utilizing their professional expertise along with a passion for the craft. We strive to ensure every design meets the client's expectations by working closely with them.",
    
  },
  {
    title: "Book Editing",
    image: bookEditingImage,
    description: "Take advantage of high-tier editing services that provide your manuscript with the attention it requires. Our professional book editors polish every detail of your book and provide valuable guidance toward literary mastery.",
    
  }
];

const Home = () => {
    return (
      <>
   <Helmet>
{/* Primary Title and Meta Description */}
<title>Best Amazon Book Publishing Services Available in New Jersey USA</title>
<meta
name="description"
content="Get the best Amazon book publishing services in New Jersey, USA. We offer expert guidance, formatting, and marketing to help you succeed."/>
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://amzbookpublishing.net" />
{/* Open Graph / Facebook Metadata */}
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta
property="og:title"
content="AMZ Book Publishing: Best Amazon Book Publishing Services"/>
<meta property="og:description" content="AMZ Book Publishing is a leading company offering the best Amazon book publishing services in USA and worldwide. Get your dream book published today!" />
<meta property="og:url" content="https://amzbookpublishing.net/" />
<meta property="og:site_name" content="AMZ Book Publishing" />
{/* Facebook Specific Metadata */}
<meta
property="article:publisher"
content="https://www.facebook.com/AmzBookPublishingUS"/>
<meta
property="article:modified_time"
content="2024-08-22T12:09:56+00:00"
/>
</Helmet>
 
      
      <div>
        <Header/>
        <BannerSection />
        <div>
<SecondSection 
        buttonLabel="S e r v i c e s"
      
        heading1={ <>
       Explore What   </>}
        subHeading={<>
       We Have To Offer </>}
        
        paragraph="From the development of ideas to the design and print stages, we provide support in every aspect. If it is about transforming ideas into reality or if you need any assistance, we have experts ready to support you. Our professionals will ensure that you reach the appropriate audiences through the right strategies and advertising."
        services={services}
      
      />
      </div>
        <FourthSection/>
        <ThirdSection />
        <ForthSection />
        <TestimonialCarousel/>
        
        <ContactForm/>
    
       
        <Footer/>
      </div>
      
      </>
    );
    
  };
  
  export default Home;