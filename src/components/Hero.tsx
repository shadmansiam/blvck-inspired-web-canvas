
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-blvck-black">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
          }}
        />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 tracking-tight animate-fade-in">
          MINIMALIST ELEGANCE
        </h1>
        <p className="text-white text-lg md:text-xl opacity-90 max-w-xl mb-10 animate-fade-in">
          Discover our premium collection of minimalist designs for the modern aesthetic.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
          <a 
            href="/shop" 
            className="blvck-button bg-white text-black px-10 py-3 font-medium uppercase tracking-wide"
          >
            Shop Now
          </a>
          <a 
            href="/collections" 
            className="blvck-button text-white border border-white px-10 py-3 font-medium uppercase tracking-wide group"
          >
            View Collections
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <span className="h-12 w-[1px] bg-white animate-pulse"></span>
      </div>
    </div>
  );
};

export default Hero;
