import React from 'react';
import './App.css'; // Assuming your styles are in App.css or similar
import 'bootstrap/dist/css/bootstrap.min.css';

import BannerSection from './components/BannerSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';


function App() {
  return (
    <div className="App">  
      <BannerSection />
      <SecondSection /> 
      <ThirdSection />
    </div>
  );
}

export default App;

