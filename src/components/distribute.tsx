
'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PartnerWithUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

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

  const textVariants = {
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

  const imageGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 md:px-12">
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
            variants={textVariants}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-[#797979] mb-8">
              Are you a retailer, distributor, or entrepreneur looking to make a difference in the water business? 
              With KlienAby, you get more than a product — you get a partnership built on trust, logistics, and opportunity. 
              Let's grow together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#101828] w-full md:w-fit text-white px-6 py-3 rounded-full hover:bg-[#101828]/90 transition-colors"
            >
              Apply to Distribute
            </motion.button>
          </motion.div>

          {/* Images grid */}
          <motion.div
            variants={imageGridVariants}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={imageVariants}>
                <img 
                  src="/D2.png" 
                  alt="Partner 1" 
                  className="w-full h-48 object-cover rounded-lg" 
                />
              </motion.div>
              <motion.div variants={imageVariants}>
                <img 
                  src="/D3.png" 
                  alt="Partner 2" 
                  className="w-full h-48 object-cover rounded-lg" 
                />
              </motion.div>
              <motion.div variants={imageVariants}>
                <img 
                  src="/D4.png" 
                  alt="Partner 3" 
                  className="w-full h-48 object-cover rounded-lg" 
                />
              </motion.div>
              <motion.div variants={imageVariants}>
                <img 
                  src="/D1.png" 
                  alt="Partner 4" 
                  className="w-full h-48 object-cover rounded-lg" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerWithUs;
