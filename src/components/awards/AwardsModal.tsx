
import React from 'react';
import { Trophy } from 'lucide-react';
import AwardsCarousel from './AwardsCarousel';

const AwardsModal = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center">
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          Reconhecemos e premiamos nossos melhores parceiros com recompensas exclusivas
        </p>
      </div>

      <AwardsCarousel />

      <div className="text-center px-4">
        <div className="glass-effect rounded-xl p-4 sm:p-6 max-w-xl mx-auto">
          <Trophy className="h-8 w-8 sm:h-10 sm:w-10 text-nivus-primary mx-auto mb-3" />
          <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
            Seja reconhecido pelo seu sucesso
          </h4>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            Quanto mais você vende, mais recompensas exclusivas você recebe. 
            Junte-se aos nossos parceiros de elite!
          </p>
          <a 
            href="https://wa.me/message/MV4T52BUGJTQI1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-nivus-primary text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <Trophy className="h-4 w-4" />
            Começar Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default AwardsModal;
