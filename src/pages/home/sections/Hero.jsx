import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { hero2} from "../../../assets/images";
import ScrollSection from "../../../components/ScrollSection";


const brandColors = {
  primary: "grey", 
  secondary: "#4AA625", 
  accent: "#FC940E", // 
  dark: "#222222",
  light: "#FFFFFF"
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  
  // Parallax effect references
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY;
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  return (
    <ScrollSection>
    <div className="relative h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${hero2})`,
          height: "120%", // Extra space for parallax movement
          top: "-10%",
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          background: `linear-gradient(135deg, ${brandColors.primary}88 0%, ${brandColors.dark}aa 100%)`,
        }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={heroVariants}
        className="relative h-full flex flex-col justify-center items-center text-center px-4 z-20"
      >
        <div 
          ref={contentRef}
          className="max-w-4xl backdrop-blur-sm p-8 rounded-xl"
          style={{ 
            backgroundColor: `${brandColors.dark}70`,
            border: `2px solid ${brandColors.secondary}40`,
            boxShadow: `0 8px 32px -4px ${brandColors.primary}40`
          }}
        >
          <motion.h1 
            variants={childVariants}
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ color: brandColors.light }}
          >
            Lanto&apos;s Creative Concept
          </motion.h1>
          
          <motion.p 
            variants={childVariants}
            className="text-xl md:text-3xl mb-8"
            style={{ color: brandColors.light }}
          >
            Transforming Trash into Treasure
          </motion.p>
          
          <motion.div variants={childVariants} className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: brandColors.secondary }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
              style={{ 
                backgroundColor: brandColors.primary,
                color: brandColors.light,
              }}
            >
              Explore Our Work
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: brandColors.primary }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
              style={{ 
                backgroundColor: "transparent",
                color: brandColors.light,
                border: `2px solid ${brandColors.secondary}`,
              }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: brandColors.light }}>
            <div className="w-1 h-3 rounded-full" style={{ backgroundColor: brandColors.light }}></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </ScrollSection>
  );
};

export default Hero;