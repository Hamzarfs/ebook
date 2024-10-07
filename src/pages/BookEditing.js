// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/common/BreadCrumb';
import DesigningServices from '../components/designing/DesigningServices';
import BookService from '../components/books/BookServices';
import BookProcess from '../components/books/BookProces';
import CtaButton from '../components/books/CtaButton';






const BookEditing = () => {
  return (
    <div>
{/* -------------------Start Banner section---------------------- */}
<BreadCrumb
  title="Book Editing"
  desc={
    <>
      Kimono photography Agency runs wide and deep. Across many markets,
      <br />
      geographies, typologies, our team members.
    </>
  }
  buttonText="Learn More"
  buttonLink="/learn-more"
/>
{/* -------------------End Banner section---------------------- */}

<DesigningServices/>
<BookService/>
<BookProcess/>
<CtaButton/>




          {/* Include the BannerSection component here */}
      <h1>Book Editing</h1>
      <p>This is the About page!</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};
export default BookEditing;


