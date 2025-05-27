import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ProductsSection = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const carouselRef = useRef(null);
  
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
      image: "/bottleWater.webp",
      gradient: "from-blue-500 to-cyan-500"
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
      image: "/satchetWater.webp",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Bottled Refillable Water",
      description: "Sustainable water solution with premium reusable containers",
      features: [
        {
          title: "Eco-friendly refillable containers",
          subtitle: "Durable glass jars designed for multiple uses"
        },
        {
          title: "Cost-effective long-term solution",
          subtitle: "Reduce waste while maintaining water quality"
        },
        {
          title: "Perfect for offices and homes",
          subtitle: "Ideal for regular water supply subscriptions"
        }
      ],
      image: "/RefillJars.webp",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const nextSlide = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentProduct(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-black "
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our Premium Products
          </motion.h2>
          <motion.p 
            className="text-[#101828] max-w-4xl mx-auto text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We specialize in the production and bulk supply of premium water solutions, 
            ensuring unbeatable purity and value for shopping malls, supermarkets, event planners, 
            wholesalers, and sustainable businesses.
          </motion.p>
        </motion.div>

        {/* Modern Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm shadow-2xl border border-white/20">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentProduct * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                      {/* Product Image */}
                      <motion.div 
                        className={`relative order-2 md:order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-2xl opacity-20 scale-110`}></div>
                        <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-white/30">
                          <motion.img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-64 md:h-80 object-contain"
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      </motion.div>
                      
                      {/* Product Content */}
                      <motion.div 
                        className={`space-y-6 order-1 md:order-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div className="space-y-4">
                          <motion.div 
                            className={`inline-block px-4 py-2 bg-gradient-to-r ${product.gradient} text-white rounded-full text-sm font-semibold shadow-lg`}
                            whileHover={{ scale: 1.05 }}
                          >
                            Premium Quality
                          </motion.div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{product.title}</h3>
                          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{product.description}</p>
                        </div>
                        
                        <ul className="space-y-4">
                          {product.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              className="flex items-start gap-4"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                              whileHover={{ x: 8 }}
                            >
                              <motion.div 
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Check className="w-4 h-4 text-white" />
                              </motion.div>
                              <div>
                                <span className="text-gray-900 font-semibold block text-sm md:text-base">{feature.title}</span>
                                <span className="text-gray-500 text-xs md:text-sm">{feature.subtitle}</span>
                              </div>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-white/30 flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-white/30 flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Modern Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {products.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                relative transition-all duration-500 ease-out cursor-pointer
                ${index === currentProduct
                  ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg'
                  : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }
              `}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to product ${index + 1}`}
            >
              {index === currentProduct && (
                <motion.span 
                  className="absolute inset-0 rounded-full bg-white/30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>

        
      </div>
    </motion.section>
  );
};

export default ProductsSection;