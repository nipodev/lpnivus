
import { Check, Star } from 'lucide-react';

const PlansSection = () => {
  const plans = [
    {
      name: 'Standard',
      price: '5,99',
      description: 'Para empresas de todos os tamanhos',
      features: [
        'Transações ilimitadas',
        'APIs completas',
        'Suporte técnico',
        'Dashboard completo',
        'Relatórios detalhados',
        'Webhook personalizados',
        'Antifraude incluído'
      ],
      popular: true,
      buttonText: 'Começar Agora',
      additionalFee: 'R$ 2,35'
    },
    {
      name: 'Customizado',
      price: 'Personalizado',
      description: 'Baseado no seu faturamento',
      features: [
        'Taxa sob medida',
        'Volume personalizado',
        'Integração dedicada',
        'Suporte 24/7',
        'Account Manager',
        'SLA garantido',
        'Customizações avançadas',
        'Onboarding completo'
      ],
      popular: false,
      buttonText: 'Falar com Vendas'
    }
  ];

  return (
    <section id="plans" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Planos que <span className="gradient-text">crescem</span> com você
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Escolha o plano ideal para o seu negócio. Sem taxas de setup, sem compromissos de longo prazo.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative glass-effect rounded-2xl p-8 tilt-card animate-on-scroll ${
                plan.popular ? 'ring-2 ring-nivus-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-nivus-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center">
                  {plan.name === 'Standard' ? (
                    <div>
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-xl text-gray-400">%</span>
                      <p className="text-gray-400 mt-2">
                        + {plan.additionalFee} por transação
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                      <p className="text-gray-400 mt-2">entre em contato</p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-nivus-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a 
                  href="https://wa.me/message/MV4T52BUGJTQI1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 block text-center btn-animate ${
                    plan.popular 
                      ? 'bg-nivus-primary text-white hover:bg-blue-600' 
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-400">
            * Todos os planos incluem integração gratuita e suporte técnico
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
