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
                <meta name="description" content="Read our privacy policy for better understanding regarding our working process." />
                <link rel="canonical" href="https://amzbookpublishing.net/privacy-policy" />

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


