
"use client";

import React from 'react';
import Navbar from './landing-page/Navbar';
import Hero from './landing-page/Hero';
import FeatureSplit from './landing-page/FeatureSplit';
import Stats from './landing-page/Stats';
import Testimonials from './landing-page/Testimonials';
import FeatureTilted from './landing-page/FeatureTilted';
import FeatureGrid from './landing-page/FeatureGrid';
import Pricing from './landing-page/Pricing';
import DownloadApp from './landing-page/DownloadApp';
import Footer from './landing-page/Footer';

const SectionWrapper = ({
  children,
  className = "bg-app-bg",
  hasBorder = true
}: {
  children?: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
}) => {
  return (
    <div className={`w-full ${className} ${hasBorder ? 'border-t border-gray-200' : ''}`}>
      <div className="max-w-7xl mx-auto border-x border-gray-200 bg-app-bg h-full relative">
        {children}
      </div>
    </div>
  );
};

// Adapted SectionWrapper to support NewFlownote's logic of switching backgrounds
const NewFlownoteSectionWrapper = ({
  children,
  className = "bg-white",
  hasBorder = true
}: {
  children?: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
}) => {
  return (
    <div className={`w-full ${className} ${hasBorder ? 'border-t border-gray-200' : ''}`}>
      {/* 
         NewFlownote has a "max-w-7xl mx-auto border-x border-gray-100 bg-white h-full relative" inner container.
         I will replicate that but with FlownoteWeb border colors.
         Inner bg should be white to match NewFlownote's clean look? Or app-bg?
         User said "NewCume as a template". NewFlownote uses white inner. 
      */}
      <div className="max-w-7xl mx-auto border-x border-gray-200 bg-white h-full relative">
        {children}
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-text-primary overflow-x-hidden font-sans">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section - White Sides */}
        <NewFlownoteSectionWrapper className="bg-white" hasBorder={false}>
          <Hero />
        </NewFlownoteSectionWrapper>

        {/* Feature Split - Diagonal Sides */}
        <NewFlownoteSectionWrapper className="bg-diagonal-lines">
          <FeatureSplit />
        </NewFlownoteSectionWrapper>

        {/* Feature Tilted - White Sides */}
        <NewFlownoteSectionWrapper className="bg-white">
          <FeatureTilted />
        </NewFlownoteSectionWrapper>

        {/* Feature Grid - Diagonal Sides */}
        <NewFlownoteSectionWrapper className="bg-diagonal-lines">
          <FeatureGrid />
        </NewFlownoteSectionWrapper>

        {/* Stats - White Sides */}
        <NewFlownoteSectionWrapper className="bg-white">
          <Stats />
        </NewFlownoteSectionWrapper>

        {/* Testimonials - Diagonal Sides */}
        <NewFlownoteSectionWrapper className="bg-diagonal-lines">
          <Testimonials />
        </NewFlownoteSectionWrapper>

        {/* Pricing - White Sides */}
        <NewFlownoteSectionWrapper className="bg-white">
          <Pricing />
        </NewFlownoteSectionWrapper>

        {/* Download App & Footer Container - Diagonal Sides */}
        <NewFlownoteSectionWrapper className="bg-diagonal-lines" hasBorder={true}>
          <DownloadApp />
          {/* Footer Self-contained Card */}
          <Footer />
        </NewFlownoteSectionWrapper>
      </main>
    </div>
  );
}
