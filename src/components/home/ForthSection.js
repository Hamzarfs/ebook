import React from 'react';
import gellary1 from '../../images/book1.png';
import gellary3 from '../../images/book3.png';
import gellary8 from '../../images/book8.png';
import gellary2 from '../../images/book2.png';
import gellary4 from '../../images/book4.png';
import gellary7 from '../../images/book7.jpg';
import gellary10 from '../../images/book10.png';
import gellary5 from '../../images/book5.png';
import gellary6 from '../../images/book6.png';
import gellary9 from '../../images/book9.png';



const ForthSection = () => {
  return (
    <section class="ebook-forth-section custom-gallery">
    <div class="container second-section-container">
      {/* <button class="heading-button">g a l l e r y</button> */}
      <h2>Our <span class="orange-text">Success</span> Stories</h2>
      <p>Many writers who have come to us for guidance have gone on to become<br/>
      bestselling authors. Curious to see how we helped them shine?<br/>
      Let’s dive into a few of our standout success stories!</p>
    </div>
    <div class="forth-section-container">
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img src={gellary1} class="w-100 shadow-1-strong rounded" alt="Book 1" />
          <img src={gellary3} class="w-100 shadow-1-strong rounded" alt="Book 3" />
          <img src={gellary8} class="w-100 shadow-1-strong rounded" alt="Book 8" />
        </div>
  
        <div class="col-lg-4 mb-4 mb-lg-0">
          <img src={gellary2} class="w-100 shadow-1-strong rounded" alt="Book 2" />
          <img src={gellary4} class="w-100 shadow-1-strong rounded" alt="Book 4" />
          <img src={gellary7} class="w-100 shadow-1-strong rounded" alt="Book 7" />
          <img src={gellary10} class="w-100 shadow-1-strong rounded" alt="Book 10" />
        </div>
  
        <div class="col-lg-4 mb-4 mb-lg-0">
          <img src={gellary5} class="w-100 shadow-1-strong rounded" alt="Book 5" />
          <img src={gellary6} class="w-100 shadow-1-strong rounded" alt="Book 6" />
          <img src={gellary9} class="w-100 shadow-1-strong rounded" alt="Book 9" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default ForthSection;
