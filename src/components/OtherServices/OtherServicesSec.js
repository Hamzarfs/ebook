import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import Images
import BookWritingImage from "../../images/BookWriting.png";
import BookPublishingImage from "../../images/BookPublishing.png";
import BookMarketingImage from "../../images/BookMarketing.png";
import VideoBookImage from "../../images/VideoBook.png";
import SocialMediaMarketingImage from "../../images/SocialMediaMarketing.png";
import SEOServicesImage from "../../images/SEOServices.png";
import AmazonMarketingImage from "../../images/AmazonMarketing.png";
import AudioBookImage from "../../images/AudioBook.png";
import BookReviewsImage from "../../images/BookReviews.png";

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
            display: "flex",
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

// Main GhostwritingServices Component
const OtherServicesSec = () => {
  const [activeTab, setActiveTab] = useState("page1");

  // Services data with images
  const servicesPage1 = [
    { number: "01", text: "Book Writing", link: "/other-services/book-writing", image: BookWritingImage },
    { number: "02", text: "Book Publishing", link: "/other-services/book-publishing", image: BookPublishingImage },
    { number: "03", text: "Book Marketing", link: "/other-services/book-marketing", image: BookMarketingImage },
    { number: "04", text: "Video Book", link: "/other-services/video-book-trailers", image: VideoBookImage },
    { number: "05", text: "Social Media Marketing", link: "/other-services/social-media-marketing", image: SocialMediaMarketingImage },
    { number: "06", text: "SEO Services", link: "/other-services/seo-services", image: SEOServicesImage },
    { number: "07", text: "Amazon Marketing", link: "/other-services/amazon-marketing", image: AmazonMarketingImage },
    { number: "08", text: "Audio Book", link: "/other-services/audiobook", image: AudioBookImage },
  ];

  const servicesPage2 = [
    { number: "09", text: "Book Reviews", link: "/other-services/book-review", image: BookReviewsImage },
  ];

  return (
    <section className="ghostwriting-services">
      <div className="container text-center">
        <h2 className="design-process-heading font-weight-bold">
          <span className="orangegradient-h2">Other Services</span> We Offer
        </h2>
        <div className="tab-content mt-5" id="serviceTabContent">
          <div className={`tab-pane fade ${activeTab === "page1" ? "show active" : ""}`} id="page1" role="tabpanel">
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
          </div>
          <div className={`tab-pane fade ${activeTab === "page2" ? "show active" : ""}`} id="page2" role="tabpanel">
            <div className="row">
              {servicesPage2.map((service) => (
                <ServiceCard
                  key={service.number}
                  number={service.number}
                  text={service.text}
                  link={service.link}
                  backgroundImage={service.image}
                />
              ))}
            </div>
          </div>
        </div>
        <ul className="nav nav-tabs justify-content-center mt-4" id="serviceTab" role="tablist">
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
        </ul>
      </div>
    </section>
  );
};

export default OtherServicesSec;
