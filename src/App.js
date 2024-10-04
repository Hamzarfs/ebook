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
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Designing from './pages/Designing';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Designing" element={<Designing />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;