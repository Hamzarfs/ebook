// Import images
import React from "react";
import { Link } from "react-router-dom";

import NovelEditingImage from "../../images/Novel-Editing.png";
import PoetryEditingImage from "../../images/PoetryEditing.png";
import ScreenplayEditingImage from "../../images/Screenplay.png";
import ShortStoryEditingImage from "../../images/ShortStoryEditing.png";
import ProofreadingImage from "../../images/ProofReading.png";
import FictionEditingImage from "../../images/FictionbookEditing.png";
import NonFictionEditingImage from "../../images/NonFictionbookEditing.png";

// ServiceCard Component
const ServiceCard = ({ number, text, link, backgroundImage }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <Link to={link} className="service-card-link">
        <div
          className="service-card"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span className="service-number">{number}</span>
          <p className="service-text" style={{ fontWeight: "bold", fontSize: "16px" }}>
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
};

// Main BookEditingServices Component
const BookEditingServices = () => {
  // Services data with links and images for the first page of services
  const servicesPage1 = [
    {
      number: "01",
      text: "Novel Editing",
      link: "/book-editing/novel-editing",
      backgroundImage: NovelEditingImage,
    },
    {
      number: "02",
      text: "Poetry Editing",
      link: "/book-editing/poetry-editing",
      backgroundImage: PoetryEditingImage,
    },
    {
      number: "03",
      text: "Screenplay Editing",
      link: "/book-editing/screenplay-editing",
      backgroundImage: ScreenplayEditingImage,
    },
    {
      number: "04",
      text: "Short Story Editing",
      link: "/book-editing/shorts-story-editing",
      backgroundImage: ShortStoryEditingImage,
    },
    {
      number: "05",
      text: "Proofreading",
      link: "/book-editing/bookproof-reading",
      backgroundImage: ProofreadingImage,
    },
    {
      number: "06",
      text: "Fiction Book Editing",
      link: "/book-editing/fiction-book-editing",
      backgroundImage: FictionEditingImage,
    },
    {
      number: "07",
      text: "Non-Fiction Book Editing",
      link: "/book-editing/non-fiction-book-editing",
      backgroundImage: NonFictionEditingImage,
    },
  ];

  return (
    <section className="book-editing-services py-5">
      <div className="container text-center">
        <h2 className="design-process-heading font-weight-bold">
          <span className="orangegradient-h2">Book Editing </span> Made Easy
        </h2>
        <div className="row mt-5">
          {/* Loop through the services and render a ServiceCard for each */}
          {servicesPage1.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              text={service.text}
              link={service.link}
              backgroundImage={service.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookEditingServices;
