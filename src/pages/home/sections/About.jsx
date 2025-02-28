import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ScrollSection from "../../../components/ScrollSection";
import { art, hero2, table2 } from "../../../assets/images";

const brandColors = {
  primary: "#4AA625", // Green as primary
  secondary: "#FC940E", // Orange accent
  dark: "#222222",
  light: "#FFFFFF",
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Start animations when component comes into view
  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2,
      },
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

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <ScrollSection id="about">
      <div className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Animated decorative elements */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-1/3 left-1/4 w-5 h-5 rounded-full"
          style={{ backgroundColor: brandColors.secondary, opacity: 0.15 }}
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
          className="absolute bottom-1/4 right-1/5 w-4 h-4 rounded-full"
          style={{ backgroundColor: brandColors.primary, opacity: 0.2 }}
        />

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Images Column */}
            <motion.div
              ref={ref}
              variants={imageVariants}
              initial="hidden"
              animate={controls}
              className="w-full lg:w-1/2 relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Main Image */}
                <motion.div
                  className="col-span-2 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-full h-64 md:h-80 bg-gray-200"
                    style={{
                      backgroundImage: `url(${hero2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </motion.div>

                {/* Two smaller images */}
                <motion.div
                  className="rounded-lg overflow-hidden shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-full h-48 bg-gray-200"
                    style={{
                      backgroundImage: `url(${table2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </motion.div>
                <motion.div
                  className="rounded-lg overflow-hidden shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-full h-48 bg-gray-200"
                    style={{
                      backgroundImage: `url(${art})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </motion.div>
              </div>

              {/* Design element */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full z-10"
                style={{ backgroundColor: brandColors.primary, opacity: 0.1 }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                  transition: { duration: 8, repeat: Infinity },
                }}
              />
            </motion.div>

            {/* Text Column */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="w-full lg:w-1/2"
            >
              <h2
                className="text-xl font-medium mb-2"
                style={{ color: brandColors.primary }}
              >
                Our Philosophy
              </h2>

              <div className="overflow-hidden mb-2">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold"
                  initial={{ y: 40 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: brandColors.dark }}
                >
                  Technology Meets Artistry
                </motion.h3>
              </div>

              <motion.div
                variants={highlightVariants}
                initial="hidden"
                whileInView="visible"
                className="h-1 w-16 mb-6 rounded-full"
                style={{ backgroundColor: brandColors.secondary }}
              />

              <motion.div variants={textVariants} className="space-y-4">
                <p className="text-base md:text-lg">
                  At{" "}
                  <span style={{ color: brandColors.primary, fontWeight: 600 }}>
                    EcoSmart
                  </span>
                  , we&apos;re redefining furniture by blending cutting-edge
                  technology with sustainable craftsmanship. Our Smart Tables
                  represent the harmony between innovation and environmental
                  responsibility.
                </p>

                <p className="text-base md:text-lg">
                  Each piece is thoughtfully designed with integrated technology
                  that enhances your daily life, while maintaining our
                  commitment to sustainability through responsibly sourced
                  materials.
                </p>

                <p className="text-base md:text-lg mt-3">
                  These one-of-a-kind creations not only complement our
                  furniture line but also embody our zero-waste philosophy,
                  giving new life to materials that would otherwise be
                  discarded.
                </p>

                <div className="flex items-center pt-4">
                  <div className="flex space-x-2 mr-6">
                    <span
                      className="font-bold text-4xl"
                      style={{ color: brandColors.primary }}
                    >
                      93%
                    </span>
                    <span
                      className="text-sm flex flex-col justify-center"
                      style={{ color: brandColors.dark }}
                    >
                      Recycled
                      <br />
                      Materials
                    </span>
                  </div>

                  <div className="flex space-x-2 mr-6">
                    <span
                      className="font-bold text-4xl"
                      style={{ color: brandColors.primary }}
                    >
                      100%
                    </span>
                    <span
                      className="text-sm flex flex-col justify-center"
                      style={{ color: brandColors.dark }}
                    >
                      Renewable
                      <br />
                      Energy
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <span
                      className="font-bold text-4xl"
                      style={{ color: brandColors.secondary }}
                    >
                      12+
                    </span>
                    <span
                      className="text-sm flex flex-col justify-center"
                      style={{ color: brandColors.dark }}
                    >
                      Years of
                      <br />
                      Innovation
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default About;
