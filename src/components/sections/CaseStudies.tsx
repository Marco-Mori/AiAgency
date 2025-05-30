import React, { useRef } from 'react';
import { CaseStudyCard } from '../ui/CaseStudyCard';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const caseStudies = [
    {
      title: 'Automazione Processi ETL',
      description: 'Miglioramento del processo di reporting con automazioni ETL e riduzione dei tempi di analisi del 50%.',
      company: 'Azienda Manifatturiera',
      result: 'Riduzione del 50% dei tempi di analisi',
      imageSrc: 'https://images.pexels.com/photos/6801636/pexels-photo-6801636.jpeg?auto=compress&cs=tinysrgb&w=600',
      delay: 0,
    },
    {
      title: 'Gestione Automatica Email',
      description: 'Sviluppo di agenti AI personalizzati per la gestione automatica delle email, risparmiando 20 ore al mese.',
      company: 'Studio Professionale',
      result: 'Risparmio di 20 ore/mese',
      imageSrc: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=600',
      delay: 200,
    },
    {
      title: 'Integrazione Sistemi Legacy',
      description: 'Integrazione di sistemi legacy con piattaforme cloud, migliorando la collaborazione aziendale e abbattendo i costi operativi.',
      company: 'Azienda Commerciale',
      result: 'Riduzione costi operativi del 35%',
      imageSrc: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600',
      delay: 400,
    },
  ];

  return (
    <section 
      id="case-studies" 
      ref={sectionRef}
      className={`py-20 bg-black transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Casi Studio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Scopri come abbiamo aiutato le PMI a migliorare la loro efficienza operativa
            attraverso soluzioni personalizzate di Business Intelligence e Intelligenza Artificiale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              title={caseStudy.title}
              description={caseStudy.description}
              company={caseStudy.company}
              result={caseStudy.result}
              imageSrc={caseStudy.imageSrc}
              delay={caseStudy.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};