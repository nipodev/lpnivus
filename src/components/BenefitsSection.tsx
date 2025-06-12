
import { Shield, Zap, CreditCard, HeadphonesIcon, Globe, TrendingUp } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Máxima Segurança',
      description: 'Certificação PCI DSS e criptografia de ponta a ponta para proteger todas as transações.',
    },
    {
      icon: Zap,
      title: 'Integração Rápida',
      description: 'APIs RESTful simples e documentação completa. Integre em minutos, não em semanas.',
    },
    {
      icon: CreditCard,
      title: 'Pix',
      description: 'A maior aprovação de do mercado é so na NivusPay, com adquirência sem aviso de golpe.',
    },
    {
      icon: TrendingUp,
      title: 'Taxas Competitivas',
      description: 'As menores taxas do mercado brasileiro com transparência total nos custos.',
    },
    {
      icon: Globe,
      title: 'Checkout Customizável',
      description: 'O checkout com a maior conversão e a carinha do seu produto',
    },
    {
      icon: HeadphonesIcon,
      title: 'Suporte 24/7',
      description: 'Equipe especializada disponível 24 horas por dia, 7 dias por semana para te ajudar.',
    }
  ];

  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Por que escolher o <span className="gradient-text">NivusPay</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos a solução mais completa e confiável para processar pagamentos online no Brasil
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group glass-effect rounded-xl p-8 tilt-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl p-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#0A0A0A' }}>
                  <benefit.icon className="w-8 h-8" style={{ color: '#4598EB' }} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-nivus-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-nivus-primary to-blue-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto tilt-card">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-300 mb-6">
              Junte-se a mais de 1.000 empresas que já confiam no NivusPay
            </p>
            <a 
              href="https://wa.me/message/MV4T52BUGJTQI1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nivus-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-block btn-animate"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
