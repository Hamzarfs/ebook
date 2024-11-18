// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function BookCards({ books }) {
  return (
    <section className="book-cards">
      {/* Top Row with Heading and Subtext */}
      <div className="book-cards-header container">
        <h2>Let’s see the inside full</h2>
        <h3 className="highlighted-text">overview chapter.</h3>
        <p>
          Creating a fictional world is an art, and our expert ghostwriters are here to help you
          perfect it. Whether you have a plot, characters, just a concept, we transform your vision
          into a compelling and professionally-written novel.
        </p>
      </div>

      {/* Bottom Row with Swiper for Books */}
      <div className="book-cards-slider">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            // Breakpoints for different screen sizes
            320: {
              slidesPerView: 1, // Mobile: 1 card
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // Tablet: 2 cards
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3, // Desktop: 3 cards
              spaceBetween: 20,
            },
          }}
          loop
        >
          {/* Map through the books array */}
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <div className="book-card">
                <img src={book.image} alt={book.title} />
                <div className="stars">{book.rating}</div>
                <h3>{book.category}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
