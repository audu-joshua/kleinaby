
import { useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

// Basic fade-in up animation
export const useFadeInUp = (options = { once: true, amount: 0.2 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return {
    ref,
    isInView,
    controls,
    variants: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut"
        }
      }
    }
  };
};

// Animation with staggered children
export const useStaggerAnimation = (options = { once: true, amount: 0.2 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return {
    ref,
    isInView,
    controls,
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          duration: 0.5
        }
      }
    },
    itemVariants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.5, 
          ease: "easeOut" 
        }
      }
    }
  };
};

// Slide in animation from the side
export const useSlideIn = (direction = "left", options = { once: true, amount: 0.2 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  const xValue = direction === "left" ? -50 : 50;
  
  return {
    ref,
    isInView,
    controls,
    variants: {
      hidden: { opacity: 0, x: xValue },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }
  };
};

// Scale animation
export const useScaleAnimation = (options = { once: true, amount: 0.2 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return {
    ref,
    isInView,
    controls,
    variants: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }
  };
};
