// src/pages/About.js
// import DesigningServices from '../components/Designing/DesigningServices';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TermsAndConditionsSection from '../components/TermsConditions';
import { Helmet } from 'react-helmet-async';


// ******************************** End FAQ Section ******************************

const ContactUs = () => {

  return (
    <div>
       <Helmet>
        <title>Terms and Conditions - AMZ Book Publishing</title>
        <meta name="description" content="Read our Terms and Conditions for better understanding regarding our working process." />
      </Helmet>
      {/* -------------------Start Banner section---------------------- */}
      <Header />


<TermsAndConditionsSection/>
        

      <Footer/>
    </div>
  );
};
export default ContactUs;


