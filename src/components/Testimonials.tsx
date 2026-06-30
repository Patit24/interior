import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Mukherjee',
    project: 'Modular Kitchen & Living Area, Salt Lake',
    review: 'AS Interior Studio exceeded every expectation we had. Their professionalism in managing the timeline and their design taste transformed our apartment. The kitchen is both incredibly gorgeous and highly functional.',
    initials: 'RM',
  },
  {
    id: 2,
    name: 'Anjali Sharma',
    project: 'Luxury Penthouse, Kolkata',
    review: 'The design aesthetic they bring to the table is purely world-class. From the bedroom layout to the false ceiling and lighting systems, everything felt deeply personalized. Highly recommended for premium interiors.',
    initials: 'AS',
  },
  {
    id: 3,
    name: 'Vikram & Priya Sen',
    project: 'Modern Residential Villa, Rajarhat',
    review: 'What impressed us most was their turnkey service. We handed over the keys, and they managed the labor, materials, and approvals flawlessly. Truly transparent pricing and masterful execution.',
    initials: 'VP',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-soft-beige/30 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-rich-bronze/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-rich-bronze/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-sans tracking-[0.25em] uppercase text-rich-bronze font-medium inline-block mb-3">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-charcoal-black font-serif leading-tight">
            Hear the Voices of <br />
            <span className="italic font-light text-rich-bronze">Satisfied Homeowners</span>
          </h2>
        </div>

        {/* 3D Glass Carousel Container */}
        <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-72 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {testimonials.map((test, i) => {
                // Circular indexing to arrange cards in 3D depth stack
                let position = i - index;
                if (position < 0) position += testimonials.length;

                // Only render active, next, and last card in stack
                if (position > 2) return null;

                const zIndex = 3 - position;
                const scale = 1 - position * 0.08;
                const yOffset = position * 20;
                const rotate = position * 3;

                return (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ 
                      opacity: position === 0 ? 1 : 0.45, 
                      scale, 
                      y: yOffset,
                      rotate,
                      zIndex 
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: -150, rotate: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="absolute w-full glass-panel p-10 rounded-3xl text-left border border-white/50 pointer-events-none select-none flex flex-col justify-between h-72"
                    style={{
                      transformOrigin: 'bottom center',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                    }}
                  >
                    <div className="pointer-events-auto">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-rich-bronze text-warm-white flex items-center justify-center font-bold text-sm">
                            {test.initials}
                          </div>
                          <div>
                            <h4 className="font-serif text-lg font-bold text-charcoal-black">{test.name}</h4>
                            <p className="font-sans text-xs text-rich-bronze uppercase tracking-wider font-semibold">{test.project}</p>
                          </div>
                        </div>
                        <Quote className="text-rich-bronze/25" size={40} />
                      </div>
                      <p className="font-sans text-sm md:text-base text-charcoal-black/75 leading-relaxed italic">
                        "{test.review}"
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Nav buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button 
            onClick={prev}
            className="p-4 rounded-full glass hover:bg-rich-bronze hover:text-warm-white transition-all duration-300 shadow-md text-charcoal-black"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="p-4 rounded-full glass hover:bg-rich-bronze hover:text-warm-white transition-all duration-300 shadow-md text-charcoal-black"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
