import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const ScrollSection = ({ 
  children, 
  delay = 0, 
  threshold = 0.1,  // Reduced threshold to trigger earlier
  immediate = false, // New prop to allow immediate animation
  animationDistance = 30, // Reduced distance for subtler animation
  once = true  // Default to true to prevent re-animations
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: once,
    amount: threshold
  });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView || immediate) {
      controls.start('visible');
    }
  }, [isInView, immediate, controls]);
  
  const sectionVariants = {
    hidden: {
      y: animationDistance,  // Reduced vertical distance
      opacity: 0,
      scale: 0.99  // More subtle scale effect
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,   // Higher damping for less bounce
        stiffness: 120, // Higher stiffness for faster animation
        delay: immediate ? 0 : delay,
        duration: 0.4  // Slightly shorter duration
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial={immediate ? "visible" : "hidden"}
      animate={controls}
      variants={sectionVariants}
      style={{
        willChange: 'transform, opacity',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  );
};

ScrollSection.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  threshold: PropTypes.number,
  immediate: PropTypes.bool,
  animationDistance: PropTypes.number,
  once: PropTypes.bool
};

ScrollSection.defaultProps = {
  delay: 0,
  threshold: 0.1,
  immediate: false,
  animationDistance: 30,
  once: true
};

export default ScrollSection;