
import React from 'react';

interface AwardCardProps {
  type: string;
  value: string;
  imageUrl: string;
  color: string;
  description: string;
  index: number;
}

const AwardCard = ({ type, value, imageUrl, color, description, index }: AwardCardProps) => {
  return (
    <div 
      className="glass-effect rounded-lg p-2 sm:p-3 transition-all duration-500 hover:-translate-y-1 cursor-pointer aspect-square flex flex-col"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 20px rgba(17, 128, 208, 0.3)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="text-center space-y-1 sm:space-y-2 flex flex-col justify-center flex-1">
        <div className="flex-1 flex items-center justify-center min-h-0">
          <img 
            src={imageUrl} 
            alt={type}
            className="w-full h-full object-contain max-w-[100px] max-h-[100px] sm:max-w-[120px] sm:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
          />
        </div>

        <div className="w-full h-0.5 bg-gray-700 rounded-full overflow-hidden">
          <div className={`h-full bg-gradient-to-r ${color} rounded-full animate-pulse`}></div>
        </div>

        <div className="text-xs sm:text-sm text-white font-semibold">
          {type}
        </div>
        
        <div className="text-xs text-gray-300">
          {value}
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
