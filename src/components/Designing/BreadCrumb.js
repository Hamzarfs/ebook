import React from 'react';
import  breadcrumbbg from '../../images/breadcrumbbg.png';


const PageHeading = () => {
  return (
    <section className="page-heading"  style={{ backgroundImage: `url(${breadcrumbbg})` }} // Set background image here
    >
      <div className="overlay">
        <div className="container text-center">
          <h1>Designing</h1>
          <p> 
            Kimono photography Agency runs wide and deep. Across many markets,
            <br /> geographies, typologies, our team members.
          </p>
          <a href="#" className="btn"> Discover More </a>
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
