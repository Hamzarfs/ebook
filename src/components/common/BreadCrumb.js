import React from 'react';
import  breadcrumbbg from '../../images/breadcrumbbg.png';

const BreadCrum = (props) => {


  return (
    <section className="page-heading"  style={{ backgroundImage: `url(${breadcrumbbg})` }} // Set background image here
    >
      <div className="overlay">
        <div className="container text-center">
          <h1>{props.title}</h1>
          <p> 
          {props.desc || (
              <>
                
              </>
            )}
          </p>
          <a href={props.buttonLink} className="btn">
            {props.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BreadCrum;
