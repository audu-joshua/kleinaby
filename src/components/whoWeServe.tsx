import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WhoWeServe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const slides = [
    {
            image: "/wh1.png",
      title: "Supermarkets",
      description: "Stock your shelves with our premium bottled water in a variety of sizes."
    },
    {

            image: "/hospitality.png",
      title: "Hospitals & Healthcare Facilities",
      description: "Ensure hydration for patients and staff with safe, clean, and certified water."
    },
    {
       image: "/hotel.png",
      title: "Hotels, Restaurants & Cafés",
      description: "Premium bottled water for your premium guests — let us brand it for you."
    },
    {

      image: "/wh5.png",
      title: "Corporate Offices & Workspaces",
      description: "Keep your team refreshed and productive with convenient delivery plans."
 
    },
    {
      image: "/retail.png",
      title: "Retail Entrepreneurs & Distributors",
      description: "Start your bottled water business — we’ll supply you with everything you need."
      
    }
  ];

  // Auto-slide for desktop infinite animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsVisible(true);
      }, 300);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Mobile only bottleWater.png banner */}
        <div className="md:hidden mb-8 -mt-20">
          <img 
            src="/bottleWater.png" 
            alt="Bottle Water Banner" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
          <p className="text-[#797979] max-w-2xl mx-auto">
            We provide best water quality across Nigeria
          </p>
        </div>
        
        {/* Mobile view - Card style with image first (unchanged) */}
        <div className="md:hidden">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 transform">
            <div className="relative h-64 w-full">
              <img 
                src={slides[currentSlide].image} 
                alt="Water bottle" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{slides[currentSlide].title}</h3>
              <p className="text-[#797979]">{slides[currentSlide].description}</p>
            </div>
          </div>
          
          {/* Navigation buttons outside the card */}
          <div className="flex justify-between gap-3 mt-6">
            <button 
              onClick={prevSlide}
              className="px-6 py-2 w-full rounded-full bg-[#D1D1D3] text-black font-medium transition-colors"
            >
              Previous
            </button>
            <button 
              onClick={nextSlide}
              className="px-6 py-2 w-full rounded-full bg-[#101828] text-white font-medium transition-colors"
            >
              Next
            </button>
          </div>
        </div>
        
        {/* Desktop view - 5 cards with infinite sliding animation */}
        <div className="hidden md:block overflow-hidden">
          <div 
            className={`grid grid-cols-5 gap-6 mb-10 transition-all duration-700 ease-in-out ${
              isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-70 transform translate-x-2'
            }`}
          >
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-700 transform hover:scale-105 hover:shadow-xl ${
                  index === currentSlide 
                    ? 'ring-2 ring-[#101828] ring-opacity-50 scale-105' 
                    : 'hover:ring-1 hover:ring-gray-300'
                }`}
              >
                <div className="relative h-40 w-full">
                  <img 
                    src={slide.image} 
                    alt="Water bottle" 
                    className="w-full h-full object-cover object-center"
                  />
                  {index === currentSlide && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-[#101828] opacity-10"></div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                    index === currentSlide ? 'text-[#101828]' : 'text-gray-800'
                  }`}>
                    {slide.title}
                  </h3>
                  <p className="text-[#797979] text-sm leading-relaxed">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#101828] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Place Order Now button beneath the cards */}
          <div className="flex justify-center">
            <Link to="/order"
              className="px-8 py-3 rounded-full bg-[#101828] text-white font-medium transition-all duration-300 hover:bg-[#1d2939] hover:scale-105 hover:shadow-lg"
            >
              Place Order Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;