import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../awards.css';
import award1 from '../../images/award1.png';
import award2 from '../../images/award2.png';
import award3 from '../../images/award3.png';
import award4 from '../../images/award4.png';

import 'swiper/css'; // Correct import for Swiper CSS in v8 and above



const AwardsLogo = () => {
  return (
    <section className="awards-logo-section py-3">
      <div className="container">
        {/* Heading */}
        {/* <div className="row text-center mb-4">
          <div className="col-12">
            <h2 className='choose-service-heading font-weight-bold py-3'>Award-Winning Video Production Company in USA</h2>
          </div>
        </div> */}

        {/* Swiper for Logos */}
        <div className="row align-items-center">
          <div className="col-12">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {/* Logo Slides */}
              <SwiperSlide>
                {/* <a target="_blank" href="https://www.designrush.com/agency/website-design-development/new-jersey"> */}
                <img src={award1} alt="Award 1" className="awards-logo-image img-fluid" />
                {/* </a> */}
              </SwiperSlide>
              <SwiperSlide>
                <img src={award2} alt="Award 2" className="awards-logo-image img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={award3} alt="Award 3" className="awards-logo-image img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={award4} alt="Award 4" className="awards-logo-image img-fluid" />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsLogo;
