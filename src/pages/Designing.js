// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/common/BreadCrumb';
import DesigningServices from '../components/designing/DesigningServices'

const PageHeading = () => {
  return (
    <div>

<BreadCrumb
  title="Designing"
  desc={
    <>
      Kimono photography Agency runs wide and deep. Across many markets,
      <br />
      geographies, typologies, our team members.
    </>
  }
  buttonText="Learn More"
  buttonLink="/learn-more"
/>

<DesigningServices/>

       
          {/* Include the BannerSection component here */}
      <h1>About Page</h1>
      <p>This is the About page!</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};
export default PageHeading;


