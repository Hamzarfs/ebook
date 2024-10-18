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

// Main DesigningServices Component
const DesigningServices = () => {
  // State to track which page/tab is active
  const [activeTab, setActiveTab] = useState("page1");

  // Services data with links
  const servicesPage1 = [
    { number: "01", text: "Author Website Design", link: "/author-website-design" },
    { number: "02", text: "Logo Design", link: "/logo-design" },
    { number: "03", text: "Stationary Design", link: "/stationery-design" },
    { number: "04", text: "Book Teaser", link: "/book-teaser" },
    { number: "05", text: "Book Printing", link: "/book-printing" },
    { number: "06", text: "Book Illustration", link: "/book-illustration" },
    { number: "07", text: "Book Interior Formatting", link: "/book-interior-formatting" },
    { number: "08", text: "Letterhead & Envelope Design", link: "/letterhead-envelope-design" },
  ];

  const servicesPage2 = [
    { number: "09", text: "Brand Identity Design", link: "/brand-identity-design" },
    { number: "10", text: "Product Packaging", link: "/product-packaging" },
    { number: "11", text: "Marketing Collaterals", link: "/marketing-collaterals" },
    { number: "12", text: "Brochure Design", link: "/brochure-design" },
    { number: "13", text: "Flyer Design", link: "/flyer-design" },
    { number: "14", text: "Social Media Graphics", link: "/social-media-graphics" },
    { number: "15", text: "Poster Design", link: "/poster-design" },
    { number: "16", text: "Business Card Design", link: "/business-card-design" },
  ];

  return (
    <section className="designing-services py-5">
      <div className="container text-center">
        <h2 className="design-process-heading font-weight-bold">
          Designing <span className="orangegradient-h2">Services</span>
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

export default DesigningServices;
