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



const Home = () => {
    return (
      <div>
        <BannerSection />
        <SecondSection />
        <FourthSection/>
        <ThirdSection />
        <ForthSection />
          {/* Include the BannerSection component here */}
        <h1>Home Page</h1>
        <p>Welcome to the Home page!</p>
        <Link to="/Designing">Go to About Page</Link>
      </div>
    );
  };
  
  export default Home;