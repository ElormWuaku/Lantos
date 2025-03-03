import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ScrollSection from "../../../components/ScrollSection";
import { herobg } from "../../../assets/images";

const brandColors = {
  primary: "#4AA625", // Green as primary
  secondary: "#FC940E", // Orange accent
  dark: "#222222",
  light: "#FFFFFF",
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Hero content variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        delay: 0.3,
      },
    },
  };

  const handleScrollTo = (sectionId) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollSection>
      {/* Hero section with improved gradient background */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
        {/* Optional subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]"></div>

        {/* Main content container with improved spacing and padding */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12 py-12 lg:py-24">
          {/* Text content with improved spacing */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={heroVariants}
            className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left py-8 lg:py-0 z-30 mb-8 lg:mb-0"
          >
            <motion.h1
              variants={childVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: brandColors.light }}
            >
              Lanto&apos;s Creative Concept
            </motion.h1>

            {/* Animated accent bar with improved color */}
            <motion.div
              variants={childVariants}
              className="h-1 mb-6 rounded-full mx-auto lg:mx-0"
              style={{
                background: `linear-gradient(90deg, ${brandColors.primary}, ${brandColors.secondary})`,
                width: "120px",
              }}
              whileHover={{ width: "150px", transition: { duration: 0.3 } }}
            />

            <motion.h2
              variants={childVariants}
              className="text-2xl md:text-3xl font-medium mb-6"
              style={{ color: brandColors.light }}
            >
              Transforming Waste Into Art & Innovation
            </motion.h2>

            <motion.p
              variants={childVariants}
              className="text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 text-gray-300"
            >
              From our signature Smart Table to unique art installations, we turn
              industrial waste into functional masterpieces that combine
              sustainability with cutting-edge technology.
            </motion.p>

            {/* Improved button container with proper spacing */}
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8 lg:mb-0"
            >
              <a href="#art-gallery" onClick={() => handleScrollTo("art-gallery")}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: brandColors.secondary,
                    boxShadow: "0 5px 15px rgba(252, 148, 14, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 shadow-lg w-full sm:w-auto"
                  style={{
                    backgroundColor: brandColors.primary,
                    color: brandColors.light,
                  }}
                >
                  Explore Our Work
                </motion.button>
              </a>

              <a href="#about" onClick={() => handleScrollTo("about")}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `${brandColors.light}22`,
                    borderColor: brandColors.secondary,
                    boxShadow: "0 5px 15px rgba(252, 148, 14, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                  style={{
                    backgroundColor: "transparent",
                    color: brandColors.light,
                    border: `2px solid ${brandColors.light}`,
                  }}
                >
                  Our Story
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image content with improved container and effects */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Decorative background element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-green-500/20 to-orange-500/10 blur-3xl"></div>
            
            <div className="relative w-full max-w-lg">
              <motion.div
                className="rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                whileHover={{ 
                  scale: 1.02, 
                  transition: { duration: 0.3 },
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
                }}
              >
                {/* Gradient overlay to enhance image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                
                <img
                  src={herobg}
                  alt="Art created from repurposed materials"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </motion.div>

              {/* Image caption with improved styling */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-gray-900 p-4 rounded-md shadow-xl border-l-4"
                style={{ borderColor: brandColors.secondary }}
                variants={childVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1a1a1a",
                  transition: { duration: 0.2 } 
                }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: brandColors.secondary }}
                >
                  &quot;Reclaimed Beauty&quot; — 2023
                </p>
              </motion.div>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full" style={{ backgroundColor: brandColors.primary, opacity: 0.8 }}></div>
            </div>
          </motion.div>
        </div>
        
        {/* Optional scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1, 
            y: [0, 10, 0],
            transition: { 
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              opacity: { delay: 1, duration: 1 }
            }
          }}
        >
          <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </ScrollSection>
  );
};

export default Hero;