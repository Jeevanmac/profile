import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsGrid } from './components/SkillsGrid';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { SocialDock } from './components/SocialDock';

import { AboutHero } from './components/AboutHero';
import { JourneySection } from './components/JourneySection';
import { EducationSection } from './components/EducationSection';
import { CertificationsGrid } from './components/CertificationsGrid';
import { TechStackSection } from './components/TechStackSection';

import { ProjectsPage } from './components/ProjectsPage';
import { ExperiencePage } from './components/ExperiencePage';
import { CertificatesPage } from './components/CertificatesPage';
import { ContactPage } from './components/ContactPage';
import { TrainingSection } from './components/TrainingSection';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="cinematic-layout">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container">
        {activeTab === 'Home' && (
          <>
            <HeroSection setActiveTab={setActiveTab} />
            <SkillsGrid />
            <ProjectsSection setActiveTab={setActiveTab} />
          </>
        )}
        
        {activeTab === 'About' && (
          <div style={{ paddingBottom: '1rem' }}>
            <AboutHero />
            <JourneySection />
            <TrainingSection />
            <EducationSection />
            <CertificationsGrid />
            <TechStackSection />
          </div>
        )}

        {activeTab === 'Projects' && (
          <ProjectsPage />
        )}
        
        {activeTab === 'Experience' && (
          <ExperiencePage />
        )}

        {activeTab === 'Certificates' && (
          <CertificatesPage />
        )}

        {activeTab === 'Contact' && (
          <ContactPage />
        )}
      </main>
      <Footer />
      <SocialDock />
    </div>
  );
}

export default App;
