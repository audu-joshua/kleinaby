'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PartnerWithUs = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <section className="py-2 md:py-4 bg-gray-50 md:px-12">
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
              onClick={navigateToContact}
              className="bg-[#101828] w-full md:w-fit text-white px-6 py-3 rounded-full hover:bg-[#101828]/90 transition-colors"
            >
              Apply to Distribute
            </motion.button>
          </motion.div>

          {/* Single image */}
          <motion.div
            variants={imageVariants}
            className="lg:w-1/2"
          >
            <img
              src="/partner.png"
              alt="Partner with us"
              className="w-full h-80 object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerWithUs;