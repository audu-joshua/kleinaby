'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PartnerWithUs = () => {
  return (
    <section className="py-16 bg-gray-50 md:px-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
          {/* Text content */}
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0"
            // initial={{ x: -50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.6, ease: 'easeOut' }}
            // viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-[#797979] mb-8">
              Are you a retailer, distributor, or entrepreneur looking to make a difference in the water business? 
              With KlienAby, you get more than a product — you get a partnership built on trust, logistics, and opportunity. 
              Let's grow together.
            </p>
            <button className="bg-[#101828] w-full md:w-fit text-white px-6 py-3 rounded-full hover:bg-[#101828]/90 transition-colors">
              Apply to Distribute
            </button>
          </motion.div>

          {/* Images grid */}
          <motion.div
            className="lg:w-1/2"
            // initial={{ x: 50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.6, ease: 'easeOut' }}
            // viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/D2.png" 
                alt="Partner 1" 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <img 
                src="/D3.png" 
                alt="Partner 2" 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <img 
                src="/D4.png" 
                alt="Partner 3" 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <img 
                src="/D1.png" 
                alt="Partner 4" 
                className="w-full h-48 object-cover rounded-lg" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;