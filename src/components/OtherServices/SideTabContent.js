import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaChevronRight } from 'react-icons/fa'; // Import Font Awesome for arrow
import bookwritingtab from '../../images/bookwritingtab.png';
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
      content: 'Our expert team can help with all your publishing needs...',
      image: frame11,
    },
    {
      title: 'Book Marketing',
      content: 'We provide targeted book marketing strategies...',
      image: bookwritingtab,
    },
    {
      title: 'Video Book Trailers',
      content: 'We provide targeted book marketing strategies...',
      image: bookwritingtab,
    },
    {
      title: 'Social Media Marketing',
      content: 'We provide targeted book marketing strategies...',
      image: bookwritingtab,
    },
    {
      title: 'Amazon Marketing',
      content: 'We provide targeted book marketing strategies...',
      image: bookwritingtab,
    },
    {
      title: 'SEO Services',
      content: 'We provide targeted book marketing strategies...',
      image: bookwritingtab,
    },
    {
      title: 'Audio Book',
      content: 'We provide targeted book marketing strategies...',
      image: bookwritingtab,
    },
    {
      title: 'Book Reviews',
      content: 'We provide targeted book marketing strategies...',
      image: bookwritingtab,
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
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.content}</p>
            </TabPanel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideTabContent;
