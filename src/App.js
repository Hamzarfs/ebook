import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Designing from './pages/Designing';
import BookEditing from './pages/BookEditing';
import GhostWriting from './pages/GhostWriting';
import OtherServices from './pages/OtherServices';

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
          <Route path="/designing" element={<Designing openModal={openModal} />} />
          <Route path="/ghost-writing" element={<GhostWriting openModal={openModal} />} />
          <Route path="/other-services" element={<OtherServices openModal={openModal} />} />
          <Route path="/book-editing" element={<BookEditing openModal={openModal} />} />

          {/* Sub Categories of Ghostwriting */}

          <Route path="/fiction-ghostwriting" element={<FictionGhostwriting openModal={openModal} />} />
          <Route path="/non-fiction-ghostwriting" element={<NonFictionGhostwriting openModal={openModal} />} />
          <Route path="/science-fiction-ghostwriting" element={<ScienceFictionGhostwriting openModal={openModal} />} />
          <Route path="/memoir-ghostwriting" element={<MemoirGhostwriting openModal={openModal} />} />
          <Route path="/childrens-book-ghostwriting" element={<ChildrensBookGhostwriting openModal={openModal} />} />
        <Route path="/cookbook-ghostwriting" element={<CookbookGhostwriting openModal={openModal} />} />
        <Route path="/adventure-ghostwriting" element={<AdventureGhostwriting openModal={openModal} />} />
        <Route path="/business-ghostwriting" element={<BusinessGhostwriting openModal={openModal} />} />
        <Route path="/fantasy-ghostwriting" element={<FantasyGhostwriting openModal={openModal} />} />
        <Route path="/medical-ghostwriting" element={<MedicalGhostwriting openModal={openModal} />} />
        <Route path="/historical-ghostwriting" element={<HistoricalGhostwriting openModal={openModal} />} />
        <Route path="/short-stories-ghostwriting" element={<ShortStoriesGhostwriting openModal={openModal} />} />
        <Route path="/mystery-ghostwriting" element={<MysteryGhostwriting openModal={openModal} />} />
        <Route path="/ebook-writing" element={<EbookWriting openModal={openModal} />} />
        <Route path="/legal-ghostwriting" element={<LegalGhostwriting openModal={openModal} />} />

         {/* Sub Categories of Designing */}

        <Route path="/author-website-design" element={<AuthorWebsiteDesign openModal={openModal} />} />
        <Route path="/logo-design" element={<LogoDesign openModal={openModal} />} />
        <Route path="/thank-you" element={<ThankYouPage openModal={openModal} />} />
        <Route path="/stationery-design" element={<StationeryDesign openModal={openModal} />} />
        <Route path="/book-teaser" element={<BookTeaser openModal={openModal} />} />
        <Route path="/book-printing" element={<BookPrinting openModal={openModal} />} />
        <Route path="/book-illustrations" element={<BookIllustrations openModal={openModal} />} />
        <Route path="/book-interior-formatting" element={<BookInteriorFormatting openModal={openModal} />} />
        <Route path="/letterhead-envelope-design" element={<LetterheadEnvelopeDesign openModal={openModal} />} />
        <Route path="/business-card-design" element={<BusinessCardDesign openModal={openModal} />} />
        <Route path="/book-editing-cat" element={<BookEditingCategory openModal={openModal} />} />
        <Route path="/novel-editing" element={<NovelEditing openModal={openModal} />} />
        <Route path="/poetry-editing" element={<PoetryEditing openModal={openModal} />} />
        <Route path="/screenplay-editing" element={<ScreenplayEditing openModal={openModal} />} />
        <Route path="/shorts-story-editing" element={<ShortStoryEditing openModal={openModal} />} />
        <Route path="/bookproof-reading" element={<BookProofreading openModal={openModal} />} />
        <Route path="/fiction-book-editing" element={<FictionBookEditing openModal={openModal} />} />
        <Route path="/non-fiction-book-editing" element={<NonFictionBookEditing openModal={openModal} />} />
        <Route path="/self-editing-fiction-writers" element={<SelfEditingFictionWriters openModal={openModal} />} />

         {/**************  Other Services */}
        
        <Route path="/other-services/book-writing" element={<BookWriting openModal={openModal} />} />
        <Route path="/other-services/book-publishing" element={<BookPublishing openModal={openModal} />} />
        <Route path="/other-services/book-marketing" element={<BookMarketing openModal={openModal} />} />
        <Route path="/other-services/video-book-trailers" element={<VideoBookTrailers openModal={openModal} />} />
        <Route path="/other-services/social-media-marketing" element={<SocialMediaMarketing openModal={openModal} />} />
        <Route path="/other-services/amazon-marketing" element={<AmazonMarketing openModal={openModal} />} />
        <Route path="/other-services/seo-services" element={<SeoServices openModal={openModal} />} />
        <Route path="/other-services/audiobook" element={<Audiobook openModal={openModal} />} />
        
        
        
        
        
 
        </Routes>
        
        {/* Popup Form Modal */}
        <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </Router>
    </HelmetProvider>
  );
};

export default App;
