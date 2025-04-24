// AccurateLogo.tsx
import { webname } from '@/contants';
import React from 'react';

interface AccurateLogoProps {
  className?: string;
  darkMode?: boolean;
  yearText?: string;
  isScrolled: boolean;
}

const AccurateLogo: React.FC<AccurateLogoProps> = ({ 
  className = '', 
  darkMode = false,
  yearText,
  isScrolled
}) => {
  const textColor = darkMode ? 'text-white' : 'text-gray-600';
  const primaryText = (webname.split(' ')[0]).toUpperCase();
  const secondaryText = (webname.split(' ')[1] || 'EVENTS').toUpperCase()
  
  
  
  const renderSpacedText = (text: string) => {
    return text.split('').map((letter, index) => (
      <span key={index} className="inline-block px-1">{letter}</span>
    ));
  };
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
     
      <div className="w-full h-px bg-gray-400"></div>
      
      <div className="flex flex-col items-center relative py-2">
       
        <div className="flex flex-row items-center justify-center space-x-6 w-full">
          <div className="tracking-widest text-xs sm:text-sm md:text-base lg:text-lg font-light ${textColor}">
            {renderSpacedText(primaryText)}
          </div>
          <div className="tracking-widest text-xs sm:text-sm md:text-base lg:text-lg font-light ${textColor}">
            {renderSpacedText(secondaryText)}
          </div>
        </div>
        
        
      { yearText && <div className={`text-xs sm:text-sm tracking-wide absolute px-2  ${isScrolled ? 'bg-white ' : ' bg-white '} -bottom-[50%]  -translate-y-[50%] ${textColor}`}>{yearText}</div>}
      </div>
      
      
      <div className="w-full h-px bg-gray-400"></div>
    </div>
  );
};

export default AccurateLogo;