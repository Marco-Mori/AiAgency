import React, { useEffect, useRef } from 'react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  company: string;
  result: string;
  imageSrc: string;
  delay: number;
  isVisible: boolean;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  company,
  result,
  imageSrc,
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
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg opacity-0"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-900 text-blue-300 mb-2">
          {company}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-300 font-medium">
            Risultato: <span className="text-blue-400">{result}</span>
          </p>
        </div>
      </div>
    </div>
  );
};