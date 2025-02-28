import { useEffect, useState } from 'react'; // Added useState import
import Hero from "./sections/Hero";
import Showcase from "./sections/Gallery";
import ScrollSection from '../../components/ScrollSection';
import Loader from '../../components/Loader';
import Features from './sections/Features';
import About from './sections/About';
import AboutArt from './sections/AboutArt';
import Contact from './sections/Contact';

const Home = () => {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : ( // Added missing colon for ternary operator
        <div>
          <section id='home'>
            <ScrollSection>
              <Hero />
            </ScrollSection>
          </section>
          
          <section id='features'>
            <ScrollSection>
              <Features />
            </ScrollSection>
          </section>

          <section id='about'>
            <ScrollSection delay={0.1}>
              <About />
            </ScrollSection>
          </section>

          <section id='about-art'>
            <ScrollSection delay={0.1}>
              <AboutArt />
            </ScrollSection>
          </section>

          <section id='gallery'>
            <ScrollSection delay={0.1}>
              <Showcase />
            </ScrollSection>
          </section>

          <section id='contact'>
            <ScrollSection delay={0.1}>
              <Contact/>
            </ScrollSection>
          </section>
        </div>
      )}
    </>
  );
};

export default Home;