// src/pages/About.js
import React,{ useState } from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
// import DesigningServices from '../components/Designing/DesigningServices';
import CtaButton from '../components/common/CtaButton';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Ghostwritingbg from '../images/Ghostwritingbg.png'; // Import the image
import FAQSection from '../components/Designing/DesignFaq';
import ContactForm from '../components/common/ContactForm1';
import SecondSection from '../components/home/SecondSection';
import DesignProcess from '../components/common/DesignProcess';
import ImageRightBanner from '../components/common/ImageRightText';
import ImageLeftBanner from '../components/common/ImageLeftText';
import ghostWritingImage from '../images/Ghost Writing.png';
import fictionwhychoose from '../images/fictionwhychoose.png';
import BlogExpert from '../images/blogexpert.jpg';
import designingImage from '../images/Designing.png';
import bookEditingImage from '../images/book edit.png';
import designprocess1 from '../images/design-process-1.png';
import designprocess2 from '../images/design-process-2.png';
import designprocess3 from '../images/design-process-3.png';
import designprocess4 from '../images/design-process-4.png';
import PopupForm1 from '../components/common/PopupForm';
import { Helmet } from 'react-helmet-async';
import Queries from '../components/common/Queries';



// ******************************** Start SecondSection ******************************

const services = [
  {
    title: "Lifestyle Blogs:",
    image: ghostWritingImage, // Update this if you have a specific image
    description: "Engaging, informative, and entertaining posts on topics like fashion, travel, and personal development."
  },
  {
    title: "Business & Industry Blogs: ",
    image: designingImage, // Update this if you have a specific image
    description: "Tailored content for business owners, executives, and entrepreneurs, including leadership tips, business advice, and industry insights."
  },
  {
    title: "SEO-Optimized Blog Posts: ",
    image: bookEditingImage, // Update this if you have a specific image
    description: "Articles designed to rank highly on search engines and drive traffic to your site, incorporating targeted keywords and SEO best practices."
  }
];


// ******************************** End SecondSection ******************************


const heading1 = {
    title: (
        <>
           Start Your Blog 
            <br />
        </>
    ),
    highlight: "Ghostwriting Journey Today"
};
const descs = "Ready to create high-quality, engaging blog content for your website or brand? AMZ Book Publishing offers Professional Blog Ghostwriting Services that will help you connect with your audience and grow your online presence. Contact us today for a free consultation, and let’s start crafting blog posts that elevate your brand.";





// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
    Our Blog 
     <br />
    </>
  ),
  highlight: "Writing Process"
};
const desc = "We follow a process that ensures your blog is written with clarity and authority:";

const steps = [
  {
    image: designprocess1,
    alt: "Initial Consultation & Project Setup",
    title: "Initial Consultation & Project Setup",
    description: "First, we do a starting consultation to learn your blog ideas, audience, and vision. Our project managers will collect all the required information about your skills and the objective. We then send a custom proposal with transparent pricing and timeframes for your project."
  },
  {
    image: designprocess2,
    alt: "Writing & Revisionsn",
    title: "Writing & Revisions",
    description: "After you approve the project, we'll match you with one of our skilled ghostwriters, ready to bring your ideas to life. You will review drafts and provide feedback, ensuring that the blog is exactly the same as you are expecting. "
  },
  {
    image: designprocess3,
    alt: "Final Approval & Publishing",
    title: "Final Approval & Publishing",
    description: "After completion, the manuscript receives additional modifications to achieve maximum refinement before it reaches publication status. Our team will conclude all editing procedures while preparing the manuscript for both traditional and electronic publication formats."
  },
  {
    image: designprocess4,
    alt: "Launch & Marketing Support",
    title: "Launch & Marketing Support",
    description: "When your material is ready to go, we help with marketing so you can start generating buzz and reaching your audience. We also assist with promotion strategies so you can get your blog to the right target market and allow it to leave a lasting impression."
  }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What are Blog Ghostwriting Services?",
    answer: "Blog ghostwriting services involve hiring professional writers to create blog posts on your behalf. The content is written in your voice, and you retain the credit for the final product."
  },
  {
    question: "How do I hire a Blog Ghostwriter?",
    answer: "To hire a Blog Ghostwriter, simply contact us for an initial consultation. We’ll discuss your needs, goals, and specific topics, and provide a custom quote and timeline for your project."
  },
  {
    question: "Can I make revisions to the blog posts?",
    answer: "Yes! We offer unlimited revisions to ensure the blog content meets your expectations. You’ll be able to review drafts and suggest changes as needed."
  },
  {
    question: "How long does it take to complete a blog post?",
    answer: "The time required depends on the complexity of the topic and the length of the post. After our consultation, we will provide an estimated timeline for delivery."
  },
  {
    question: "Do I own the rights to my blog content?",
    answer: "Yes! Once the blog post is approved, you own all rights to the content. We guarantee original work and full ownership transfer once the project is finalized."
  }
];

// ******************************** End FAQ Section ******************************

const LegalGhostwriting = () => {
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
      <Helmet>
            <title>Professional Blog Ghostwriting Services | AMZ Book Publishing</title>
            <meta name="description" content="Elevate your brand with our Professional Blog Ghostwriting Services—expertly written, high-quality blogs that attract and retain readers." />
            <link rel="canonical" href="https://amzbookpublishing.net/professional-blog-ghostwriting-services " />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Expert Blog Ghostwriting Services for Engaging Content" />
            <meta property="og:description" content="Need a Blog ghostwriter? We offer professional Blog ghostwriting services at an affordable price. Contact us to hire expert bloggers remotely for your project." />
            <meta property="og:url" content="https://amzbookpublishing.net/professional-blog-ghostwriting-services" />
            <meta property="og:site_name" content="AMZBookPublishing" />
            <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
            <meta property="article:modified_time" content="2024-08-23T07:24:16+00:00" />


      </Helmet>
      <Header />
      <BreadCrumb
      className="responsive-height"
        title="Blog Ghostwriting Agency in the USA"
        desc={
          <>
Consistent and quality is essential in capturing the attention of audiences and gaining traffic that is critical to success. AMZ Book Publishing is a USA based blog ghostwriting agency, where we provide professional blog writing services to businesses, professionals and content creators. While you retain the opportunity to be the face of the content, our own professional writers create amazing blogs to reflect the voice of your brand and the content of your target audience that is highly visible and search engine optimized.
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


<div style={{ padding: '30px 0px 0px 0px' }}>
<ImageRightBanner
    heading="Professional Blog "
    subHeading="Ghostwriters for Hire"
    description={
        <>
From lifestyle and technology to health and finance and business, our Professional Blog Ghostwriters have worked across the board. We are committed to providing high-quality content that informs, entertains, and drives engagement. Whether you are looking for a single blog post or ongoing content, our writers have you covered to achieve blogosphere success.
        </>
    }
    imageSrc={BlogExpert}
    objectfit="contain"
    imageHeight="400px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
/>
</div>

{/*****************  SERVICE Section *****************/}
<div>

{/* <div style={{ padding: '0px 0px 30px 0px' }}>
<SecondSection/>
</div> */}
<DesignProcess 
        heading={heading}
        description={
            <div className="custom-description">
                {desc}
            </div>
        }
        steps={steps}
      />


<SecondSection 
        buttonLabel="S e r v i c e s"
        heading1={ <>
        Types of </>}
        subHeading={<>
       Blog <br/>
       Content We </>}
        heading2="Specialize In"
        paragraph="At AMZ Book Publishing, we provide a wide range of blog content services, including:"
        services={services}
      />
      </div>


<div style={{ padding: '0px 0px 50px 0px' }}>
<ImageLeftBanner
    heading="Why Choose Our "
    subHeading="Ghost Blogging Services?"
    description={
        <>
       Partnering with AMZ Book Publishing for your Professional Blog Post Writing Service offers several advantages:
         <ul>
             <li>
                 <b>Experienced Writers: Our Blog Ghostwriters </b> Our Blog Ghostwriters are experts in creating content that is engaging, informative, and SEO-optimized. You’ll be working with writers who are skilled in your industry and understand what it takes to create content that resonates with your audience.
             </li>
             <li>
                 <strong>Collaborative Process: </strong> We work closely with you throughout the process, ensuring the content reflects your voice and goals. Your feedback is essential, and we’ll refine the content to meet your expectations.
             </li>
             <li>
                 <strong>Unlimited Revisions: </strong> We offer unlimited revisions until you're completely satisfied with the final blog post, ensuring that the content aligns with your vision and objectives.
             </li>
             <li>
                 <strong>Affordable Pricing:  </strong>We offer Affordable Blog Ghostwriting Services, allowing you to get professional content at a reasonable price without compromising quality.
             </li>
         </ul>
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
    <Queries
                heading={heading1}
                description={
                    <div className="custom-description">
                        {descs}
                    </div>
                }
                steps={steps}
            />
         <ContactForm/>

      <Footer/>
    </div>
  );
};
export default LegalGhostwriting;


