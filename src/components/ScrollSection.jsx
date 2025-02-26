import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const ScrollSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } 
  }, [isInView, controls]);

  const sectionVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        delay: delay,
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

ScrollSection.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number
};

ScrollSection.defaultProps = {
  delay: 0
};

export default ScrollSection;