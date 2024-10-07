import React, { useState } from "react";

// ServiceCard Component
const ServiceCard = ({ number, text }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="service-card">
        <span className="service-number">{number}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

// Main DesigningServices Component
const GhostwritingServices = () => {
  // State to track which page/tab is active
  const [activeTab, setActiveTab] = useState("page1");

  // Services data
  const servicesPage1 = [
    { number: "01", text: "Fiction  Ghostwriting" },
    { number: "02", text: "Non-Fiction  Ghostwriting" },
    { number: "03", text: "Science Fiction  Ghostwriting" },
    { number: "04", text: "Memoir Ghost writing" },
    { number: "05", text: "Children’s Book  Ghostwriting" },
    { number: "06", text: "Cookbook Ghostwriting" },
    { number: "07", text: "Adventure  Ghostwriting" },
    { number: "08", text: "Business  Ghostwriting" },
  ];

  const servicesPage2 = [
    { number: "09", text: "Brand Identity Design" },
    { number: "10", text: "Product Packaging" },
    { number: "11", text: "Marketing Collaterals" },
    { number: "12", text: "Brochure Design" },
    { number: "13", text: "Flyer Design" },
    { number: "14", text: "Social Media Graphics" },
    { number: "15", text: "Poster Design" },
    { number: "16", text: "Business Card Design" },
  ];

  return (
    <section className="designing-services py-5">
      <div className="container text-center">
        <h2 className="design-process-heading font-weight-bold">
        <span className="orangegradient-h2"> Ghostwriting</span> Services
        </h2>
        {/* Tabs Content */}
        <div className="tab-content mt-5" id="serviceTabContent">
          {/* First Page of Services */}
          <div className={`tab-pane fade ${activeTab === "page1" ? "show active" : ""}`} id="page1" role="tabpanel">
            <div className="row">
              {servicesPage1.map((service) => (
                <ServiceCard key={service.number} number={service.number} text={service.text} />
              ))}
            </div>
          </div>

          {/* Second Page of Services */}
          <div className={`tab-pane fade ${activeTab === "page2" ? "show active" : ""}`} id="page2" role="tabpanel">
            <div className="row">
              {servicesPage2.map((service) => (
                <ServiceCard key={service.number} number={service.number} text={service.text} />
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
              className={`nav-link ${activeTab === "page2" ? "" : ""}`}
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
