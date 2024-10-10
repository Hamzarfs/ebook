// import React from 'react';
// import './App.css'; // Assuming your styles are in App.css or similar
// import 'bootstrap/dist/css/bootstrap.min.css';

// import BannerSection from './components/home/BannerSection';
// import SecondSection from './components/home/SecondSection';
// import ThirdSection from './components/home/ThirdSection';
// import ForthSection from './components/home/ForthSection';
// import FourthSection from './components/home/FourthSection';
// import BreadCrumbs from './components/Designing/BreadCrumb';


// function App() {
//   return (
//     <div className="App">  
//       {/* <BannerSection />
//       <SecondSection /> 
//       <FourthSection/>
//       <ThirdSection />
//       <ForthSection /> 
//       <BreadCrumbs/>
//       }

//     </div>
//   )
// }

// export default App;

//src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Designing from './pages/Designing';
import BookEditing from './pages/BookEditing';
import GhostWriting from './pages/GhostWriting';
import OtherServices from './pages/OtherServices';
import FictionGhostwriting from './GhostWritingCategories/FictionGhostwriting';
import PopupForm1 from "./components/common/PopupForm"; // Import the popup form

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div>
        {/* Navigation could be here */}
        
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home openModal={openModal} />} />
          <Route path="/designing" element={<Designing openModal={openModal} />} />
          <Route path="/ghost-writing" element={<GhostWriting openModal={openModal} />} />
          <Route path="/other-services" element={<OtherServices openModal={openModal} />} />
          <Route path="/book-editing" element={<BookEditing openModal={openModal} />} />
          <Route path="/fiction-ghostwriting" element={<FictionGhostwriting openModal={openModal} />} />
        </Routes>

        {/* Popup Form Modal */}
        <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </Router>
  );
};

export default App;
