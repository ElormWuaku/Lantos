import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [textSequence, setTextSequence] = useState(0);
  const containerRef = useRef(null);
  
  // Brand colors based on the logo
  const brandColors = {
    green: "#4CAF50",
    orange: "#FF9800",
    white: "#FFFFFF",
    black: "#212121",
    lightGray: "#F5F5F5"
  };

  // Progress simulation - MODIFIED for faster loading
  useEffect(() => {
    let interval;

    // Start the loading progress with increased increment speed
    interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + (Math.random() * 5); // Increased from 2.5 to 5
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50); // Reduced from 80ms to 50ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Control the animation sequence - MODIFIED text sequence triggers
  useEffect(() => {
    if (loadingProgress >= 15 && textSequence === 0) { // Reduced from 20 to 15
      setTextSequence(1);
    } else if (loadingProgress >= 40 && textSequence === 1) { // Reduced from 50 to 40
      setTextSequence(2);
    }

    if (loadingProgress >= 100 && !isComplete) {
      const timer = setTimeout(() => {
        setIsComplete(true);
        if (onComplete) onComplete();
      }, 500); // Reduced from 1000ms to 500ms
      
      return () => clearTimeout(timer);
    }
  }, [loadingProgress, textSequence, isComplete, onComplete]);

  // Create particles for background animation
  const particleCount = 30;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 1000 - 500,
    y: Math.random() * 600 - 300,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 1.5 + 0.5, // Reduced from 2+1 to 1.5+0.5
    delay: Math.random() * 1, // Reduced from 2 to 1
    color: i % 2 === 0 ? brandColors.green : brandColors.orange
  }));

  return (
    <div 
      className="fixed inset-0 flex flex-col justify-center items-center z-50 overflow-hidden"
      style={{ background: brandColors.lightGray }}
      ref={containerRef}
    >
      {/* Text animation container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Lanto's text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: textSequence >= 1 ? 1 : 0, 
            y: textSequence >= 1 ? 0 : 20 
          }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Reduced from 0.8 to 0.6
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold"
            style={{ 
              color: brandColors.orange,
              textShadow: "2px 2px 10px rgba(255, 152, 0, 0.3)" 
            }}
            initial={{ letterSpacing: "-0.05em" }}
            animate={{ letterSpacing: "0.05em" }}
            transition={{ duration: 0.8, delay: 0.1 }} // Reduced from 1.2/0.2 to 0.8/0.1
          >
            Lanto&apos;s
          </motion.h1>
        </motion.div>

        {/* CREATIVE CONCEPT text */}
        <motion.div
          className="mt-2 md:mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: textSequence >= 2 ? 1 : 0, 
            y: textSequence >= 2 ? 0 : 20 
          }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Reduced from 0.8 to 0.6
        >
          <motion.h2 
            className="text-xl md:text-2xl tracking-widest text-center font-bold"
            style={{ color: brandColors.green }}
            initial={{ letterSpacing: "0.1em" }}
            animate={{ letterSpacing: "0.3em" }}
            transition={{ duration: 0.8, delay: 0.1 }} // Reduced from 1.2/0.2 to 0.8/0.1
          >
            CREATIVE CONCEPT
          </motion.h2>
        </motion.div>
      </div>

      {/* Progress bar */}
      <motion.div 
        className="absolute bottom-20 w-64 h-2 bg-white rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }} // Reduced from 0.5 to 0.3
      >
        <motion.div 
          className="h-full rounded-full"
          style={{ 
            background: `linear-gradient(to right, ${brandColors.green}, ${brandColors.orange})` 
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${loadingProgress}%` }}
          transition={{ duration: 0.2 }} // Reduced from 0.3 to 0.2
        />
      </motion.div>

      {/* Subtle particle effects */}
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full opacity-30"
            style={{ 
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              zIndex: 1
            }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 0
            }}
            animate={{ 
              x: particle.x,
              y: particle.y,
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0.5]
            }}
            transition={{ 
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 2 + 0.5 // Reduced from 3+1 to 2+0.5
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Final Call to Action */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10 bg-white bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }} // Reduced from 0.8 to 0.6
          >
            <motion.div 
              className="text-center px-6 py-10 rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }} // Reduced from 0.8/0.3 to 0.6/0.2
            >
              <motion.button
                className="px-8 py-3 rounded-full text-lg font-medium text-white shadow-lg"
                style={{ 
                  background: `linear-gradient(45deg, ${brandColors.green}, ${brandColors.orange})` 
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }} // Reduced from 0.7 to 0.5
                onClick={() => {
                  if (onComplete) onComplete();
                  // You can add navigation logic here
                }}
              >
                Explore Our Collection
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Loader.propTypes = {
  onComplete: PropTypes.func
};

export default Loader;