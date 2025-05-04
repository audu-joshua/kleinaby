import { useState } from "react";
import { Link } from "react-router-dom";

const WhoWeServe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/w1.png",
      title: "Residential Customers",
      description: "We provide best water quality across Nigeria, delivering pure hydration directly to your doorstep."
    },
    {
      image: "/w2.png",
      title: "Commercial Businesses",
      description: "We provide best water quality across Nigeria, supporting businesses with reliable water solutions."
    },
    {
      image: "/w3.png",
      title: "Hospitality Industry",
      description: "We provide best water quality across Nigeria, ensuring premium water service for hotels and restaurants."
    }
  ];
  
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
        
        {/* Mobile view - Card style with image first */}
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
        
        {/* Desktop view - All three cards visible with equal brightness */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8 mb-10">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 transform"
              >
                <div className="relative h-48 w-full">
                  <img 
                    src={slide.image} 
                    alt="Water bottle" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{slide.title}</h3>
                  <p className="text-[#797979]">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Place Order Now button beneath the cards */}
          <div className="flex justify-center mt-8">
            <Link to="/order"
              className="px-8 py-3 rounded-full bg-[#101828] text-white font-medium transition-colors hover:bg-[#1d2939]"
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