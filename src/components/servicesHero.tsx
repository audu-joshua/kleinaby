import Order from '@/pages/Order';
import { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom'; // Add this import


export default function ServicesHero() {
      const [isVisible, setIsVisible] = useState(false);
      const navigate = useNavigate();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

   const navigateToForm = () => {
  navigate('/contact#contact-form');
};


   // Function to navigate to order page
  const navigateToOrder = () => {
    navigate('/order');
  };
  
  return (
    <div className="relative w-full h-screen flex items-center md:justify-end justify-center overflow-hidden">
      {/* Background Images with Overlay - Different for Desktop and Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Image - Hidden on mobile */}
        <img
          src="/servicesHero.webp"
          alt="Water Bottling Plant"
          className="hidden md:block w-full h-full object-cover"
        />
        
        {/* Mobile Background Image - Hidden on desktop */}
        <img
          src="/servicesHeroMobile.webp"
          alt="Water Bottling Plant Mobile"
          className="md:hidden w-full h-full object-cover"
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
          Water Solutions for <br className="hidden md:inline" />
          Every Business Need 
          </h1>
          
          {/* Smaller text beneath */}
          <p className="text-white text-xl md:text-xl opacity-90 mt-6 mb-8 text-left md:text-center">
          From bulk delivery and custom branding to retail support and distribution <br className="hidden md:inline" /> partnerships — KlienAby is your all-in-one bottled water supplier in Lagos.
          </p>
        </div>
        
        {/* Buttons with standard positioning */}
        <div className="mt-8 sm:mt-12 flex justify-center items-stretch sm:items-center gap-6 sm:gap-6 w-full sm:w-auto">
          <button onClick={navigateToOrder}
            className={`px-6 w-[40%] text-sm md:w-[25%] py-4 sm:py-3 rounded-lg bg-gray-900 text-white md:text-lg sm:text-base font-medium transition-all duration-300 hover:scale-105 sm:w-auto ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Request an Order
          </button>
          
          <button onClick={navigateToForm}
  className={`px-6 text-sm w-[60%] md:w-[25%] py-4 sm:py-3 rounded-lg bg-white text-gray-900 md:text-lg sm:text-base font-medium transition-all duration-300 hover:scale-105 sm:w-auto ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
  style={{ transitionDelay: '500ms' }}
>
  Become a Partner
</button>

        </div>
      </div>
    </div>
  );
}