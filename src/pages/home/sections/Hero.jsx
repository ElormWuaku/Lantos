import { hero } from "../../../assets/images";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center border-b-8 border-gray-50 px-4 py-12"
    style={{backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
     <div className="text-center mx-w-4xl mx-auto">
      <h4 className="text-5xl md:text-6xl font-bold text-cyan-50 leading-tight">READY RENT</h4>
      <div>

      </div>
     </div>
    </div>
  );
};

export default Hero;
