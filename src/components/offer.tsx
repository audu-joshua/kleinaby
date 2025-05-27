import { useState, useEffect, useRef } from 'react';

export default function WhatWeOffer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Card data
  const cards = [
    {
      id: 1,
      image: '/bottleWater.webp',
      title: 'Premium Bottled Water Production',
      description: 'Hygienically sourced and purified using advanced filtration technology.'
    },
    {
      id: 2,
      image: '/coreValueFirstImage.webp',
      title: 'Bulk Supply & Distribution',
      description: 'Logistics infrastructure for timely delivery to supermarkets, hospitals, hotels, warehouses, and offices. '
    },
    {
      id: 3,
      image: '/CustomBranding.webp',
      title: 'Custom Branding Services',
      description: 'Personalized bottled water for events, hospitality, an d business branding.'
    },
    {
      id: 4,
      image: '/D2.png',
      title: 'Entrepreneurship Support',
      description: 'Empowering small business owners and resellers with training, resources, and wholesale pricing.'
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div 
          className={`text-center mb-12 transform transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of water solutions designed to meet your hydration needs with quality and convenience.
          </p>
        </div>
        
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card Items */}
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition-all duration-700 ease-out ${
                isVisible 
                  ? `opacity-100 translate-y-0 delay-${index * 100}` 
                  : 'opacity-0 translate-y-12'
              } hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">
                  {card.title}
                </h3>
                <p className="text-[#797979]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}