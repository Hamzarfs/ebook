// src/pages/About.js
import React,{ useState } from 'react';
import BreadCrumb from '../../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import CtaButton from '../../components/common/CtaButton';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Ghostwritingbg from '../../images/Ghostwritingbg.png'; // Import the image
import FAQSection from '../../components/Designing/DesignFaq';
import ContactForm from '../../components/common/ContactForm1';
import SecondSection from '../../components/home/SecondSection';
import DesignProcess from '../../components/common/DesignProcess';
import ImageRightBanner from '../../components/common/ImageRightText';
import ImageLeftBanner from '../../components/common/ImageLeftText';
import FictionImage1 from '../../images/fictiongimg1.png';
import fictionwhychoose from '../../images/fictionwhychoose.png';
import ghostWritingImage from '../../images/Ghost Writing.png';
import designingImage from '../../images/Designing.png';
import bookEditingImage from '../../images/book edit.png';
import designprocess1 from '../../images/design-process-1.png';
import designprocess2 from '../../images/design-process-2.png';
import designprocess3 from '../../images/design-process-3.png';
import designprocess4 from '../../images/design-process-4.png';
import PopupForm1 from '../../components/common/PopupForm';

// ******************************** Start SecondSection ******************************
const services = [
  {
    title: "Listing On Amazon",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Your Amazon listing is basically your online store for your book. And you'll be needing a store that's going to attract people. "
  },
  {
    title: "Advertising Campaigns",
    image: designingImage, // Update this if you have a specific image
    description: "We manufacture targeted ads that will get your book in front of the right people to maximize reach. Our specialists utilize Amazon's advertising tools to make highly effective ads that drive traffic to your listing. "
  },
  {
    title: "Monitoring Strategies",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Now, in today's high-tech online sales environment, it's critically important to be on the competitive edge. Our team continually tracks the performance of your book and advertising effectiveness.  "
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
Comprehensive Marketing
    </>
  ),
  highlight: "Strategy"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation",
    title: "Initial Consultation",
    description: "We start with a detailed consultation to understand your goals, target audience, and Amazon presence. This phase helps us create a marketing strategy to maximize your book's potential."
  },
  {
    image: designprocess2,
    alt: "Listing Optimization",
    title: "Listing Optimization",
    description: "We analyze your Amazon listing thoroughly, identifying areas for improvement to enhance its attractiveness and discoverability. Our goal is to make your listing stand out in a crowded marketplace."
  },
  {
    image: designprocess3,
    alt: "Campaign Development",
    title: "Campaign Development",
    description: "We develop a well-rounded advertising campaign that includes both Sponsored Products and Sponsored Brands. Our team coordinates objectives and timelines to align marketing efforts with your sales goals."
  },
  {
    image: designprocess4,
    alt: "Performance Monitoring",
    title: "Performance Monitoring",
    description: "Our team continuously tracks your campaign performance, adjusting strategies as needed. We provide regular updates and insights into your book's sales volume and marketing effectiveness."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How much does your Amazon marketing services cost?",
    answer: "Our pricing depends on your specific needs and the scope of the campaign. We'll discuss your goals and provide a detailed quote based on the custom nature of our services."
  },
  {
    question: "Can I be involved in the Amazon marketing process?",
    answer: "Absolutely! Your input and active engagement are important to us. Your ideas help shape our strategy and ensure your book is portrayed as you envision."
  },
  {
    question: "What can I expect in terms of results from Amazon marketing?",
    answer: "Results vary based on your book and advertising approach. We set realistic expectations together and regularly evaluate our progress to keep you informed."
  },
  {
    question: "Do you offer Amazon ad optimization support?",
    answer: "Of course! Our integrated Amazon advertising services include campaign activation, management, and performance tracking to maximize your ad spend."
  },
  {
    question: "Should support be required after an initial marketing campaign?",
    answer: "We are here for you long after the campaign has ended. Whether you need additional services or want to implement new marketing campaigns, we're ready to assist."
  }
];


// ******************************** End FAQ Section ******************************

const AmazonMarketing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {/* -------------------Start Banner section---------------------- */}
      <Header />
      <BreadCrumb
        title="Amazon Marketing"
        desc={
          <>
Amplify the visibility of your book, and create new readers for the book with our Amazon Marketing strategies!
</>
        }
        buttonText="Get a Quote"
        onClick={openModal} // Call openModal on button click
        backgroundImage={Ghostwritingbg} // Pass the image URL as a prop
      />
      {/* Popup Form */}
      <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
{/* -------------------End Banner section---------------------- */}
{/* <div style={{ padding: '0px 0px 30px 0px' }}>
<ImageTextBanner 
    contentItems={contentItems} 
/>
</div> */}


<div style={{ padding: '30px 0px 100px 0px' }}>
<ImageRightBanner
    heading="Amazon "
    subHeading="Marketing"
    description={
        <>
We, at AMZ Book Publishings, well understand that just getting a book listed on Amazon is not how one makes their book successful. There are millions of titles competing with one another for the reader's attention. With this, and many other reasons, efficient marketing helps you stand out. That's why we use strategic approaches that enhance the discoverability of your book in order to attract potential readers who eventually click on the "purchase" button.
<br/><br/>
Our expert team helps you reach your target audience and really maximize the exposure of your book on the world's largest online marketplace.
        </>
    }
    imageSrc={FictionImage1}
    objectfit="contain"
    imageHeight="400px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
/>
</div>

{/*****************  SERVICE Section *****************/}
<div>
<SecondSection 
        buttonLabel="S e r v i c e s"
        heading1={ <>
        Unleash Your Book’s  </>}
        subHeading={<>
        Potential  <br/>
        Expert Amazon </>}
        heading2="Marketing Services! "
        paragraph="Our team develops compelling strategies that connect with your target market, ensuring growth across all platforms."
        services={services}
      />
      </div>
{/* <div style={{ padding: '0px 0px 30px 0px' }}>
<SecondSection/>
</div> */}
<DesignProcess 
        heading={heading}
        // description={description}
        steps={steps}
      />
<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why Choose Us"
    subHeading=""
    description={
      <>
When you team with our team for Amazon marketing, you're teaming with the best in the industry, for that is built on deep understanding of the dynamics within the ecosystem at play. With actual knowledge, we create very effective strategies that provide leverage to promoting your book and raise the visibility level significantly among potential readers. We concentrate on what matters the most - ensuring your book reaches the right audience.

<br/><br/>
Working with us means increasing the discoverability of your book and engaging readers who truly have an interest in reading your type of book. We guarantee our success for you through after-care and performance analysis so that the hard work of promoting your book is done effectively. Let us help you maximize your book's impact on Amazon!
      </>
  }
    imageSrc={fictionwhychoose}
    imageHeight=""        // Set height here
    imageWidth=""          // Set width here
    objectfit="cover"          // Set object-fit here
    borderRadius="15px"        // Set border radius here
/>
</div>
<CtaButton/>
         
          <div>
      <FAQSection faqData={faqData} />
    </div>
         <ContactForm/>

      <Footer/>
    </div>
  );
};
export default AmazonMarketing;


