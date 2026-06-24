import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'We sit down with you to understand your preferences, vision, budget, and project requirements in depth.',
  },
  {
    step: '02',
    title: 'Planning',
    desc: 'Our design team performs precise space measurement, optimization layouts, and architectural structuring drafts.',
  },
  {
    step: '03',
    title: '3D Design',
    desc: 'We create hyper-realistic 3D visualizations, material boards, and detailed walkthroughs for your approval.',
  },
  {
    step: '04',
    title: 'Execution',
    desc: 'Civil work, carpentry, lighting setups, and styling start on-site, fully supervised by our senior architects.',
  },
  {
    step: '05',
    title: 'Handover',
    desc: 'Quality checks are conducted, minor snags resolved, and your dream space is hand-delivered on schedule.',
  },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Scale the timeline line height as user scrolls
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="process" className="py-24 bg-warm-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-sm font-sans tracking-[0.25em] uppercase text-rich-bronze font-medium inline-block mb-3">
            Our Blueprint
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-charcoal-black font-serif leading-tight">
            The Design Journey <br />
            <span className="italic font-light text-rich-bronze">From Sketch to Reality</span>
          </h2>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main timeline track background */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-soft-beige/50 hidden md:block" />

          {/* Animated line track fill */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-rich-bronze origin-top hidden md:block"
            style={{ scaleY }}
          />

          <div className="space-y-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.step} className="flex flex-col md:flex-row items-center md:justify-between relative">
                  
                  {/* Left content block */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:order-1 text-left' : 'md:order-3 md:text-right'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="glass-panel p-8 rounded-3xl relative inline-block text-left w-full hover:border-rich-bronze/20 transition-colors"
                    >
                      <span className="font-serif text-5xl text-rich-bronze/20 font-bold block mb-4">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-charcoal-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm font-sans text-charcoal-black/70 leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Bullet center marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center order-2">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-warm-white border-2 border-rich-bronze flex items-center justify-center text-xs font-bold text-rich-bronze shadow-lg"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Empty spacer block for alignment */}
                  <div className="hidden md:block w-[45%] order-2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
