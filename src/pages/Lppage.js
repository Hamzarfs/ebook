// src/pages/About.js

import { Helmet } from 'react-helmet-async';
import Header from '../components/common/Header';
import Lpbanner from '../components/LandingPage/bannerlp';
import lpimg1 from '../images/lpimg1.png'
import Lpimagebanner from '../components/LandingPage/Lpimagebanner';
import Lplogobanner from '../components/LandingPage/Lplogobanner';
import TopHead from '../components/LandingPage/Tophead';
import LPHeader from '../components/LandingPage/Lpheader';
import book1 from '../images/bookmemories1.png'
import book2 from '../images/bookfiction2.png'
import book3 from '../images/booknonfiction3.png'
import book4 from '../images/bookromance4.png'
import book5 from '../images/bookaudio5.png'
import book6 from '../images/bookinfo6.png'
import lpwhychoose from '../images/whychooselp.webp'
import Bookservices from '../components/LandingPage/bookservices';
import ImageLeftBanner from '../components/common/ImageLeftText';
import Portfolio from '../components/LandingPage/GalleryLp';
import OurProcessLp from '../components/LandingPage/ourprocesslp';
import TestimonialSection from '../components/LandingPage/TestimonialLp';
import AwardsLogo from '../components/LandingPage/Awardslogo';
import LpContactSec from '../components/LandingPage/Lpcontact';
import Lpcta from '../components/LandingPage/Lpcta';
import LpFooter from '../components/LandingPage/lpFooter';
import LPPricingSection from '../components/LandingPage/Pricingplan';

import React, { useState } from 'react';
import BookImageBox from '../components/LandingPage/Bookimagebox';
// ******************************** End FAQ Section ******************************

const lppage = () => {




    return (
        <div>
            <Helmet>
                <title>Best Book Publisher: AMZ Book Publishing Services Company</title>
                <meta name="description" content="AMZ Book Publishing company enables self-published authors to publish their dream book on AMZN. We are the best publishers in US. Call Us at (732) 797-9165." />
                <link rel="canonical" href="https://amzbookpublishing.net/book-publishing-services" />
            </Helmet>
            {/* <TopHead /> */}
            <LPHeader />
            <Lpbanner />
            <Lplogobanner />
            <Lpimagebanner
                // subHeading="ABOUT US"
                heading="AMZ Book Publishing Company"
                // headinglightblue=" Animations"
                // heading2=" Unique"
                description={
                    <>
                        AMZ Book Publishing Company offers a one-stop solution for aspiring authors to publish their books on Amazon. Our services deceptively give complete guidance at each phase of publishing a book on Amazon, presenting it with an outstanding book cover, leveraging marketing campaigns, and deploying around-the-world distribution strategies.
                        <br></br> <br></br>
                        We here at this firm leverage an excellent knowledge of the Amazon ecosystem and how to bring your book's potential to the maximum through a wide audience to increase your chances of becoming a bestseller.
                    </>
                }
                imageSrc={lpimg1}
                objectfit="contain"
                imageHeight="500px"  // Set height here
                imageWidth="450px"     // Set width here
                borderRadius="10px"
                reverseOrder={false}
                // updatePopupTitle={handleTitleChange}
                buttonUrl="https://www.facebook.com/"
            />
            <Portfolio />
            <LPPricingSection />


            <BookImageBox />

            <ImageLeftBanner
                heading="What Makes Us the Leading Book Publishers in the USA "
                subHeading=""
                description={
                    <>
                        Aspiring authors embarking on their first book journey often explore options like self-publishing, a service where we publish your book on Amazon and other platforms with your name prominently displayed. AMZ Book Publishing streamlines the publishing process, handling everything from editing and book cover design to marketing and distribution, including paperback publishing, e-book publishing, and even audiobook production.
                        <br /><br />
                        This allows you to focus on your writing while we ensure your book reaches its full potential. Whether you're aiming for a traditional hardcover release or a wider reach through publishing book on Amazon, AMZ Book Publishing provides a comprehensive solution for navigating the complexities of the publishing world and achieving your publishing dreams.
                    </>
                }
                imageSrc={lpwhychoose}
                imageHeight=""        // Set height here
                imageWidth=""          // Set width here
                objectfit="cover"          // Set object-fit here
                borderRadius="15px"        // Set border radius here
            />
            <OurProcessLp />
            <AwardsLogo />
            <TestimonialSection />
            <Lpcta />

            <LpContactSec />
            <LpFooter />




        </div>

    );
};
export default lppage;


