import React, { useEffect, useRef } from 'react';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 100);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 300);
    }

    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';
      setTimeout(() => {
        cta.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
          backgroundSize: '50px 50px' 
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Intelligenza Artificiale
            </span>{" "}
            su Misura per la Tua Azienda
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
          >
            Da oltre dieci anni trasformiamo i dati in valore. Con Black AI Agency, le piccole e medie imprese scoprono l'efficienza dell'AI applicata ai processi aziendali.
          </p>
          
          <div ref={ctaRef}>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-lg font-medium mr-4 mb-4 md:mb-0"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contattaci ora
            </a>
            <a 
              href="#services" 
              className="inline-block px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-black text-white rounded-md transition-colors text-lg font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Scopri i nostri servizi
            </a>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scorri per scoprire</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};