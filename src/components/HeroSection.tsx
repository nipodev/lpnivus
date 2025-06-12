import { ArrowRight, CreditCard, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nivus-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-on-scroll">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Pagamentos</span>
                <br />
                <span className="gradient-text">Simplificados</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Alta conversão, recuperação de vendas e segurança antifraude com nossa plataforma. Sem bloqueios, aprovação automática, saque rápido e as taxas mais baixas do mercado.
              </p>
            </div>

            {/* Features pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-nivus-primary" />
                <span className="text-sm text-white">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-nivus-primary" />
                <span className="text-sm text-white">Integração Rápida</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-nivus-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group btn-animate"
              >
                Comece Agora
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 btn-animate"
              >
                Ver Benefícios
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:block animate-on-scroll">
            <div className="relative">
              {/* Main card */}
              <div className="glass-effect rounded-2xl p-8 tilt-card">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-nivus-primary rounded-full flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Pagamento Processado</h3>
                      <p className="text-gray-400 text-sm">Transação aprovada em 2.3s</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Valor</span>
                      <span className="text-white font-semibold">R$ 1.299,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Taxa</span>
                      <span className="text-green-400 font-semibold">5,99% + R$ 2,35</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Líquido</span>
                      <span className="text-white font-bold text-lg">R$ 1.219,30</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-nivus-primary h-2 rounded-full w-full animate-pulse-slow"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-nivus-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
