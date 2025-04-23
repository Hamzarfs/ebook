import React from 'react';

const Queries = ({
  heading, // Props for the heading
  description, // Props for the paragraph
}) => {
  return (
    <section id="design-process-section" className="container text-center">
      {/* First Row: Heading and Description */}
      <div className="row">
        <div className="col-12">
          <h2 className="design-process-heading font-weight-bold">
            {heading.title} <span className="orangegradient-h2">{heading.highlight}</span>
          </h2>
          <p className="design-process-description">{description}</p>
        </div>
      </div>

    </section>
  );
};

export default Queries;