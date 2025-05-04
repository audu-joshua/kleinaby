
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TestimonialCard from "@/components/TestimonialCard";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import WhoWeServe from "@/components/whoWeServe";
import WhyChooseUs from "@/components/whyChooseUS";
import ProductsSection from "@/components/ourProducts";
import PartnerWithUs from "@/components/distribute";
import NationWideDelivery from "@/components/delivery";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
} from "@/components/ui/carousel";
import { motion, useInView, useAnimation } from "framer-motion";

import ContactForm from "@/components/contactForm";

// Reusable animation component
const AnimatedSection = ({ children, className, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: delay,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const testimonials = [
    {
      text: "The best water delivery service I've ever used. Always on time and their customer service is exceptional.",
      author: "John Smith",
      rating: 5,
      image: "/w1.png"
    },
    {
      text: "Great service and quality water. Highly recommended for both home and office.",
      author: "Sarah Johnson",
      rating: 5,
      image: "/w2.png"
    },
    {
      text: "The water quality is exceptional. We've been using their service for our restaurant for over a year now.",
      author: "Michael Chen",
      rating: 5,
      image: "/w3.png"
    },
    {
      text: "Switched to KlienAby from another provider and couldn't be happier. Their eco-friendly approach is amazing.",
      author: "Emma Davis",
      rating: 5,
      image: "/w1.png"
    }
  ];

  const heroTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + (i * 0.2),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-0">
     {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen pt-24 pb-0 h-screen overflow-visible">
        {/* Background Images with responsive switching */}
        <div 
          className="absolute inset-0 hidden md:block bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/desktopHero.webp')" }}
        />
        <div 
          className="absolute inset-0 block md:hidden bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/mobileHero.webp')" }}
        />
         
        {/* Darker Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
         
        <div className="container mx-auto px-4 md:px-0 h-full flex items-center md:gap-4 md:items-end relative z-10">
          <div className="max-w-2xl pt-16 md:pt-0 pb-8 md:pb-20 md:pl-12 md:w-[60%]">
            <motion.h1 
              custom={0}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={heroTextVariants}
              className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              A Precious<br />
              Commodity<br />
              <span className="text-white">Delivered with care.</span>
            </motion.h1>
            
            <motion.p 
              custom={1}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={heroTextVariants}
              className="text-lg text-white/90 mb-8"
            >
              We source, filter and deliver the clearest, best tasting drinking water to our customers.
            </motion.p>
             
            <div className="space-x-4">
              <motion.div
                custom={0}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={buttonVariants}
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-[#101828] hover:bg-[#1d2939] text-white transition-all duration-300 transform hover:scale-105" 
                  asChild
                >
                  <Link to="/products">Get in Touch</Link>
                </Button>
              </motion.div>
               
              <motion.div
                custom={1}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={buttonVariants}
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white border-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105" 
                  asChild
                >
                  <Link to="/contact">Become a Distributor</Link>
                </Button>
              </motion.div>
            </div>
          </div>
           
          {/* Water Bottle Image (Hidden on mobile, positioned to overflow at bottom on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="hidden md:block md:flex-1 md:absolute md:right-12 md:bottom-[-80px] z-20 md:w-[40%]"
          >
            <img src="/bottleWater.png" alt="Premium Water Bottle" className="w-96 lg:w-[450px] h-auto ml-auto transition-all duration-500 hover:translate-y-2" />
          </motion.div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <AnimatedSection className="py-16">
        <WhoWeServe/>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-16" delay={0.1}>
        <WhyChooseUs/>
      </AnimatedSection>

      {/* Our Products Section */}
      <ProductsSection />

      {/* Partner With Us Section */}
      <AnimatedSection className="py-16" delay={0.1}>
        <PartnerWithUs />
      </AnimatedSection>

      {/* Nationwide Delivery Section */}
      <AnimatedSection className="py-16" delay={0.2}>
        <NationWideDelivery />
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 bg-[#BEEBFF] md:px-12">
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            What Our Customers Are Saying
          </motion.h2>
          
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUpVariants}
                custom={index}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Mobile View with Carousel */}
          <div className="md:hidden relative">
            <Carousel
              opts={{
                align: "center",
                containScroll: "trimSnaps"
              }}
              className="w-full"
              setApi={(api) => {
                api.on('select', () => {
                  setCurrentTestimonial(api.selectedScrollSnap());
                });
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="w-full">
                    <motion.div variants={fadeInUpVariants}>
                      <TestimonialCard {...testimonial} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    document.querySelectorAll('.embla__slide')[index].scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                      inline: 'center'
                    });
                  }}
                  className={`
                    relative transition-all duration-500 ease-out
                    ${index === currentTestimonial
                      ? 'w-10 h-2.5 bg-sky-600 rounded-full hover:bg-sky-700'
                      : 'w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400'
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentTestimonial && (
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
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection className="py-16 bg-gray-50" delay={0.2}>
        <ContactForm/>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection className="py-16" delay={0.3}>
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            variants={fadeInUpVariants} 
            className="text-3xl font-bold mb-4"
          >
            Never miss our updates
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants} 
            className="text-gray-600 mb-8"
          >
            Subscribe to our newsletter for the latest news and offers
          </motion.p>
          <motion.div 
            variants={fadeInUpVariants}
            className="max-w-md mx-auto flex gap-4"
          >
            <Input type="email" placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Index;
