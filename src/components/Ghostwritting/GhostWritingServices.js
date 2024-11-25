import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import images for services
import FictionImage from "../../images/Fiction.png";
import NonFictionImage from "../../images/Non-Fiction.png";
import ScienceFictionImage from "../../images/Science-Fiction.png";
import MemoirImage from "../../images/Memoir.png";
import ChildrenBookImage from "../../images/Children’s-Book.png";
import CookbookImage from "../../images/Cookbook.png";
import AdventureImage from "../../images/Adventure.png";
import BusinessImage from "../../images/Business.png";
import FantasyImage from "../../images/Fantasy.png";
import MedicalImage from "../../images/Medical.png";
import HistoricalImage from "../../images/Historical.png";
import ShortStoriesImage from "../../images/Short-Stories.png";
import MysteryImage from "../../images/Mystery.png";
import EbookImage from "../../images/Ebook.png";
import LegalImage from "../../images/Legal.png";

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
            color: "#fff", // Adjust text color for better visibility
            padding: "20px",
            borderRadius: "8px",
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
const GhostwritingServices = () => {
  // State to track which page/tab is active
  const [activeTab, setActiveTab] = useState("page1");

  // Services data with links and images for both pages
  const servicesPage1 = [
    { number: "01", text: "Fiction Ghostwriting", link: "/ghostwriting/fiction-ghostwriting", image: FictionImage },
    { number: "02", text: "Non-Fiction Ghostwriting", link: "/ghostwriting/non-fiction-ghostwriting", image: NonFictionImage },
    { number: "03", text: "Science Fiction Ghostwriting", link: "/ghostwriting/science-fiction-ghostwriting", image: ScienceFictionImage },
    { number: "04", text: "Memoir Ghostwriting", link: "/ghostwriting/memoir-ghostwriting", image: MemoirImage },
    { number: "05", text: "Children’s Book Ghostwriting", link: "/ghostwriting/childrens-book-ghostwriting", image: ChildrenBookImage },
    { number: "06", text: "Cookbook Ghostwriting", link: "/ghostwriting/cookbook-ghostwriting", image: CookbookImage },
    { number: "07", text: "Adventure Ghostwriting", link: "/ghostwriting/adventure-ghostwriting", image: AdventureImage },
    { number: "08", text: "Business Ghostwriting", link: "/ghostwriting/business-ghostwriting", image: BusinessImage },
  ];

  const servicesPage2 = [
    { number: "09", text: "Fantasy Ghostwriting", link: "/ghostwriting/fantasy-ghostwriting", image: FantasyImage },
    { number: "10", text: "Medical Ghostwriting", link: "/ghostwriting/medical-ghostwriting", image: MedicalImage },
    { number: "11", text: "Historical Ghostwriting", link: "/ghostwriting/historical-ghostwriting", image: HistoricalImage },
    { number: "12", text: "Short Stories Ghostwriting", link: "/ghostwriting/short-stories-ghostwriting", image: ShortStoriesImage },
    { number: "13", text: "Mystery Ghostwriting", link: "/ghostwriting/mystery-ghostwriting", image: MysteryImage },
    { number: "14", text: "Ebook Writing", link: "/ghostwriting/ebook-writing", image: EbookImage },
    { number: "15", text: "Legal Ghostwriting", link: "/ghostwriting/legal-ghostwriting", image: LegalImage },
  ];

  return (
    <section className="ghostwriting-services">
      <div className="container text-center">
        <h2 className="design-process-heading font-weight-bold">
          <span className="orangegradient-h2">Affordable Book </span> Ghostwriting Services
        </h2>
        {/* Tabs Content */}
        <div className="tab-content mt-5" id="serviceTabContent">
          {/* First Page of Services */}
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

          {/* Second Page of Services */}
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

        {/* Tabs Navigation */}
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

export default GhostwritingServices;
