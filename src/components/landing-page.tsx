
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

// Adapted SectionWrapper to support Flownote's logic of switching backgrounds
const NewFlownoteSectionWrapper = ({
  children,
  className = "bg-background",
  hasBorder = true
}: {
  children?: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
}) => {
  return (
    <div className={`w-full ${className} ${hasBorder ? 'border-t border-border' : ''}`}>
      <div className="max-w-7xl mx-auto border-x border-border h-full relative">
        {children}
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary overflow-x-hidden font-sans">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <NewFlownoteSectionWrapper className="bg-background" hasBorder={false}>
          <Hero />
        </NewFlownoteSectionWrapper>

        {/* Feature Split - Darker Section */}
        <NewFlownoteSectionWrapper className="bg-section-bg">
          <FeatureSplit />
        </NewFlownoteSectionWrapper>

        {/* Feature Tilted */}
        <NewFlownoteSectionWrapper className="bg-background">
          <FeatureTilted />
        </NewFlownoteSectionWrapper>

        {/* Feature Grid - Darker Section */}
        <NewFlownoteSectionWrapper className="bg-section-bg">
          <FeatureGrid />
        </NewFlownoteSectionWrapper>

        {/* Stats */}
        <NewFlownoteSectionWrapper className="bg-background">
          <Stats />
        </NewFlownoteSectionWrapper>

        {/* Testimonials - Darker Section */}
        <NewFlownoteSectionWrapper className="bg-section-bg">
          <Testimonials />
        </NewFlownoteSectionWrapper>

        {/* Pricing */}
        <NewFlownoteSectionWrapper className="bg-background">
          <Pricing />
        </NewFlownoteSectionWrapper>

        {/* Download App & Footer Container - Darker Section */}
        <NewFlownoteSectionWrapper className="bg-section-bg" hasBorder={true}>
          <DownloadApp />
          <Footer />
        </NewFlownoteSectionWrapper>
      </main>
    </div>
  );
}
