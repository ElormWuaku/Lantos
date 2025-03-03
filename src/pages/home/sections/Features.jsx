import { useState, useEffect } from "react";
import ScrollSection from "../../../components/ScrollSection";

const brandColors = {
  primary: "#4AA625", // Green as primary
  secondary: "#FC940E", // Orange accent
  dark: "#222222",
  light: "#FFFFFF",
};

const Features = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Set the number of items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Updated features data to focus on brand's broader work
  const featuresData = [
    {
      id: 1,
      title: "Sustainable Materials",
      description: "We source and repurpose industrial waste materials that would otherwise end up in landfills.",
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
      id: 2,
      title: "Artistic Vision",
      description: "Our designers transform discarded materials into visually striking pieces that tell a story.",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 17.5C2 15.0147 4.01472 13 6.5 13C8.98528 13 11 15.0147 11 17.5C11 19.9853 8.98528 22 6.5 22C4.01472 22 2 19.9853 2 17.5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M13 6.5C13 4.01472 15.0147 2 17.5 2C19.9853 2 22 4.01472 22 6.5C22 8.98528 19.9853 11 17.5 11C15.0147 11 13 8.98528 13 6.5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M10.5 6.5H6.5V10.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 17.5H17.5V13.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: brandColors.secondary,
    },
    {
      id: 3,
      title: "Tech Integration",
      description: "We seamlessly blend cutting-edge technology with reclaimed materials to create functional art.",
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
      color: "#3498db",
    },
    {
      id: 4,
      title: "Smart Furniture",
      description: "Our signature Smart Table represents our innovative approach to combining technology with sustainability.",
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
      color: "#9b59b6",
    },
    {
      id: 5,
      title: "Environmental Impact",
      description: "Each piece we create reduces landfill waste and promotes a circular economy approach to design.",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 14.8757C5.20283 13.9979 3 11.2425 3 8C3 4.13401 6.13401 1 10 1C13.866 1 17 4.13401 17 8C17 9.64964 16.4314 11.1623 15.4722 12.3546"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 17.0018C7 20.8679 10.1399 23.9995 14.0074 23.9995C17.875 23.9995 21.0149 20.8679 21.0149 17.0018C21.0149 13.1356 17.875 10.004 14.0074 10.004C12.8655 10.004 11.7911 10.295 10.8517 10.8144"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M13.5 6.5H15.5C16.0523 6.5 16.5 6.94772 16.5 7.5V9.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V14.5"
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
      id: 6,
      title: "Customization",
      description: "We create bespoke pieces tailored to individual client needs, from art installations to functional furniture.",
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

  // Calculate total number of slides
  const totalItems = featuresData.length;
  const maxIndex = Math.max(0, Math.ceil(totalItems / itemsPerView) - 1);

  const handleNext = () => {
    setSliderIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSliderIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  // Get visible items based on current index
  const getVisibleItems = () => {
    const startIdx = sliderIndex * itemsPerView;
    const endIdx = Math.min(startIdx + itemsPerView, totalItems);
    return featuresData.slice(startIdx, endIdx);
  };

  return (
    <ScrollSection id="features">
      <div className="py-20 px-4 relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-green-100 to-green-200 blur-3xl opacity-70 z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100 to-orange-200 blur-3xl opacity-60 z-0"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2
              className="text-xl font-medium mb-3"
              style={{ color: brandColors.secondary }}
            >
              Our Approach
            </h2>

            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: brandColors.dark }}
            >
              Waste Transformation Philosophy
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
              At Lanto&apos;s Creative Concept, we reimagine industrial waste through a unique blend of 
              artistic vision and technological innovation, creating sustainable pieces that are both 
              beautiful and functional.
            </p>
          </div>

          {/* Features slider container */}
          <div className="relative max-w-6xl mx-auto px-10 md:px-16">
            {/* Previous button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
              style={{
                backgroundColor: brandColors.light,
                color: brandColors.dark,
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              <svg
                width="16"
                height="16"
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
            </button>

            {/* Features grid */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {getVisibleItems().map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl p-6 md:p-8 flex flex-col items-center bg-white hover:scale-105 transition-all duration-300"
                    style={{
                      borderTop: `3px solid ${item.color}`,
                      boxShadow: `0 8px 30px -10px ${brandColors.dark}30`,
                    }}
                  >
                    <div
                      className="mb-6 p-4 rounded-full"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}10`,
                      }}
                    >
                      {item.icon}
                    </div>

                    <h4
                      className="text-xl font-semibold mb-3"
                      style={{ color: brandColors.dark }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="text-center"
                      style={{ color: `${brandColors.dark}CC` }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
              style={{
                backgroundColor: brandColors.light,
                color: brandColors.dark,
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              <svg
                width="16"
                height="16"
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
            </button>

            {/* Slider indicators */}
            <div className="flex justify-center mt-10 relative z-10">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSliderIndex(index)}
                  className="mx-2 w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      index === sliderIndex
                        ? brandColors.primary
                        : `${brandColors.dark}20`,
                    transform: index === sliderIndex ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-20 text-center">
            <a href="#art-gallery">
              <button
                className="px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: brandColors.primary,
                  color: brandColors.light,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = brandColors.secondary;
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(252, 148, 14, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = brandColors.primary;
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                View Our Gallery
              </button>
            </a>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default Features;