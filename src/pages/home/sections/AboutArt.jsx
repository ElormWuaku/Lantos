import { motion } from "framer-motion";
import ScrollSection from "../../../components/ScrollSection";
import { art, art1, art3, art4 } from "../../../assets/images";

const AboutArt = () => {
  // Sample images for waste-to-art transformation
  const artImages = [
    { 
      src: art, 
      alt: "Shoe polish wall mosaic", 
      title: "Shoe polish wall mosaic",
      material: "Discarded plastic caps"
    },
    { 
      src: art1, 
      alt: "Car scraps art", 
      title: "Car scraps art",
      material: "Compressed paper waste"
    },
    { 
      src: art3, 
      alt: "Electronic waste art", 
      title: "Electronic waste mosaic",
      material: "Circuit boards & wires"
    },
    { 
      src: art4, 
      alt: "Taxi scraps art", 
      title: "Good ol Taxi wall art",
      material: "Textile factory scraps"
    }
  ];

  // Reduced animation complexity and duration
  const fadeInProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  return (
    <ScrollSection delay={0.2}>
      <motion.section 
        {...fadeInProps}
        className="py-16 bg-gradient-to-b from-amber-50 to-slate-100"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInProps}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Beautiful Nonsense
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-emerald-600 mb-6">
              Turning Waste into Treasure
            </h3>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-700">
              At Lanto&apos;s Creative Concept, we believe in the hidden potential of discarded materials. 
              What others see as trash, we recognize as the raw canvas for our next masterpiece.
            </p>
          </motion.div>

          {/* Art Gallery Grid - Optimized with staggered rendering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {artImages.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-200 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-lg font-bold">{image.title}</h4>
                  <p className="text-sm opacity-80">Made from: {image.material}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Information Section - Simplified animations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Process Description */}
            <motion.div 
              className="lg:col-span-7 space-y-5"
              {...fadeInProps}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-slate-800">
                Our Transformation Process
              </h3>
              <div className="w-16 h-1 bg-emerald-500"></div>
              
              <p className="text-lg text-slate-700">
                Every piece begins with discovery—scouring local factories, beaches, and urban spaces 
                for materials with untapped artistic potential. Our artisans then clean, sort, and 
                reimagine these discarded items through an innovative design process.
              </p>
              
              <p className="text-lg text-slate-700">
                Using specialized techniques developed over a decade of experimentation, we transform 
                plastic waste, textile scraps, electronic components, and industrial byproducts into 
                functional art that challenges perceptions and inspires conversation.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-3 rounded-lg bg-white shadow-md">
                  <p className="text-3xl font-bold text-amber-600">3.5+</p>
                  <p className="text-sm text-slate-600">Tons Recycled</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-white shadow-md">
                  <p className="text-3xl font-bold text-amber-600">120+</p>
                  <p className="text-sm text-slate-600">Art Installations</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-white shadow-md">
                  <p className="text-3xl font-bold text-amber-600">8</p>
                  <p className="text-sm text-slate-600">Sustainability Awards</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              className="lg:col-span-5 relative"
              {...fadeInProps}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="relative h-full min-h-[300px] flex items-center justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full -z-10 opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-100 rounded-full -z-10 opacity-70"></div>

                <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm relative z-10">
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h4>
                  <p className="text-slate-700 mb-5">
                    &quot;We don&apos;t just create art from waste; we&apos;re challenging the very concept of 
                    what&apos;s disposable. In every discarded object, we see possibility&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">L</div>
                    <div className="ml-4">
                      <p className="font-bold text-slate-800">Lanto Azasime</p>
                      <p className="text-sm text-slate-600">Founder & Creative Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="mt-12 text-center"
            {...fadeInProps}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <button 
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-amber-500 text-white rounded-lg font-medium shadow-md inline-flex items-center hover:shadow-lg transition-shadow duration-300"
            >
              <span>Explore Our Collection</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </motion.section>
    </ScrollSection>
  );
};

export default AboutArt;