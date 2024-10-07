import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import testimonialimage1 from '../../images/testimonialimage (1).jpg';
import '../../App.css'; // Add your custom styles here if needed

const testimonials = [
    {
        quote: "OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya",
        name: "John Williams",
        role: "Lead Designer",
        image: testimonialimage1,
    },
    {
        quote: "I love this site so much so simply want to imagine how just beautiful everything is great",
        name: "Edward",
        role: "Web Designer",
        image: testimonialimage1,
    },
    {
        quote: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        name: "Jane Copper",
        role: "Graphic Designer",
        image: testimonialimage1,
    },
    {
        quote: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        name: "Emily",
        role: "Assistant Manager",
        image: testimonialimage1,
    },
    {
        quote: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        name: "John Doe",
        role: "SEO Specialist",
        image: testimonialimage1,
    },
    {
        quote: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        name: "Peter",
        role: "Manager",
        image: testimonialimage1,
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
    <div className="item text-center" key={index} style={{ padding: '15px' }}>
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
            <img src={testimonial.image} className="rounded-circle" alt={testimonial.name} style={{ width: '50px', height: '50px' }} />
            <div className="ml-3">
                <h5 className="mb-0" style={{ color: 'black' }}>{testimonial.name}</h5>
                <p className="mb-0" style={{ color: 'gray' }}>{testimonial.role}</p>
            </div>
        </div>
    </div>
));

const TestimonialCarousel = () => (
    <div className="container-fluid mt-4">
        <h1 className="text-center">
            Explore Kimono <br /> Photography <span style={{ color: 'orange' }}>Projects</span>
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
