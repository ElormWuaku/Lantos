import { useState } from "react";
import ScrollSection from "../../../components/ScrollSection";
import { art8} from "../../../assets/images";

const brandColors = {
  primary: "#4AA625", // Green as primary
  secondary: "#FC940E", // Orange accent
  dark: "#222222",
  light: "#FFFFFF",
};

const About = () => {
  const [openDropdown, setOpenDropdown] = useState("philosophy");

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <ScrollSection id="about">
      <div className="py-20 px-4 relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-green-100 to-green-200 blur-3xl opacity-70 z-0"></div>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100 to-orange-200 blur-3xl opacity-60 z-0"></div>
        
        <div className="container mx-auto relative z-10">
          {/* Header Section - Matching structure from previous sections */}
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2
              className="text-xl font-medium mb-3"
              style={{ color: brandColors.secondary }}
            >
              Our Story
            </h2>

            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: brandColors.dark }}
            >
              Crafting Digital Excellence
            </h3>

            <div
              className="h-1 w-24 mx-auto mb-8 rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${brandColors.primary}, ${brandColors.secondary})` 
              }}
            />

            <p
              className="text-base md:text-lg"
              style={{ color: `${brandColors.dark}E6` }}
            >
              At Lanto&apos;s Creatives, we transform visions into compelling digital experiences 
              that make a lasting impact.
            </p>
          </div>

          {/* Main Content with image and text in a visually appealing layout */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image Column with decorative elements */}
              <div className="w-full lg:w-1/2 relative">
                <div 
                  className="absolute -right-4 -top-4 w-full h-full border-2 rounded-lg z-0"
                  style={{ borderColor: brandColors.secondary }}
                ></div>
                <div 
                  className="absolute -left-4 -bottom-4 w-full h-full border-2 rounded-lg z-0"
                  style={{ borderColor: brandColors.primary }}
                ></div>
                <div className="rounded-lg overflow-hidden shadow-xl relative z-10">
                  <div
                    className="w-full h-80 md:h-96 bg-gray-200"
                    style={{
                      backgroundImage: `url(${art8})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                
                {/* Decorative element */}
                <div 
                  className="hidden lg:block absolute -left-8 -bottom-8 w-16 h-16 rounded-full z-20"
                  style={{ backgroundColor: brandColors.primary }}
                ></div>
              </div>

              {/* Text Column with stylish layout */}
              <div className="w-full lg:w-1/2 p-6 md:p-8 rounded-xl bg-white shadow-lg">
                {/* Vision Statement in highlight box */}
                <div 
                  className="p-4 mb-6 rounded-lg"
                  style={{ backgroundColor: `${brandColors.primary}10` }}
                >
                  <p 
                    className="italic text-lg"
                    style={{ color: brandColors.primary }}
                  >
                    &quot;We believe in the power of creativity to shape identities and make a lasting impact.&quot;
                  </p>
                </div>
                
                {/* Content with dropdown sections */}
                <div className="space-y-4">
                  {/* Philosophy Dropdown */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => toggleDropdown("philosophy")}
                      className="w-full py-3 px-4 flex justify-between items-center transition-colors duration-300"
                      style={{ 
                        backgroundColor: openDropdown === "philosophy" ? `${brandColors.primary}10` : "white",
                        color: brandColors.dark
                      }}
                    >
                      <h4 className="text-xl font-semibold flex items-center">
                        <span 
                          className="inline-block w-3 h-3 mr-2 rounded-sm"
                          style={{ backgroundColor: brandColors.secondary }}
                        ></span>
                        Our Philosophy
                      </h4>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${openDropdown === "philosophy" ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    
                    <div 
                      className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
                        openDropdown === "philosophy" ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="text-base md:text-lg pt-2" style={{ color: `${brandColors.dark}CC` }}>
                        At Lanto&apos;s Creatives, we transform visions into compelling digital experiences. Our passion
                        lies in blending strategic branding, immersive storytelling, and innovative digital design
                        to build brands that stand out.
                      </p>
                    </div>
                  </div>
                  
                  {/* Expertise Dropdown */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => toggleDropdown("expertise")}
                      className="w-full py-3 px-4 flex justify-between items-center transition-colors duration-300"
                      style={{ 
                        backgroundColor: openDropdown === "expertise" ? `${brandColors.primary}10` : "white",
                        color: brandColors.dark
                      }}
                    >
                      <h4 className="text-xl font-semibold flex items-center">
                        <span 
                          className="inline-block w-3 h-3 mr-2 rounded-sm"
                          style={{ backgroundColor: brandColors.primary }}
                        ></span>
                        Our Expertise
                      </h4>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${openDropdown === "expertise" ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    
                    <div 
                      className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
                        openDropdown === "expertise" ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="text-base md:text-lg pt-2" style={{ color: `${brandColors.dark}CC` }}>
                        Our expertise spans brand strategy, content creation, and digital design, ensuring every
                        project reflects a unique identity. We don&apos;t just design—we craft experiences that leave a
                        lasting impression.
                      </p>
                    </div>
                  </div>
                  
                  {/* Commitment Dropdown */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => toggleDropdown("commitment")}
                      className="w-full py-3 px-4 flex justify-between items-center transition-colors duration-300"
                      style={{ 
                        backgroundColor: openDropdown === "commitment" ? `${brandColors.primary}10` : "white",
                        color: brandColors.dark
                      }}
                    >
                      <h4 className="text-xl font-semibold flex items-center">
                        <span 
                          className="inline-block w-3 h-3 mr-2 rounded-sm"
                          style={{ backgroundColor: brandColors.secondary }}
                        ></span>
                        Our Commitment
                      </h4>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${openDropdown === "commitment" ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    
                    <div 
                      className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
                        openDropdown === "commitment" ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="text-base md:text-lg pt-2" style={{ color: `${brandColors.dark}CC` }}>
                        Whether it&apos;s developing a brand&apos;s narrative, creating eye-catching visuals, or designing a
                        seamless user experience, we&apos;re dedicated to pushing creative boundaries and helping brands
                        connect with their audience in meaningful ways.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Call to action button */}
                <div className="mt-8">
                  <a href="#contact">
                    <button
                      className="px-6 py-2 rounded-md text-base font-medium transition-all duration-300 shadow-md"
                      style={{
                        backgroundColor: brandColors.secondary,
                        color: brandColors.light,
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = brandColors.primary;
                        e.currentTarget.style.boxShadow = "0 5px 15px rgba(74, 166, 37, 0.4)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = brandColors.secondary;
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      Get In Touch
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default About;