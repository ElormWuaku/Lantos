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
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Hero content variants - faster animations
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Reduced from 0.8
        staggerChildren: 0.1, // Reduced from 0.2
      },
    },
  };

  const childVariants = {
    hidden: { y: 15, opacity: 0 }, // Reduced y distance from 20
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20, // Increased from 12
        stiffness: 150, // Increased from 100
      },
    },
  };

  const imageVariants = {
    hidden: { x: 30, opacity: 0 }, // Reduced x distance from 50
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25, // Increased from 15
        stiffness: 120, // Increased from 80
        delay: 0.1, // Reduced from 0.3
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
    // Set immediate prop to true for the hero section to appear right away
    <ScrollSection immediate={true} threshold={0.1}>
      {/* Modern Hero section with responsive design */}
      <div className="relative min-h-[100svh] overflow-hidden pt-16 sm:pt-20">
        {/* Base background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 z-0"></div>

        {/* Subtle dot pattern overlay with improved opacity for a more premium feel */}
        <div className="absolute inset-0 opacity-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]"></div>

        {/* Enhanced brand color accent shapes - adjusted for better mobile display */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-gradient-to-br from-green-100/40 to-green-200/40 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-gradient-to-tr from-orange-100/40 to-orange-200/40 blur-3xl z-0"></div>

        {/* Geometric accent shape - diagonal line - adjusted for responsiveness */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div
            className="absolute -top-10 -left-10 w-16 sm:w-24 md:w-32 h-[150%] rotate-45 opacity-10"
            style={{ backgroundColor: brandColors.primary }}
          ></div>
        </div>

        {/* Subtle grid pattern for extra texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgb3BhY2l0eT0iMC4wMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 z-0"></div>

        {/* Main content container with improved responsive layout */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 relative z-10">
          {/* Text content with enhanced responsiveness */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={heroVariants}
            className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left py-6 lg:py-0 z-30 mb-6 sm:mb-8 lg:mb-0 lg:pr-6 xl:pr-12"
          >
            <motion.h1
              variants={childVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
              style={{ color: brandColors.dark }}
            >
              Lanto&apos;s Creative Concept
            </motion.h1>

            {/* Improved animated accent bar - adjusted for mobile */}
            <motion.div
              variants={childVariants}
              className="h-1 mb-4 sm:mb-5 md:mb-6 rounded-full mx-auto lg:mx-0"
              style={{
                background: `linear-gradient(90deg, ${brandColors.primary}, ${brandColors.secondary})`,
                width: "80px",
              }}
              whileHover={{ width: "120px", transition: { duration: 0.3 } }}
            />

            <motion.h2
              variants={childVariants}
              className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-5 md:mb-6"
              style={{ color: `${brandColors.dark}99` }}
            >
              Transforming Waste Into Art & Innovation
            </motion.h2>

            <motion.p
              variants={childVariants}
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ color: `${brandColors.dark}99` }}
            >
              From our signature Smart Table to unique art installations, we
              turn industrial waste into functional masterpieces that combine
              sustainability with cutting-edge technology.
            </motion.p>

            {/* Improved button container with better mobile layout */}
            <motion.div
              variants={childVariants}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-0 relative"
            >
              <a
                href="#art-gallery"
                onClick={() => handleScrollTo("art-gallery")}
                className="w-full xs:w-auto"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: brandColors.secondary,
                    boxShadow: "0 5px 15px rgba(252, 148, 14, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition-all duration-300 shadow-lg w-full"
                  style={{
                    backgroundColor: brandColors.primary,
                    color: brandColors.light,
                  }}
                >
                  Explore Our Work
                </motion.button>
              </a>

              <a 
                href="#about" 
                onClick={() => handleScrollTo("about")}
                className="w-full xs:w-auto"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `${brandColors.dark}08`,
                    borderColor: brandColors.secondary,
                    boxShadow: "0 5px 15px rgba(252, 148, 14, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition-all duration-300 w-full"
                  style={{
                    backgroundColor: "transparent",
                    color: brandColors.dark,
                    border: `2px solid ${brandColors.dark}40`,
                  }}
                >
                  Our Story
                </motion.button>
              </a>

              {/* Decorative accent dot - hidden on smaller screens */}
              <div
                className="absolute -left-6 -bottom-6 w-3 sm:w-4 h-3 sm:h-4 rounded-full hidden lg:block"
                style={{ backgroundColor: brandColors.secondary }}
              ></div>
            </motion.div>
          </motion.div>

          {/* Image content with responsive styling */}
          <motion.div
            className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 flex items-center justify-center lg:justify-end relative mx-auto lg:mx-0"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Decorative background elements - adjusted for mobile */}
            <div className="absolute -top-8 -right-8 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 rounded-full bg-gradient-to-br from-green-500/20 to-orange-500/10 blur-3xl"></div>

            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Decorative border frame - adjusted for mobile */}
              <div
                className="absolute -right-2 sm:-right-3 md:-right-4 -top-2 sm:-top-3 md:-top-4 w-full h-full border-2 border-dashed rounded-lg z-0 opacity-30"
                style={{ borderColor: brandColors.secondary }}
              ></div>
              <div
                className="absolute -left-2 sm:-left-3 md:-left-4 -bottom-2 sm:-bottom-3 md:-bottom-4 w-full h-full border-2 border-dashed rounded-lg z-0 opacity-30"
                style={{ borderColor: brandColors.primary }}
              ></div>

              {/* Main image container with responsive sizing */}
              <motion.div
                className="rounded-lg overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)] sm:shadow-[0_15px_35px_rgba(0,0,0,0.15)] md:shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                }}
              >
                {/* Subtle gradient overlay to enhance image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>

                <img
                  src={herobg}
                  alt="Art created from repurposed materials"
                  className="w-full h-auto object-cover max-h-[280px] sm:max-h-[350px] md:max-h-[420px] lg:max-h-[500px]"
                />

                {/* Corner accents - smaller on mobile */}
                <div className="absolute w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 -right-1 sm:-right-2 -top-1 sm:-top-2 overflow-hidden z-20">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white absolute right-0 bottom-0 transform rotate-45 translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="absolute w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 -left-1 sm:-left-2 -bottom-1 sm:-bottom-2 overflow-hidden z-20">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white absolute left-0 top-0 transform rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </motion.div>

              {/* Enhanced image caption with responsive styling */}
              <motion.div
                className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 -right-3 sm:-right-4 md:-right-5 bg-white p-2 sm:p-3 md:p-4 rounded-md shadow-xl border-l-4 z-20"
                style={{ borderColor: brandColors.secondary }}
                variants={childVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f8f8f8",
                  transition: { duration: 0.2 },
                }}
              >
                <p
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: brandColors.dark }}
                >
                  <span style={{ color: brandColors.secondary }}>
                    &quot;Reclaimed Beauty&quot;
                  </span>{" "}
                  — 2023
                </p>
              </motion.div>

              {/* Decorative element - adjusted for mobile */}
              <div
                className="absolute -top-4 sm:-top-5 md:-top-6 -left-4 sm:-left-5 md:-left-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full z-20"
                style={{ backgroundColor: brandColors.primary, opacity: 0.8 }}
              ></div>

              {/* Additional accent dot - adjusted for mobile */}
              <div
                className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full z-20"
                style={{ backgroundColor: brandColors.secondary, opacity: 0.8 }}
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator with better mobile styling */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
            transition: {
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              opacity: { delay: 0.5, duration: 0.5 }, // Faster appearance
            },
          }}
        >
          <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Scroll to explore</p>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke={brandColors.primary}
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <path
              d="M8 12L12 16L16 12"
              stroke={brandColors.primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8L12 16"
              stroke={brandColors.primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </ScrollSection>
  );
};

export default Hero;