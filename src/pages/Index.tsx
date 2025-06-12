import { useEffect } from 'react';
import TopBanner from '../components/TopBanner';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import DashboardSection from '../components/DashboardSection';
import FeesSection from '../components/FeesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden-up');
        } else {
          // Check if we're scrolling up or down
          const rect = entry.boundingClientRect;
          if (rect.top > window.innerHeight) {
            // Element is below viewport (scrolling up)
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden-up');
          } else {
            // Element is above viewport (scrolling down)
            entry.target.classList.remove('visible');
            entry.target.classList.remove('hidden-up');
          }
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Mouse tilt effect for cards - Only on desktop and improved stability
  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      return; // Don't apply tilt effect on mobile
    }

    let isScrolling = false;
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      isScrolling = true;
      
      // Reset all card transforms immediately when scrolling
      const cards = document.querySelectorAll('.tilt-card');
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      });

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrolling = false;
      }, 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Don't apply tilt effect while scrolling
      if (isScrolling) return;

      const cards = document.querySelectorAll('.tilt-card');
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        
        // Check if card is visible in viewport
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          return;
        }

        // Check if mouse is actually over the card
        const isMouseOverCard = e.clientX >= rect.left && 
                               e.clientX <= rect.right && 
                               e.clientY >= rect.top && 
                               e.clientY <= rect.bottom;

        if (!isMouseOverCard) {
          (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
          return;
        }

        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - cardCenterX;
        const deltaY = e.clientY - cardCenterY;
        
        // Increased tilt intensity for more noticeable effect
        const rotateX = Math.max(-8, Math.min(8, (deltaY / rect.height) * -8));
        const rotateY = Math.max(-8, Math.min(8, (deltaX / rect.width) * 8));
        
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      });
    };

    const handleMouseLeave = () => {
      if (isScrolling) return;
      
      const cards = document.querySelectorAll('.tilt-card');
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    };

    const handleResize = () => {
      // Reset all card transforms when resizing
      const cards = document.querySelectorAll('.tilt-card');
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-nivus-dark overflow-x-hidden">
      <TopBanner />
      <ParticlesBackground />
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <DashboardSection />
        <FeesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
