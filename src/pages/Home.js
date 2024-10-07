// src/pages/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// const Home = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Welcome to the Home page!</p>
//       <Link to="/about">Go to About Page</Link>
//     </div>
//   );
// };
// export default Home;



import React from 'react';
import '../App.css'; // Assuming your styles are in App.css or similar
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Make sure this import is included if you're using Link

import BannerSection from '../components/home/BannerSection';
import SecondSection from '../components/home/SecondSection';
import ThirdSection from '../components/home/ThirdSection';
import ForthSection from '../components/home/ForthSection';
import FourthSection from '../components/home/FourthSection';
import Header from '../components/common/Header';
import TestimonialCarousel from '../components/home/Testimonial';
import Footer from '../components/common/Footer';
import ContactForm from '../components/common/ContactForm1';



const Home = () => {
    return (
      <div>
        <Header/>
        <BannerSection />
        <SecondSection />
        <FourthSection/>
        <ThirdSection />
        <ForthSection />
        <TestimonialCarousel/>
        
        <ContactForm/>
          {/* Include the BannerSection component here */}
       
        <Footer/>
      </div>
      
      
    );
    
  };
  
  export default Home;