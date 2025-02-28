import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ScrollSection from "../../../components/ScrollSection";

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

  // References for animated elements
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const heroVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const highlightVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        delay: 0.7,
        duration: 0.8,
        ease: "easeInOut",
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
      <div className="relative h-screen overflow-hidden">
        {/* Subtle gradient overlay for better text visibility */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)`,
          }}
        />

        {/* Animated decorative elements */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-1/3 right-1/4 w-5 h-5 rounded-full z-20"
          style={{ backgroundColor: brandColors.primary, opacity: 0.7 }}
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
          className="absolute top-1/2 right-1/5 w-3 h-3 rounded-full z-20"
          style={{ backgroundColor: brandColors.secondary, opacity: 0.5 }}
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 },
          }}
          className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full z-20"
          style={{ backgroundColor: brandColors.primary, opacity: 0.6 }}
        />

        {/* Main content */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={heroVariants}
          className="relative h-full flex flex-col justify-center items-start px-4 md:px-12 lg:px-20 z-30"
        >
          <div className="max-w-2xl">
            <motion.div
              variants={childVariants}
              className="mb-2 text-lg font-medium inline-block"
              style={{ color: brandColors.primary }}
            >
              Lanto&apos;s Creative Concept
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                ref={titleRef}
                variants={childVariants}
                className="text-4xl md:text-6xl font-bold mb-2"
                style={{ color: brandColors.dark }}
              >
                The Smart Table
              </motion.h1>
            </div>

            <motion.div
              variants={highlightVariants}
              className="h-1 mb-6 rounded-full"
              style={{ backgroundColor: brandColors.secondary }}
            />

            <div className="overflow-hidden">
              <motion.h2
                ref={subtitleRef}
                variants={childVariants}
                className="text-2xl md:text-3xl font-medium mb-4"
                style={{ color: brandColors.dark }}
              >
                Where Technology Meets Sustainability
              </motion.h2>
            </div>

            <motion.p
              variants={childVariants}
              className="text-base md:text-lg mb-8 max-w-xl"
              style={{ color: brandColors.dark }}
            >
              Our flagship product seamlessly integrates cutting-edge technology
              with sustainable design, transforming your living space with
              multi-purpose, smart furniture that enhances modern living.
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#features"
                onClick={() => handleScrollTo("features")}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: brandColors.dark,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-md text-lg font-medium transition-all duration-300"
                  style={{
                    backgroundColor: brandColors.primary,
                    color: brandColors.light,
                  }}
                >
                  Discover Features
                </motion.button>
              </a>

              <a href="#about" onClick={() => handleScrollTo("about")}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `${brandColors.secondary}22`,
                    borderColor: brandColors.secondary,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-md text-lg font-medium transition-all duration-300"
                  style={{
                    backgroundColor: "transparent",
                    color: brandColors.dark,
                    border: `2px solid ${brandColors.primary}`,
                  }}
                >
                  Our Story
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, 10, 0],
            }}
            transition={{
              opacity: { delay: 2.5, duration: 1 },
              y: { repeat: Infinity, duration: 2, delay: 2.5 },
            }}
          >
            <p className="text-sm mb-2" style={{ color: brandColors.dark }}>
              Scroll to explore
            </p>
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
              }}
              className="w-6 h-9 rounded-full border-2 flex justify-center pt-1"
              style={{ borderColor: brandColors.primary }}
            >
              <motion.div
                animate={{
                  opacity: [0.2, 1, 0.2],
                  y: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="w-1 h-2 rounded-full"
                style={{ backgroundColor: brandColors.primary }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </ScrollSection>
  );
};

export default Hero;
