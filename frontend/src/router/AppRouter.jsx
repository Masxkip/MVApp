// File: src/router/AppRouter.jsx
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";
import App from "../App";
import Home from "../pages/Home";
import Quote from "../pages/Quote";
import Contact from "../pages/Contact";
import ReviewsPage from "../pages/ReviewsPage";
import AboutUs from "../pages/AboutUs";
import FaqsPage from "../pages/FaqsPage";
import WebAccess from "../pages/WebAccess";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import MovingLocationCity from "../pages/MovingLocationCity";
import ServicesOffer from "../pages/ServicesOffer";
import Moving from "../pages/Moving";

function Loading() {
  return <div className="px-6 py-12 text-white/70">Loading...</div>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="web-accessibility" element={<WebAccess />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="moving-location/:citySlug" element={<MovingLocationCity />} />
          <Route path="services-offer/:serviceSlug" element={<ServicesOffer />} />
          <Route path="moving/:moveSlug" element={<Moving />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}