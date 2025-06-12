
import { DollarSign, Zap, Clock, CreditCard, Smartphone, RefreshCw } from 'lucide-react';

const FeesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Taxas e prazos no <span className="gradient-text">NivusPay</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            O prazo de recebimento padrão de vendas por cartão é de 15 dias. Porém com a análise da sua operação pelo time de compliance, conseguimos antecipar em D+2
          </p>
        </div>

        {/* Main Features Grid - Now with 3 cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* Transaction Fee Card */}
          <div className="glass-effect rounded-2xl p-8 tilt-card animate-on-scroll">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-nivus-primary rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">5,99% + R$ 2,35</h3>
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Taxa por transação</h4>
            <p className="text-gray-300 leading-relaxed">
              As comissões de vendas feitas via PIX ficam disponíveis para saque ainda no mesmo dia da confirmação do pagamento.
            </p>
          </div>

          {/* Instant Withdrawals Card */}
          <div className="glass-effect rounded-2xl p-8 tilt-card animate-on-scroll bg-gradient-to-br from-nivus-primary/20 to-blue-600/20 border-nivus-primary/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-nivus-primary rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Saques Instantâneos</h3>
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Vendeu, sacou</h4>
            <p className="text-gray-300 leading-relaxed">
              Receba suas comissões via PIX instantaneamente, a qualquer hora do dia. Saques disponíveis 24/7, sem espera.
            </p>
          </div>

          {/* Sales Recovery Card */}
          <div className="glass-effect rounded-2xl p-8 tilt-card animate-on-scroll bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-green-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">3,99%</h3>
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Recuperação de vendas</h4>
            <p className="text-gray-300 leading-relaxed">
              Perdeu uma venda? Nós recuperamos! Pague só 3,99% de taxa no sucesso.
            </p>
          </div>
        </div>

        {/* Settlement Times Section */}
        <div className="animate-on-scroll mb-8">
          <h3 className="text-3xl font-bold text-white text-center mb-4">
            Prazo de recebimento das suas <span className="gradient-text">comissões</span>
          </h3>
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12 text-lg">
            No NivusPay, oferecemos as melhores condições para que você receba suas comissões imediatamente, mantendo o fluxo de caixa da sua empresa.
          </p>
        </div>

        {/* Payment Methods Grid - Now with only 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* PIX - D+0 */}
          <div className="glass-effect rounded-2xl p-6 tilt-card animate-on-scroll text-center">
            <div className="w-16 h-16 bg-nivus-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">D+0</h4>
            <h5 className="text-lg font-semibold text-gray-300 mb-3">Para vendas realizadas no PIX</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              As comissões de vendas feitas via <span className="text-nivus-primary font-semibold">PIX</span> ficam disponíveis para saque ainda no mesmo dia da confirmação do pagamento.
            </p>
          </div>

          {/* Credit Card - D+2 */}
          <div className="glass-effect rounded-2xl p-6 tilt-card animate-on-scroll text-center bg-gradient-to-br from-nivus-primary/10 to-blue-600/10 border-nivus-primary/20">
            <div className="absolute top-4 right-4">
              <span className="bg-nivus-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
                (em breve)
              </span>
            </div>
            <div className="w-16 h-16 bg-nivus-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">D+2</h4>
            <h5 className="text-lg font-semibold text-gray-300 mb-3">Para vendas no Cartão de Crédito</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              As comissões de vendas feitas via <span className="text-nivus-primary font-semibold">CARTÃO</span> ficam disponíveis para saque em 2 dias após a confirmação do pagamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesSection;
