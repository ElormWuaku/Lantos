import { motion } from "framer-motion";
import { craftsman } from "../../../assets/images";
import ScrollSection from "../../../components/ScrollSection";

const AboutInnovator = () => {
  return (
    <ScrollSection delay={0.3}>
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-20 bg-gradient-to-b from-slate-50 to-slate-100"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Artisan Image */}
            <motion.div 
              className="lg:col-span-5 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={craftsman}
                    alt="Portrait of the master artisan at work" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-sm font-medium">10+ Years of Experience</p>
                  <p className="text-xs opacity-80">Transforming Waste to Wonders</p>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-amber-100 -z-10"></div>
              </div>
            </motion.div>
            
            {/* Artisan Info */}
            <motion.div 
              className="lg:col-span-7 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-6 max-w-2xl">
                <h2 className="text-4xl font-bold text-slate-800">
                  Meet the Master Artisan
                </h2>
                <div className="w-16 h-1 bg-emerald-500"></div>
                
                <p className="text-lg text-slate-700">
                  Behind every Lanto&apos;s Creative Concept masterpiece stands our visionary artisan, 
                  whose hands breathe new life into forgotten materials. With an exceptional eye for 
                  potential in the overlooked and discarded, they transform everyday waste into 
                  extraordinary functional art.
                </p>
                
                <p className="text-lg text-slate-700">
                  Combining traditional craftsmanship with innovative techniques, our artisan pushes 
                  the boundaries of sustainable design. Each piece tells a unique story of transformation 
                  — from the smart table that responds to your presence to wall art that captures 
                  the essence of renewal.
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-white shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-3xl font-bold text-emerald-600">250+</p>
                    <p className="text-sm text-slate-600">Unique Pieces</p>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-white shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-3xl font-bold text-emerald-600">40+</p>
                    <p className="text-sm text-slate-600">Exhibitions</p>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-white shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-3xl font-bold text-emerald-600">12</p>
                    <p className="text-sm text-slate-600">Design Awards</p>
                  </motion.div>
                </div>
                
                <motion.button 
                  className="mt-6 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-md font-medium transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Meet in the Studio</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </ScrollSection>
  );
};

export default AboutInnovator;
