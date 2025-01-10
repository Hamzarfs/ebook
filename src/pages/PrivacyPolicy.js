// src/pages/About.js
// import DesigningServices from '../components/Designing/DesigningServices';

import PrivacyPolicySection from '../components/Privacypolicy';
import { Helmet } from 'react-helmet-async';
import LPHeader from '../components/LandingPage/Lpheader';
import TopHead from '../components/LandingPage/Tophead';
import LpFooter from '../components/LandingPage/lpFooter';

// ******************************** End FAQ Section ******************************

const ContactUs = () => {

    return (
        <div>
            <Helmet>
                
                <title>Privacy Policy - AMZ Book Publishing</title>
                <meta name="description" content="AMZ Book Publishing respects and honors the privacy of each of our book publishing clients. Please review our policy and contact us with any questions." />
                <link rel="canonical" href="https://amzbookpublishing.net/privacy-policy" />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Privacy Policy - AMZ Book Publishing" />
                <meta property="og:description" content="AMZ Book Publishing respects and honors the privacy of each of our book publishing clients. Please review our policy and contact us with any questions." />
                <meta property="og:url" content="https://amzbookpublishing.net/privacy-policy" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-23T07:38:58+00:00" />

            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            {/* <TopHead/> */}
            <LPHeader />

            <PrivacyPolicySection />
            <LpFooter />
        </div>
    );
};
export default ContactUs;


