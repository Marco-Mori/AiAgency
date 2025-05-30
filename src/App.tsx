import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { CaseStudies } from './components/sections/CaseStudies';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Contact } from './components/sections/Contact';
import { FloatingCTA } from './components/ui/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <WhyChooseUs />
        <Contact />
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default App;