import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      {isOpen && (
        <div className="bg-gray-900 rounded-lg shadow-lg p-4 mb-4 w-64 animate-fade-in">
          <p className="text-white text-sm mb-4">
            Hai domande sui nostri servizi? Siamo qui per aiutarti.
          </p>
          <button
            onClick={scrollToContact}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            Contattaci ora
          </button>
        </div>
      )}
      
      <button
        onClick={handleClick}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-colors ${
          isOpen ? 'bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'
        }`}
        aria-label={isOpen ? 'Chiudi' : 'Contattaci'}
      >
        {isOpen ? (
          <X className="text-white\" size={20} />
        ) : (
          <MessageSquare className="text-white" size={20} />
        )}
      </button>
    </div>
  );
};