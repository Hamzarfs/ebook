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
    description: "Need an expert to bring your story to life? Whatever the genre, we help create a masterpiece. Our talented writers craft engaging plots, dynamic characters, and jaw-dropping twists that keep readers hooked to their Kindles and paperbacks from start to finish!",
    // link: "https://www.facebook.com/",
    // buttonPadding :"10px 25px",
    // learnmore:"Click Here",
  },
  {
    title: "Designing",
    image: designingImage,
    description: "Our talented illustrators create captivating book covers across all genres, combining professional expertise with a passion for their craft. By collaborating closely with clients, we ensure each design aligns perfectly with their vision.",
    
  },
  {
    title: "Book Editing",
    image: bookEditingImage,
    description: "Experience top-notch editing services that give your manuscript the attention it truly deserves. Our skilled editors focus on perfecting every detail of your book, offering expert insights to help you reach literary excellence.",
    
  }
];

const Home = () => {
    return (
      <>
       <Helmet>
        <title>AMZ Book Publishing: Best Amazon Book Publishing Services</title>
        <meta name="description" content="AMZ Book Publishing is a leading company offering the best Amazon book publishing services to authors in US and worldwide. Get your dream book published today!" />
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
        
        paragraph="From concept to publication as ebook or paperback, we have your back every step of the way, turning your ideas into reality. Our expert team will help you reach the right readers through targeted campaigns and promotions, so we can share your book with the world, together!"
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