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
      <div className="py-16 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-lg mx-auto text-center mb-12">
            <h2
              className="text-xl font-medium mb-2"
              style={{ color: brandColors.primary }}
            >
              Innovative Technology
            </h2>

            <h3
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: brandColors.dark }}
            >
              Smart Table Features
            </h3>

            <div
              className="h-1 w-16 mx-auto mb-6 rounded-full"
              style={{ backgroundColor: brandColors.secondary }}
            />

            <p
              className="text-base md:text-lg"
              style={{ color: brandColors.dark }}
            >
              Our multi-purpose Smart Table seamlessly integrates cutting-edge
              technology with sustainable design, transforming your space with
              intelligent furniture that enhances modern living.
            </p>
          </div>

          {/* Features slider container */}
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Previous button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
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
            </button>

            {/* Features grid - without complex sliding, just swap visible items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getVisibleItems().map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl p-6 flex flex-col items-center bg-white hover:scale-105 transition-transform"
                  style={{
                    borderTop: `3px solid ${item.color}`,
                    boxShadow: `0 4px 20px -8px ${brandColors.dark}20`,
                  }}
                >
                  <div
                    className="mb-4 p-3 rounded-full"
                    style={{
                      color: item.color,
                      backgroundColor: `${item.color}10`,
                    }}
                  >
                    {item.icon}
                  </div>

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
                </div>
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
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
            </button>

            {/* Slider indicators */}
            <div className="flex justify-center mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSliderIndex(index)}
                  className="mx-1 w-2 h-2 rounded-full hover:scale-150 transition-transform"
                  style={{
                    backgroundColor:
                      index === sliderIndex
                        ? brandColors.primary
                        : `${brandColors.dark}20`,
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