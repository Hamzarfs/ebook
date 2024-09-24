import React from 'react';
import './App.css'; // Assuming your styles are in App.css or similar
import 'bootstrap/dist/css/bootstrap.min.css';

import BannerSection from './components/home/BannerSection';
import SecondSection from './components/home/SecondSection';
import ThirdSection from './components/home/ThirdSection';
import ForthSection from './components/home/ForthSection';




function App() {
  return (
    <div className="App">  
      <BannerSection />
      <SecondSection /> 
      <ThirdSection />
      <ForthSection />


    </div>
  );
}

export default App;

