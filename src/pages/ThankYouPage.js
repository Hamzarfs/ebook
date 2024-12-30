import React from 'react';
import '../ThankYouPage.css'; // Make sure this is correctly imported
 import ebooklogo from '../images/AMZ-Logo-02.webp';
import { Helmet } from 'react-helmet-async';

const ThankYouPage = () => {
  return (
    <div>
       <Helmet>
        <title>Thank You - AMZ Book Publishing</title>
        <link rel="canonical" href="https://amzbookpublishing.net/thank-you" />
      </Helmet>
      <div className="thankyou-page">
        <img src={ebooklogo} alt="Mobile Logo" />
        <h1>Thank You!</h1>
      </div>
      <div className="contact ">
        <h2>Please check your email for further instructions.</h2>
        <p>
          Your brief has been successfully received. We’ve received it and one
          of our representatives will be in touch soon to discuss it further and
          guide you through the next steps.
        </p>
        <p>
          Having trouble? <a href="tel:+17327979165">Contact us</a>
        </p>
        <div className='py-3'>
        <a className="first-button " href="https://amzbookpublishing.net/book-publishing-services" >Back to Homepage </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
