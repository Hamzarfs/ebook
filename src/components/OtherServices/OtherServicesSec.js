import React, { useState } from "react";

// ServiceCard Component
const ServiceCard = ({ number, text, link }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="service-card-link">
        <div className="service-card">
          <span className="service-number">{number}</span>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};


// Main GhostwritingServices Component
const OtherServicesSec = () => {
  // State to track which page/tab is active
  const [activeTab, setActiveTab] = useState("page1");

  // Services data with links for both pages
  const servicesPage1 = [
    { number: "01", text: "Book Writing ", link: "/other-services/book-writing" },
    { number: "02", text: "Book Publishing ", link: "/other-services/book-publishing" },
    { number: "03", text: "Book Marketing", link: "/other-services/book-marketing" },
    { number: "04", text: "Video Book", link: "/other-services/video-book-trailers" },
    { number: "05", text: "Social Media Marketing", link: "/other-services/social-media-marketing" },
    { number: "06", text: "SEO Services", link: "/other-services/seo-services" },
    { number: "07", text: "Amazon Marketing", link: "/services/adventure-ghostwriting" },
    { number: "08", text: "SEO Services", link: "/services/business-ghostwriting" },
  ];

  const servicesPage2 = [
    { number: "09", text: "Audio Book", link: "/services/brand-identity-design" },
    { number: "10", text: "Book Reviews", link: "/services/product-packaging" },
    { number: "11", text: "Author Website Development", link: "/services/marketing-collaterals" },
    { number: "12", text: "Book Launch Strategy", link: "/services/brochure-design" },
    // { number: "13", text: "Flyer Design", link: "/services/flyer-design" },
    // { number: "14", text: "Social Media Graphics", link: "/services/social-media-graphics" },
    // { number: "15", text: "Poster Design", link: "/services/poster-design" },
    // { number: "16", text: "Business Card Design", link: "/services/business-card-design" },
  ];

  return (
    <section className="ghostwriting-services py-5">
      <div className="container text-center">
        <h2 className="design-process-heading font-weight-bold">
          <span className="orangegradient-h2">Other Services 
          </span> We Offer
        </h2>
        {/* Tabs Content */}
        <div className="tab-content mt-5" id="serviceTabContent">
          {/* First Page of Services */}
          <div className={`tab-pane fade ${activeTab === "page1" ? "show active" : ""}`} id="page1" role="tabpanel">
            <div className="row">
              {servicesPage1.map((service) => (
                <ServiceCard key={service.number} number={service.number} text={service.text} link={service.link} />
              ))}
            </div>
          </div>

          {/* Second Page of Services */}
          <div className={`tab-pane fade ${activeTab === "page2" ? "show active" : ""}`} id="page2" role="tabpanel">
            <div className="row">
              {servicesPage2.map((service) => (
                <ServiceCard key={service.number} number={service.number} text={service.text} link={service.link} />
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

export default OtherServicesSec;
