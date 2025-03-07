import { useState } from "react";
import ScrollSection from "../../../components/ScrollSection";
import {art8} from "../../../assets/images";
import { 
  Rocket, 
  Compass, 
  Recycle,
  ArrowRight 
} from "lucide-react";

const brandColors = {
    primary: "#4AA625", // Green as primary
    secondary: "#FC940E", // Orange accent
    dark: "#222222",
    light: "#FFFFFF",
};

const Innovator = () => {
  const [activeSection, setActiveSection] = useState("vision");

  const innovatorSections = [
    {
      id: "vision",
      title: "Visionary Entrepreneur",
      content: "As CEO of Lanto's Creative Concept, Lanto leads a team transforming discarded materials into exquisite, multi-purpose furniture, captivating art pieces, and functional designs that enhance any space.",
      icon: Compass,
      color: brandColors.primary
    },
    {
      id: "sustainability",
      title: "Sustainable Design Pioneer",
      content: "At the forefront of the sustainable design movement, Lanto transforms plastics, fabrics, and e-waste into handcrafted luxury pieces that blend innovative technology with artistic expression.",
      icon: Recycle,
      color: brandColors.secondary
    },
    {
      id: "artistry",
      title: "Multidisciplinary Artist",
      content: "A Ghanaian artist with a deep commitment to environmental responsibility, Lanto creates unique designs that reflect his artistic vision while making a positive impact on the world.",
      icon: Rocket,
      color: brandColors.primary
    }
  ];

  return (
    <ScrollSection id="about" className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* About Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div 
            className="inline-block px-4 py-2 mb-4 rounded-full text-sm font-medium tracking-wide uppercase"
            style={{ 
              backgroundColor: `${brandColors.primary}15`, 
              color: brandColors.primary 
            }}
          >
            About Lanto
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Lanto Kwame Azasime
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            CEO, Lanto&apos;s Creative Concept & Multidisciplinary Artist
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={art8} 
                alt="Lanto Kwame Azasime" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Quote Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <div 
                className="text-lg italic font-medium"
                style={{ color: brandColors.dark }}
              >
                &quot;Transforming waste into wonder, one creation at a time.&quot;
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 order-1 lg:order-2">
            <div 
              className="p-6 rounded-xl mb-8"
              style={{ 
                backgroundColor: `${brandColors.primary}10`,
                borderLeft: `4px solid ${brandColors.primary}`
              }}
            >
              <p className="text-lg leading-relaxed text-gray-700">
                A Ghanaian artist and entrepreneur at the forefront of the sustainable design movement, blending handcrafted luxury, innovative technology, and artistic expression.
              </p>
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

            <div className="pt-6">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: `linear-gradient(to right, ${brandColors.primary}, ${brandColors.secondary})`,
                  boxShadow: '0 10px 15px -3px rgba(74, 166, 37, 0.3)'
                }}
              >
                Connect with Lanto
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

export default Innovator;