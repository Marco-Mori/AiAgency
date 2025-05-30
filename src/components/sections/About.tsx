import React, { useEffect, useRef } from 'react';
import { TeamMember } from '../ui/TeamMember';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const teamMembers = [

    {
      name: 'Luca Ganugi',
      role: 'Data & Analytics Area Manager',
      description: 'Con oltre 15 anni di esperienza nella gestione di team e progetti complessi. Esperto in soluzioni di Business Intelligence, guida l\'innovazione tecnologica e la trasformazione dei dati in valore strategico per le aziende.',
      imageSrc: '/Immagini/luca_ganugi.jpg',
    },
    {
      name: 'Fabio Cicchetti',
      role: 'Data Architect',
      description: 'Esperto in sicurezza informatica e architetture dati. Progetta soluzioni scalabili e sicure per la gestione e l\'analisi dei dati aziendali.',
      imageSrc: '/Immagini/fabio_cicchetti.jpg',
    },
    {
      name: 'Marco Mori',
      role: 'Data Analyst e Data Engineer',
      description: 'Esperto in Power BI e tecnologie di Business Intelligence. Trasforma dati complessi in insight strategici e supporta le aziende nell’ottimizzare i processi decisionali.',
      imageSrc: '/Immagini/marco_mori.jpg',
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Chi Siamo</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Siamo consulenti con anni di esperienza nel mondo dei dati e dei processi aziendali. 
            La nostra specialità è la Business Intelligence e l'ETL, ma non ci fermiamo qui. 
            Con Black AI Agency portiamo l'Intelligenza Artificiale direttamente nel cuore del tuo business, 
            creando automazioni personalizzate che parlano la lingua delle PMI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              imageSrc={member.imageSrc}
              delay={index * 200}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};