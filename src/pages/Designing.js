// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/Designing/BreadCrumb';
import DesigningServices from '../components/Designing/DesigningServices'

const PageHeading = () => {
  return (
    <div>

<BreadCrumb />
<DesigningServices/>

       
          {/* Include the BannerSection component here */}
      <h1>About Page</h1>
      <p>This is the About page!</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};
export default PageHeading;


