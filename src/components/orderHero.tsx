import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import


export function PlaceOrderHero() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const scrollToForm = () => {
    const formElement = document.getElementById('order-form'); // Replace 'contact-form' with your actual form component ID
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // You can also use 'center' or 'end'
      });
    }
  };

  // Function to navigate to order page
  const navigateToProducts = () => {
    navigate('/products');
  };

  return (
    <div className="w-full h-screen flex items-center md:justify-end justify-center overflow-hidden relative">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Desktop Background Image - Hidden on mobile */}
        <div className="hidden md:block absolute inset-0">
          <img 
            src="D4.png" 
            alt="Water Bottles Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Mobile Background Image - Hidden on desktop */}
        <div className="md:hidden absolute inset-0">
          <img 
            src="D4.png" 
            alt="Water Bottles Mobile Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark Overlay - Set to higher opacity to make it more visible */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-4xl mx-auto">
        {/* Main Text with fade-in animation */}
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quick & Easy Ordering <br className="hidden md:block" />
            <span className="text-blue-300">— Just a Few Clicks Away!</span>
          </h1>
          
          {/* Smaller text beneath */}
          <p className="text-lg md:text-xl mb-8">
            Fill out our simple order form below and get premium water delivered right to your doorstep. 
            KlienAby guarantees fast delivery and exceptional quality for all your hydration needs.
          </p>
        </div>
        
        {/* Buttons with standard positioning */}
        <div className="w-full mt-8 sm:mt-12 flex justify-center items-stretch sm:items-center gap-6 sm:gap-6">
          <button onClick={scrollToForm}
            className={`px-6 w-[40%] text-sm md:w-[25%] py-4 sm:py-3 rounded-lg bg-gray-900 text-white md:text-lg sm:text-base font-medium transition-all duration-300 hover:scale-105 sm:w-auto ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Order Now
          </button>
          
          <button onClick={navigateToProducts}
            className={`px-6 text-sm w-[60%] md:w-[25%] py-4 sm:py-3 rounded-lg bg-white text-gray-900 md:text-lg sm:text-base font-medium transition-all duration-300 hover:scale-105 sm:w-auto ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            View Products
          </button>
        </div>
      </div>
    </div>
  );
}