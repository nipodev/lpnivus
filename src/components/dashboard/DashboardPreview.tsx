
import React from 'react';

const DashboardPreview = () => {
  return (
    <div className="animate-on-scroll">
      <div className="relative">
        {/* Dashboard Image */}
        <div className="glass-effect rounded-2xl p-4 tilt-card">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <img 
              src="https://i.imgur.com/DAzVnxZ.png"
              alt="Dashboard NivusPay - Versão Desktop"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Mobile Version */}
          <div className="md:hidden">
            <img 
              src="https://i.imgur.com/7LxOGRN.png"
              alt="Dashboard NivusPay - Versão Mobile"
              className="w-full h-auto rounded-lg mx-auto max-w-sm"
            />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-nivus-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default DashboardPreview;
