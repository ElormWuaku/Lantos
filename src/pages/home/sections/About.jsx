import { useState } from "react";
import ScrollSection from "../../../components/ScrollSection";
import { art8 } from "../../../assets/images";

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
                
                {/* Enhanced Accordion Dropdowns */}
                <div className="space-y-6">
                  {/* Philosophy Dropdown - Enhanced */}
                  <div 
                    className={`border rounded-xl transition-all duration-500 overflow-hidden ${
                      openDropdown === "philosophy" 
                        ? "border-transparent shadow-lg" 
                        : "border-gray-200"
                    }`}
                    style={{
                      backgroundColor: openDropdown === "philosophy" 
                        ? `${brandColors.primary}08` 
                        : "white",
                    }}
                  >
                    <button 
                      onClick={() => toggleDropdown("philosophy")}
                      className="w-full py-4 px-5 flex justify-between items-center transition-colors duration-300 group"
                      style={{ color: brandColors.dark }}
                    >
                      <div className="flex items-center">
                        <div className="relative mr-3">
                          <span 
                            className={`inline-block w-8 h-8 rounded-full transition-all duration-500 ${
                              openDropdown === "philosophy" ? "scale-110" : ""
                            }`}
                            style={{ 
                              backgroundColor: `${brandColors.secondary}20`,
                            }}
                          />
                          <span 
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ color: brandColors.secondary }}
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <path d="M12 2a9 9 0 0 1 9 9c0 3.3-1.8 6.3-4.5 7.9-1 .6-1.5 1.7-1.5 2.8V22M12 22v-4"></path>
                              <circle cx="12" cy="13" r="2"></circle>
                            </svg>
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
                          Our Philosophy
                        </h4>
                      </div>
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                          openDropdown === "philosophy" 
                            ? `rotate-180 bg-${brandColors.secondary}` 
                            : "bg-gray-100"
                        }`}
                        style={{ 
                          backgroundColor: openDropdown === "philosophy" 
                            ? brandColors.secondary 
                            : "#f3f4f6"
                        }}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke={openDropdown === "philosophy" ? "white" : "#666"}
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openDropdown === "philosophy" ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="p-5 pt-2">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                        <p className="text-base md:text-lg" style={{ color: `${brandColors.dark}CC` }}>
                          At Lanto&apos;s Creatives, we transform visions into compelling digital experiences. Our passion
                          lies in blending strategic branding, immersive storytelling, and innovative digital design
                          to build brands that stand out.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expertise Dropdown - Enhanced */}
                  <div 
                    className={`border rounded-xl transition-all duration-500 overflow-hidden ${
                      openDropdown === "expertise" 
                        ? "border-transparent shadow-lg" 
                        : "border-gray-200"
                    }`}
                    style={{
                      backgroundColor: openDropdown === "expertise" 
                        ? `${brandColors.primary}08` 
                        : "white",
                    }}
                  >
                    <button 
                      onClick={() => toggleDropdown("expertise")}
                      className="w-full py-4 px-5 flex justify-between items-center transition-colors duration-300 group"
                      style={{ color: brandColors.dark }}
                    >
                      <div className="flex items-center">
                        <div className="relative mr-3">
                          <span 
                            className={`inline-block w-8 h-8 rounded-full transition-all duration-500 ${
                              openDropdown === "expertise" ? "scale-110" : ""
                            }`}
                            style={{ 
                              backgroundColor: `${brandColors.primary}20`,
                            }}
                          />
                          <span 
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ color: brandColors.primary }}
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <path d="m12 14 4-4"></path>
                              <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                            </svg>
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
                          Our Expertise
                        </h4>
                      </div>
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                          openDropdown === "expertise" 
                            ? `rotate-180 bg-${brandColors.primary}` 
                            : "bg-gray-100"
                        }`}
                        style={{ 
                          backgroundColor: openDropdown === "expertise" 
                            ? brandColors.primary 
                            : "#f3f4f6"
                        }}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke={openDropdown === "expertise" ? "white" : "#666"}
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openDropdown === "expertise" ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="p-5 pt-2">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                        <p className="text-base md:text-lg" style={{ color: `${brandColors.dark}CC` }}>
                          Our expertise spans brand strategy, content creation, and digital design, ensuring every
                          project reflects a unique identity. We don&apos;t just design—we craft experiences that leave a
                          lasting impression.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Commitment Dropdown - Enhanced */}
                  <div 
                    className={`border rounded-xl transition-all duration-500 overflow-hidden ${
                      openDropdown === "commitment" 
                        ? "border-transparent shadow-lg" 
                        : "border-gray-200"
                    }`}
                    style={{
                      backgroundColor: openDropdown === "commitment" 
                        ? `${brandColors.primary}08` 
                        : "white",
                    }}
                  >
                    <button 
                      onClick={() => toggleDropdown("commitment")}
                      className="w-full py-4 px-5 flex justify-between items-center transition-colors duration-300 group"
                      style={{ color: brandColors.dark }}
                    >
                      <div className="flex items-center">
                        <div className="relative mr-3">
                          <span 
                            className={`inline-block w-8 h-8 rounded-full transition-all duration-500 ${
                              openDropdown === "commitment" ? "scale-110" : ""
                            }`}
                            style={{ 
                              backgroundColor: `${brandColors.secondary}20`,
                            }}
                          />
                          <span 
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ color: brandColors.secondary }}
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
                              <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"></path>
                            </svg>
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
                          Our Commitment
                        </h4>
                      </div>
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                          openDropdown === "commitment" 
                            ? `rotate-180 bg-${brandColors.secondary}` 
                            : "bg-gray-100"
                        }`}
                        style={{ 
                          backgroundColor: openDropdown === "commitment" 
                            ? brandColors.secondary 
                            : "#f3f4f6"
                        }}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke={openDropdown === "commitment" ? "white" : "#666"}
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openDropdown === "commitment" ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="p-5 pt-2">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                        <p className="text-base md:text-lg" style={{ color: `${brandColors.dark}CC` }}>
                          Whether it&apos;s developing a brand&apos;s narrative, creating eye-catching visuals, or designing a
                          seamless user experience, we&apos;re dedicated to pushing creative boundaries and helping brands
                          connect with their audience in meaningful ways.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to action button */}
                <div className="mt-8">
                  <a href="#innovator">
                    <button
                      className="px-6 py-3 rounded-md text-base font-medium transition-all duration-300 shadow-md"
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
                      Learn More
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