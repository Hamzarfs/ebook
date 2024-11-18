// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function BookCards({ books }) {
  return (
    <section className="book-cards">
      {/* Top Row with Heading and Subtext */}
      <div className="book-cards-header container">
        <h2>Where Stories Come to Life!</h2>
        <h3 className="highlighted-text">Your Vision, Our Craft – Published Perfectly!</h3>
        <p>
        Explore our portfolio gallery to witness exceptional book publishing projects. From captivating covers to flawlessly formatted interiors, discover how AMZ Book Publishing transforms ideas into professionally published works of art.
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
