import React from 'react';
import Slider from 'react-slick'; // Importing Slick Carousel component
import 'slick-carousel/slick/slick.css'; // Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Optional Theme CSS
import '../../Lplogobanner.css'; // Import custom CSS for this component

import image1 from '../../images/lplogoamz.svg';
import image2 from '../../images/barnesnoble.svg';
import image3 from '../../images/kobo.svg';
import image4 from '../../images/lplogobam.svg';
// import image5 from '../../images/smashwords.svg';
// import image6 from '../../images/draft2digital.svg';
import image7 from '../../images/googleimg.svg';
// import image8 from '../../images/lulu.svg';

// Slick Carousel settings
const settings = {
  dots: false,           // Show dots for pagination
  infinite: true,       // Looping of the slides
  speed: 500,           // Transition speed between slides
  slidesToShow: 4,      // Number of slides to show at once (default for desktop)
  slidesToScroll: 1,    // Number of slides to scroll at once
  autoplay: true,       // Enable autoplay
  autoplaySpeed: 300,  // Autoplay interval (in milliseconds)
  arrows: false,         // Show left/right arrows (optional)

  // Responsive settings
  responsive: [
    {
      breakpoint: 1024, // Tablet (screen width <= 1024px)
      settings: {
        slidesToShow: 3,  // Show 2 images on tablets
        slidesToScroll: 1, 
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
    image4,
    // image5,
    // image6,
    image7,
    // image8
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
                  <img src={img} alt={`slider-img-${index}`} className="lplogoslider" />
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
