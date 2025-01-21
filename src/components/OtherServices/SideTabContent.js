import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaChevronRight } from 'react-icons/fa'; // Import Font Awesome for arrow
import bookwritingtab from '../../images/bookwritingtab.png';
import BookMarketing from '../../images/BookMarketing.png';
import VideoBook from '../../images/VideoBook.png';
import SocialMediaMarketing from '../../images/SocialMediaMarketing.png';
import AmazonMarketing from '../../images/AmazonMarketing.png';
import SEOServices from '../../images/SEOServices.png';
import AudioBook from '../../images/AudioBook.png';
import BookReviews from '../../images/BookReviews.png';

import frame11 from '../../images/Frame 11.png';


// import './YourStyles.css'; // Custom styles for the section

const SideTabContent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const services = [
    {
      title: 'Book Writing',
      content: (
        <>
          <p>
            Struggling to turn your ideas into a captivating story? Feeling stuck with a manuscript that needs a finishing touch, or just too busy to see it through? Let us handle it with our exceptional book-writing services.
          </p>
          <p>
            Our team of talented writers comes from diverse backgrounds, including industry, arts, sciences, technology, advertising, communications, social sciences, and engineering. This broad expertise means we can tackle a wide range of genres and topics, turning your creative vision into a compelling and well-crafted book.
          </p>
          <p>
            We are here to listen to your ideas and craft content that not only meets your expectations but also helps you achieve your goals. Let us help you bring your project to life and make it a success!
          </p>
        </>
      ),


      image: bookwritingtab,
    },
    {
      title: 'Book Publishing',
      content: 'Being part of AMZ Book Publishings means that publishing becomes more than just producing a book. Its about talking to the world through your story in a way that resonates with your intended audience. Our custom publishing approach will bring your voice and vision to the top of every task we undertake. With this strategy, we are committed to ensuring you meet your potential in this competitive market as you utilise a platform that puts the focus on your unique voice and its intended audience.',
      image: frame11,
    },
    {
      title: 'Book Marketing',
      content: (
        <>
          <p>
          Do you have the fear of your book getting drowned in the crowd and, hence, finding it difficult to gain prominence over millions of other books? Or, do you want to grasp more eyeballs for your book and give that added oomph it needs? At AMZ Book Publishings, we realize that tapping into today's trends can make all the difference in creating a video book trailer that stands out. That is why we are here to help you shine with a visually stunning and trendy book trailer.
          </p>
      
        </>
      ),
      
      image: BookMarketing,
    },
    {
      title: 'Video Book',
      content:( <>
        Our skilled team specialize in making videos that can command audiences and connect with popular themes and styles. This will skyrocket the excitement and buzz around your story. So, contact us to make your book an interesting visual experience resonating deep down in readers' hearts! </> ),
       
      image: VideoBook,
    },
    {
      title: 'Social Media Marketing',
      content:( <>
         Social media is a big deal these days in the world of marketing. Millions of users are on various platforms. In this dynamic environment, a social media strategy becomes crucial and assists the author in promoting and reaching out to his readers. AMZ Book Publishings helps you unleash your power in telling your story to your readers.
 <br/><br/>
Our experienced team comes up with creative strategies to promote your online presence, add value to your community, and increase traffic directed to your book or author page. </> ),
      image: SocialMediaMarketing,
    },
    {
      title: 'Amazon Marketing',
      content:( <>
        We, at AMZ Book Publishings, well understand that just getting a book listed on Amazon is not how one makes their book successful. There are millions of titles competing with one another for the reader's attention. With this, and many other reasons, efficient marketing helps you stand out. That's why we use strategic approaches that enhance the discoverability of your book in order to attract potential readers who eventually click on the "purchase" button.
        <br/><br/>
Our expert team helps you reach your target audience and really maximize the exposure of your book on the world's largest online marketplace.
      title: 'Amazon Marketing', </> ),
      image: AmazonMarketing,
    },
    {
      title: 'SEO Services',
      content:( <>
       At AMZ Book Publishings, we understand that effective online presence is essential to succeed as an author in the modern world. Our SEO strategy tailors to your website so it ranks better on search engines such as Google. This helps potential readers find your work more easily. To design all-inclusive SEO plans consistent with your goals, we combine technical know-how with creative strategies.
        <br/><br/>
        As a writer, you should solely focus on the creative aspects of your work to write something truly remarkable. Let our highly skilled SEO team use optimum strategies in optimising your site and content. Hence, your book will reach the target audience and top the searches without any hassle! </> ),

      image: SEOServices,
    },
    {
      title: 'Audio Book',
      content:( <>
       Audiobooks are now the number one favourite of busy readers. You can listen to your recent read while commuting, exercising, or doing housework. We capture your book's heart and make your audiobook a sleek-finished product that fans will appreciate, and new listeners will like. We want your audiobook to be a real treasure in your journey as an author, getting you closer to more people and widening your audience.
        <br/><br/>
        Our expert team at AMZ Book Publishings is dedicated to helping you reach a wider audience by bringing your stories to life with high-quality audio narration. This means making sure that your book will resonate with the book listeners worldwide. Let's join the audiobook revolution and make your book come alive! </> ),
      image: AudioBook,
    },
    {
      title: 'Book Reviews',
      content:( <>
   At AMZ Book Publishings, we recognize that a well-crafted review could go a long way in making or breaking the reader's choice. Our personalised approach is designed to attach your work to the reviewers who will appreciate your genre and style. It's this approach that we hope your book will be represented at its best strengths and through reviews appealing to a potential reader.

        <br/><br/>
        We understand the importance of quality reviews in today's cutthroat literary marketplace. We will enable you to receive authentic feedback from your target audience, which can elevate the reputation of your book. </> ),
      image: BookReviews,
    },
    // Add more tabs as needed
  ];

  return (
    <div className="container design-services-section py-5">
      <div className="row text-center">
        <div className="col-12">
          <h2 className="design-process-heading font-weight-bold">
            A Whole New Chapter In<br />
            <span className="orangegradient-h2">Book Design</span>
          </h2>
          <p className="design-process-description">
            You've got the next bestseller. We've got a complete book design solution: custom covers,<br />
            interior design, illustration, tools and more.
          </p>
        </div>
      </div>

      <div className="row">
        {/* Sidebar Tabs */}
        <div className="col-md-4">
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList className="service-tabs">
              {services.map((service, index) => (
                <Tab key={index} className={`service-tab ${tabIndex === index ? 'active-tab' : ''}`}>
                  {service.title} <FaChevronRight className="tab-arrow" />
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </div>

        {/* Content Area */}
        <div className="col-md-8">
          {services.map((service, index) => (
            <TabPanel key={index} selected={tabIndex === index}>
              <img src={service.image} alt={service.title} className="img-fluid service-image" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.content}</p>
            </TabPanel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideTabContent;
