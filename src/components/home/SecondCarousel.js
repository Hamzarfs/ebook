// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay';

// const SecondSection = ({
//   buttonLabel,
//   heading1,
//   heading2,
//   paragraph,
//   services,
//   subHeading,
// }) => {
//   return (
//     <section className="ebook-second-section py-5">
//       <div className="container-fluid text-center">
//         <button className="heading-button mb-3">{buttonLabel}</button>
//         <h2>
//           {heading1}
//           <span className="orangegradient-h2"> {subHeading} </span>
//           {heading2}
//         </h2>
//         <p className="mb-5">{paragraph}</p>

//         {/* Carousel Start */}
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={30}
//           slidesPerView={3}
//           slidesPerGroup={1}
//           loop={true}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="row text-center"
//         >
//           {services.map((service, index) => (
//             <SwiperSlide key={index} className="col-12 col-sm-6 col-lg-4">
//               <div className="image-box">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="img-fluid rounded"
//                   style={{ height: '250px', width: '100%', objectFit: 'cover' }}
//                 />
//                 <h3 className="design-process-heading font-weight-bold mt-3">
//                   {service.title}
//                 </h3>
//                 <p className="section-p mt-2">{service.description}</p>
//                 <a 
//                   href={service.link} 
//                   className="second-button"
//                   style={{ padding: service.buttonPadding }}
//                 >
//                   {service.learnmore}
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* Carousel End */}
//       </div>
//     </section>
//   );
// };

// export default SecondSection;




import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './SecondSection.css'; // Apni CSS file

const SecondSection = ({
  buttonLabel,
  heading1,
  heading2,
  paragraph,
  services,
  subHeading,
}) => {
  return (
    <section className="ebook-second-section py-5">
      <div className="container-fluid text-center">
        <button className="heading-button mb-3">{buttonLabel}</button>
        <h2>
          {heading1}
          <span className="orangegradient-h2"> {subHeading} </span>
          {heading2}
        </h2>
        <p className="mb-5">{paragraph}</p>

        {/* Carousel Start */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="second-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="image-box">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid rounded"
                  style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                />
                <h3 className="design-process-heading font-weight-bold mt-3">
                  {service.title}
                </h3>
                <p className="section-p mt-2">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Carousel End */}
      </div>
    </section>
  );
};

export default SecondSection;
