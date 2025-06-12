
import React from 'react';
import { Trophy, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AwardsModal from '../components/awards/AwardsModal';
import ParticlesBackground from '../components/ParticlesBackground';

const Awards = () => {
  return (
    <div className="min-h-screen bg-nivus-dark overflow-x-hidden">
      <ParticlesBackground />
      
      {/* Header */}
      <header className="relative z-10 py-6">
        <div className="container mx-auto px-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-nivus-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar ao Início
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Premiações de <span className="gradient-text">Vendas</span>
            </h1>
          </div>
          
          <AwardsModal />
        </div>
      </main>
    </div>
  );
};

export default Awards;
