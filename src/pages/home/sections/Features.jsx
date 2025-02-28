import { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ScrollSection from "../../../components/ScrollSection";

const brandColors = {
  primary: "#4AA625", // Green as primary
  secondary: "#FC940E", // Orange accent
  dark: "#222222",
  light: "#FFFFFF",
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [sliderIndex, setSliderIndex] = useState(0);

  // Start animations when component comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const tileVariants = {
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

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const highlightVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const featuresData = [
    {
      id: 1,
      title: "Wireless Charging",
      description: "Built-in Qi charging for all your devices",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: brandColors.primary,
    },
    {
      id: 2,
      title: "Interactive Display",
      description: "Embedded LED touchscreen interface",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8 21H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 17V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      color: brandColors.secondary,
    },
    {
      id: 3,
      title: "Power Storage",
      description: "Integrated battery for off-grid use",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10H10V14H6V10Z" fill="currentColor" />
          <path d="M16 7H20V17H16V7Z" stroke="currentColor" strokeWidth="2" />
          <path
            d="M4 18V6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      color: "#3498db",
    },
    {
      id: 4,
      title: "Smart Connectivity",
      description: "Wi-Fi and Bluetooth ecosystem integration",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M5 12.5C5 12.5 8 8.5 12 8.5C16 8.5 19 12.5 19 12.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3 9.5C3 9.5 7 4.5 12 4.5C17 4.5 21 9.5 21 9.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      color: "#9b59b6",
    },
    {
      id: 5,
      title: "Sustainable Materials",
      description: "Reclaimed wood and recycled materials",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 20L12 15L17 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 4L12 9L17 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      color: brandColors.primary,
    },
    {
      id: 6,
      title: "Modular Design",
      description: "Customizable to your changing needs",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      color: "#f1c40f",
    },
  ];

  // Create a continuous loop by duplicating the items
  const continuousData = [...featuresData, ...featuresData];

  // Calculate how many items to show in slider based on visible cards
  const visibleItems = 3;
  const totalItems = featuresData.length;

  const handleNext = () => {
    setSliderIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setSliderIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Auto slide every 5 seconds with continuous loop
  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % totalItems);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalItems]);

  return (
    <ScrollSection id="features">
      <div className="py-16 px-4 bg-gray-50 relative overflow-hidden">
        {/* Animated decorative elements */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-1/4 right-1/4 w-5 h-5 rounded-full"
          style={{ backgroundColor: brandColors.primary, opacity: 0.2 }}
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
          className="absolute bottom-1/3 left-1/5 w-4 h-4 rounded-full"
          style={{ backgroundColor: brandColors.secondary, opacity: 0.15 }}
        />

        {/* {visibleItems.map((feature) => (
          <motion.div
            key={feature.id} // Unique key to prevent unmounting
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Features feature={feature} />
          </motion.div>
        ))} */}

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto text-center mb-12"
          >
            <h2
              className="text-xl font-medium mb-2"
              style={{ color: brandColors.primary }}
            >
              Innovative Technology
            </h2>

            <div className="overflow-hidden mb-2">
              <motion.h3
                className="text-3xl md:text-4xl font-bold"
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ color: brandColors.dark }}
              >
                Smart Table Features
              </motion.h3>
            </div>

            <motion.div
              variants={highlightVariants}
              initial="hidden"
              whileInView="visible"
              className="h-1 w-16 mx-auto mb-6 rounded-full"
              style={{ backgroundColor: brandColors.secondary }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg"
              style={{ color: brandColors.dark }}
            >
              Our multi-purpose Smart Table seamlessly integrates cutting-edge
              technology with sustainable design, transforming your space with
              intelligent furniture that enhances modern living.
            </motion.p>
          </motion.div>

          {/* Features slider container */}
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Previous button */}
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: brandColors.light,
                color: brandColors.dark,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19L8 12L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            {/* Features slider */}
            <div className="overflow-hidden">
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="flex"
                style={{
                  transform: `translateX(-${sliderIndex * 33.33}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {continuousData.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${index}`}
                    variants={tileVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 10px 25px -5px ${item.color}30`,
                    }}
                    className="flex-none mx-4 rounded-xl p-6 flex flex-col items-center bg-white"
                    style={{
                      width: "calc(33.33% - 32px)",
                      borderTop: `3px solid ${item.color}`,
                      boxShadow: `0 4px 20px -8px ${brandColors.dark}20`,
                    }}
                  >
                    <motion.div
                      className="mb-4 p-3 rounded-full"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}10`,
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {item.icon}
                    </motion.div>

                    <h4
                      className="text-lg font-semibold mb-2"
                      style={{ color: brandColors.dark }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="text-center text-sm"
                      style={{ color: `${brandColors.dark}90` }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Next button */}
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: brandColors.light,
                color: brandColors.dark,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            {/* Slider indicators */}
            <div className="flex justify-center mt-6">
              {Array.from({ length: featuresData.length }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSliderIndex(index)}
                  className="mx-1 w-2 h-2 rounded-full"
                  whileHover={{ scale: 1.5 }}
                  style={{
                    backgroundColor:
                      index === sliderIndex
                        ? brandColors.primary
                        : `${brandColors.dark}20`,
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default Features;
