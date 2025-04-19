
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";

const ProductsSection = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const products = [
    {
      title: "Bottle Table Water",
      description: "Pure and refreshing bottled water designed for your convenience",
      features: [
        {
          title: "Premium quality water from selected sources",
          subtitle: "Rigorously tested for purity and quality assurance"
        },
        {
          title: "Convenient single-serve bottles",
          subtitle: "Perfect for on-the-go consumption and events"
        },
        {
          title: "Perfect for retail and events",
          subtitle: "Bulk packaging available for wholesale distribution"
        }
      ],
      image: "/b1.png"
    },
    {
      title: "Sachet Water",
      description: "Affordable and accessible pure drinking water",
      features: [
        {
          title: "Economically packaged pure water",
          subtitle: "Cost-effective solution for mass consumption"
        },
        {
          title: "Ideal for mass distribution",
          subtitle: "Perfect for events, gatherings, and retail"
        },
        {
          title: "Sealed for guaranteed freshness",
          subtitle: "Hygienic packaging ensures water safety"
        }
      ],
      image: "/placeholder.svg"
    }
  ];

  const handleSlideChange = (index) => {
    setCurrentProduct(index);
  };

  return (
    <section className="py-16 bg-gradient-to-b bg-sky-50 md:px-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 tracking-tight">Our Products</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            We specialize in the production and bulk supply of sachet water and bottled table water, 
            ensuring unbeatable purity and value for shopping malls, supermarkets, event planners, 
            wholesalers, and more
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                 rounded-2xl shadow-lg overflow-hidden transition-all duration-500
                ${hoveredCard === index ? 'shadow-2xl scale-[1.02]' : 'shadow-lg scale-100'}
              `}
            >
              <div className="p-6 flex flex-row-reverse gap-4">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className={`
                      w-full h-56 object-contain transition-transform duration-700
                      ${hoveredCard === index ? 'scale-105' : 'scale-100'}
                    `}
                  />
                </div>
                
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm w-fit">{product.description}</p>
                  </div>
                  
                  <ul className="space-y-4 w-fit">
                    {product.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className={`
                          flex items-start gap-3 transition-all duration-300 delay-${idx * 100}
                          ${hoveredCard === index ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-90'}
                        `}
                      >
                        <div className={`
                          w-5 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0
                          transition-all duration-300 hover:scale-110 hover:bg-green-600
                          ${hoveredCard === index ? 'rotate-0' : '-rotate-12'}
                        `}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="text-gray-900 font-semibold block text-sm">{feature.title}</span>
                          <span className="text-gray-500 text-xs">{feature.subtitle}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View with Carousel */}
        <div className="md:hidden overflow-hidden">
          <Carousel
            opts={{
              align: "center",
              containScroll: "trimSnaps"
            }}
            className="w-full"
            setApi={(api) => {
              api.on('select', () => {
                setCurrentProduct(api.selectedScrollSnap());
              });
            }}
            selectedIndex={currentProduct}
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="p-4">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="p-5">
                        <div className="relative mb-5 overflow-hidden rounded-xl">
                          <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-48 object-contain bg-gray-50"
                          />
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                        <p className="text-gray-600 text-sm mb-5">{product.description}</p>
                        
                        <ul className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3.5 h-3.5 text-white" />
                              </div>
                              <div>
                                <span className="text-gray-900 font-semibold block text-sm">{feature.title}</span>
                                <span className="text-gray-500 text-xs">{feature.subtitle}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProduct(index)}
                className={`
                  relative transition-all duration-500 ease-out
                  ${index === currentProduct
                    ? 'w-10 h-2.5 bg-sky-600 rounded-full hover:bg-sky-700'
                    : 'w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400'
                  }
                `}
                aria-label={`Go to product ${index + 1}`}
              >
                {index === currentProduct && (
                  <span 
                    className="absolute inset-0 rounded-full bg-sky-400 animate-pulse" 
                    style={{ opacity: 0.3 }} 
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
