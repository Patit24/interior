import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from './Magnetic';
import TiltCard from './TiltCard';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Cinematic glide effect on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -80]); // Slightly lower maximum scroll offset to keep it tight

  return (
    <div id="home" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-charcoal-black">
      {/* Background Image with Cinematic Motion */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale, y }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src={`${import.meta.env.BASE_URL}images/hero.png`}
          alt="Luxury Floating Architecture" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Container (justify-between aligns text block and stats block sequentially in normal flow) */}
      <motion.div 
        className="relative z-20 h-full flex flex-col justify-between items-center text-center px-6 pt-32 pb-10 md:pb-14"
        style={{ opacity }}
      >
        {/* Top/Middle Text Block (grow flex centers content in remaining space) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center justify-center grow pb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-warm-white font-serif mb-4 md:mb-6 leading-[1.1] max-w-3xl">
            Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-bronze to-yellow-200 italic font-light">Extraordinary</span> Spaces That Inspire Everyday Living
          </h1>
          <p className="text-base md:text-lg text-warm-white/80 font-sans font-light max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Custom interior design solutions crafted with elegance, functionality, and timeless aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Magnetic range={40} strength={0.3} className="w-full sm:w-auto">
              <button className="px-8 py-4 bg-warm-white text-charcoal-black font-medium tracking-wide uppercase text-sm hover:bg-rich-bronze hover:text-warm-white transition-all duration-500 w-full sm:w-auto">
                Get Free Consultation
              </button>
            </Magnetic>
            <Magnetic range={40} strength={0.3} className="w-full sm:w-auto">
              <button className="px-8 py-4 border border-warm-white/30 text-warm-white font-medium tracking-wide uppercase text-sm hover:bg-white/10 transition-all duration-500 w-full sm:w-auto backdrop-blur-sm">
                View Projects
              </button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Bottom Stats Block (Sequential block in flow: guaranteed NEVER to overlap buttons) */}
        <motion.div 
          className="hidden md:flex justify-center gap-8 w-full mt-auto"
          style={{ y: cardY }}
        >
          {[
            { title: "200+", desc: "Completed Projects" },
            { title: "10+", desc: "Years Experience" },
            { title: "50+", desc: "Design Awards" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + (i * 0.1), ease: "easeOut" }}
              className="w-64"
            >
              <TiltCard dark={false} className="w-full">
                <div className="px-8 py-6 group text-left">
                  <h3 className="text-3xl font-serif text-charcoal-black mb-1 group-hover:text-rich-bronze transition-colors">{stat.title}</h3>
                  <p className="text-sm font-sans text-charcoal-black/70 uppercase tracking-wider">{stat.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
