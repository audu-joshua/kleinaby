
'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Add this import


const NationWideDelivery = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const navigate = useNavigate();


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const navigateToOrder = () => {
    navigate('/order');
  };

  return (
    <section className="py-16 bg-[#101828] md:px-12">
      <motion.div 
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
          {/* Text content */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">We Deliver Nationwide</h2>
            <p className="text-gray-300 mb-8">
            From our plant to your doorstep. Fast delivery to major markets, hospitals, hotels, and warehouse districts.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToOrder}
              className="bg-[#F7D128] font-semibold w-full md:w-fit text-black px-6 py-3 rounded-full hover:bg-[#e6c11c] transition-colors"
            >
              Place an Order Now!
            </motion.button>
          </motion.div>
          
          {/* Tilted Image Card */}
          <motion.div 
            variants={imageVariants}
            className="lg:w-1/2"
          >
            <div className="relative h-96 w-full max-w-lg mx-auto">
              {/* Background card with tilt effect */}
              <motion.div 
                className="absolute top-1 left-1 right-1 bottom-1 bg-[#1182E2] rounded-lg transform rotate-2"
                initial={{ scale: 0.9, rotate: 0 }}
                animate={isInView ? { scale: 1, rotate: 2 } : { scale: 0.9, rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              ></motion.div>
              
              {/* Image card */}
              <motion.div 
                className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden transform -rotate-1"
                initial={{ scale: 0.9, rotate: 0 }}
                animate={isInView ? { scale: 1, rotate: -1 } : { scale: 0.9, rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <img 
                  src="/C1.webp" 
                  alt="Water delivery service" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default NationWideDelivery;
