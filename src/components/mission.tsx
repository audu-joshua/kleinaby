import { useState, useEffect, useRef } from 'react';

export default function MissionVisionValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const cards = [
    {
      id: 1,
      image: '/mission.png',
      title: 'Our Mission',
      description: 'To provide pure, safe, and refreshing water that enhances the quality of life for all Nigerians through innovative solutions and exceptional service.',
      backgroundColor: '#101828',
      textColor: 'text-white'
    },
    {
      id: 2,
      image: '/vison.png',
      title: 'Our Vision',
      description: 'To be the leading water provider in Nigeria, recognized for our commitment to quality, sustainability, and customer satisfaction.',
      backgroundColor: '#F9EA65',
      textColor: 'text-gray-900'
    },
    {
      id: 3,
      image: '/coreValues.png',
      title: 'Core Values',
      description: 'Quality, Integrity, Innovation, Sustainability, and Customer-Centricity form the foundation of everything we do.',
      backgroundColor: '#BEEBFF',
      textColor: 'text-gray-900'
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Mission, Vision & Values
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The guiding principles that drive our commitment to excellence.
          </p>
        </div>
        
        {/* Cards Container */}
        <div className="flex flex-col md:flex-row md:gap-0">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex-1 transform transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } 
              rounded-lg md:rounded-none first:rounded-l-lg last:rounded-r-lg
              shadow-lg md:shadow-none
              mb-6 md:mb-0
              `}
              style={{ 
                backgroundColor: card.backgroundColor,
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
                minHeight: '400px' // Increased height for larger screens
              }}
            >
              <div className="p-8 md:p-12 flex flex-col items-center text-center h-full justify-center">
                {/* Image */}
                <div className="w-24 h-24 mb-8 md:mb-12">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Content */}
                <h3 className={`text-2xl w-full md:text-3xl font-bold text-start mb-6 ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`${card.textColor} opacity-90 text-lg text-start md:text-xl`}>
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