import React, { useEffect, useRef } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ReasonCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  delay: number;
  isVisible: boolean;
}

export const ReasonCard: React.FC<ReasonCardProps> = ({
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
      className="bg-gray-800 bg-opacity-50 rounded-lg p-6 text-center opacity-0"
    >
      <div className="bg-blue-600 bg-opacity-20 rounded-full p-3 inline-flex mb-4 text-blue-400">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};