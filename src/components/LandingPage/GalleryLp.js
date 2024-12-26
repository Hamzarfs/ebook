import React from 'react';
import '../../portfolio.css'; // Import the CSS file
import Portfolio1 from '../../images/gallery1.png';
import Portfolio2 from '../../images/gallery2.png';
import Portfolio3 from '../../images/gallery3.png';
import Portfolio4 from '../../images/gallery4.png';
import Portfolio5 from '../../images/gallery5.png';
import Portfolio6 from '../../images/gallery6.png';
import Portfolio7 from '../../images/gallery7.png';
import Portfolio8 from '../../images/gallery8.png';


const Portfolio = () => {
  return (
    <div className="logo-designs-portfolio py-4">
      <div className="container">
        {/* Heading for the Portfolio */}
        <h2 className="portfolio-heading">Our Portfolio - From Designing,
        Formatting to Publishing</h2>
        
        <div className="row filter-button-group"></div>
        
        <div className="row gallery">
          <hr className="custom-divider-ca" />
          
 {/* First Row */}
<div className="col-lg-3 col-md-6 col-6 p-1 filter all iconic">
  <img src={Portfolio1} alt="Iconic Logo 1" />
</div>
<div className="col-lg-3 col-md-6 col-6 p-1 filter all illustrative">
  <img src={Portfolio2} alt="Illustrative Logo 1" />
</div>
<div className="col-lg-3 col-md-6 col-6 p-1 filter all typography">
  <img src={Portfolio3} alt="Typography Logo 2" />
</div>
<div className="col-lg-3 col-md-6 col-6 p-1 filter all typography">
  <img src={Portfolio4} alt="Typography Logo 1" />
</div>

{/* Second Row */}
<div className="col-lg-3 col-md-6 col-6 p-1 filter all iconic">
  <img src={Portfolio5} alt="Iconic Logo 1" />
</div>
<div className="col-lg-3 col-md-6 col-6 p-1 filter all illustrative">
  <img src={Portfolio6} alt="Illustrative Logo 1" />
</div>
<div className="col-lg-3 col-md-6 col-6 p-1 filter all typography">
  <img src={Portfolio7} alt="Typography Logo 2" />
</div>
<div className="col-lg-3 col-md-6 col-6 p-1 filter all typography">
  <img src={Portfolio8} alt="Typography Logo 1" />
</div>

     
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
