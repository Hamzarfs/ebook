// src/pages/About.js
import React, { useState } from 'react';
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
import FictionImage1 from '../../images/Author_Website Design1.png';
import fictionwhychoose from '../../images/fictionwhychoose.png';
import ghostWritingImage from '../../images/Ghost Writing.png';
import designingImage from '../../images/Designing.png';
import bookEditingImage from '../../images/book edit.png';
import designprocess1 from '../../images/design-process-1.png';
import designprocess2 from '../../images/design-process-2.png';
import designprocess3 from '../../images/design-process-3.png';
import designprocess4 from '../../images/design-process-4.png';
import PopupForm1 from '../../components/common/PopupForm';
import { Helmet } from 'react-helmet-async';
import Queries from '../../components/common/Queries';



// ******************************** Start SecondSection ******************************

const services = [
    {
        title: "Fiction Authors: ",
        image: ghostWritingImage, // Update this if you have a specific image
        description: "We design professional Websites for Writers in genres such as fantasy, mystery, romance, thriller, and more."
    },
    {
        title: "Non-fiction Writers: ",
        image: designingImage, // Update this if you have a specific image
        description: "Our sites for non-fiction authors focus on professionalism, credibility, and precise information delivery."
    },
    {
        title: "Memoirists & Biographers:",
        image: bookEditingImage, // Update this if you have a specific image
        description: "We create emotionally impactful websites that reflect the personal stories behind your work."
    }
];


// ******************************** End SecondSection ******************************



const heading1 = {
    title: (
        <>
          Start Your Author 
            <br />
        </>
    ),
    highlight: "Website Design Journey Today"
};
const descs = "Ready to showcase your work and build your online author brand? Our Professional Author Website Design Services are here to help you grow your audience and establish your digital presence. Whether launching your first book or managing an entire catalogue, AMZ Book Publishing will create a site that reflects your professionalism and creativity.Contact us today for a free consultation and start building your custom author website.";





// ******************************** Start Design Process Props ******************************

const heading = {
    title: (
        <>
            Our Author Website

        </>
    ),
    highlight: " Design Process"
};
const desc = "Our process ensures your website is developed with creativity and professionalism. ";

const steps = [
    {
        image: designprocess1,
        alt: "Discovery & Planning",
        title: "Discovery & Planning",
        description: "Our first stage relies on focused dialogue because we work with you to identify the core components. Our company's project managers need to receive essential information regarding your creative vision."
    },
    {
        image: designprocess2,
        alt: "Design & Development",
        title: "Design & Development",
        description: "Our designers build your site using responsive designs that will suit appearance and interaction. In this phase, you will review our designs, and you can make changes and ensure the website meets your expectations.s"
    },
    {
        image: designprocess3,
        alt: "Review & Launch",
        title: "Review & Launch",
        description: "After completing the design, we will check each function of the website. Before going live, we will send you a preview. Upon your approval, we will set it live on your domain and confirm that everything is operating correctly."
    },
    {
        image: designprocess4,
        alt: "Post-Launch Support & Website Updates",
        title: "Post-Launch Support & Website Updates",
        description: "After your site goes live, we continue to stand by your side. From that point on, unlimited support is offered, tailored tutoring is provided, and optional maintenance plans to sustain the site as needed."
    }
];



// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
    {
        question: "What are Author Website Design Services?",
        answer: "Author website design services involve creating a custom website tailored to an author's branding, writing, and audience engagement goals. It includes everything from layout and design to hosting, email integration, and more."
    },
    {
        question: "How do I hire an Author Website Designer?",
        answer: "Contact us for an initial consultation. We'll discuss your needs, genre, and design preferences and provide a quote and project timeline."
    },
    {
        question: "Can I request revisions during the process?",
        answer: "Yes! We welcome feedback and provide multiple opportunities for revisions during the design and development phase to ensure your satisfaction."
    },
    {
        question: "How long does it take to build my website?",
        answer: "Project timelines vary based on complexity and features, but most websites for professional authors are completed within 2–4 weeks after the initial consultation.s"
    },
    {
        question: "Can I update my website myself?",
        answer: "Absolutely. We use easy-to-manage platforms like WordPress or Wix and offer training so you can make updates yourself — or we can handle updates for you with an optional support plan."
    }
];

// ******************************** End FAQ Section ******************************

const AuthorWebsiteDesign = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

    const openModal = () => {
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            <Helmet>

                <title>Author Website Design Services | AMZ Book Publishing</title>
                <meta name="description" content="Our Author Website Design Services help you establish a strong online presence with a beautifully crafted website tailored to your brand." />
                <link rel="canonical" href="https://amzbookpublishing.net/author-website-design-services " />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Author Website Design Services | AMZ Book Publishing" />
                <meta property="og:description" content="We create stunning websites for writers. Get our author website design services for showcasing your books, book sales, readers email list and attention." />
                <meta property="og:url" content="https://amzbookpublishing.net/author-website-design-services" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-23T07:20:22+00:00" />

            </Helmet>
            {/* -------------------Start Banner section---------------------- */}
            <Header />
            <BreadCrumb
                className="responsive-height"
                title="Professional Author Website Design Services "
                desc={
                    <>
                        Nowadays, a professional website is a must-have for every author looking to grow their brand, connect with readers, and increase book sales. Our Professional Author Website Design Services are focused on meeting the needs of writers wanting a strong web presence.

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
                    heading="Author Website "
                    subHeading="Designers for Hire"
                    description={
                        <>
                            At AMZ Book Publishing, every writer has a unique story to tell. We are dedicated to designing unique websites that showcase distinct personalities and grow their audiences. Our author website designers not only strike a balance between stunning looks and ease of access but also incorporate mobile optimization.

                            Each website is customized to match your genre, audience, and publishing goals. Whether you write fiction, non-fiction, or poetry, we craft online spaces that resonate with readers and industry professionals alike.

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
                    heading1={<>
                        Types of </>}
                    subHeading={<>
                        Author Websites<br />
                        We</>}
                    heading2=" Specialize In"
                    paragraph="At AMZ Book Publishing, we offer custom website design services for authors in all genres and publishing categories:"
                    services={services}
                />
            </div>
            <div style={{ padding: '0px 0px 50px 0px' }}>
                <ImageLeftBanner
                    heading="Why Choose Our Author"
                    subHeading=" Website Design Services?"
                    description={
                        <>
                        When you choose AMZ Book Publishing for your custom author website design, you get more than a website — you get a strategic platform tailored to your needs as a writer.
                          <ul>
                              <li>
                                  <b>Experienced Designers: </b> Our team understands author branding and reader behaviour, ensuring your website looks great and functions flawlessly.
                              </li>
                              <li>
                                  <strong>SEO Optimization: </strong>All our websites are built with search engines in mind to help readers discover you.
                              </li>
                              <li>
                                  <strong>Collaborative Process: </strong>We work closely with you at every stage to ensure your vision is realized.
                              </li>
                              <li>
                                  <strong>Affordable Packages: </strong>As an affordable custom author website design services, we offer competitive pricing without compromising quality.
                              </li>
                              <li>
                                  <strong>Mobile-Friendly & Modern: </strong>Your website will look great on phones, tablets, and desktops — ensuring maximum reach.
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
            <CtaButton />

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
            <ContactForm />

            <Footer />
        </div>
    );
};
export default AuthorWebsiteDesign;


