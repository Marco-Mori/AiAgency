import React, { useEffect, useRef } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  delay: number;
  isVisible: boolean;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
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
      <div className="h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-blue-400 mb-4">{role}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};