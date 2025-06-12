
import React from 'react';

interface AwardSlideProps {
  type: string;
  value: string;
  imageUrl: string;
  color: string;
  description: string;
  index: number;
}

const AwardSlide = ({ type, value, imageUrl, color, description, index }: AwardSlideProps) => {
  return (
    <div 
      className="glass-effect rounded-lg p-2 sm:p-3 md:p-4 lg:p-6 transition-all duration-500 cursor-pointer h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] flex flex-col"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 12px 24px rgba(17, 128, 208, 0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 flex flex-col justify-center flex-1">
        <div className="flex-1 flex items-center justify-center min-h-0 p-1 sm:p-2">
          <img 
            src={imageUrl} 
            alt={type}
            className="w-full h-full object-contain max-w-[200px] max-h-[200px] sm:max-w-[240px] sm:max-h-[240px] md:max-w-[280px] md:max-h-[280px] lg:max-w-[350px] lg:max-h-[350px] xl:max-w-[400px] xl:max-h-[400px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className={`h-full bg-gradient-to-r ${color} rounded-full animate-pulse`}></div>
        </div>

        <div className="space-y-1 sm:space-y-2 pb-1 sm:pb-2">
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
            {type}
          </div>
          
          <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-semibold">
            Faturamento: {value}
          </div>
          
          <div className="text-xs sm:text-sm text-gray-400">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardSlide;
