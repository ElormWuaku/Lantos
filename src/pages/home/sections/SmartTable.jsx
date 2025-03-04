
import ScrollSection from "../../../components/ScrollSection";
import { product, product2, product3} from "../../../assets/images";

const brandColors = {
  primary: "#4AA625", // Green as primary
  secondary: "#FC940E", // Orange accent
  dark: "#222222",
  light: "#FFFFFF",
};

// Smart Table Section
const SmartTable = () => {
  // Sample smart table products data
  const tableProducts = [
    {
      id: 1,
      name: "Executive Smart Desk",
      image: product,
      description: "Premium smart desk with built-in charging, ambient lighting, and touch controls for modern executives.",
      price: 1299.99,
      slug: "executive-smart-desk"
    },
    {
      id: 2,
      name: "Studio Smart Table",
      image: product2,
      description: "Versatile smart table with adjustable height, integrated power management and minimal design for creatives.",
      price: 899.99,
      slug: "studio-smart-table"
    },
    {
      id: 3,
      name: "Conference Smart Table",
      image: product3,
      description: "Connected conference table with seamless video conferencing integration and collaborative features.",
      price: 1599.99,
      slug: "conference-smart-table"
    }
  ];

  // Generate Paystack link
  const generatePaystackLink = (product) => {
    // This would be replaced with your actual Paystack store URL
    return `https://paystack.com/store/lantoscreatives?product=${product.slug}`;
  };

  // Generate link for "Shop Now" main button
  const getShopAllLink = () => {
    return "https://paystack.com/store/lantoscreatives/smart-tables";
  };

  return (
    <ScrollSection id="smart-tables">
      <div className="py-20 px-4 relative overflow-hidden bg-gray-50">
        {/* Background design elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-green-100 to-green-200 blur-3xl opacity-70 z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100 to-orange-200 blur-3xl opacity-60 z-0"></div>
        
        <div className="container mx-auto relative z-10">
          {/* Header Section */}
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2
              className="text-xl font-medium mb-3"
              style={{ color: brandColors.primary }}
            >
              Featured Products
            </h2>

            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: brandColors.dark }}
            >
              Intelligent Workspaces for the Modern Professional
            </h3>

            <div
              className="h-1 w-24 mx-auto mb-8 rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${brandColors.secondary}, ${brandColors.primary})` 
              }}
            />

            <p
              className="text-base md:text-lg"
              style={{ color: `${brandColors.dark}E6` }}
            >
              Innovative smart tables designed to enhance productivity and elevate your workspace with advanced technology.
            </p>
          </div>

          {/* Product Showcase - Horizontal Layout */}
          <div className="max-w-6xl mx-auto space-y-12">
            {tableProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                {/* Product Image */}
                <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  
                  {/* Price Badge */}
                  <div 
                    className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm"
                    style={{ backgroundColor: brandColors.secondary, color: brandColors.light }}
                  >
                    ${product.price}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold mb-3" style={{ color: brandColors.dark }}>
                      {product.name}
                    </h4>
                    
                    <p 
                      className="text-base mb-6"
                      style={{ color: `${brandColors.dark}CC` }}
                    >
                      {product.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="mb-8">
                      <h5 className="text-sm font-semibold mb-3" style={{ color: brandColors.primary }}>KEY FEATURES</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {['Smart Connectivity', 'Premium Materials', 'Ergonomic Design', 'Power Management'].map((feature, i) => (
                          <div key={i} className="flex items-center">
                            <div 
                              className="w-4 h-4 rounded-full mr-2 flex items-center justify-center"
                              style={{ backgroundColor: `${brandColors.primary}20` }}
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="10" 
                                height="10" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke={brandColors.primary} 
                                strokeWidth="3" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-sm" style={{ color: brandColors.dark }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Shop Button */}
                  <div>
                    <a 
                      href={generatePaystackLink(product)}
                      target="_blank"
                      rel="noopener noreferrer" 
                    >
                      <button
                        className="w-full py-3 rounded-md text-base font-medium transition-all duration-300 shadow-md"
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
                        Shop Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Shop All CTA Button */}
          <div className="text-center mt-16">
            <a 
              href={getShopAllLink()}
              target="_blank"
              rel="noopener noreferrer" 
            >
              <button
                className="px-8 py-3 rounded-md text-base font-medium transition-all duration-300 shadow-md"
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
                Explore All Smart Tables
              </button>
            </a>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default SmartTable;