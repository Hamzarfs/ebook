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
const BookEditingServices = () => {
  // State to track which page/tab is active
  // const [activeTab, setActiveTab] = useState("page1");

  // Services data with links for both pages
  const servicesPage1 = [
    { number: "01", text: "Novel Editing", link: "/novel-editing" },
    { number: "02", text: "Poetry Editing", link: "/poetry-editing" },
    { number: "03", text: "Screenplay Editing", link: "/screenplay-editing" },
    { number: "04", text: "Short Story Editing", link: "/shorts-story-editing" },
    { number: "05", text: "Proofreading", link: "/bookproof-reading" },
    { number: "06", text: "Fiction Book Editing", link: "/fiction-book-editing" },
    { number: "07", text: "Non-Fiction Book Editing", link: "/services/adventure-ghostwriting" },
    { number: "08", text: "Self-Editing for Fiction Writers", link: "/services/business-ghostwriting" },
  ];

  // const servicesPage2 = [
  //   { number: "09", text: "Brand Identity Design", link: "/services/brand-identity-design" },
  //   { number: "10", text: "Product Packaging", link: "/services/product-packaging" },
  //   { number: "11", text: "Marketing Collaterals", link: "/services/marketing-collaterals" },
  //   { number: "12", text: "Brochure Design", link: "/services/brochure-design" },
  //   { number: "13", text: "Flyer Design", link: "/services/flyer-design" },
  //   { number: "14", text: "Social Media Graphics", link: "/services/social-media-graphics" },
  //   { number: "15", text: "Poster Design", link: "/services/poster-design" },
  //   { number: "16", text: "Business Card Design", link: "/services/business-card-design" },
  // ];

  return (
    <section className="ghostwriting-services py-5">
      <div className="container text-center">
        <h2 className="design-process-heading font-weight-bold">
          <span className="orangegradient-h2">Book Editing 
          </span> Made Easy
        </h2>
        {/* Tabs Content */}
        <div className="tab-content mt-5" id="serviceTabContent">
          {/* First Page of Services */}
          {/* <div className={`tab-pane fade ${activeTab === "page1" ? "show active" : ""}`} id="page1" role="tabpanel"> */}
            <div className="row">
              {servicesPage1.map((service) => (
                <ServiceCard key={service.number} number={service.number} text={service.text} link={service.link} />
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

export default BookEditingServices;
