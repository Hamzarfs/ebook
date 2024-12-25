// src/pages/About.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/common/Header';
import Lpbanner from '../components/LandingPage/bannerlp';
import lpimg1 from '../images/lpimg1.png'
import Lpimagebanner from '../components/LandingPage/Lpimagebanner';


// ******************************** End FAQ Section ******************************

const lppage = () => {

    return (
        <div>
            <Helmet>
                <title>Contact Us - AMZ Book Publishing</title>
                <meta name="description" content="Contact AMZ Book Publishing for professional book publishing services. From editing to distribution, we help authors bring their stories to life. Reach out today!" />
                <link rel="canonical" href="https://amzbookpublishing.net/contact-us" />
            </Helmet>
            <Header/>
            <Lpbanner/>
            
            <Lpimagebanner
                // subHeading="ABOUT US"
                heading="What Sets Us Apart"
                // headinglightblue=" Animations"
                // heading2=" Unique"
                description={
                    <>
                        We are a top creative video production company that believes in combining traditional innovative storytelling with the latest technology. The experience has made our staff realize that the client's vision should always come first above anything. 
                        <br></br> <br></br>
                        Including optimization and maximizing reach is what our videos can do for your audience. Designing brand new types of engaging media, audio, and creative content for social media sites, websites, email marketing, and digital advertising will connect you with your audience and produce results.

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
            
              

        </div>
    );
};
export default lppage;


