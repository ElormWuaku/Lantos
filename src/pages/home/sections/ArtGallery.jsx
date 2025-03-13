import ScrollSection from "../../../components/ScrollSection";
import {art10, art11, art12, herobg} from "../../../assets/images";

const brandColors = {
  primary: "#4AA625", // Green as primary
  secondary: "#FC940E", // Orange accent
  dark: "#222222",
  light: "#FFFFFF",
};

// Art Gallery Section
const ArtGallery = () => {
  // Sample art products data
  const artProducts = [
    {
      id: 1,
      name: "Abstract Harmony",
      image: herobg,
      description: "A vibrant abstract piece that brings energy to any space with its dynamic color palette.",
      price: 249.99,
      slug: "abstract-harmony"
    },
    {
      id: 2,
      name: "Serene Landscape",
      image: art10,
      description: "Peaceful landscape painting that captures the tranquility of nature in soft, calming tones.",
      price: 299.99,
      slug: "serene-landscape"
    },
    {
      id: 3,
      name: "Urban Perspective",
      image: art11,
      description: "Modern cityscape that portrays urban life through a unique geometric perspective.",
      price: 189.99,
      slug: "urban-perspective"
    },
    {
      id: 4,
      name: "Coastal Dreams",
      image: art12,
      description: "Breathtaking coastal scene that brings the refreshing essence of the ocean into your home.",
      price: 279.99,
      slug: "coastal-dreams"
    }
  ];

  // Paystack storefront link
  const paystackStoreUrl = "https://paystack.shop/lantos-creative-concept";

  // Generate Paystack link for individual products
  const generatePaystackLink = () => {
    // This uses the main storefront link instead of the previous placeholder
    return `${paystackStoreUrl}`;
  };

  // Generate link for "Shop All Artwork" main button
  const getShopAllLink = () => {
    return paystackStoreUrl;
  };

  return (
    <ScrollSection id="art-gallery">
      <div className="py-20 px-4 relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-green-100 to-green-200 blur-3xl opacity-70 z-0"></div>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100 to-orange-200 blur-3xl opacity-60 z-0"></div>
        
        <div className="container mx-auto relative z-10">
          {/* Header Section */}
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2
              className="text-xl font-medium mb-3"
              style={{ color: brandColors.secondary }}
            >
              Our Collection
            </h2>

            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: brandColors.dark }}
            >
              The Collection of Our Art Pieces is Beautiful Nonsense
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
              Discover our curated collection of original artworks to transform your space with unique beauty and character.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {artProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick shop button on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a 
                      href={generatePaystackLink(product)}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="block w-full py-2 text-center rounded-lg font-medium transition-colors"
                      style={{ backgroundColor: brandColors.secondary, color: brandColors.light }}
                    >
                      Quick Shop
                    </a>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold" style={{ color: brandColors.dark }}>
                      {product.name}
                    </h4>
                    <div 
                      className="text-lg font-bold"
                      style={{ color: brandColors.primary }}
                    >
                      ${product.price}
                    </div>
                  </div>
                  
                  <p 
                    className="text-sm mb-4"
                    style={{ color: `${brandColors.dark}CC` }}
                  >
                    {product.description}
                  </p>
                  
                  <a 
                    href={generatePaystackLink(product)}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm font-medium transition-colors"
                    style={{ color: brandColors.primary }}
                  >
                    View Details
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Shop Now CTA Button */}
          <div className="text-center mt-12">
            <a 
              href={getShopAllLink()}
              target="_blank"
              rel="noopener noreferrer" 
            >
              <button
                className="px-8 py-3 rounded-md text-base font-medium transition-all duration-300 shadow-md"
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
                Shop All Artwork
              </button>
            </a>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default ArtGallery;