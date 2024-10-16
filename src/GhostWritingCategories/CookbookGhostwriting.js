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
import FictionImage1 from '../images/fictiongimg1.png';
import fictionwhychoose from '../images/fictionwhychoose.png';
import ghostWritingImage from '../images/Ghost Writing.png';
import designingImage from '../images/Designing.png';
import bookEditingImage from '../images/book edit.png';
import designprocess1 from '../images/design-process-1.png';
import designprocess2 from '../images/design-process-2.png';
import designprocess3 from '../images/design-process-3.png';
import designprocess4 from '../images/design-process-4.png';
import PopupForm1 from '../components/common/PopupForm';

// ******************************** Start SecondSection ******************************

const services = [
  {
    title: "Recipe Development Ghostwriting",
    image: ghostWritingImage,
    description: "Our cookbook ghostwriters specialize in crafting mouthwatering recipes that not only reflect your culinary style but are also thoroughly tested for perfection."
  },
  {
    title: "Culinary Memoir Ghostwriting",
    image: designingImage,
    description: "Share your culinary journey with a beautifully woven narrative that combines personal anecdotes and delicious recipes."
  },
  {
    title: "Themed Cookbook Ghostwriting",
    image: bookEditingImage,
    description: "Whether you are dreaming of a book focused on healthy eating, international cuisines, or holiday feasts, our cookbook ghostwriters will help you create a themed cookbook that captivates your audience."
  }
];


// ******************************** End SecondSection ******************************

// ******************************** Start Design Process Props ******************************

const heading = {
  title: (
    <>
     What Our Cookbook Ghostwriting 
     <br />
    </>
  ),
  highlight: "Process Looks Like"
};
// const description = "We follow a proper book cover designing process to ensure the best final product for our clients.";

const steps = [
  {
    image: designprocess1,
    alt: "Preparing and Researching",
    title: "Preparing and Researching",
    description: "Let’s get cooking! We will kick things off with friendly chats and handy questionnaires to explore your culinary vision, target audience, and the market landscape. We will also dive into any existing drafts, notes, or ideas you have, gathering all the flavorful details to ensure we are heading in the right direction!"
  },
  {
    image: designprocess2,
    alt: "Strategizing and Outlining",
    title: "Strategizing and Outlining",
    description: "Time to roll up your sleeves! You will connect with your dedicated cookbook-writing team, whether in person or via video chat, for exciting strategy sessions. Together, we will brainstorm and craft a solid outline that serves as the foundation for your delicious journey."
  },
  {
    image: designprocess3,
    alt: "Writing",
    title: "Writing",
    description: "Now, let the magic happen! When you hire a cookbook ghostwriter, we ensure your book is a true reflection of your culinary style. Through engaging interviews and thoughtful edits, we will capture your unique voice and ensure every recipe and story resonates with your personality."
  },
  {
    image: designprocess4,
    alt: "Showcasing Your Masterpiece",
    title: "Showcasing Your Masterpiece",
    description: "We are with you every step of the way! Not only will we assist with your ghostwritten cookbook, but we will also support you throughout the publishing process. AMZ Book Publishings will connect you with industry pros for cover design, formatting, and distribution to ensure your cookbook shines in a crowded market."
  }
];


// ******************************** End Design Process Props ******************************

// ******************************** Start FAQ Section ******************************
const faqData = [
  {
    question: "What exactly is cookbook ghostwriting, and how does it work at AMZ Book Publishings?",
    answer: "Great question! Cookbook ghostwriting is where we partner with you to create your culinary masterpiece while you maintain your creative vision. At AMZ Book Publishings, we start by getting to know you and your cooking style through friendly chats. Our talented ghostwriters will then craft engaging recipes and narratives that reflect your personality, making the entire process smooth and enjoyable!"
  },
  {
    question: "How involved will I be in the cookbook writing process?",
    answer: "You will be as involved as you want to be! We believe that your voice and vision should shine through. From brainstorming ideas to reviewing drafts, we keep the communication open and collaborative. You can share your recipes, cooking tips, and stories, and we will weave them into a captivating cookbook that feels authentically yours."
  },
  {
    question: "What types of cookbooks can you help me create?",
    answer: "We can assist you in creating a variety of cookbooks! Whether you are looking to showcase family recipes, healthy meal plans, or specialty cuisine, our cookbook ghostwriters have the expertise to bring your ideas to life. We tailor our approach to fit the unique flavor and theme you have in mind."
  },
  {
    question: "How long does it typically take to write a cookbook with AMZ Book Publishings?",
    answer: "The timeline can vary depending on the scope and complexity of your project. Generally, from our initial discussions to the final manuscript, you can expect the process to take a few months. We’ll provide you with a clearer timeline during our first consultation, ensuring that it aligns with your goals and schedule."
  },
  {
    question: "Will I retain the rights to my cookbook once it is completed?",
    answer: "Absolutely! Once your cookbook is completed, you hold all the rights to it. At AMZ Book Publishings, we are here to support you in your culinary journey, and that includes respecting your ownership of your creative work."
  }
];



// ******************************** End FAQ Section ******************************

const CookbookGhostwriting = () => {
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
        title="Cookbook Ghostwriting"
        desc={
          <>
           Bring your culinary creations to life with our expert cookbook ghostwriting services, crafting delicious recipes into a beautifully written and engaging cookbook
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


<div style={{ padding: '40px 0px 100px 0px' }}>
<ImageRightBanner
    heading="Cookbook "
    subHeading="Ghostwriting"
    description={
        <>
          At AMZ Book Publishings, our cookbook ghostwriters take the stress out of writing by turning your recipes and culinary ideas into a professionally crafted cookbook. We handle everything from organizing your content to creating engaging, easy-to-follow recipes, so you can focus on what you do best: cooking!
           <br /><br />
           Whether you are a chef, a food blogger, or just someone with a passion for cooking, our cookbook ghostwriters ensure your unique voice shines through. We will help you create a captivating cookbook that not only showcases your recipes but also tells your culinary journey in a way that resonates with readers and food lovers everywhere.
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
        Unparalleled  </>}
        subHeading={<>
        Cookbook<br/>
        Ghostwriting </>}
        heading2="Services"
        paragraph="We bring your recipes to life with a blend of creativity, precision, and a deep understanding of culinary storytelling."
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
        At AMZ Book Publishings, we understand that every cookbook tells a unique story. Here is why partnering with us is the best choice for bringing your culinary vision to life.
        <ul>
    <li>
        <b>Expert Culinary Ghostwriters:</b> Our team includes experienced cookbook ghostwriters who are not just skilled writers but also passionate food enthusiasts. They understand the nuances of crafting recipes and engaging narratives that resonate with readers.
    </li>
    <li>
        <strong>Tailored Approach:</strong> We collaborate closely with you to ensure your cookbook reflects your personal style, culinary vision, and the flavors that inspire you. Your ideas will take center stage throughout the writing process.
    </li>
    <li>
        <strong>Thorough Research and Planning:</strong> We dive deep into your culinary world, conducting extensive research to create well-structured outlines and recipes that are both captivating and easy to follow.
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
         <ContactForm/>

      <Footer/>
    </div>
    
  );
};
export default CookbookGhostwriting;


