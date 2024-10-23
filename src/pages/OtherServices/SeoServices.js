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
    title: "Keyword Research",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "The right keyword means more in terms of successful SEO. Our in-depth research will discover the terms searched for by your target audience."
  },
  {
    title: "On Page Optimization",
    image: designingImage, // Update this if you have a specific image
    description: "On-page optimization makes the elements of your website more search-engine friendly. We enhance title tags, meta descriptions, header tags, and content structure. "
  },
  {
    title: "Quality Content Creation",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Content is at the heart of SEO. Our published content writers create entertaining, high-quality content that communicates well to your target audience while still using those focused keywords"
  }
];


// ******************************** End SecondSection ******************************
// ******************************** Start Design Process Props ******************************
const heading = {
  title: (
    <>
Comprehensive 
    </>
  ),
  highlight: "SEO Approach"
};
// const description = "At AMZ Book Publishings, our medical ghostwriting services are designed to make your research process easier and more effective.";
const steps = [
  {
    image: designprocess1,
    alt: "Pre-Consultation",
    title: "Pre-Consultation",
    description: "We discuss your goals, target audience, and online presence to design a customized SEO approach tailored to your needs."
  },
  {
    image: designprocess2,
    alt: "SEO Audit",
    title: "SEO Audit",
    description: "We conduct a full website audit to identify areas for improvement, including site speed, mobile-friendliness, and content quality."
  },
  {
    image: designprocess3,
    alt: "SEO Strategy",
    title: "SEO Strategy",
    description: "We create a specific, time-bound SEO strategy with actionable goals and tactics, aligning with your objectives for focused optimization."
  },
  {
    image: designprocess4,
    alt: "Implementation & Monitoring",
    title: "Implementation & Monitoring",
    description: "We implement the strategy and monitor key metrics continuously, adjusting based on data to optimize results and help you achieve your goals."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "How much are your SEO services?",
    answer: "Our pricing varies based on individual needs and project scope. After discussing your goals, we provide a detailed quote reflecting the customized nature of our services."
  },
  {
    question: "Can I be involved in the SEO process?",
    answer: "Yes! Your involvement and input are highly valued. Your insights help shape our SEO strategies, ensuring your narrative is conveyed authentically."
  },
  {
    question: "How long before I begin to see results from SEO?",
    answer: "SEO is a long-term strategy, and results can vary. Typically, improvements are noticeable within a few months. We set realistic goals together and assess progress regularly to keep you informed."
  },
  {
    question: "Do you support content creation?",
    answer: "Yes! We offer full-scale content creation services, ensuring all content is optimized for SEO and tailored to your target audience."
  },
  {
    question: "Do you provide assistance after the initial SEO campaign?",
    answer: "Absolutely! Our support continues after the campaign ends. Whether you need ongoing assistance or want to start new initiatives, our team is ready to help."
  }
];

// ******************************** End FAQ Section ******************************

const SeoServices = () => {
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
        title="SEO Services"
        desc={
          <>
Boost your online presence and drive traffic to your book using our SEO Services!
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
    heading="SEO "
    subHeading="Services"
    description={
        <>
At AMZ Book Publishings, we understand that effective online presence is essential to succeed as an author in the modern world. Our SEO strategy tailors to your website so it ranks better on search engines such as Google. This helps potential readers find your work more easily. To design all-inclusive SEO plans consistent with your goals, we combine technical know-how with creative strategies.
<br/><br/>
As a writer, you should solely focus on the creative aspects of your work to write something truly remarkable. Let our highly skilled SEO team use optimum strategies in optimising your site and content. Hence, your book will reach the target audience and top the searches without any hassle! 
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
      Make Your   </>}
        subHeading={<>
        Book  <br/>
        More </>}
        heading2="Discoverable! "
        paragraph="Our skilled SEO experts assist you in establishing your author presence online, you reach your intended readers and achieve your author goals."
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
AT AMZ Book Publishings, we totally understand that effective SEO is not only ranking but connecting your content with your audience. Hence, our skilled team opts for a more holistic approach, including keyword research and on-page optimisation, as well as working on quality content for your niche. We are up to date with the best trends and algorithms. So, your website will always stay competitive. We always believe in transparency, so you will also have access to a regular report on our performance.

<br/><br/>
We understand that every business is different, and we do differently too, with customised SEO strategies tailored to the specific needs of different businesses. So whether you're an upcoming author or a well-established one, through our established knowledge base, that prioritises your objectives with personalised support at every step, we can help you achieve success! 
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
export default SeoServices;


