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
        <title>Terms and Conditions - AMZ Book Publishing</title>
        <meta name="description" content="Read our Terms and Conditions for better understanding regarding our working process." />
        <link rel="canonical" href="https://amzbookpublishing.net/terms-condition" />

      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <TopHead/>
      <LPHeader/>


<TermsAndConditionsSection/>
        

      <LpFooter/>
    </div>
  );
};
export default ContactUs;


