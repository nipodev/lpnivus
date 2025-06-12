
import React from 'react';

const DashboardFeatures = () => {
  const features = [
    'Dashboard em tempo real',
    'Relatórios detalhados',
    'Análise de conversão',
    'Gestão de transações',
    'Histórico completo',
    'Controle financeiro'
  ];

  return (
    <div className="animate-on-scroll">
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Controle total do seu <span className="gradient-text">negócio</span>
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Nossa dashboard oferece todos os dados que você precisa para tomar decisões estratégicas e maximizar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-3 glass-effect rounded-lg tilt-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-2 h-2 bg-nivus-primary rounded-full"></div>
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardFeatures;
