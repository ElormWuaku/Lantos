import { about } from "../../../assets/images";
import ScrollSection from "../../../components/ScrollSection";

const AboutProduct = () => {
  return (
    <ScrollSection delay={0.2}>
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              About Lanto&apos;s Creative Concept
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mb-6"></div>
            <p className="text-slate-700 text-lg mb-6">
              Lanto&apos;s Creative Concept transforms discarded materials into extraordinary art and functional pieces. We merge technology, sustainability, and artistic expression to create a future where waste becomes wonder.
            </p>
            <p className="text-slate-700 text-lg mb-8">
              Our innovative smart table and upcycled art collections represent our commitment to sustainable design that doesn&apos;t compromise on style or functionality.
            </p>
            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium transition-colors">
              Explore Our Process
            </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-emerald-100 rounded-full opacity-60"></div>
              <img 
                src={about}
                alt="Upcycled art piece created from waste materials" 
                className="rounded-lg shadow-xl relative z-10 object-cover"
              />
              <div className="absolute -right-3 -bottom-3 w-24 h-24 bg-amber-100 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollSection>
  );
};

export default AboutProduct;