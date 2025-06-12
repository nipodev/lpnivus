
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nivus-gray border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/img/77292a1d-072b-4017-9198-780c616bc534.png" 
                alt="NivusPay Logo" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold">
                <span className="text-white">Nivus</span>
                <span className="text-nivus-primary">Pay</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              O gateway de pagamentos mais seguro e eficiente do Brasil. 
              Transformando a forma como empresas recebem pagamentos online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nivus-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Produto</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Recursos
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Download
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Segurança
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Integrações
              </a>
            </div>
          </div>


          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Suporte</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Central de Ajuda
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contato
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 NivusPay. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
