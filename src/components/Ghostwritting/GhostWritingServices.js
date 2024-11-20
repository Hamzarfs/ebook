import React, { useState } from "react";
import { Link } from "react-router-dom"; 

// ServiceCard Component
const ServiceCard = ({ number, text, link }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
       <Link to={link} className="service-card-link">
        <div className="service-card">
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

  // Services data with links for both pages
  const servicesPage1 = [
    { number: "01", text: "Fiction Ghostwriting", link: "/ghostwriting/fiction-ghostwriting" },
    { number: "02", text: "Non-Fiction Ghostwriting", link: "/ghostwriting/non-fiction-ghostwriting" },
    { number: "03", text: "Science Fiction Ghostwriting", link: "/ghostwriting/science-fiction-ghostwriting" },
    { number: "04", text: "Memoir Ghostwriting", link: "/ghostwriting/memoir-ghostwriting" },
    { number: "05", text: "Children’s Book Ghostwriting", link: "/ghostwriting/childrens-book-ghostwriting" },
    { number: "06", text: "Cookbook Ghostwriting", link: "/ghostwriting/cookbook-ghostwriting" },
    { number: "07", text: "Adventure Ghostwriting", link: "/ghostwriting/adventure-ghostwriting" },
    { number: "08", text: "Business Ghostwriting", link: "/ghostwriting/business-ghostwriting" },
  ];

  const servicesPage2 = [
    { number: "09", text: "Fantasy Ghostwriting", link: "/ghostwriting/fantasy-ghostwriting" },
    { number: "10", text: "Medical Ghostwriting", link: "/ghostwriting/medical-ghostwriting" },
    { number: "11", text: "Historical Ghostwriting", link: "/ghostwriting/historical-ghostwriting" },
    { number: "12", text: "Short Stories Ghostwriting", link: "/ghostwriting/short-stories-ghostwriting" },
    { number: "13", text: "Mystery Ghostwriting", link: "/ghostwriting/mystery-ghostwriting" },
    { number: "14", text: "Ebook Writing", link: "/ghostwriting/ebook-writing" },
    { number: "15", text: "Legal Ghostwriting", link: "/ghostwriting/legal-ghostwriting" },
    // { number: "16", text: "Business Card Design", link: "/services/business-card-design" },
  ];

  return (
    <section className="ghostwriting-services py-5">
      <div className="container text-center">
        <h2 className="design-process-heading font-weight-bold">
          <span className="orangegradient-h2">Affordable Book 
          </span> Ghostwriting Services
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

export default GhostwritingServices;
