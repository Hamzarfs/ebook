import React from 'react';
import '../../PricingSection.css'; // Import your CSS file

const Pricingsection = () => {
  const packages = [
    {
      name: 'Basic Package',
      originalPrice: '$700',
      discountedPrice: '$349 USD',
      features: [
        'Line by Line Editing',
        'Proofreading',
        'Typesetting',
        'Layout Adjustment',
        'Formatting (50+ Platforms)',
        '2 Revisions Per Draft',
      ],
    },
    {
      name: 'Start Up Package',
      originalPrice: '$2,000',
      discountedPrice: '$999 USD',
      features: [
        'Developmental Editing',
        'Line by Line Editing',
        'Proofreading',
        'Typesetting',
        'Layout Adjustment',
        'Formatting (50+ Platforms)',
        '3 Revisions Per Draft',
      ],
    },
    {
      name: 'Standard Package',
      originalPrice: '$3,000',
      discountedPrice: '$1,499 USD',
      features: [
        'Developmental Editing',
        'Line by Line Editing',
        'Proofreading',
        'Typesetting',
        'Layout Adjustment',
        'Formatting (50+ Platforms)',
        '5 Revisions Per Draft',
      ],
      bestSeller: true,
    },
  ];

  return (
    <section className="pricing-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          {packages.map((pkg, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className={`pricing-card ${pkg.bestSeller ? 'best-seller' : ''}`}>
                {pkg.bestSeller && <div className="best-seller-badge">BEST SELLER</div>}
                <div className="card-header">
                  <h3>{pkg.name}</h3>
                  <div className="price">
                    <span className="original-price">{pkg.originalPrice}</span>
                    <span className="discounted-price">{pkg.discountedPrice}</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="features-list">
                    {pkg.features.map((feature, i) => (
                      <div className="feature-item" key={i}> {feature}</div>
                    ))}
                  </div>
                </div>
                <div className="card-footer">
                <button className="start-project-btn">START PROJECT</button>
                  <div className="contact-info">
                    <p>Share your idea! Want to discuss?</p>
                    <p>(888) 786-7135</p>
                    <p>Live Chat Now</p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricingsection;