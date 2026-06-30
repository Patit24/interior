import { motion } from 'framer-motion';

const About = () => {
  const livingRoomImage = `url("${import.meta.env.BASE_URL}images/living.png")`;

  return (
    <section id="about" className="py-24 bg-warm-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Story & Features */}
          <div className="text-left">
            <span className="text-sm font-sans tracking-[0.25em] uppercase text-rich-bronze font-medium inline-block mb-3">
              About AS Interior Studio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-charcoal-black font-serif mb-8 leading-tight">
              Creating Beautiful Spaces <br />
              <span className="italic font-light text-rich-bronze">Across Kolkata</span>
            </h2>

            <p className="text-base text-charcoal-black/70 mb-10 leading-relaxed max-w-xl">
              We believe a well-designed space is not just about aesthetics; it is about how you experience it. At AS Interior Studio, the premier luxury interior designers in Kolkata, we combine architectural precision with high-end styling to transform residential and commercial spaces into timeless experiences. From concept consultation to complete turnkey execution around Kolkata Station Road and greater Kolkata, we curate narratives that inspire.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-soft-beige pt-10">
              <div>
                <h4 className="text-4xl font-serif text-rich-bronze font-bold mb-1">100%</h4>
                <p className="text-sm font-sans text-charcoal-black/60 uppercase tracking-wider font-semibold">End-to-End Solutions</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-rich-bronze font-bold mb-1">98%</h4>
                <p className="text-sm font-sans text-charcoal-black/60 uppercase tracking-wider font-semibold">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-rich-bronze font-bold mb-1">150+</h4>
                <p className="text-sm font-sans text-charcoal-black/60 uppercase tracking-wider font-semibold">Residential Projects</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-rich-bronze font-bold mb-1">50+</h4>
                <p className="text-sm font-sans text-charcoal-black/60 uppercase tracking-wider font-semibold">Commercial Spaces</p>
              </div>
            </div>
          </div>

          {/* Right Side: Blueprint Reveal Animation */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[500px] h-[550px] rounded-3xl overflow-hidden shadow-2xl bg-charcoal-black">
              {/* Image 1: Blueprint / Line art (simulate via canvas style filter or custom overlay) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{ 
                  backgroundImage: livingRoomImage,
                  filter: 'grayscale(1) invert(0.9) contrast(2) brightness(0.8)',
                }}
              />
              {/* Blue overlay tint to look like blueprint */}
              <div className="absolute inset-0 bg-[#0033aa]/20 mix-blend-multiply pointer-events-none" />
              
              {/* Blueprint grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              {/* Image 2: Clean Render (Revealed on hover/scroll/click) */}
              <motion.div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: livingRoomImage }}
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Reveal text overlay */}
              <div className="absolute bottom-8 left-8 right-8 glass-dark rounded-2xl p-6 z-10 text-left">
                <span className="text-xs font-sans tracking-widest uppercase text-rich-bronze font-bold mb-1 block">Concept to Reality</span>
                <p className="text-sm font-sans text-warm-white/90">
                  Slide or hover to witness how architectural outlines transform into premium finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
