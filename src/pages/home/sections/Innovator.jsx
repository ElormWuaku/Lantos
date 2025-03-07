import { useState } from "react";
import ScrollSection from "../../../components/ScrollSection";
import { art9, craftsman } from "../../../assets/images";
import { 
  Rocket, 
  Compass, 
  ArrowRight 
} from "lucide-react";

const brandColors = {
    primary: "#4AA625", // Green as primary
    secondary: "#FC940E", // Orange accent
    dark: "#222222",
    light: "#FFFFFF",
};

const InnovatorSection = () => {
  const [activeSection, setActiveSection] = useState("journey");

  const innovatorSections = [
    {
      id: "journey",
      title: "Entrepreneurial Odyssey",
      content: "A transformative path from creative passion to strategic innovation, breaking boundaries and redefining digital experiences.",
      icon: Rocket,
      color: brandColors.primary
    },
    {
      id: "vision",
      title: "Visionary Perspective",
      content: "Challenging conventional thinking, creating ecosystems where creativity and technology converge to solve real-world challenges.",
      icon: Compass,
      color: brandColors.secondary
    }
  ];

  return (
    <ScrollSection id="innovator" className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Innovative Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div 
            className="inline-block px-4 py-2 mb-4 rounded-full text-sm font-medium tracking-wide uppercase"
            style={{ 
              backgroundColor: `${brandColors.accent}15`, 
              color: brandColors.accent 
            }}
          >
            The Visionary Leader
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Pioneering Digital Transformation
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Where strategic vision meets creative execution. A journey of turning revolutionary ideas into impactful digital solutions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dynamic Profile Image */}
          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={craftsman} 
                alt="Innovator Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Social Proof Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-600">Industry Impact</p>
                  <h4 
                    className="text-2xl font-bold"
                    style={{ color: brandColors.primary }}
                  >
                    10+ Years
                  </h4>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Innovative Projects</p>
                  <h4 
                    className="text-2xl font-bold"
                    style={{ color: brandColors.secondary }}
                  >
                    50+
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Content Section */}
          <div className="space-y-6">
            <div 
              className="p-6 rounded-xl mb-6"
              style={{ 
                backgroundColor: `${brandColors.primary}10`,
              }}
            >
              <blockquote 
                className="text-xl italic font-medium leading-relaxed"
                style={{ color: brandColors.primary }}
              >
                &quot;Innovation is not just about technology, it&apos;s about understanding human potential and creating solutions that elevate experiences.&quot;
              </blockquote>
            </div>

            {innovatorSections.map((section) => (
              <div 
                key={section.id}
                className={`
                  border rounded-xl overflow-hidden transition-all duration-300 group
                  ${activeSection === section.id 
                    ? 'border-transparent shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'}
                `}
              >
                <button 
                  onClick={() => setActiveSection(section.id)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div 
                      className="p-3 rounded-full"
                      style={{ 
                        backgroundColor: `${section.color}15`, 
                        color: section.color 
                      }}
                    >
                      <section.icon 
                        className="w-6 h-6" 
                        strokeWidth={2} 
                      />
                    </div>
                    <h4 
                      className="text-xl font-bold"
                      style={{ color: brandColors.dark }}
                    >
                      {section.title}
                    </h4>
                  </div>
                  <ArrowRight 
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeSection === section.id ? 'rotate-90' : ''
                    }`}
                    style={{ color: section.color }}
                  />
                </button>

                {activeSection === section.id && (
                  <div 
                    className="px-5 pb-5 text-gray-600 text-base leading-relaxed"
                    style={{ 
                      borderTop: `1px solid ${section.color}20` 
                    }}
                  >
                    {section.content}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: `linear-gradient(to right, ${brandColors.primary}, ${brandColors.secondary})`,
                  boxShadow: '0 10px 15px -3px rgba(109, 40, 217, 0.3)'
                }}
              >
                Collaborate with Founder
                <ArrowRight 
                  className="ml-2 group-hover:translate-x-1 transition-transform" 
                  size={20} 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default InnovatorSection;