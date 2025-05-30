import React, { useRef } from 'react';
import { Database, Bot, GitMerge } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const services = [
    {
      title: 'Business Intelligence e ETL',
      description: 'Trasformiamo dati grezzi in informazioni utili per decisioni rapide e strategiche. Costruiamo pipeline ETL robuste, scalabili e personalizzate.',
      icon: Database,
      delay: 0,
    },
    {
      title: 'Agenti AI su Misura',
      description: 'Sviluppiamo agenti AI in grado di automatizzare compiti ripetitivi, rispondere alle esigenze dei clienti e ottimizzare le risorse interne. Lavoriamo fianco a fianco con te per creare soluzioni su misura.',
      icon: Bot,
      delay: 200,
    },
    {
      title: 'Integrazione e Supporto',
      description: 'Non ci fermiamo all\'implementazione: garantiamo un\'integrazione completa con i tuoi sistemi aziendali esistenti e forniamo assistenza continua, per un\'esperienza senza intoppi.',
      icon: GitMerge,
      delay: 400,
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className={`py-20 bg-gray-900 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">I Nostri Servizi</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Offriamo soluzioni complete per trasformare i tuoi dati in valore aziendale,
            dall'analisi strategica all'automazione intelligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              delay={service.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};