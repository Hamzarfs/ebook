import React from 'react';
import Slider from 'react-slick'; // Importing Slick Carousel component
import 'slick-carousel/slick/slick.css'; // Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Optional Theme CSS
import '../../Lplogobanner.css'; // Import custom CSS for this component

import image1 from '../../images/lplogodraft.png';
import image2 from '../../images/lplogoamz.png';
import image3 from '../../images/lplogolulu.png';
import image4 from '../../images/lplogobam.png';

// Slick Carousel settings
const settings = {
  dots: false,           // Show dots for pagination
  infinite: false,       // Looping of the slides
  speed: 500,           // Transition speed between slides
  slidesToShow: 4,      // Number of slides to show at once (default for desktop)
  slidesToScroll: 4,    // Number of slides to scroll at once
  autoplay: true,       // Enable autoplay
  autoplaySpeed: 3000,  // Autoplay interval (in milliseconds)
  arrows: false,         // Show left/right arrows (optional)

  // Responsive settings
  responsive: [
    {
      breakpoint: 1024, // Tablet (screen width <= 1024px)
      settings: {
        slidesToShow: 3,  // Show 2 images on tablets
        slidesToScroll: 3, 
      }
    },
    {
      breakpoint: 768, // Mobile (screen width <= 768px)
      settings: {
        slidesToShow: 1,  // Show 1 image on mobile
        slidesToScroll: 1,
      }
    }
  ]
};

const Lplogobanner = () => {
  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  return (
    <section className="lplogobanner">
      <div className="container">
        <div className="row">
          {/* Left Column with Text */}
          <div className="col-md-3">
            <h2>Sell Your <br></br> Book With</h2>
          </div>

          {/* Right Column with Slick Carousel */}
          <div className="col-md-9">
            <Slider {...settings}> {/* Slick Carousel with settings */}
              {images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`slider-img-${index}`} className="img-fluid" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lplogobanner;
