import React, { useEffect, useRef } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  delay: number;
  isVisible: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  delay,
  isVisible,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element && isVisible) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    }
  }, [isVisible, delay]);

  return (
    <div 
      ref={elementRef}
      className="bg-gray-800 rounded-lg p-8 shadow-lg opacity-0 h-full flex flex-col"
    >
      <div className="bg-blue-600 rounded-lg p-3 inline-flex mb-6 text-white">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 flex-grow">{description}</p>
      <a 
        href="#contact" 
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-6 text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors"
      >
        Richiedi informazioni
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};