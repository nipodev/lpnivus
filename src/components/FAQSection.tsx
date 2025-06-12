
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'O que faz a NivusPay ter a maior conversão do mercado?',
      answer: 'A NivusPay se destaca com uma plataforma intuitiva e fácil de usar, que proporciona uma navegação simplificada para seus clientes e uma experiência de pagamento ágil e eficiente. Além disso, nossas taxas competitivas ajudam a maximizar seus lucros, impulsionando ainda mais suas conversões.'
    },
    {
      question: 'Quais tipos de transações a NivusPay suporta?',
      answer: 'A NivusPay oferece suporte para transações via Pix e cartão de crédito (EM BREVE), garantindo agilidade e total transparência em todos os processos de pagamento.'
    },
    {
      question: 'Existe faturamento mínimo para fazer parte da NivusPay?',
      answer: 'Não exigimos um faturamento mínimo para que você comece a usar a NivusPay. Nossa plataforma está disponível para empresas de todos os tamanhos, desde pequenos empreendedores até grandes negócios.'
    },
    {
      question: 'Quais são as taxas para pagamentos via cartão e Pix?',
      answer: 'As taxas variam conforme o perfil e faturamento mensal da sua operação. Entre em contato com um de nossos gerentes, para uma análise personalizada e para obter as melhores condições para o seu negócio.'
    },
    {
      question: 'Quais tipos de operações podem ser processadas no gateway da NivusPay?',
      answer: 'Nossa plataforma é flexível e pode processar qualquer tipo de operação, seja para a venda de produtos físicos, digitais ou serviços, oferecendo uma solução completa para o seu negócio.'
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-12 h-12 text-nivus-primary" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Dúvidas <span className="gradient-text">Frequentes</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Encontre respostas para as principais dúvidas sobre o NivusPay
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 tilt-card animate-on-scroll">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="faq-item rounded-xl border-white/10 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group faq-trigger">
                    <div className="flex items-center gap-4 text-white group-hover:text-nivus-primary transition-colors">
                      <div className="faq-number-circle">
                        {index + 1}
                      </div>
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 faq-content">
                    <div className="ml-12 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto tilt-card">
            <h3 className="text-2xl font-bold text-white mb-4">
              Fatura mais de R$ 10.000 por mês?
            </h3>
            <p className="text-gray-300 mb-6">
              Receba sua proposta personalizada em até 1 hora.
            </p>
            <a 
              href="https://wa.me/message/MV4T52BUGJTQI1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nivus-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-block"
            >
              RECEBER MINHA PROPOSTA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
