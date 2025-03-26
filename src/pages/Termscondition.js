// src/pages/About.js
// import DesigningServices from '../components/Designing/DesigningServices';

import TermsAndConditionsSection from '../components/TermsConditions';
import { Helmet } from 'react-helmet-async';
import TopHead from '../components/LandingPage/Tophead';
import LPHeader from '../components/LandingPage/Lpheader';
import LpFooter from '../components/LandingPage/lpFooter';


// ******************************** End FAQ Section ******************************

const ContactUs = () => {

    return (
        <div>
            <Helmet>
                <title>Terms & Conditions | AMZ Book Publishing</title>
                <meta name="description" content="Review the terms and conditions required to purchase copyrights from us. Understand the guidelines to ensure a smooth and legal transaction" />
                <link rel="canonical" href="https://amzbookpublishing.net/terms-conditions" />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Terms & Conditions - AMZ Book Publishing" />
                <meta property="og:description" content="Get to know the terms and conditions that you need to follow to purchase copyrights from us." />
                <meta property="og:url" content="https://amzbookpublishing.net/terms-conditions" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-23T07:40:58+00:00" />
            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            {/* <TopHead/> */}
            <LPHeader />


            <TermsAndConditionsSection />


            <LpFooter />
        </div>
    );
};
export default ContactUs;


