import { useState, useEffect, useRef } from 'react';

export default function OurFacility() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
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
      className="py-8 md:py-10 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div 
          className={`text-center mb-8 transform transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Facility
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Take a tour of our state-of-the-art water production and bottling facility.
          </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 mx-2 sm:mx-4">
          {/* First Row */}
          <div 
            className={`col-span-1 h-40 sm:h-52 md:h-64 overflow-hidden rounded-lg shadow-sm transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
          >
            <img 
              src="/f1.webp" 
              alt="Our Facility" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div 
            className={`col-span-2 h-40 sm:h-52 md:h-64 overflow-hidden rounded-lg shadow-sm transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <img 
              src="/f2.png" 
              alt="Bottling Plant" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div 
            className={`col-span-1 h-40 sm:h-52 md:h-64 overflow-hidden rounded-lg shadow-sm transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          >
            <img 
              src="/f3.jpg" 
              alt="Processing Area" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Second Row */}
          <div 
            className={`col-span-1 h-40 sm:h-52 md:h-64 overflow-hidden rounded-lg shadow-sm transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            <img 
              src="/f4.webp" 
              alt="Quality Control" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div 
            className={`col-span-1 h-40 sm:h-52 md:h-64 overflow-hidden rounded-lg shadow-sm transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
          >
            <img 
              src="/f5.webp" 
              alt="Storage Area" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div 
            className={`col-span-2 h-40 sm:h-52 md:h-64 overflow-hidden rounded-lg shadow-sm transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
          >
            <img 
              src="/whyChooseUs.webp" 
              alt="Distribution Center" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}