import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Apply glassmorphism if scrolled on desktop OR always on mobile
  const shouldApplyGlass = isScrolled || isMobile;

  return (
    <header className={`${isScrolled ? 'fixed top-0' : 'absolute top-12'} left-0 right-0 z-50 transition-all duration-300 ${
      shouldApplyGlass ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/img/77292a1d-072b-4017-9198-780c616bc534.png" 
              alt="NivusPay Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold">
              <span className="text-white">Nivus</span>
              <span className="gradient-text">Pay</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-nivus-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-white hover:text-nivus-primary transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('dashboard')}
              className="text-white hover:text-nivus-primary transition-colors"
            >
              Dashboard
            </button>
            <button 
              onClick={() => scrollToSection('plans')}
              className="text-white hover:text-nivus-primary transition-colors"
            >
              Download
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-nivus-primary transition-colors"
            >
              FAQ
            </button>
            <div className="flex items-center space-x-3">
              <a 
                href="https://dash.nivuspay.com/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-nivus-primary text-nivus-primary px-6 py-2 rounded-lg hover:bg-nivus-primary hover:text-white transition-colors"
              >
                Entrar
              </a>
              <a 
                href="https://dash.nivuspay.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nivus-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Cadastrar
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-nivus-primary transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-white hover:text-nivus-primary transition-colors text-left"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('dashboard')}
                className="text-white hover:text-nivus-primary transition-colors text-left"
              >
                Dashboard
              </button>
              <button 
                onClick={() => scrollToSection('plans')}
                className="text-white hover:text-nivus-primary transition-colors text-left"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white hover:text-nivus-primary transition-colors text-left"
              >
                FAQ
              </button>
              <div className="flex flex-col space-y-3 pt-2">
                <a 
                  href="https://dash.nivuspay.com/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-nivus-primary text-nivus-primary px-6 py-2 rounded-lg hover:bg-nivus-primary hover:text-white transition-colors text-center"
                >
                  Entrar
                </a>
                <a 
                  href="https://dash.nivuspay.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-nivus-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center"
                >
                  Cadastrar
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
