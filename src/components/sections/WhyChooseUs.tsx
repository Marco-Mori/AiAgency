import React, { useRef } from 'react';
import { Clock, Shield, LineChart, Users } from 'lucide-react';
import { ReasonCard } from '../ui/ReasonCard';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const reasons = [
    {
      title: 'Esperienza Decennale',
      description: 'Oltre 10 anni di esperienza nella gestione dei dati e nell\'implementazione di soluzioni di Business Intelligence.',
      icon: Clock,
      delay: 0,
    },
    {
      title: 'Soluzioni Personalizzate',
      description: 'Ogni azienda è unica. Creiamo soluzioni su misura che rispondono esattamente alle tue esigenze specifiche.',
      icon: Shield,
      delay: 200,
    },
    {
      title: 'Risultati Misurabili',
      description: 'Forniamo KPI chiari e strumenti di monitoraggio per valutare l\'impatto delle nostre soluzioni sul tuo business.',
      icon: LineChart,
      delay: 400,
    },
    {
      title: 'Partner Affidabile',
      description: 'Non siamo solo fornitori, ma partner che ti accompagnano nel percorso di crescita digitale della tua azienda.',
      icon: Users,
      delay: 600,
    },
  ];

  return (
    <section 
      id="why-choose-us" 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-b from-gray-900 to-black transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Perché Sceglierci</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Con Black AI Agency non sei solo un cliente: sei un partner. Crediamo nell'ascolto, 
            nella competenza e nella trasparenza. Conosciamo le sfide delle PMI e lavoriamo per 
            semplificare i processi complessi, trasformandoli in automazioni intelligenti che 
            fanno crescere il tuo business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
              Icon={reason.icon}
              delay={reason.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};