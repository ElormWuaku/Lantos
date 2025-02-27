import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ScrollSection from "../../../components/ScrollSection";

const brandColors = {
  primary: "grey", 
  secondary: "#4AA625", 
  accent: "#FC940E", 
  dark: "#222222",
  light: "#FFFFFF"
};

const Sustainability = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Start animations when component comes into view
  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const tileVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const sustainabilityData = [
    {
      id: 1,
      title: "Zero Waste",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: brandColors.secondary
    },
    {
      id: 2,
      title: "Reduced Carbon",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22L12 12M12 12L22 2M12 12L2 2M12 12L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: brandColors.accent
    },
    {
      id: 3,
      title: "Local Sourcing",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: brandColors.primary
    },
    {
      id: 4,
      title: "Water Conservation",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4C10.6193 4 9.5 5.11929 9.5 6.5C9.5 7.88071 10.6193 9 12 9C13.3807 9 14.5 10.1193 14.5 11.5C14.5 12.8807 13.3807 14 12 14C10.6193 14 9.5 15.1193 9.5 16.5C9.5 17.8807 10.6193 19 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: "#3498db"
    },
    {
      id: 5,
      title: "Ethical Labor",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.5 9H22L16 14L18.5 21L12 17L5.5 21L8 14L2 9H9.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#9b59b6"
    },
    {
      id: 6,
      title: "Energy Efficient",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#f1c40f"
    }
  ];

  return (
    <ScrollSection>
      <div className="py-10 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.h3
            className="text-2xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: brandColors.dark }}
          >
            Our Sustainable Practices
          </motion.h3>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-wrap justify-center gap-4"
          >
            {sustainabilityData.map((item) => (
              <motion.div
                key={item.id}
                variants={tileVariants}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: `0 6px 15px -2px ${item.color}30`
                }}
                className="rounded-lg p-3 flex flex-col items-center bg-white"
                style={{ 
                  width: "120px",
                  height: "120px",
                  borderTop: `3px solid ${item.color}`,
                  boxShadow: `0 4px 12px -4px ${brandColors.dark}20`
                }}
              >
                <motion.div 
                  className="mb-2"
                  style={{ color: item.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {item.icon}
                </motion.div>
                
                <p className="text-center text-sm font-medium" style={{ color: brandColors.dark }}>
                  {item.title}
                </p>
                
                <motion.div
                  className="mt-2"
                >
                  <span 
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ 
                      backgroundColor: `${item.color}20`,
                      color: item.color,
                    }}
                  >
                    #eco
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default Sustainability;