import { useState, useEffect } from 'react';

export default function AboutUsHero() {
  const [isVisible, setIsVisible] = useState(false);

  const ContactButton = () => {
    window.location.href = '/contact';
  };
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center md:justify-end justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/aboutBg.webp" 
          alt="Water Bottling Plant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative grid z-10 pt-16 md:pt-16 max-w-6xl w-full mx-auto px-4 md:px-8">
        {/* Main Text with fade-in animation */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-[42px] sm:text-5xl text-left md:text-center lg:text-6xl font-bold text-white mb-6 leading-tight">
            Proudly Bottled in Lagos. <br className="hidden md:inline" />
            Hydrating Nigeria with <br className="hidden md:inline" /> Excellence.
          </h1>
          
          {/* Smaller text beneath */}
          <p className="text-white text-xl md:text-xl opacity-90 mt-6 mb-8 text-left md:text-center">
            KlienAby is more than just water, it is a movement for quality, <br className="hidden md:inline" /> reliability, and opportunity
          </p>
        </div>
        
        {/* Buttons with standard positioning */}
        <div className="mt-8 sm:mt-12 flex justify-center items-stretch sm:items-center gap-6 sm:gap-6 w-full sm:w-auto">
          <button onClick={ContactButton}
            className={`px-6 w-[40%] text-sm md:w-[25%] py-4 sm:py-3 rounded-lg bg-gray-900 text-white md:text-lg sm:text-base font-medium transition-all duration-300 hover:scale-105 sm:w-auto ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Get in Touch
          </button>
          
          <button onClick={ContactButton}
            className={`px-6 text-sm w-[60%] md:w-[25%] py-4 sm:py-3 rounded-lg bg-white text-gray-900 md:text-lg sm:text-base font-medium transition-all duration-300 hover:scale-105 sm:w-auto ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Become a Distributor
          </button>
        </div>
      </div>
    </div>
  );
}