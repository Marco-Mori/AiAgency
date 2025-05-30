import React from 'react';
import { Logo } from '../ui/Logo';
import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              Da oltre dieci anni trasformiamo i dati in valore per le piccole e medie imprese attraverso soluzioni di Business Intelligence, ETL e automazioni AI personalizzate.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:info@blackaiagency.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Chi Siamo</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Servizi</a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Casi Studio</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Perché Sceglierci</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contatti</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contattaci</h3>
            <p className="text-gray-400 text-sm mb-2">
              Siamo sempre disponibili per discutere le tue esigenze e trovare la soluzione più adatta al tuo business.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium mt-2"
            >
              Contattaci ora
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Black AI Agency. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};