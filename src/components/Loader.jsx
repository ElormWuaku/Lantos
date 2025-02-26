import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const RecycleLoader = ({ onComplete }) => {
  const [showFinalProduct, setShowFinalProduct] = useState(false);
  const [showText, setShowText] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeParticles, setActiveParticles] = useState(false);
  const [impactCounter, setImpactCounter] = useState(0);
  const containerRef = useRef(null);
  
  // More recyclable items with educational facts
  const recyclableItems = [
    { 
      id: 1, 
      emoji: "🪵", 
      color: "#8B4513", 
      name: "Wood", 
      size: 1.2,
      fact: "Recycling 1 ton of wood saves 17 trees and reduces CO₂ emissions by 1 ton",
      savedResource: "17 trees"
    },
    { 
      id: 2, 
      emoji: "🥤", 
      color: "#87CEEB", 
      name: "Plastic", 
      size: 1,
      fact: "Recycling plastic takes 88% less energy than making it from raw materials",
      savedResource: "1 gallon of oil"
    },
    { 
      id: 3, 
      emoji: "📰", 
      color: "#F5F5DC", 
      name: "Paper", 
      size: 0.9,
      fact: "Recycling 1 ton of paper saves 7,000 gallons of water & 17 trees",
      savedResource: "7,000 gallons of water"
    },
    { 
      id: 4, 
      emoji: "🔩", 
      color: "#C0C0C0", 
      name: "Metal", 
      size: 0.8,
      fact: "Recycling aluminum uses 95% less energy than producing it from raw materials",
      savedResource: "9 kg of CO₂"
    },
    { 
      id: 5, 
      emoji: "🧶", 
      color: "#FF6347", 
      name: "Textile", 
      size: 1.1,
      fact: "85% of textile waste goes to landfills, taking 200+ years to decompose",
      savedResource: "700 gallons of water"
    },
    { 
      id: 6, 
      emoji: "🧪", 
      color: "#9370DB", 
      name: "Glass", 
      size: 1.2,
      fact: "Glass can be recycled endlessly without loss in quality or purity",
      savedResource: "42 kWh of energy"
    },
    { 
      id: 7, 
      emoji: "🔋", 
      color: "#FFD700", 
      name: "Battery", 
      size: 0.75,
      fact: "Recycling batteries prevents toxic metals from entering our ecosystem",
      savedResource: "12 sq ft of landfill space"
    }
  ];
  
  // Possible end products - randomized selection
  const possibleProducts = [
    { emoji: "🏺", name: "Decorative Vase" },
    { emoji: "🛋️", name: "Upcycled Furniture" },
    { emoji: "🧵", name: "Eco-Textile" },
    { emoji: "📓", name: "Recycled Notebook" },
    { emoji: "🪑", name: "Designer Chair" },
    { emoji: "🔮", name: "Art Piece" }
  ];

  // Select random final product
  const [finalProduct] = useState(() => {
    const randomIndex = Math.floor(Math.random() * possibleProducts.length);
    return possibleProducts[randomIndex];
  });
  
  // Particle effect configuration
  const generateParticles = () => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 30 - 15,
      y: Math.random() * 30 - 15,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 1.5 + 0.8,
      color: recyclableItems[Math.floor(Math.random() * recyclableItems.length)].color
    }));
  };
  
  const [particles, setParticles] = useState(generateParticles());
  
  // Handle item click/tap
  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Increase environmental impact counter
    setImpactCounter(prev => prev + Math.floor(Math.random() * 15) + 5);
    
    // Clear selection after delay
    setTimeout(() => {
      setSelectedItem(null);
    }, 3000);
  };
  
  useEffect(() => {
    // Activate particles during transformation
    const particleTimer = setTimeout(() => {
      setActiveParticles(true);
    }, 2000);
    
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
    
    // Reset particles every 2 seconds for continuous effect when active
    const particleRefreshInterval = setInterval(() => {
      if (activeParticles) {
        setParticles(generateParticles());
      }
    }, 2000);
    
    return () => {
      clearTimeout(particleTimer);
      clearTimeout(productTimer);
      clearTimeout(textTimer);
      clearTimeout(completionTimer);
      clearInterval(particleRefreshInterval);
    };
  }, [onComplete, activeParticles]);

  // User "toss in" gesture handling
  const handleDragEnd = (_, info) => {
    const { velocity } = info;
    const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
    
    // If the drag was fast enough (like a toss)
    if (speed > 300) {
      // Add a particle burst
      setActiveParticles(true);
      setParticles(generateParticles());
      
      // Increase impact counter
      setImpactCounter(prev => prev + Math.floor(Math.random() * 10) + 3);
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900 text-white z-50" ref={containerRef}>
      {/* Environmental Impact Counter */}
      <motion.div 
        className="absolute top-5 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="bg-green-900 bg-opacity-40 px-4 py-2 rounded-lg border border-green-500 flex items-center">
          <span className="text-green-400 mr-2">🌎</span>
          <div>
            <div className="text-xs text-green-300">Environmental Impact</div>
            <motion.div 
              className="font-bold text-green-400"
              key={impactCounter}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              {impactCounter} kg CO₂ Saved
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Progress indicator with improved visuals */}
      <motion.div 
        className="absolute top-24 w-64 h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-green-500 to-teal-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Main animation container */}
      <div className="relative h-64 w-64 flex items-center justify-center mt-12">
        {/* Draggable area indicator */}
        <motion.div
          className="absolute w-full h-full rounded-full border-2 border-gray-700 opacity-30"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Circular track for items */}
        <motion.div
          className="absolute w-full h-full rounded-full border-4 border-dashed border-gray-700 opacity-50"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.5, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Recyclable items orbiting with complex paths */}
        {recyclableItems.map((item, index) => {
          // Calculate more complex path with slight variations
          const angle = index * (2 * Math.PI / recyclableItems.length);
          const radius = 100 + Math.sin(index * 0.7) * 15;
          const xOffset = Math.sin(index * 2) * 10;
          const yOffset = Math.cos(index * 2) * 10;
          
          return (
            <motion.div
              key={item.id}
              className="absolute flex flex-col items-center justify-center cursor-pointer"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0,
                scale: 0,
                rotate: 0
              }}
              animate={{ 
                x: [0, Math.cos(angle) * radius + xOffset],
                y: [0, Math.sin(angle) * radius + yOffset],
                opacity: [0, 1, 1, 0],
                scale: [0, item.size, item.size, 0],
                rotate: [0, index % 2 === 0 ? 15 : -15, 0]
              }}
              transition={{
                duration: 3.5,
                delay: index * 0.15,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut"
              }}
              onClick={() => handleItemClick(item)}
              whileHover={{ scale: item.size * 1.2 }}
            >
              <motion.div 
                className="text-3xl mb-1 p-3 rounded-full shadow-lg relative"
                style={{ 
                  backgroundColor: `${item.color}30`,
                  boxShadow: `0 0 15px ${item.color}50`
                }}
                whileHover={{ 
                  backgroundColor: `${item.color}50`,
                  boxShadow: `0 0 20px ${item.color}80`
                }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: index % 2 === 0 ? [0, 5, 0] : [0, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "mirror" 
                }}
              >
                {item.emoji}
                
                {/* Glow effect as items approach center */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)`,
                    opacity: 0
                  }}
                  animate={{ 
                    opacity: [0, 0.8, 0] 
                  }}
                  transition={{
                    duration: 3.5,
                    delay: index * 0.15 + 1.2,
                    times: [0, 0.5, 1]
                  }}
                />
              </motion.div>
              
              <motion.span
                className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
              >
                {item.name}
              </motion.span>
              
              {/* Item fact popup */}
              <AnimatePresence>
                {selectedItem?.id === item.id && (
                  <motion.div
                    className="absolute -top-20 w-48 bg-gray-800 p-3 rounded-lg border border-gray-700 text-xs"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="font-bold text-green-400 mb-1">Did you know?</div>
                    <p className="text-gray-300">{item.fact}</p>
                    <div className="mt-1 text-green-300 font-semibold">Saves: {item.savedResource}</div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 border-r border-b border-gray-700 rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        
        {/* User can drag and "toss" items into recycling */}
        <motion.div
          className="absolute z-10 cursor-grab active:cursor-grabbing"
          drag
          dragConstraints={containerRef}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
          onDragEnd={handleDragEnd}
          whileDrag={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.9, 0.9, 0],
            scale: [0.5, 1, 1, 0.5]
          }}
          transition={{ 
            duration: 10,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <div className="bg-gray-800 bg-opacity-70 p-2 rounded-full border border-gray-600 text-sm flex items-center">
            <span className="mr-2 text-xl">👆</span>
            <span>Drag & toss to recycle!</span>
          </div>
        </motion.div>
        
        {/* Center vortex/recycling symbol - enhanced */}
        <motion.div
          className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-600 z-20"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 1, 
            scale: [0, 1.2, 1, 1.1, 1], 
            rotate: 360,
            boxShadow: ["0 0 0px rgba(16, 185, 129, 0)", "0 0 30px rgba(16, 185, 129, 0.7)"]
          }}
          transition={{ 
            duration: 2, 
            delay: 0.5,
            rotate: { 
              repeat: Infinity, 
              duration: 8, 
              ease: "linear" 
            },
            boxShadow: {
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse"
            }
          }}
        >
          <span className="text-3xl">♻️</span>
        </motion.div>
        
        {/* Particle effects during transformation */}
        <AnimatePresence>
          {activeParticles && particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full z-10"
              style={{ 
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
              }}
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0.8,
                scale: 0
              }}
              animate={{ 
                x: particle.x * 8,
                y: particle.y * 8,
                opacity: [0.8, 0],
                scale: [0, 2, 0.5]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: particle.duration,
                ease: "easeOut"
              }}
            />
          ))}
        </AnimatePresence>
        
        {/* Final transformed product - enhanced */}
        <AnimatePresence>
          {showFinalProduct && (
            <motion.div
              className="absolute flex flex-col items-center z-30"
              initial={{ y: 0, opacity: 0, scale: 0 }}
              animate={{ 
                y: [0, -20, 0], 
                opacity: 1, 
                scale: 1.8,
                filter: ["drop-shadow(0 0 0px rgba(16, 185, 129, 0))", "drop-shadow(0 0 15px rgba(16, 185, 129, 0.8))"]
              }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                filter: {
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse"
                },
                y: {
                  repeat: Infinity,
                  duration: 3,
                  repeatType: "reverse"
                }
              }}
            >
              <div className="text-6xl mb-2">{finalProduct.emoji}</div>
              <motion.div
                className="text-sm px-4 py-1.5 bg-gradient-to-r from-green-500 to-teal-400 rounded-full font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {finalProduct.name}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Descriptive text - enhanced */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent px-4">
              Turning Waste Into Wonders
            </h2>
            <p className="text-gray-300 mt-3 max-w-md px-4 leading-relaxed">
              Transforming discarded materials into beautiful, functional objects through creative recycling. 
              <span className="block mt-1 text-green-400 font-medium">
                Every item you recycle helps build a sustainable future.
              </span>
            </p>
            
            {/* Call to action button */}
            <motion.button
              className="mt-6 bg-gradient-to-r from-green-500 to-teal-400 text-white px-6 py-2 rounded-full shadow-lg font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => window.location.reload()}
            >
              Recycle Again
            </motion.button>
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