import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const ScrollSection = ({ children, delay = 0, threshold = 0.3 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } 
  }, [isInView, controls]);

  const sectionVariants = {
    hidden: { 
      y: 100,  // Increased vertical translation for more noticeable effect 
      opacity: 0,
      scale: 0.95  // Optional: add slight scale for more dynamic animation
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,   // Slightly reduced damping for more bounce
        stiffness: 100, // Adjusted stiffness for smoother animation
        delay: delay,
        duration: 0.5  // Slightly longer duration
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
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
  threshold: PropTypes.number
};

ScrollSection.defaultProps = {
  delay: 0,
  threshold: 0.3
};

export default ScrollSection;