import "../../Testimonial.css";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // updated import
import 'swiper/css/navigation'; // updated import
import 'swiper/css/autoplay'; // updated import
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';  // Importing icons
import { ImQuotesLeft } from "react-icons/im";
import starsImg from '../../images/stars-5.svg'
import { FaQuoteLeft } from 'react-icons/fa';
import { Autoplay, Navigation } from "swiper/modules";

const TestimonialSection = () => {
    const testimonials = [
        {
            text: ' I am satisfied with the publication services of AMZ. Alan guided me through every step of publishing my first book. The process was smooth, and the final product exceeded my expectations. Thank you AMZ',
            name: ' Exceptional Publishing Services',
            location: 'Victor Erickson'
        },
        {
            text: 'Working with AMZ Book Publishing’s ghostwriting team was an incredible  experience. They skillfully captured my unique voice and transformed my  ideas into a beautifully written story that deeply resonated with my readers,   leaving a lasting impact and exceeding all expectations.',
            name: 'Amazing Ghostwriting Experience ',
            location: 'Keri'
        },

        {
            text: 'Thanks to Brian’s expert guidance, my book achieved bestseller status on Amazon. His marketing strategies were precise, impactful, and perfectly aligned with my goals, ensuring outstanding results that exceeded my expectations.',
            name: 'Comprehensive Marketing Services',
            location: 'Parker'
        },
        {
            name: 'Creative Ebook Writing Team',

            text: 'Brian helped me in self publishing my book from scratch. The team’s creativity and professionalism made the process enjoyable. Highly recommended!',
            location: 'Amy Carpenter',
        },
        {
            text: 'The design team, led by Alan, delivered a book cover that brought my book to life. The attention to detail was amazing! Thank you guys!',
            name: 'Outstanding Book Cover Designs ',
            location: 'David'
        },
        {
            text: ' I am satisfied with the publication services of AMZ. Alan guided me through every step of publishing my first book. The process was smooth, and the final product exceeded my expectations. Thank you AMZ',
            name: ' Exceptional Publishing Services',
            location: 'Victor Erickson'
        },
        {
            text: 'Working with AMZ Book Publishing’s ghostwriting team was an incredible  experience. They skillfully captured my unique voice and transformed my  ideas into a beautifully written story that deeply resonated with my readers,   leaving a lasting impact and exceeding all expectations.',
            name: 'Amazing Ghostwriting Experience ',
            location: 'Keri'
        },

        {
            text: 'Thanks to Brian’s expert guidance, my book achieved bestseller status on Amazon. His marketing strategies were precise, impactful, and perfectly aligned with my goals, ensuring outstanding results that exceeded my expectations.',
            name: 'Comprehensive Marketing Services',
            location: 'Parker'
        },
        {
            name: 'Creative Ebook Writing Team',

            text: 'Brian helped me in self publishing my book from scratch. The team’s creativity and professionalism made the process enjoyable. Highly recommended!',
            location: 'Amy Carpenter',
        },
        {
            text: 'The design team, led by Alan, delivered a book cover that brought my book to life. The attention to detail was amazing! Thank you guys!',
            name: 'Outstanding Book Cover Designs ',
            location: 'David'
        },
    ];

    return (
        <section className='testimonial-section py-4'>
            <div className='container'>
                <div className='row text-center'>
                    <h2>Testimonials</h2>
                </div>
                <div className='row'>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay
                        loop
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                    // navigation
                    // navigation={{
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className='testimonial-card'>
                                    <ImQuotesLeft className='quote-icon' />
                                    <p className='testimonial-name'>{testimonial.name}</p>
                                    <p className='testimonial-text'>{testimonial.text}</p>
                                    <div className='testimonial-footer'>
                                        <p className='testimonial-name fw-bold m-0'>{testimonial.location}</p>
                                        <img src={starsImg} alt="Trustpilot 5 stars" className="h-25" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* <div className="row justify-content-center">
                    <div className="col-12 arrows">
                    <div className="swiper-button-prev">
                        <a href="#prev" className="nav-link">
                           <i> <FaChevronLeft size={40} /></i> 
                        </a>
                    </div>
                    <div className="swiper-button-next">
                        <a href="#next" className="nav-link">
                            <FaChevronRight size={40} /> 
                        </a>
                    </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default TestimonialSection;
