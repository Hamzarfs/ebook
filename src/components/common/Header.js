import React, { useState } from 'react';
import ebooklogo from '../../images/Logo-AMZ-02.png';
import { NavLink } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PopupForm1 from '../common/PopupForm';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" exact className="navbar-brand">
            <img src={ebooklogo} alt="Brand Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link" activeClassName="active-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link" activeClassName="active-link">About Us</NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <NavLink
                  to="/professional-ghostwriting-services"
                  className="nav-link dropdown-toggle"
                  id="ghostwritingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ghostwriting
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="ghostwritingDropdown">
                  <li><NavLink to="/affordable-fiction-ghostwriting-services" className="dropdown-item">Fiction Ghostwriting</NavLink></li>
                  <li><NavLink to="/affordable-non-fiction-ghostwriting-services" className="dropdown-item">Non-Fiction Ghostwriting</NavLink></li>
                  <li><NavLink to="/science-fiction-ghostwriting-services" className="dropdown-item">Science Fiction Ghostwriting</NavLink></li>
                  <li><NavLink to="/memoir-ghostwriting-services" className="dropdown-item">Memoir Ghostwriting</NavLink></li>
                  <li><NavLink to="/childrens-book-ghostwriting-services" className="dropdown-item">Children's Book Ghostwriting</NavLink></li>
                  <li><NavLink to="/cookbook-ghostwriting-services" className="dropdown-item">Cookbook Ghostwriting</NavLink></li>
                  <li><NavLink to="/adventure-ghostwriting-services" className="dropdown-item">Adventure Ghostwriting</NavLink></li>
                  <li><NavLink to="/business-book-ghostwriting-services" className="dropdown-item">Business Ghostwriting</NavLink></li>
                  <li><NavLink to="/fantasy-ghostwriting-services" className="dropdown-item">Fantasy Ghostwriting</NavLink></li>
                  <li><NavLink to="/professional-medical-ghostwriting-services" className="dropdown-item">Medical Ghostwriting</NavLink></li>
                  <li><NavLink to="/historical-ghostwriting-services" className="dropdown-item">Historical Ghostwriting</NavLink></li>
                  <li><NavLink to="/short-stories-ghostwriting-services" className="dropdown-item">Short Stories Ghostwriting</NavLink></li>
                  <li><NavLink to="/professional-mystery-ghostwriting-services" className="dropdown-item">Mystery Ghostwriting</NavLink></li>
                  <li><NavLink to="/professional-ebook-ghostwriting-services" className="dropdown-item">eBook Ghostwriting</NavLink></li>
                  <li><NavLink to="/professional-legal-ghostwriting-services" className="dropdown-item">Legal Ghostwriting</NavLink></li>
                  <li><NavLink to="/rap-ghostwriting-services" className="dropdown-item">Rap Ghostwriting</NavLink></li>
                  <li><NavLink to="/professional-beauty-ghostwriting-services" className="dropdown-item">Beauty Ghostwriting</NavLink></li>
                  <li><NavLink to="/affordable-screenplay-ghostwriting-services" className="dropdown-item">Screenplay Ghostwriting</NavLink></li>
                  <li><NavLink to="/health-and-fitness-ghostwriting-services" className="dropdown-item">Health & Fitness Ghostwriting</NavLink></li>
                  <li><NavLink to="/professional-blog-ghostwriting-services" className="dropdown-item">Blog Ghostwriting</NavLink></li>
                  <li><NavLink to="/professional-novel-writing-services" className="dropdown-item">Novel Ghostwriting</NavLink></li>
                </ul>
              </li> */}
              <li className="nav-item dropdown">
  <NavLink
    to="/professional-ghostwriting-services"
    className="nav-link"
    activeClassName="active-link"
  >
    Ghostwriting
  </NavLink>
  <ul className="dropdown-menu" aria-labelledby="ghostwritingDropdown">
    <li><NavLink to="/affordable-fiction-ghostwriting-services" className="dropdown-item">Fiction Ghostwriting</NavLink></li>
    <li><NavLink to="/affordable-non-fiction-ghostwriting-services" className="dropdown-item">Non-Fiction Ghostwriting</NavLink></li>
    <li><NavLink to="/science-fiction-ghostwriting-services" className="dropdown-item">Science Fiction Ghostwriting</NavLink></li>
    <li><NavLink to="/memoir-ghostwriting-services" className="dropdown-item">Memoir Ghostwriting</NavLink></li>
    <li><NavLink to="/childrens-book-ghostwriting-services" className="dropdown-item">Children's Book Ghostwriting</NavLink></li>
    <li><NavLink to="/cookbook-ghostwriting-services" className="dropdown-item">Cookbook Ghostwriting</NavLink></li>
    <li><NavLink to="/adventure-ghostwriting-services" className="dropdown-item">Adventure Ghostwriting</NavLink></li>
    <li><NavLink to="/business-book-ghostwriting-services" className="dropdown-item">Business Ghostwriting</NavLink></li>
    <li><NavLink to="/fantasy-ghostwriting-services" className="dropdown-item">Fantasy Ghostwriting</NavLink></li>
    <li><NavLink to="/professional-medical-ghostwriting-services" className="dropdown-item">Medical Ghostwriting</NavLink></li>
    <li><NavLink to="/historical-ghostwriting-services" className="dropdown-item">Historical Ghostwriting</NavLink></li>
    <li><NavLink to="/short-stories-ghostwriting-services" className="dropdown-item">Short Stories Ghostwriting</NavLink></li>
    <li><NavLink to="/professional-mystery-ghostwriting-services" className="dropdown-item">Mystery Ghostwriting</NavLink></li>
    <li><NavLink to="/professional-ebook-ghostwriting-services" className="dropdown-item">eBook Ghostwriting</NavLink></li>
    <li><NavLink to="/professional-legal-ghostwriting-services" className="dropdown-item">Legal Ghostwriting</NavLink></li>
    <li><NavLink to="/rap-ghostwriting-services" className="dropdown-item">Rap Ghostwriting</NavLink></li>
    <li><NavLink to="/professional-beauty-ghostwriting-services" className="dropdown-item">Beauty Ghostwriting</NavLink></li>
    <li><NavLink to="/affordable-screenplay-ghostwriting-services" className="dropdown-item">Screenplay Ghostwriting</NavLink></li>
    <li><NavLink to="/health-and-fitness-ghostwriting-services" className="dropdown-item">Health & Fitness Ghostwriting</NavLink></li>
    <li><NavLink to="/professional-blog-ghostwriting-services" className="dropdown-item">Blog Ghostwriting</NavLink></li>
    <li><NavLink to="/professional-novel-writing-services" className="dropdown-item">Novel Ghostwriting</NavLink></li>
  </ul>
</li>

<li className="nav-item dropdown">
  <NavLink
    to="/book-designing-services"
    className="nav-link"
    activeClassName="active-link"
  >
    Designing
  </NavLink>
  <ul className="dropdown-menu" aria-labelledby="designingDropdown">
    <li><NavLink to="/author-website-design-services" className="dropdown-item">Author Website Design</NavLink></li>
    <li><NavLink to="/bespoke-logo-design" className="dropdown-item">Bespoke Logo Design</NavLink></li>
    <li><NavLink to="/stationery-design-services" className="dropdown-item">Stationery Design</NavLink></li>
    <li><NavLink to="/professional-book-printing-services" className="dropdown-item">Book Printing</NavLink></li>
    <li><NavLink to="/book-illustration-services" className="dropdown-item">Book Illustrations</NavLink></li>
    <li><NavLink to="/interior-book-formatting-services" className="dropdown-item">Book Interior Formatting</NavLink></li>
    <li><NavLink to="/letterhead-and-envelope-design-services" className="dropdown-item">Letterhead & Envelope Design</NavLink></li>
    <li><NavLink to="/business-card-design-services" className="dropdown-item">Business Card Design</NavLink></li>
    <li><NavLink to="/professional-book-cover-design-services" className="dropdown-item">Book Cover Design </NavLink></li>

  </ul>
</li>

<li className="nav-item dropdown">
  <NavLink
    to="/professional-book-editing-services"
    className="nav-link"
    activeClassName="active-link"
  >
    Book Editing
  </NavLink>
  <ul className="dropdown-menu" aria-labelledby="bookEditingDropdown">

    <li><NavLink to="/professional-novel-editing-services" className="dropdown-item">Novel Editing</NavLink></li>
    <li><NavLink to="/affordable-poetry-editing-services" className="dropdown-item">Poetry Editing</NavLink></li>
    <li><NavLink to="/professional-screenplay-editing-services" className="dropdown-item">Screenplay Editing</NavLink></li>
    <li><NavLink to="/short-story-editing-services" className="dropdown-item">Short Story Editing</NavLink></li>
    <li><NavLink to="/book-proofreading-services" className="dropdown-item">Book Proofreading</NavLink></li>
    <li><NavLink to="/fiction-book-editing-services" className="dropdown-item">Fiction Book Editing</NavLink></li>
    <li><NavLink to="/non-fiction-book-editing-services" className="dropdown-item">Non-Fiction Book Editing</NavLink></li>
    
  </ul>
</li>

<li className="nav-item dropdown">
  <NavLink
    to="/other-services"
    className="nav-link"
    activeClassName="active-link"
  >
    Other Services
  </NavLink>
  <ul className="dropdown-menu" aria-labelledby="otherServicesDropdown">
    <li><NavLink to="/professional-book-writing-services" className="dropdown-item">Book Writing</NavLink></li>
    <li><NavLink to="/affordable-book-publishing-services" className="dropdown-item">Book Publishing</NavLink></li>
    <li><NavLink to="/book-marketing-services" className="dropdown-item">Book Marketing</NavLink></li>
    <li><NavLink to="/book-trailer-services" className="dropdown-item">Book Trailers</NavLink></li>
    <li><NavLink to="/social-media-marketing-services-for-authors" className="dropdown-item">Social Media Marketing</NavLink></li>
    <li><NavLink to="/amazon-book-marketing-services-for-authors" className="dropdown-item">Amazon Marketing</NavLink></li>
    <li><NavLink to="/search-engine-optimization-services" className="dropdown-item">SEO Services</NavLink></li>
    <li><NavLink to="/audiobook-publishing-services" className="dropdown-item">Audiobook Publishing</NavLink></li>
    <li><NavLink to="/professional-book-review-services" className="dropdown-item">Book Review</NavLink></li>
  </ul>
</li>

              <li className="nav-item">
                <NavLink to="/contact-us" className="nav-link" activeClassName="active-link">Contact Us</NavLink>
              </li>
            </ul>
            <button onClick={openModal} className="header-btn ms-lg-5 ms-0" style={{ cursor: 'pointer' }}>Get a Quote</button>
            <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />

          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
