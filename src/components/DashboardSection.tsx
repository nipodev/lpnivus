
import React, { useState } from 'react';
import { Trophy, Eye } from 'lucide-react';
import DashboardPreview from './dashboard/DashboardPreview';
import DashboardFeatures from './dashboard/DashboardFeatures';
import AwardsModal from './awards/AwardsModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Dashboard <span className="gradient-text">Inteligente</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Acompanhe suas vendas e performance em tempo real com nossa dashboard completa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <DashboardPreview />
          <DashboardFeatures />
        </div>

        {/* Awards Button - Changed to yellow */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
            <Trophy className="h-12 w-12 text-nivus-primary mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-4">
              Programa de Premiações
            </h4>
            <p className="text-gray-300 mb-6">
              Descubra as recompensas exclusivas que aguardam pelos nossos melhores parceiros.
              Quanto mais você vende, maiores são as premiações!
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 btn-animate">
                  <Eye className="h-5 w-5" />
                  Ver Premiações de Faturamento
                </button>
              </DialogTrigger>
              <DialogContent className="w-[100vw] h-[100vh] max-w-none max-h-none m-0 p-0 sm:w-[98vw] sm:h-[95vh] sm:max-w-none sm:m-auto sm:p-4 bg-nivus-dark border-gray-700 overflow-hidden">
                <DialogHeader className="p-4 sm:p-6">
                  <DialogTitle className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
                    Premiações de <span className="gradient-text">Vendas</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="p-2 sm:p-4 h-full overflow-y-auto">
                  <AwardsModal />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
