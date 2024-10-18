import React from 'react';
import '../ThankYouPage.css'; // Make sure this is correctly imported
 import ebooklogo from '../images/AMZ-Logo-02.webp';

const ThankYouPage = () => {
  return (
    <div>
      <div className="thankyou-page">
        <img src={ebooklogo} alt="Mobile Logo" />
        <h1>Thank You!</h1>
      </div>
      <div className="contact">
        <h2>Please check your email for further instructions.</h2>
        <p>
          Your brief has been successfully received. We’ve received it and one
          of our representatives will be in touch soon to discuss it further and
          guide you through the next steps.
        </p>
        <p>
          Having trouble? <a href="tel:+02045112054">Contact us</a>
        </p>
        <a className="btn" href="/home">
          Back to homepage
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
