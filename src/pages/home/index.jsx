import { useEffect, useState } from 'react'; // Added useState import
import Hero from "./sections/Hero";
import AboutProduct from "./sections/AboutProduct";
import AboutInnovator from "./sections/AboutInnovator";
import Showcase from "./sections/Showcase";
import Contact from "./sections/Contact";
import ScrollSection from '../../components/ScrollSection';
import Loader from '../../components/Loader';
import Sustainability from './sections/Sustainability';

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
          
          <section id='sustainability'>
            <ScrollSection>
              <Sustainability />
            </ScrollSection>
          </section>

          <section id='about'>
            <ScrollSection delay={0.1}>
              <AboutProduct />
            </ScrollSection>
          </section>

          <section id='innovator'>
            <ScrollSection delay={0.2}>
              <AboutInnovator />
            </ScrollSection>
          </section>

          <section id='gallery'>
            <ScrollSection delay={0.3}>
              <Showcase />
            </ScrollSection>
          </section>

          <section id='contact'>
            <ScrollSection delay={0.4}>
              <Contact />
            </ScrollSection>
          </section>
        </div>
      )}
    </>
  );
};

export default Home;