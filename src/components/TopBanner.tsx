import React, { useState } from 'react';
import { X } from 'lucide-react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative top-0 left-0 right-0 z-[60] bg-[#38ACFF] text-black py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="text-sm md:text-base font-medium">
            Fatura mais de 10k por mês? Receba sua proposta personalizada em até 1 hora!
          </span>
          <a 
            href="https://wa.me/message/MV4T52BUGJTQI1"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            Quero minha proposta
          </a>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-black hover:bg-opacity-10 rounded transition-colors"
          aria-label="Fechar banner"
        >
          <X size={20} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
