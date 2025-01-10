import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import images
import AuthorWebsiteImage from "../../images/Author-Website.png";
import LogoDesignImage from "../../images/logo-Design.png";
import StationaryDesignImage from "../../images/stationery-Design.png";
import BookCardDesignImage from "../../images/book-inerrior-formating.png";
import BookPrintingImage from "../../images/book-printing.png";
import BookIllustrationImage from "../../images/book-illustration.png";
import BookInteriorImage from "../../images/book-teaser.png";
import LetterheadEnvelopeImage from "../../images/letterhead-envelpe.png";

// ServiceCard Component
const ServiceCard = ({ number, text, link, backgroundImage }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <Link to={link} className="service-card-link">
        <div
          className="service-card"
          style={{
            loading: "lazy",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            padding: "20px",
           
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <span className="service-number">{number}</span>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
};

// Main DesigningServices Component
const DesigningServices = () => {
  // Services data with links and images
  const servicesPage1 = [
    {
      number: "01",
      text: "Author Website Design",
      link: "/author-website-design-services",
      image: AuthorWebsiteImage,
    },
    {
      number: "02",
      text: "Logo Design",
      link: "/bespoke-logo-design",
      image: LogoDesignImage,
    },
    {
      number: "03",
      text: "Stationary Design",
      link: "/stationery-design-services",
      image: StationaryDesignImage,
    },
    {
      number: "04",
      text: "Book Card Design",
      link: "/business-card-design-services",
      image: BookCardDesignImage,
    },
    {
      number: "05",
      text: "Book Printing",
      link: "/professional-book-printing-services",
      image: BookPrintingImage,
    },
    {
      number: "06",
      text: "Book Illustration",
      link: "/book-illustrations-service",
      image: BookIllustrationImage,
    },
    {
      number: "07",
      text: "Book Interior Formatting",
      link: "/interior-book-formatting-services",
      image: BookInteriorImage,
    },
    {
      number: "08",
      text: "Letterhead & Envelope Design",
      link: "/letterhead-and-envelope-design-services",
      image: LetterheadEnvelopeImage,
    },
  ];

  // Uncomment to add more services and tabs
  // const servicesPage2 = [
  //   { number: "09", text: "Business Card Design", link: "/designing/business-card-design" },
  //   { number: "10", text: "Product Packaging", link: "/product-packaging" },
  //   { number: "11", text: "Marketing Collaterals", link: "/marketing-collaterals" },
  //   { number: "12", text: "Brochure Design", link: "/brochure-design" },
  //   { number: "13", text: "Flyer Design", link: "/flyer-design" },
  //   { number: "14", text: "Social Media Graphics", link: "/social-media-graphics" },
  //   { number: "15", text: "Poster Design", link: "/poster-design" },
  //   { number: "16", text: "Business Card Design", link: "/business-card-design" },
  // ];

  return (
    <section className="designing-services">
      <div className="container text-center">
        <h2 className="design-process-heading font-weight-bold">
          Designing <span className="orangegradient-h2">Services</span>
        </h2>
        <div className="tab-content mt-5" id="serviceTabContent">
          {/* First Page of Services */}
          {/* <div className={`tab-pane fade ${activeTab === "page1" ? "show active" : ""}`} id="page1" role="tabpanel"> */}
          <div className="row">
            {servicesPage1.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                text={service.text}
                link={service.link}
                backgroundImage={service.image}
              />
            ))}
          </div>
          {/* </div> */}

          {/* Second Page of Services */}
          {/* <div className={`tab-pane fade ${activeTab === "page2" ? "show active" : ""}`} id="page2" role="tabpanel">
            <div className="row">
              {servicesPage2.map((service) => (
                <ServiceCard key={service.number} number={service.number} text={service.text} link={service.link} />
              ))}
            </div>
          </div> */}
        </div>

        {/* Tabs Navigation */}
        {/* <ul className="nav nav-tabs justify-content-center mt-4" id="serviceTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "page1" ? "active" : ""}`}
              id="page1-tab"
              onClick={() => setActiveTab("page1")}
              type="button"
              role="tab"
              aria-controls="page1"
              aria-selected={activeTab === "page1"}
            >
              1
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "page2" ? "active" : ""}`}
              id="page2-tab"
              onClick={() => setActiveTab("page2")}
              type="button"
              role="tab"
              aria-controls="page2"
              aria-selected={activeTab === "page2"}
            >
              2
            </button>
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default DesigningServices;
