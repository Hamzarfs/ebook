import React, { useState } from "react";

const ImageLeftTab = ({imageleft,imageHeight, imageWidth, objectfit}) => {
  const [activeTab, setActiveTab, ] = useState("mission");

  return (
    <div className="imagelefttab-section">
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Column (Image) */}
          <div className="col-md-6">
            <img
              src={imageleft}
              alt="Open Book"
              className="imagelefttab-image"
              style={{
                objectFit: objectfit,
                height: imageHeight,  // Use the passed height prop
                width: imageWidth,      // Use the passed width prop
               
            }}
            />
          </div>

          {/* Right Column (Content) */}
          <div className="col-md-6">
            <h2 className="imagelefttab-heading">
              Professional <span>E-Book</span> Services
            </h2>
            <p className="imagelefttab-description">
              Discover how our innovative solutions can transform your story,
              reduce complexity, and promote high-quality writing.
            </p>

            {/* Tabs */}
            <div className="imagelefttab-tabs">
              <div
                className={`imagelefttab-tab ${
                  activeTab === "mission" ? "active" : ""
                }`}
                onClick={() => setActiveTab("mission")}
              >
                <i className="icon bi bi-bullseye"></i>
                <h3>Mission</h3>
              </div>
              <div
                className={`imagelefttab-tab ${
                  activeTab === "vision" ? "active" : ""
                }`}
                onClick={() => setActiveTab("vision")}
              >
                <i className="icon bi bi-eye"></i>
                <h3>Vision</h3>
              </div>
            </div>

            {/* Tab Content */}
            <div className="imagelefttab-content">
              {activeTab === "mission" && (
                <p>
                  Empower authors by providing comprehensive publishing solutions that elevate their stories. We deliver expert editing, stunning design, and strategic marketing, ensuring that every book meets the industry standards and resonates with its intended audience.

                </p>
              )}
              {activeTab === "vision" && (
                <p>
               To be the best publishing partner of every author by turning their visions into a captivating literary reality!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLeftTab;
