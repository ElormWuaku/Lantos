import{ useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const RecycleLoader = ({ onComplete }) => {
  const [showFinalProduct, setShowFinalProduct] = useState(false);
  const [showText, setShowText] = useState(false);
  
  // Recyclable items with more detailed properties
  const recyclableItems = [
    { id: 1, emoji: "🪵", color: "#8B4513", name: "Wood", size: 1.2 },
    { id: 2, emoji: "🥤", color: "#87CEEB", name: "Plastic", size: 1 },
    { id: 3, emoji: "📰", color: "#F5F5DC", name: "Paper", size: 0.9 },
    { id: 4, emoji: "🔩", color: "#C0C0C0", name: "Metal", size: 0.8 },
    { id: 5, emoji: "🧶", color: "#FF6347", name: "Textile", size: 1.1 }
  ];

  useEffect(() => {
    // Show final product after items have animated
    const productTimer = setTimeout(() => {
      setShowFinalProduct(true);
    }, 2500);
    
    // Show text slightly after product appears
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3000);
    
    // Trigger completion callback
    const completionTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500);
    
    return () => {
      clearTimeout(productTimer);
      clearTimeout(textTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900 text-white z-50">
      {/* Progress indicator */}
      <motion.div 
        className="absolute top-10 w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="h-full bg-green-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Main animation container */}
      <div className="relative h-64 w-64 flex items-center justify-center">
        {/* Circular track for items */}
        <motion.div
          className="absolute w-full h-full rounded-full border-4 border-dashed border-gray-700 opacity-50"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.5, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Recyclable items orbiting */}
        {recyclableItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="absolute flex flex-col items-center justify-center"
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              x: [0, Math.cos(index * (2 * Math.PI / recyclableItems.length)) * 100],
              y: [0, Math.sin(index * (2 * Math.PI / recyclableItems.length)) * 100],
              opacity: [0, 1, 1, 0],
              scale: [0, item.size, item.size, 0]
            }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              times: [0, 0.2, 0.8, 1]
            }}
          >
            <div 
              className="text-3xl mb-1 p-2 rounded-full"
              style={{ 
                backgroundColor: `${item.color}20`,
                textShadow: "0 0 10px rgba(255,255,255,0.5)"
              }}
            >
              {item.emoji}
            </div>
            <motion.span
              className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
            >
              {item.name}
            </motion.span>
          </motion.div>
        ))}
        
        {/* Center vortex/recycling symbol */}
        <motion.div
          className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 1, scale: [0, 1.2, 1], rotate: 360 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <span className="text-2xl">♻️</span>
        </motion.div>
        
        {/* Final transformed product */}
        <AnimatePresence>
          {showFinalProduct && (
            <motion.div
              className="absolute flex flex-col items-center"
              initial={{ y: 50, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1.5 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <div className="text-6xl mb-2">🏺</div>
              <motion.div
                className="text-sm px-3 py-1 bg-green-500 rounded-full font-medium"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                Upcycled!
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Descriptive text */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Turning Waste Into Wonders
            </h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Transforming discarded materials into beautiful, functional objects through creative recycling
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

RecycleLoader.propTypes = {
  onComplete: PropTypes.func
};

export default RecycleLoader;