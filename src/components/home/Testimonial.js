import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import testimonialimage1 from '../../images/testimonialimage (1).jpg';
import '../../App.css'; // Add your custom styles here if needed

const testimonials = [
    {
        quote: "AMZ Book Publishing helped me publish my novel seamlessly. Their team is professional, supportive, and highly efficient. Highly recommended!",
        name: "John Williams",
        role: "Author",
        // image: testimonialimage1,
    },
    {
        quote: "Incredible experience! AMZ Book Publishing made the process easy and stress-free. I’m thrilled with the final product and service.",
        name: "Edward",
        role: "Author",
        // image: testimonialimage1,
    },
    {
        quote: "AMZ Book Publishing turned my manuscript into a polished book. Great communication, timely updates, and excellent publishing support.",
        name: "Jane Copper",
        role: "Author",
        // image: testimonialimage1,
    },
    {
        quote: "I had a fantastic experience with AMZ Book Publishing. Their expert guidance and swift publishing process exceeded all expectations!",
        name: "Emily",
        role: "Author",
        // image: testimonialimage1,
    },
    {
        quote: "The team at AMZ Book Publishing was extremely helpful. They guided me every step of the way to publication success.",
        name: "John Doe",
        role: "Author",
        // image: testimonialimage1,
    },
    {
        quote: "AMZ Book Publishing made my dream of becoming an author come true. Their professionalism and care ensured a perfect result!",
        name: "Peter",
        role: "Author",
        // image: testimonialimage1,
    },
];


// Carousel responsive settings
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

// Generate carousel items from the testimonial data
const items = testimonials.map((testimonial, index) => (
    <div className="item text-center" key={index} style={{ padding: '85px 10px 85px 10px' }}>
        <i className="bi bi-quote quote1"></i>
        <p className="card-text">{testimonial.quote}</p>
        <div className="text-center">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
        </div>
        <div className="d-flex align-items-center mt-3 justify-content-center">
            {/* <img src={testimonial.image} className="rounded-circle" alt={testimonial.name} style={{ width: '50px', height: '50px' }} /> */}
            <div className="ml-3">
                <h5 className="mb-0" style={{ color: 'black' }}>{testimonial.name}</h5>
                <p className="mb-0" style={{ color: 'gray' }}>{testimonial.role}</p>
            </div>
        </div>
    </div>
));

const TestimonialCarousel = () => (
    <div className="container-fluid mt-4 mb-4 ">
        <h1 className="text-center py-4">
        Stories of <span style={{ color: 'orange' }}>Success </span>
        </h1>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay // Enable autoplay
            autoPlayInterval={2000} // Set autoplay interval (2 seconds)
            infinite // Enable infinite scrolling
        />
    </div>
);

export default TestimonialCarousel;
