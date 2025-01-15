import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Designing from './pages/Designing';
import BookEditing from './pages/BookEditing';
import GhostWriting from './pages/GhostWriting';
import OtherServices from './pages/OtherServices';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Lppage from './pages/Lppage';
import TermsConditions from './pages/Termscondition';


// *************** GhostWriting Subcategories ****************************

import FictionGhostwriting from './GhostWritingCategories/FictionGhostwriting';
import NonFictionGhostwriting from './GhostWritingCategories/NonFictionGhostwriting';
import ScienceFictionGhostwriting from './GhostWritingCategories/ScienceFictionGhostwriting';
import MemoirGhostwriting from './GhostWritingCategories/MemoirGhostwriting';
import ChildrensBookGhostwriting from './GhostWritingCategories/ChildrensBookGhostwriting';
import CookbookGhostwriting from './GhostWritingCategories/CookbookGhostwriting';
import AdventureGhostwriting from './GhostWritingCategories/AdventureGhostwriting';
import BusinessGhostwriting from './GhostWritingCategories/BusinessGhostwriting';
import FantasyGhostwriting from './GhostWritingCategories/FantasyGhostwriting';
import MedicalGhostwriting from './GhostWritingCategories/MedicalGhostwriting';
import HistoricalGhostwriting from './GhostWritingCategories/HistoricalGhostwriting';
import ShortStoriesGhostwriting from './GhostWritingCategories/ShortStoriesGhostwriting';
import MysteryGhostwriting from './GhostWritingCategories/MysteryGhostwriting';
import EbookWriting from './GhostWritingCategories/EbookWriting';
import LegalGhostwriting from './GhostWritingCategories/LegalGhostwriting';


import RapGhostwriting from './GhostWritingCategories/RapGhostwriting';
import PBGWriting from './GhostWritingCategories/ProfessionalBeautyGhostwriting';
import Screenplay from './GhostWritingCategories/ScreenplayGhostwriting';
import HealthFitnes from './GhostWritingCategories/HealthFitnessGhostwriting';
import BlogExperpage from './GhostWritingCategories/BlogGhostwriting';
import NovelExperPage from './GhostWritingCategories/ProfessionalNovel ';


// *************** Designing Subcategories ****************************

import AuthorWebsiteDesign from './pages/DesigningCategories/AuthorWebsiteDesign';
import LogoDesign from './pages/DesigningCategories/LogoDesign';
import StationeryDesign from './pages/DesigningCategories/StationeryDesign';
import BookTeaser from './pages/DesigningCategories/BookTeaser';
import BookPrinting from './pages/DesigningCategories/BookPrinting';
import BookIllustrations from './pages/DesigningCategories/BookIllustrations';
import BookInteriorFormatting from './pages/DesigningCategories/BookInteriorFormatting';
import LetterheadEnvelopeDesign from './pages/DesigningCategories/LetterheadEnvelopeDesign';
import BusinessCardDesign from './pages/DesigningCategories/BusinessCardDesign';


// *************** Book Editing Subcategories ****************************

import BookEditingCategory from './pages/BookEditingCategories/BookEditingcat';
import NovelEditing from './pages/BookEditingCategories/NovelEditing';
import PoetryEditing from './pages/BookEditingCategories/PoetryEditing';
import ScreenplayEditing from './pages/BookEditingCategories/ScreenplayEditing';
import ShortStoryEditing from './pages/BookEditingCategories/ShortStoryEditing';
import BookProofreading from './pages/BookEditingCategories/BookProofreading';
import FictionBookEditing from './pages/BookEditingCategories/FictionBookEditing';
import NonFictionBookEditing from './pages/BookEditingCategories/NonFictionBookEditing';
import SelfEditingFictionWriters from './pages/BookEditingCategories/SelfEditingFictionWriters';

// *************** Others Services Subcategories ****************************

import BookWriting from './pages/OtherServices/BookWriting';
import BookPublishing from './pages/OtherServices/BookPublishing';
import BookMarketing from './pages/OtherServices/BookMarketing';
import VideoBookTrailers from './pages/OtherServices/VideoBookTrailers';
import SocialMediaMarketing from './pages/OtherServices/SocialMediaMarketing';
import AmazonMarketing from './pages/OtherServices/AmazonMarketing';
import SeoServices from './pages/OtherServices/SeoServices';
import Audiobook from './pages/OtherServices/Audiobook';
import BookReview from './pages/OtherServices/BookReview';


import ThankYouPage from "./pages/ThankYouPage";
import PopupForm1 from "./components/common/PopupForm"; // Import the popup form


const App = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (


    
    <HelmetProvider>
    
      
    <Router>
      <div>
        
        <Routes>
        <Route path="/" element={<Home openModal={openModal} />} />
        <Route path="/book-designing-services" element={<Designing openModal={openModal} />} />
        <Route path="/professional-ghostwriting-services" element={<GhostWriting openModal={openModal} />} />
        <Route path="/other-services" element={<OtherServices openModal={openModal} />} />
        <Route path="/professional-book-editing-services" element={<BookEditing openModal={openModal} />} />
        <Route path="/about-us" element={<AboutUs openModal={openModal} />} />
        <Route path="/contact-us" element={<ContactUs openModal={openModal} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy openModal={openModal} />} />
        <Route path="/terms-conditions" element={<TermsConditions openModal={openModal} />} />
        <Route path="/thank-you" element={<ThankYouPage openModal={openModal} />} />
        <Route path="/book-publishing-services" element={<Lppage openModal={openModal} />} />
        

        
        

          {/* Sub Categories of Ghostwriting */}

        <Route path="/affordable-fiction-ghostwriting-services" element={<FictionGhostwriting openModal={openModal} />} />
        <Route path="/affordable-non-fiction-ghostwriting-services" element={<NonFictionGhostwriting openModal={openModal} />} />
        <Route path="/science-fiction-ghostwriting-services" element={<ScienceFictionGhostwriting openModal={openModal} />} />
        <Route path="/memoir-ghostwriting-services" element={<MemoirGhostwriting openModal={openModal} />} />
        <Route path="/childrens-book-ghostwriting-services" element={<ChildrensBookGhostwriting openModal={openModal} />} />
        <Route path="/cookbook-ghostwriting-services" element={<CookbookGhostwriting openModal={openModal} />} />
        <Route path="/adventure-ghostwriting-services" element={<AdventureGhostwriting openModal={openModal} />} />
        <Route path="/business-book-ghostwriting-services" element={<BusinessGhostwriting openModal={openModal} />} />
        <Route path="/fantasy-ghostwriting-services" element={<FantasyGhostwriting openModal={openModal} />} />
        <Route path="/professional-medical-ghostwriting-services" element={<MedicalGhostwriting openModal={openModal} />} />
        <Route path="/historical-ghostwriting-services" element={<HistoricalGhostwriting openModal={openModal} />} />
        <Route path="/short-stories-ghostwriting-services" element={<ShortStoriesGhostwriting openModal={openModal} />} />
        <Route path="/professional-mystery-ghostwriting-services" element={<MysteryGhostwriting openModal={openModal} />} />
        <Route path="/professional-ebook-ghostwriting-services" element={<EbookWriting openModal={openModal} />} />
        <Route path="/professional-legal-ghostwriting-services" element={<LegalGhostwriting openModal={openModal} />} />
        <Route path="/rap-ghostwriting-services" element={<RapGhostwriting openModal={openModal} />} />
        <Route path="/professional-beauty-ghostwriting-services" element={<PBGWriting openModal={openModal} />} />
        <Route path="/affordable-screenplay-ghostwriting-services" element={<Screenplay openModal={openModal} />} />
        <Route path="/health-and-fitness-ghostwriting-services" element={<HealthFitnes openModal={openModal} />} />
        <Route path="/professional-blog-ghostwriting-services" element={<BlogExperpage openModal={openModal} />} />
        <Route path="/professional-novel-writing-services" element={<NovelExperPage openModal={openModal} />} />
       
      

         {/* Sub Categories of Designing */}

        <Route path="/author-website-design-services" element={<AuthorWebsiteDesign openModal={openModal} />} />
        <Route path="/bespoke-logo-design" element={<LogoDesign openModal={openModal} />} />
        <Route path="/stationery-design-services" element={<StationeryDesign openModal={openModal} />} />
        <Route path="/designing/book-teaser" element={<BookTeaser openModal={openModal} />} />
        <Route path="/professional-book-printing-services" element={<BookPrinting openModal={openModal} />} />
        <Route path="/book-illustrations-service" element={<BookIllustrations openModal={openModal} />} />
        <Route path="/interior-book-formatting-services" element={<BookInteriorFormatting openModal={openModal} />} />
        <Route path="/letterhead-and-envelope-design-services" element={<LetterheadEnvelopeDesign openModal={openModal} />} />
        <Route path="/business-card-design-services" element={<BusinessCardDesign openModal={openModal} />} />

        {/* Sub Categories of Book Editing */}


        
        <Route path="/book-editing/book-editing" element={<BookEditingCategory openModal={openModal} />} />
        <Route path="/professional-novel-editing-services" element={<NovelEditing openModal={openModal} />} />
        <Route path="/affordable-poetry-editing-services" element={<PoetryEditing openModal={openModal} />} />
        <Route path="/professional-screenplay-editing-services" element={<ScreenplayEditing openModal={openModal} />} />
        <Route path="/short-story-editing-services" element={<ShortStoryEditing openModal={openModal} />} />
        <Route path="/book-proofreading-services" element={<BookProofreading openModal={openModal} />} />
        <Route path="/fiction-book-editing-services" element={<FictionBookEditing openModal={openModal} />} />
        <Route path="/non-fiction-book-editing-services" element={<NonFictionBookEditing openModal={openModal} />} />
        <Route path="/book-editing/self-editing-fiction-writers" element={<SelfEditingFictionWriters openModal={openModal} />} />

         {/**************  Other Services */}
        
        <Route path="/professional-book-writing-services" element={<BookWriting openModal={openModal} />} />
        <Route path="/affordable-book-publishing-services" element={<BookPublishing openModal={openModal} />} />
        <Route path="/book-marketing-services" element={<BookMarketing openModal={openModal} />} />
        <Route path="/book-trailer-services" element={<VideoBookTrailers openModal={openModal} />} />
        <Route path="/social-media-marketing-services-for-authors" element={<SocialMediaMarketing openModal={openModal} />} />
        <Route path="/amazon-book-marketing-services-for-authors" element={<AmazonMarketing openModal={openModal} />} />
        <Route path="/search-engine-optimization-services" element={<SeoServices openModal={openModal} />} />
        <Route path="/audiobook-publishing-services" element={<Audiobook openModal={openModal} />} />
        <Route path="/professional-book-review-services" element={<BookReview openModal={openModal} />} />
        
        </Routes>
        
        
        {/* Popup Form Modal */}
        <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </Router>
    </HelmetProvider>
  );
};

export default App;
