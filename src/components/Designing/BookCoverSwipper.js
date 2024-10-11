

import React from 'react';
import { Swiper, SwiperSlide, navigation } from 'swiper/react';
import bookgallery1 from '../../images/book-gallery-1.png';
import bookgallery2 from '../../images/book-gallery-2.png';
import bookgallery3 from '../../images/book-gallery-3.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// Install Swiper modules
// SwiperCore.use([Navigation]);

const BookCoverSwiper = () => {
  return (
    <section id="coverdesignsec">
      <div className="container">
        {/* Heading Section */}
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="design-process-heading font-weight-bold">
              Custom Book <span className="orangegradient-h2">Cover Design</span>
            </h2>
            <p>Hook your audience with our bespoke book cover designs.</p>
          </div>
        </div>

        <div className="custom-slider-container">
          {/* Swiper Section */}
          <Swiper
            navigation={true}
            spaceBetween={30}
            loop={true}
            className="mySwiper"
            breakpoints={{
              // For mobile screens
              640: {
                slidesPerView: 1,
              },
              // For tablets
              768: {
                slidesPerView: 2,
              },
              // For desktop screens
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            
            {/* Slide 1 */}
            <SwiperSlide>
              <img src={bookgallery1} alt="Allies in Time" />
         
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <img src={bookgallery2} alt="Make It Out" />
              
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide>
              <img src={bookgallery3} alt="Blood Honey" />
              
            </SwiperSlide>
          
            {/* Add more slides as necessary */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BookCoverSwiper;
