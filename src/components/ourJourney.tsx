import { useState, useEffect } from 'react';

export default function OurJourney() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set a small delay for a better entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="bg-[#211F54] w-full px-4 py-16 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto md:flex md:flex-row-reverse md:items-center md:gap-12">
        {/* Image Section - Right on desktop, Top on mobile */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          {/* Mobile Image */}
          <div 
            className={`block md:hidden transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <img
              src="/journeyMobile.webp"
              alt="KlienAby Journey Mobile"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          
          {/* Desktop Image */}
          <div 
            className={`hidden md:block transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 translate-x-6'
            }`}
          >
            <img
              src="/JourneyDesktop.webp"
              alt="KlienAby Journey Desktop"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
        
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-snug text-white transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Our Journey Started with a Simple Vision
          </h2>
          
          <p 
            className={`text-base sm:text-lg text-white opacity-90 leading-relaxed transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-6'
            }`}
          >
            KlienAby was founded with one clear mission — to provide clean, safe, and refreshing bottled water to every home,
            business, and community in Nigeria. Operating out of Lagos, Nigeria's commercial heartbeat, we've grown from a
            local supplier into a trusted name in water production and distribution.
          </p>
          
          <p 
            className={`mt-4 text-base sm:text-lg text-white opacity-90 leading-relaxed transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'
            }`}
          >
            Our belief is simple: everyone deserves access to high-quality water, and businesses deserve a partner that
            delivers on its promises.
          </p>
          
          <div 
            className={`mt-8 transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-6'
            }`}
          >
           
          </div>
        </div>
      </div>
    </section>
  );
}