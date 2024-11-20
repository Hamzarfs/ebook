// src/pages/About.js
// import DesigningServices from '../components/Designing/DesigningServices';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PrivacyPolicySection from '../components/Privacypolicy';
import { Helmet } from 'react-helmet-async';

// ******************************** End FAQ Section ******************************

const ContactUs = () => {

  return (
    <div>
       <Helmet>
        <title>Privacy Policy - AMZ Book Publishing</title>
        <meta name="description" content="Read our privacy policy for better understanding regarding our working process." />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
<PrivacyPolicySection/>  
      <Footer/>
    </div>
  );
};
export default ContactUs;


